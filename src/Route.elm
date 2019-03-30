module Route exposing
    ( Page(..)
    , Transition(..)
    , transitionFromPage
    , updatePageTransition
    )

import Data.Alphabet as Alphabet
import Process
import Task



-- public


type Page
    = LetterForm Alphabet.Letter Transition
    | Drawing Alphabet.Letter Transition
    | Nav Transition


type Transition
    = Show
    | Remove


transitionFromPage : Page -> msg -> Cmd msg
transitionFromPage page msg =
    let
        time =
            page |> pageTransitionTime
    in
    Process.sleep time
        |> Task.andThen (always <| Task.succeed msg)
        |> Task.perform identity


updatePageTransition : Page -> Page
updatePageTransition page =
    case page of
        LetterForm letter transition ->
            LetterForm letter <| toggleTransition transition

        Drawing letter transition ->
            Drawing letter <| toggleTransition transition

        Nav transition ->
            Nav <| toggleTransition transition



-- private


pageTransitionTime : Page -> Float
pageTransitionTime page =
    case page of
        LetterForm _ _ ->
            650

        Drawing _ _ ->
            250

        Nav _ ->
            250


toggleTransition : Transition -> Transition
toggleTransition transition =
    case transition of
        Show ->
            Remove

        Remove ->
            Show
