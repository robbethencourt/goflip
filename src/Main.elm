module Main exposing (Model, Msg(..), init, main, update, view)

import Browser
import Data.Alphabet as Alphabet
import Html exposing (Html, div, h1, text)



-- Model


type alias Model =
    Page


init : () -> ( Model, Cmd Msg )
init flags =
    ( LetterForm Alphabet.A
    , Cmd.none
    )


type Page
    = LetterForm Alphabet.Letter
    | Drawing Alphabet.Letter
    | Nav



-- Update


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- View


view : Model -> Html Msg
view model =
    case model of
        LetterForm letter ->
            let
                letterDetails =
                    Alphabet.getLetterDetails letter
            in
            div []
                [ h1 []
                    [ text letterDetails.letterText ]
                ]

        Drawing letter ->
            let
                letterDetails =
                    Alphabet.getLetterDetails letter
            in
            div []
                [ h1 []
                    [ text letterDetails.drawingLink ]
                , h1 []
                    [ text letterDetails.word ]
                ]

        Nav ->
            div [] [ text "this is the nav page" ]



-- Main


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , subscriptions = \_ -> Sub.none
        , update = update
        , view = view
        }
