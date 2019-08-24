module Data.Alphabet exposing
    ( Letter(..)
    , LetterDetails
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
    , letterTextLowercase : LetterText
    , drawingLink : DrawingLink
    , word : Word
    , number : Int
    , letter : Letter
    }


letterDetailsList : List LetterDetails
letterDetailsList =
    [ { letterText = "A", letterTextLowercase = "a", drawingLink = "a drawing link", word = "Apple", number = 1, letter = A }
    , { letterText = "B", letterTextLowercase = "b", drawingLink = "a drawing link", word = "Banana", number = 2, letter = B }
    , { letterText = "C", letterTextLowercase = "c", drawingLink = "a drawing link", word = "Carrot", number = 3, letter = C }
    , { letterText = "D", letterTextLowercase = "d", drawingLink = "a drawing link", word = "Date", number = 4, letter = D }
    , { letterText = "E", letterTextLowercase = "e", drawingLink = "a drawing link", word = "Eggplant", number = 5, letter = E }
    , { letterText = "F", letterTextLowercase = "f", drawingLink = "a drawing link", word = "Fennel", number = 6, letter = F }
    , { letterText = "G", letterTextLowercase = "g", drawingLink = "a drawing link", word = "Guava", number = 7, letter = G }
    , { letterText = "H", letterTextLowercase = "h", drawingLink = "a drawing link", word = "Honeydew", number = 8, letter = H }
    , { letterText = "I", letterTextLowercase = "i", drawingLink = "a drawing link", word = "Ilama", number = 9, letter = I }
    , { letterText = "J", letterTextLowercase = "j", drawingLink = "a drawing link", word = "Jalapeno", number = 10, letter = J }
    , { letterText = "K", letterTextLowercase = "k", drawingLink = "a drawing link", word = "Kale", number = 11, letter = K }
    , { letterText = "L", letterTextLowercase = "l", drawingLink = "a drawing link", word = "Lime", number = 12, letter = L }
    , { letterText = "M", letterTextLowercase = "m", drawingLink = "a drawing link", word = "Mango", number = 13, letter = M }
    , { letterText = "N", letterTextLowercase = "n", drawingLink = "a drawing link", word = "Nectarine", number = 14, letter = N }
    , { letterText = "O", letterTextLowercase = "o", drawingLink = "a drawing link", word = "Orange", number = 15, letter = O }
    , { letterText = "P", letterTextLowercase = "p", drawingLink = "a drawing link", word = "Peas", number = 16, letter = P }
    , { letterText = "Q", letterTextLowercase = "q", drawingLink = "a drawing link", word = "Quince", number = 17, letter = Q }
    , { letterText = "R", letterTextLowercase = "r", drawingLink = "a drawing link", word = "Radish", number = 18, letter = R }
    , { letterText = "S", letterTextLowercase = "s", drawingLink = "a drawing link", word = "Strawberry", number = 19, letter = S }
    , { letterText = "T", letterTextLowercase = "t", drawingLink = "a drawing link", word = "Tomato", number = 20, letter = T }
    , { letterText = "U", letterTextLowercase = "u", drawingLink = "a drawing link", word = "Ugni", number = 21, letter = U }
    , { letterText = "V", letterTextLowercase = "v", drawingLink = "a drawing link", word = "Voavanga", number = 22, letter = V }
    , { letterText = "W", letterTextLowercase = "w", drawingLink = "a drawing link", word = "Watermelon", number = 23, letter = W }
    , { letterText = "X", letterTextLowercase = "x", drawingLink = "a drawing link", word = "Xigua", number = 24, letter = X }
    , { letterText = "Y", letterTextLowercase = "y", drawingLink = "a drawing link", word = "Yucca", number = 25, letter = Y }
    , { letterText = "Z", letterTextLowercase = "z", drawingLink = "a drawing link", word = "Zucchini", number = 26, letter = Z }
    ]


defaultLetter : LetterDetails
defaultLetter =
    { letterText = "A", letterTextLowercase = "a", drawingLink = "a drawing link", word = "apple", number = 1, letter = A }


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
