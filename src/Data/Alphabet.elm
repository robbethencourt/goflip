module Data.Alphabet exposing
    ( Letter(..)
    , LetterDetails
    , getDrawingSvg
    , getLetterDetailsFromLetter
    , getLetterDetailsFromNumber
    , getLetterText
    , letterDetailsList
    )

import Data.Asvg as Asvg
import Data.Bsvg as Bsvg
import Data.Csvg as Csvg
import Data.Dsvg as Dsvg
import Data.Esvg as Esvg
import Data.Fsvg as Fsvg
import Data.Gsvg as Gsvg
import Data.Hsvg as Hsvg
import Data.Isvg as Isvg
import Data.Jsvg as Jsvg
import Data.Ksvg as Ksvg
import Data.Lsvg as Lsvg
import Data.Msvg as Msvg
import Data.Nsvg as Nsvg
import Data.Osvg as Osvg
import Data.Psvg as Psvg
import Data.Qsvg as Qsvg
import Data.Rsvg as Rsvg
import Data.Ssvg as Ssvg
import Data.Tsvg as Tsvg
import Data.Usvg as Usvg
import Data.Vsvg as Vsvg
import Data.Wsvg as Wsvg
import Data.Xsvg as Xsvg
import Data.Ysvg as Ysvg
import Data.Zsvg as Zsvg
import Html exposing (Html)


type Letter
    = A
    | B
    | C
    | D
    | E
    | F
    | G
    | H
    | I
    | J
    | K
    | L
    | M
    | N
    | O
    | P
    | Q
    | R
    | S
    | T
    | U
    | V
    | W
    | X
    | Y
    | Z


type alias LetterText =
    String


type alias Word =
    String


type alias LetterDetails =
    { letterText : LetterText
    , letterTextLowercase : LetterText
    , word : Word
    , number : Int
    , letter : Letter
    }


letterDetailsList : List LetterDetails
letterDetailsList =
    [ { letterText = "A", letterTextLowercase = "a", word = "Apple", number = 1, letter = A }
    , { letterText = "B", letterTextLowercase = "b", word = "Banana", number = 2, letter = B }
    , { letterText = "C", letterTextLowercase = "c", word = "Carrot", number = 3, letter = C }
    , { letterText = "D", letterTextLowercase = "d", word = "Date", number = 4, letter = D }
    , { letterText = "E", letterTextLowercase = "e", word = "Eggplant", number = 5, letter = E }
    , { letterText = "F", letterTextLowercase = "f", word = "Fennel", number = 6, letter = F }
    , { letterText = "G", letterTextLowercase = "g", word = "Guava", number = 7, letter = G }
    , { letterText = "H", letterTextLowercase = "h", word = "Honeydew", number = 8, letter = H }
    , { letterText = "I", letterTextLowercase = "i", word = "Ilama", number = 9, letter = I }
    , { letterText = "J", letterTextLowercase = "j", word = "Jalapeno", number = 10, letter = J }
    , { letterText = "K", letterTextLowercase = "k", word = "Kale", number = 11, letter = K }
    , { letterText = "L", letterTextLowercase = "l", word = "Lime", number = 12, letter = L }
    , { letterText = "M", letterTextLowercase = "m", word = "Mango", number = 13, letter = M }
    , { letterText = "N", letterTextLowercase = "n", word = "Nectarine", number = 14, letter = N }
    , { letterText = "O", letterTextLowercase = "o", word = "Orange", number = 15, letter = O }
    , { letterText = "P", letterTextLowercase = "p", word = "Peas", number = 16, letter = P }
    , { letterText = "Q", letterTextLowercase = "q", word = "Quince", number = 17, letter = Q }
    , { letterText = "R", letterTextLowercase = "r", word = "Radish", number = 18, letter = R }
    , { letterText = "S", letterTextLowercase = "s", word = "Strawberry", number = 19, letter = S }
    , { letterText = "T", letterTextLowercase = "t", word = "Tomato", number = 20, letter = T }
    , { letterText = "U", letterTextLowercase = "u", word = "Ugni", number = 21, letter = U }
    , { letterText = "V", letterTextLowercase = "v", word = "Voavanga", number = 22, letter = V }
    , { letterText = "W", letterTextLowercase = "w", word = "Watermelon", number = 23, letter = W }
    , { letterText = "X", letterTextLowercase = "x", word = "Xigua", number = 24, letter = X }
    , { letterText = "Y", letterTextLowercase = "y", word = "Yucca", number = 25, letter = Y }
    , { letterText = "Z", letterTextLowercase = "z", word = "Zucchini", number = 26, letter = Z }
    ]


defaultLetter : LetterDetails
defaultLetter =
    { letterText = "A", letterTextLowercase = "a", word = "apple", number = 1, letter = A }


getLetterDetailsFromNumber : Int -> LetterDetails
getLetterDetailsFromNumber number =
    letterDetailsList
        |> List.filter (\ld -> number == ld.number)
        |> List.head
        |> Maybe.withDefault defaultLetter


getLetterDetailsFromLetter : Letter -> LetterDetails
getLetterDetailsFromLetter letter =
    letterDetailsList
        |> List.filter (\ld -> letter == ld.letter)
        |> List.head
        |> Maybe.withDefault defaultLetter


getLetterText : LetterDetails -> String
getLetterText ld =
    ld.letterText ++ " " ++ ld.letterTextLowercase


getDrawingSvg : Letter -> Html msg
getDrawingSvg letter =
    case letter of
        A ->
            Asvg.drawing

        B ->
            Bsvg.drawing

        C ->
            Csvg.drawing

        D ->
            Dsvg.drawing

        E ->
            Esvg.drawing

        F ->
            Fsvg.drawing

        G ->
            Gsvg.drawing

        H ->
            Hsvg.drawing

        I ->
            Isvg.drawing

        J ->
            Jsvg.drawing

        K ->
            Ksvg.drawing

        L ->
            Lsvg.drawing

        M ->
            Msvg.drawing

        N ->
            Nsvg.drawing

        O ->
            Osvg.drawing

        P ->
            Psvg.drawing

        Q ->
            Qsvg.drawing

        R ->
            Rsvg.drawing

        S ->
            Ssvg.drawing

        T ->
            Tsvg.drawing

        U ->
            Usvg.drawing

        V ->
            Vsvg.drawing

        W ->
            Wsvg.drawing

        X ->
            Xsvg.drawing

        Y ->
            Ysvg.drawing

        Z ->
            Zsvg.drawing
