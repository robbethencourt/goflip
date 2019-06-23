module Data.Alphabet exposing
    ( Letter(..)
    , getLetterDetailsFromLetter
    , getLetterDetailsFromNumber
    , getLetterText
    , letterDetailsList
    )


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


type alias DrawingLink =
    String


type alias Word =
    String


type alias LetterDetails =
    { letterText : LetterText
    , drawingLink : DrawingLink
    , word : Word
    , number : Int
    , letter : Letter
    }


letterDetailsList : List LetterDetails
letterDetailsList =
    [ { letterText = "A", drawingLink = "a drawing link", word = "apple", number = 1, letter = A }
    , { letterText = "B", drawingLink = "a drawing link", word = "banana", number = 2, letter = B }
    , { letterText = "C", drawingLink = "a drawing link", word = "carrot", number = 3, letter = C }
    , { letterText = "D", drawingLink = "a drawing link", word = "date", number = 4, letter = D }
    , { letterText = "E", drawingLink = "a drawing link", word = "eggplant", number = 5, letter = E }
    , { letterText = "F", drawingLink = "a drawing link", word = "farro", number = 6, letter = F }
    , { letterText = "G", drawingLink = "a drawing link", word = "grapes", number = 7, letter = G }
    , { letterText = "H", drawingLink = "a drawing link", word = "?", number = 8, letter = H }
    , { letterText = "I", drawingLink = "a drawing link", word = "?", number = 9, letter = I }
    , { letterText = "J", drawingLink = "a drawing link", word = "jalapeno", number = 10, letter = J }
    , { letterText = "K", drawingLink = "a drawing link", word = "kale", number = 11, letter = K }
    , { letterText = "L", drawingLink = "a drawing link", word = "lime", number = 12, letter = L }
    , { letterText = "M", drawingLink = "a drawing link", word = "mango", number = 13, letter = M }
    , { letterText = "N", drawingLink = "a drawing link", word = "?", number = 14, letter = N }
    , { letterText = "O", drawingLink = "a drawing link", word = "orange", number = 15, letter = O }
    , { letterText = "P", drawingLink = "a drawing link", word = "peas", number = 16, letter = P }
    , { letterText = "Q", drawingLink = "a drawing link", word = "Quinoa", number = 17, letter = Q }
    , { letterText = "R", drawingLink = "a drawing link", word = "radish", number = 18, letter = R }
    , { letterText = "S", drawingLink = "a drawing link", word = "sweet potato", number = 19, letter = S }
    , { letterText = "T", drawingLink = "a drawing link", word = "tomato", number = 20, letter = T }
    , { letterText = "U", drawingLink = "a drawing link", word = "?", number = 21, letter = U }
    , { letterText = "V", drawingLink = "a drawing link", word = "?", number = 22, letter = V }
    , { letterText = "W", drawingLink = "a drawing link", word = "watermelon", number = 23, letter = W }
    , { letterText = "X", drawingLink = "a drawing link", word = "?", number = 24, letter = X }
    , { letterText = "Y", drawingLink = "a drawing link", word = "yam", number = 25, letter = Y }
    , { letterText = "Z", drawingLink = "a drawing link", word = "zucchini", number = 26, letter = Z }
    ]


defaultLetter : LetterDetails
defaultLetter =
    { letterText = "A", drawingLink = "a drawing link", word = "apple", number = 1, letter = A }


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
    ld.letterText
