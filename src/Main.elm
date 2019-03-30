module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Data.Alphabet as Alphabet
import Html exposing (Html, div, h1, text)
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
    , startAt : ( Float, Float )
    , moveAt : ( Float, Float )
    , endAt : ( Float, Float )
    }


init : () -> ( Model, Cmd Msg )
init flags =
    ( { page = Route.LetterForm Alphabet.A Route.Show
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

                        Route.Nav _ ->
                            Alphabet.A

                newPage =
                    if startX == x then
                        case model.page of
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
            in
            ( { model
                | endAt = ( x, y )
              }
            , Route.transitionFromPage model.page <| SetPage newPage
            )

        SetPage page ->
            ( { model | page = page }, Cmd.none )



-- View


view : Model -> Html Msg
view model =
    case model.page of
        Route.LetterForm letter transition ->
            let
                letterDetails =
                    Alphabet.getLetterDetailsFromLetter letter
            in
            div
                [ Touch.onStart (StartAt << touchCoordinates)
                , Touch.onMove (MoveAt << touchCoordinates)
                , Touch.onEnd (EndAt << touchCoordinates)
                ]
                [ h1 []
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
                [ h1 []
                    [ text letterDetails.drawingLink ]
                , h1 []
                    [ text letterDetails.word ]
                ]

        Route.Nav transition ->
            div [] [ text "this is the nav page" ]


touchCoordinates : Touch.Event -> ( Float, Float )
touchCoordinates touchEvent =
    List.head touchEvent.changedTouches
        |> Maybe.map .clientPos
        |> Maybe.withDefault ( 0, 0 )
