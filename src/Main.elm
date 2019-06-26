module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Data.Alphabet as Alphabet
import Html exposing (Html, div, h1, header, li, nav, text, ul)
import Html.Attributes exposing (class, style)
import Html.Events exposing (onClick)
import Html.Events.Extra.Touch as Touch
import Route



-- Main


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , subscriptions = \_ -> Sub.none
        , update = update
        , view = view
        }



-- Model


type alias Model =
    { page : Route.Page
    , previousPage : Route.Page
    , startAt : ( Float, Float )
    , moveAt : ( Float, Float )
    , endAt : ( Float, Float )
    }


init : () -> ( Model, Cmd Msg )
init flags =
    ( { page = Route.LetterForm Alphabet.A Route.Show
      , previousPage = Route.LetterForm Alphabet.A Route.Show
      , startAt = ( 0, 0 )
      , moveAt = ( 0, 0 )
      , endAt = ( 0, 0 )
      }
    , Cmd.none
    )



-- Update


type Msg
    = StartAt ( Float, Float )
    | MoveAt ( Float, Float )
    | EndAt ( Float, Float )
    | SetPage Route.Page
    | ToggleNav


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartAt ( x, y ) ->
            ( { model | startAt = ( x, y ) }, Cmd.none )

        MoveAt ( x, y ) ->
            ( { model | moveAt = ( x, y ) }, Cmd.none )

        EndAt ( x, y ) ->
            let
                ( startX, _ ) =
                    model.startAt

                currentLetter =
                    case model.page of
                        Route.LetterForm letter _ ->
                            letter

                        Route.Drawing letter _ ->
                            letter

                        _ ->
                            Alphabet.A

                newPage =
                    setNewPage model.page currentLetter startX x
            in
            ( { model
                | endAt = ( x, y )
                , page = Route.updatePageTransition model.page
              }
            , Route.transitionFromPage model.page <| SetPage newPage
            )

        SetPage page ->
            ( { model
                | page = page
                , startAt = ( 0, 0 )
                , moveAt = ( 0, 0 )
                , endAt = ( 0, 0 )
              }
            , Cmd.none
            )

        ToggleNav ->
            let
                newPage =
                    case model.page of
                        Route.Nav transition ->
                            model.previousPage

                        _ ->
                            Route.Nav Route.Show
            in
            ( { model
                | previousPage = model.page
                , page = Route.updatePageTransition model.page
              }
            , Route.transitionFromPage model.page <| SetPage newPage
            )


setNewPage : Route.Page -> Alphabet.Letter -> Float -> Float -> Route.Page
setNewPage page currentLetter startX x =
    if startX == x then
        case page of
            Route.LetterForm _ _ ->
                Route.Drawing currentLetter Route.Show

            Route.Drawing _ _ ->
                Route.LetterForm currentLetter Route.Show

            Route.Nav _ ->
                Route.Nav Route.Show

    else if startX > x then
        let
            currentLetterDetails =
                Alphabet.getLetterDetailsFromLetter currentLetter

            newLetterNumber =
                currentLetterDetails.number + 1

            newLetterDetails =
                Alphabet.getLetterDetailsFromNumber newLetterNumber
        in
        Route.LetterForm newLetterDetails.letter Route.Show

    else
        let
            currentLetterDetails =
                Alphabet.getLetterDetailsFromLetter currentLetter
        in
        let
            newLetterNumber =
                currentLetterDetails.number - 1

            newLetterDetails =
                Alphabet.getLetterDetailsFromNumber newLetterNumber
        in
        Route.LetterForm newLetterDetails.letter Route.Show



-- View


view : Model -> Html Msg
view model =
    div []
        [ header []
            [ div [ class "logo" ] [ text "logo" ]
            , div [ class "nav-link", onClick ToggleNav ] [ text "nav" ]
            ]
        , case model.page of
            Route.LetterForm letter transition ->
                let
                    letterDetails =
                        Alphabet.getLetterDetailsFromLetter letter

                    ( startX, _ ) =
                        model.startAt

                    ( moveX, _ ) =
                        model.moveAt

                    xDiff =
                        if moveX == 0 then
                            0

                        else if startX - moveX < 0 then
                            10

                        else
                            -10
                in
                {--only apply transition class when moved more than a certain amount of pixels
                , add the remove class depending on which way the letters are going --}
                div
                    [ Touch.onStart (StartAt << touchCoordinates)
                    , Touch.onMove (MoveAt << touchCoordinates)
                    , Touch.onEnd (EndAt << touchCoordinates)
                    ]
                    [ h1
                        [ style "transform" ("translate(" ++ String.fromFloat xDiff ++ "px, 0px)")
                        , style "transition" "transform 0.35s ease"
                        , class <| Route.transitionToString transition
                        ]
                        [ text letterDetails.letterText ]
                    , h1 []
                        [ text <| Debug.toString model ]
                    ]

            Route.Drawing letter transition ->
                let
                    letterDetails =
                        Alphabet.getLetterDetailsFromLetter letter
                in
                div
                    [ Touch.onStart (StartAt << touchCoordinates)
                    , Touch.onMove (MoveAt << touchCoordinates)
                    , Touch.onEnd (EndAt << touchCoordinates)
                    ]
                    [ h1 [ class <| Route.transitionToString transition ]
                        [ text letterDetails.drawingLink ]
                    , h1 []
                        [ text letterDetails.word ]
                    ]

            Route.Nav transition ->
                nav [ Route.transitionToString transition ++ "-nav" |> class ]
                    [ ul []
                        (Alphabet.letterDetailsList
                            |> List.map Alphabet.getLetterText
                            |> List.map createListElement
                        )
                    ]
        ]


createListElement : String -> Html Msg
createListElement string =
    li [] [ text string ]


touchCoordinates : Touch.Event -> ( Float, Float )
touchCoordinates touchEvent =
    List.head touchEvent.changedTouches
        |> Maybe.map .clientPos
        |> Maybe.withDefault ( 0, 0 )
