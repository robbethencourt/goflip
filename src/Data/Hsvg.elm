module Data.Hsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (linearGradient, stop, svg)
import Svg.Attributes exposing (class, d, fill, gradientUnits, id, offset, stopColor, stroke, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ linearGradient [ id "k", gradientUnits "userSpaceOnUse", x1 "206.818", y1 "398.659", x2 "206.818", y2 "241.194" ] [ stop [ offset "0", stopColor "#8fe989" ] [], stop [ offset ".136", stopColor "#9cef8d" ] [], stop [ offset ".388", stopColor "#adf893" ] [], stop [ offset ".663", stopColor "#b7fd97" ] [], stop [ offset "1", stopColor "#baff98" ] [] ], linearGradient [ id "l", gradientUnits "userSpaceOnUse", x1 "206.818", y1 "402.426", x2 "206.818", y2 "237.427" ] [ stop [ offset "0", stopColor "#fdd869" ] [], stop [ offset ".085", stopColor "#f0df72" ] [], stop [ offset ".282", stopColor "#d8ed83" ] [], stop [ offset ".492", stopColor "#c7f78f" ] [], stop [ offset ".72", stopColor "#bdfd96" ] [], stop [ offset "1", stopColor "#baff98" ] [] ], Svg.path [ fill "url(#k)", stroke "url(#l)", strokeWidth "7.534", strokeMiterlimit "10", d "M23.281 276.764c-11.249-31.042 48.465-39.199 52.742-34.211 4.276 4.989 17.817 22.095 24.945 24.233 7.127 2.138 8.552 5.702 9.979 9.978 1.425 4.276 10.691 0 10.691 0s4.989 6.912 12.116 8.444c7.127 1.534 13.542-3.456 21.382 4.384 7.84 7.841 12.829-4.988 18.53 0 5.702 4.989 22.965-8.329 25.737 2.606 2.772 10.935 12.749 12.361 22.015 10.223s14.255-4.729 22.095.843c7.84 5.57 9.266-3.694 14.968-9.396 5.702-5.702.712-12.333 19.955-8.661 19.244 3.672 10.691-10.178 24.233-12.162s19.243-1.271 24.944-6.973c5.703-5.702 9.979-3.563 18.53-7.127 8.554-3.564 11.404-.713 27.085 2.851 15.68 3.563 18.012-3.439 18.53 27.795 1.632 98.241-294.354 191.723-368.477-12.827z" ] [], Svg.path [ fill "#69C462", d "M23.091 216.196c-9.487-9.487-20.335 3.086-11.711 11.71 7.762 7.762 21.993-1.43 28.205 4.785-6.212-6.215 2.979-20.443-4.784-28.206-8.625-8.623-21.197 2.224-11.71 11.711zM287.375 317.106c0 2.304-.467 4.497-1.311 6.491a16.85 16.85 0 01-3.574 5.303 16.745 16.745 0 01-5.304 3.575 16.638 16.638 0 01-6.491 1.308c-2.305 0-4.498-.465-6.492-1.308a16.703 16.703 0 01-5.302-3.575 16.722 16.722 0 01-3.576-5.303l16.01-6.491-16.01-6.491a16.682 16.682 0 013.576-5.304 16.651 16.651 0 0111.794-4.886c2.302 0 4.496.468 6.491 1.312a16.693 16.693 0 015.304 3.574 16.792 16.792 0 013.574 5.304 16.615 16.615 0 011.311 6.491zM152.589 317.106c0 2.304-.467 4.497-1.311 6.491a16.733 16.733 0 01-8.876 8.878 16.652 16.652 0 01-6.493 1.308c-2.304 0-4.497-.465-6.494-1.308a16.77 16.77 0 01-5.302-3.575 16.747 16.747 0 01-3.573-5.303l16.007-6.491-16.007-6.491a16.707 16.707 0 018.875-8.878 16.656 16.656 0 016.494-1.312 16.637 16.637 0 0111.795 4.886 16.71 16.71 0 013.574 5.304 16.597 16.597 0 011.311 6.491zM228.868 353.833c-3.988-4.865-13.525-5.591-18.856-5.591-1.706 0-2.891.073-3.193.095a48.282 48.282 0 00-3.193-.095c-5.331 0-14.867.726-18.856 5.591-1.655 2.022-2.201 4.527-1.616 7.445 2.838 14.196 22.351 19.039 23.18 19.238a.906.906 0 00.446.001c.853-.198 20.866-5.041 23.707-19.239.582-2.918.038-5.423-1.619-7.445zm-.277 7.068c-2.444 12.219-19.845 17.114-22.029 17.681-27.421-22.82.183-28.312.183-28.312.051.003.1.003.149 0a43.639 43.639 0 013.118-.097c4.018 0 13.748.477 17.36 4.883 1.292 1.577 1.69 3.487 1.219 5.845z" ] [] ]
