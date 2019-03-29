module Data.Alphabet exposing (Letter(..), getLetterDetails)


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
    { letterText : LetterText, drawingLink : DrawingLink, word : Word }


getLetterDetails : Letter -> LetterDetails
getLetterDetails letter =
    case letter of
        A ->
            { letterText = "A", drawingLink = "a drawing link", word = "apple" }

        B ->
            { letterText = "B", drawingLink = "a drawing link", word = "banana" }

        C ->
            { letterText = "C", drawingLink = "a drawing link", word = "carrot" }

        D ->
            { letterText = "d", drawingLink = "a drawing link", word = "date" }

        E ->
            { letterText = "E", drawingLink = "a drawing link", word = "eggplant" }

        F ->
            { letterText = "F", drawingLink = "a drawing link", word = "farro" }

        G ->
            { letterText = "G", drawingLink = "a drawing link", word = "grapes" }

        H ->
            { letterText = "H", drawingLink = "a drawing link", word = "?" }

        I ->
            { letterText = "I", drawingLink = "a drawing link", word = "?" }

        J ->
            { letterText = "J", drawingLink = "a drawing link", word = "jalapeno" }

        K ->
            { letterText = "K", drawingLink = "a drawing link", word = "kale" }

        L ->
            { letterText = "L", drawingLink = "a drawing link", word = "lime" }

        M ->
            { letterText = "M", drawingLink = "a drawing link", word = "mango" }

        N ->
            { letterText = "N", drawingLink = "a drawing link", word = "?" }

        O ->
            { letterText = "O", drawingLink = "a drawing link", word = "orange" }

        P ->
            { letterText = "P", drawingLink = "a drawing link", word = "peas" }

        Q ->
            { letterText = "Q", drawingLink = "a drawing link", word = "Quinoa" }

        R ->
            { letterText = "R", drawingLink = "a drawing link", word = "radish" }

        S ->
            { letterText = "S", drawingLink = "a drawing link", word = "sweet potato" }

        T ->
            { letterText = "T", drawingLink = "a drawing link", word = "tomato" }

        U ->
            { letterText = "U", drawingLink = "a drawing link", word = "?" }

        V ->
            { letterText = "V", drawingLink = "a drawing link", word = "?" }

        W ->
            { letterText = "W", drawingLink = "a drawing link", word = "watermelon" }

        X ->
            { letterText = "X", drawingLink = "a drawing link", word = "?" }

        Y ->
            { letterText = "Y", drawingLink = "a drawing link", word = "yam" }

        Z ->
            { letterText = "Z", drawingLink = "a drawing link", word = "zucchini" }
