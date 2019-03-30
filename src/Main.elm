module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Data.Alphabet as Alphabet
import Html exposing (Html, div, h1, text)
import Html.Events.Extra.Touch as Touch



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
    { page : Page
    , startAt : ( Float, Float )
    , moveAt : ( Float, Float )
    , endAt : ( Float, Float )
    }


init : () -> ( Model, Cmd Msg )
init flags =
    ( { page = LetterForm Alphabet.A
      , startAt = ( 0, 0 )
      , moveAt = ( 0, 0 )
      , endAt = ( 0, 0 )
      }
    , Cmd.none
    )


type Page
    = LetterForm Alphabet.Letter
    | Drawing Alphabet.Letter
    | Nav



-- Update


type Msg
    = StartAt ( Float, Float )
    | MoveAt ( Float, Float )
    | EndAt ( Float, Float )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        StartAt ( x, y ) ->
            ( { model | startAt = ( x, y ) }, Cmd.none )

        MoveAt ( x, y ) ->
            ( { model | moveAt = ( x, y ) }, Cmd.none )

        EndAt ( x, y ) ->
            let
                ( startX, startY ) =
                    model.startAt

                currentLetter =
                    case model.page of
                        LetterForm letter ->
                            letter

                        Drawing letter ->
                            letter

                        Nav ->
                            Alphabet.A

                newPage =
                    if startX == x then
                        case model.page of
                            LetterForm letter ->
                                Drawing currentLetter

                            Drawing letter ->
                                LetterForm currentLetter

                            Nav ->
                                Nav

                    else if startX > x then
                        let
                            currentLetterDetails =
                                Alphabet.getLetterDetailsFromLetter currentLetter
                        in
                        let
                            newLetterNumber =
                                currentLetterDetails.number + 1

                            newLetterDetails =
                                Alphabet.getLetterDetailsFromNumber newLetterNumber
                        in
                        LetterForm newLetterDetails.letter

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
                        LetterForm newLetterDetails.letter
            in
            ( { model
                | page = newPage
                , endAt = ( x, y )
              }
            , Cmd.none
            )



-- View


view : Model -> Html Msg
view model =
    case model.page of
        LetterForm letter ->
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

        Drawing letter ->
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

        Nav ->
            div [] [ text "this is the nav page" ]


touchCoordinates : Touch.Event -> ( Float, Float )
touchCoordinates touchEvent =
    List.head touchEvent.changedTouches
        |> Maybe.map .clientPos
        |> Maybe.withDefault ( 0, 0 )
