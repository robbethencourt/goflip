<<<<<<< HEAD
module Data.Isvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, radialGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeMiterlimit, strokeWidth, viewBox)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#524260", d "M212.614 177s28.042-94.113 57.772-109.625c29.73-15.511 41.579-.694 18.075 24.122C264.958 116.315 248.606 125 250.577 177h-37.963z" ] [], radialGradient [ id "m", cx "200", cy "339.455", r "190.749", gradientUnits "userSpaceOnUse" ] [ stop [ offset "0", stopColor "#c9b4ff" ] [], stop [ offset "1", stopColor "#ebe8ff" ] [] ], Svg.path [ fill "url(#m)", stroke "#DAD0EF", strokeWidth "10.93", strokeMiterlimit "10", d "M215.323 167.004s-8.272 6.204-11.375 0c-3.102-6.204-8.272-17.579-17.579-15.511-9.307 2.069-11.375-6.204-11.375-6.204s-16.544-12.41-14.477 0c2.068 12.409 2.068 6.547-12.409 9.478s-52.737 11.203-46.533 24.646c6.205 13.443-24.818 15.511-24.818 15.511s-8.271 10.34-6.204 14.477c2.068 4.137-11.375 14.477-11.375 14.477s-14.477 4.137 0 23.784-49.635 50.669-36.192 80.657c13.443 29.986 3.507 71.351-1.865 75.487-5.373 4.135-2.271 19.646 11.172 32.055 13.443 12.409 44.464 22.749 40.328 42.396-4.135 19.648 14.479 15.513 19.649 18.614 5.17 3.102 3.102 8.271 9.306 9.306s25.851-2.067 45.499 14.478c19.647 16.543 22.749-7.239 56.873 13.441 34.124 20.682 74.453-28.953 74.453-28.953s7.238-8.271 16.544-1.033c9.307 7.237 25.851-24.817 22.749-28.954s-1.031-14.332 17.58-14.922c18.612-.589 20.68-20.236 32.056-39.884 11.375-19.647 14.476-19.646 8.271-36.191-6.204-16.545 16.545-58.941-1.033-81.69-17.579-22.751-8.272-25.853-14.478-41.364-6.204-15.511-11.373-14.477-1.034-21.715 10.341-7.238-6.204-13.443-13.441-16.545-7.239-3.102-18.613-14.476-16.545-34.124 2.067-19.647-11.374-13.443-14.478-16.545-3.103-3.102-4.136-10.34-13.442-7.238-9.308 3.102-6.205-9.306-28.954-4.137-22.749 5.169-56.873 6.203-56.873 6.203z" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.561", strokeMiterlimit "10", d "M132.97 194.186c5.963 14.908 14.122 16.625 36.483 7.68M257.883 187.94c5.965 14.908 14.123 16.625 36.485 7.681M189.18 225.415c5.965 14.909 14.123 16.625 36.484 7.681M76.375 322.194c9.484 12.958 17.813 12.594 37.249-1.628" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "2.76", strokeMiterlimit "10", d "M246.492 253.138c18.221 21.764 32.87 20.162 65.513-7.168" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.561", strokeMiterlimit "10", d "M293.867 357.816c5.701 15.011 13.827 16.872 36.344 8.32M214.235 467.116c5.701 15.011 13.827 16.871 36.342 8.321" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.875", strokeMiterlimit "10", d "M72.145 389.045c6.847 18.028 16.605 20.262 43.645 9.993M129.917 443.695c6.848 18.028 16.606 20.262 43.645 9.993" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "2.219", strokeMiterlimit "10", d "M92.259 246.992c8.478 21.189 20.072 23.629 51.854 10.917" ] [], circle [ fill "#A658D7", cx "117.811", cy "246.369", r "9.824" ] [], circle [ fill "#A658D7", cx "150.601", cy "188.596", r "9.824" ] [], circle [ fill "#A658D7", cx "278.638", cy "185.473", r "9.824" ] [], circle [ fill "#A658D7", cx "273.954", cy "247.93", r "9.824" ] [], circle [ fill "#A658D7", cx "234.918", cy "461.847", r "9.824" ] [], circle [ fill "#A658D7", cx "94.39", cy "386.898", r "5.802" ] [], circle [ fill "#A658D7", cx "152.163", cy "443.109", r "5.802" ] [], circle [ fill "#A658D7", cx "317.673", cy "340.055", r "5.802" ] [], circle [ fill "#A658D7", cx "94.389", cy "316.633", r "5.802" ] [], circle [ fill "#A658D7", cx "206.812", cy "226.07", r "5.802" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.561", strokeMiterlimit "10", d "M195.19 334.814c5.701 15.01 13.826 16.87 36.342 8.32" ] [], circle [ fill "#A658D7", cx "212.749", cy "331.106", r "5.802" ] [], Svg.path [ fill "#DAD0EF", d "M48.504 154.266c-12.099-12.099-25.932 3.935-14.934 14.932 9.898 9.898 28.044-1.823 35.966 6.101-7.922-7.924 3.798-26.068-6.1-35.967-10.998-10.998-27.03 2.835-14.932 14.934z" ] [], Svg.path [ fill "#524260", d "M299.698 305.101c0 3.344-.675 6.526-1.9 9.42a24.37 24.37 0 01-5.188 7.694 24.266 24.266 0 01-7.692 5.186 24.137 24.137 0 01-9.417 1.898c-3.344 0-6.526-.676-9.42-1.898a24.298 24.298 0 01-12.881-12.88l23.228-9.42-23.228-9.417a24.204 24.204 0 015.188-7.694 24.122 24.122 0 0117.113-7.089 24.14 24.14 0 0117.109 7.089 24.32 24.32 0 015.188 7.694 24.091 24.091 0 011.9 9.417zM169.725 305.101c0 3.344-.677 6.526-1.902 9.42a24.279 24.279 0 01-12.877 12.88 24.155 24.155 0 01-9.42 1.898c-3.343 0-6.524-.676-9.421-1.898a24.334 24.334 0 01-7.692-5.186 24.323 24.323 0 01-5.185-7.694l23.223-9.42-23.223-9.417a24.267 24.267 0 0112.877-12.88 24.138 24.138 0 019.421-1.903c3.341 0 6.523.68 9.42 1.903a24.245 24.245 0 017.692 5.186 24.212 24.212 0 015.185 7.694 24.11 24.11 0 011.902 9.417zM252.92 376.059c-8.229-10.036-27.909-11.536-38.908-11.536-3.521 0-5.965.152-6.592.198-.621-.046-3.067-.198-6.587-.198-10.999 0-30.676 1.5-38.908 11.536-3.416 4.172-4.541 9.344-3.335 15.363 5.857 29.29 46.12 39.284 47.831 39.695.154.04.31.057.469.057.149 0 .301-.017.451-.054 1.755-.411 43.052-10.403 48.914-39.698 1.206-6.02.082-11.192-3.335-15.363zm-.575 14.585c-5.042 25.212-40.944 35.313-45.45 36.482-56.583-47.086.374-58.419.374-58.419.104.008.207.008.309 0 .024-.003 2.586-.197 6.435-.197 8.288 0 28.366.983 35.819 10.074 2.667 3.25 3.487 7.19 2.513 12.06z" ] [] ]
=======
module Data.Isvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, g, radialGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#524260", d "M210.536 184s25.323-84.829 52.171-98.836c26.847-14.007 37.547-.707 16.322 21.704C257.805 129.279 243.038 137 244.818 184h-34.282z" ] [], radialGradient [ id "m", cx "199.145", cy "331.019", r "172.252", gradientUnits "userSpaceOnUse" ] [ stop [ offset "0", stopColor "#c9b4ff" ] [], stop [ offset "1", stopColor "#ebe8ff" ] [] ], Svg.path [ fill "url(#m)", stroke "#DAD0EF", strokeWidth "9.87", strokeMiterlimit "10", d "M212.982 175.29s-7.47 5.602-10.271 0c-2.802-5.603-7.471-15.875-15.875-14.007-8.404 1.868-10.271-5.603-10.271-5.603s-14.94-11.206-13.073 0c1.867 11.206 1.867 5.913-11.206 8.559-13.073 2.646-47.624 10.117-42.021 22.256 5.603 12.14-22.411 14.007-22.411 14.007s-7.469 9.337-5.602 13.073-10.272 13.073-10.272 13.073-13.073 3.735 0 21.478c13.073 17.742-44.822 45.756-32.683 72.835 12.14 27.079 3.167 64.432-1.685 68.167-4.852 3.734-2.05 17.741 10.089 28.946 12.14 11.206 40.152 20.543 36.417 38.285-3.735 17.743 13.074 14.009 17.742 16.81 4.669 2.801 2.801 7.47 8.404 8.403s23.344-1.867 41.087 13.073c17.742 14.939 20.543-6.537 51.358 12.139 30.814 18.676 67.233-26.146 67.233-26.146s6.536-7.47 14.939-.934c8.404 6.536 23.344-22.41 20.543-26.146-2.801-3.735-.932-12.941 15.875-13.475 16.808-.531 18.675-18.273 28.947-36.016s13.072-17.741 7.47-32.683c-5.603-14.94 14.94-53.226-.934-73.769-15.874-20.544-7.47-23.346-13.073-37.353-5.603-14.006-10.271-13.073-.934-19.609 9.338-6.536-5.603-12.139-12.139-14.941-6.537-2.801-16.808-13.072-14.94-30.814s-10.271-12.139-13.073-14.941c-2.802-2.801-3.734-9.338-12.139-6.536-8.405 2.801-5.604-8.404-26.146-3.735-20.54 4.67-51.356 5.604-51.356 5.604z" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.41", strokeMiterlimit "10", d "M138.615 199.836c5.385 13.462 12.753 15.013 32.946 6.936M251.415 194.196c5.387 13.462 12.754 15.013 32.947 6.936M189.375 228.036c5.387 13.463 12.753 15.013 32.947 6.936M87.508 315.431c8.564 11.702 16.085 11.373 33.637-1.47" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "2.492", strokeMiterlimit "10", d "M241.129 253.071c16.454 19.653 29.683 18.207 59.16-6.473" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.41", strokeMiterlimit "10", d "M283.91 347.599c5.148 13.556 12.486 15.236 32.819 7.514M212 446.3c5.148 13.555 12.486 15.234 32.818 7.514" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.693", strokeMiterlimit "10", d "M83.688 375.799c6.183 16.28 14.995 18.297 39.412 9.024M135.858 425.149c6.184 16.28 14.996 18.297 39.413 9.024" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "2.004", strokeMiterlimit "10", d "M101.852 247.521c7.656 19.135 18.126 21.338 46.826 9.858" ] [], circle [ fill "#A658D7", cx "124.926", cy "246.958", r "8.871" ] [], circle [ fill "#A658D7", cx "154.537", cy "194.788", r "8.871" ] [], circle [ fill "#A658D7", cx "270.158", cy "191.968", r "8.871" ] [], circle [ fill "#A658D7", cx "265.928", cy "248.369", r "8.871" ] [], circle [ fill "#A658D7", cx "230.678", cy "441.541", r "8.871" ] [], circle [ fill "#A658D7", cx "103.776", cy "373.86", r "5.239" ] [], circle [ fill "#A658D7", cx "155.947", cy "424.621", r "5.24" ] [], circle [ fill "#A658D7", cx "305.408", cy "331.56", r "5.24" ] [], circle [ fill "#A658D7", cx "103.775", cy "310.409", r "5.24" ] [], circle [ fill "#A658D7", cx "205.297", cy "228.628", r "5.24" ] [], Svg.path [ fill "none", stroke "#A658D7", strokeWidth "1.41", strokeMiterlimit "10", d "M194.801 326.827c5.148 13.555 12.486 15.234 32.819 7.514" ] [], circle [ fill "#A658D7", cx "210.658", cy "323.479", r "5.239" ] [], Svg.path [ fill "#DAD0EF", d "M33.392 170.838c-14.736-14.736-31.586 4.793-18.19 18.189 12.057 12.056 34.159-2.22 43.81 7.432-9.65-9.652 4.626-31.753-7.43-43.811-13.398-13.396-32.926 3.454-18.19 18.19z" ] [], Svg.path [ fill "none", stroke "#524260", strokeWidth "1.41", strokeMiterlimit "10", d "M384.129 441.143c-2.819 7.186-10.933 10.729-18.119 7.91-7.186-2.82-10.724-10.935-7.902-18.12 2.818-7.185 10.929-10.726 18.115-7.908 7.184 2.819 10.72 10.934 7.906 18.118z" ] [], Svg.path [ fill "#DAD0EF", d "M351.969 464.827c-2.028 5.166-7.865 7.716-13.034 5.688-5.17-2.03-7.716-7.867-5.688-13.036 2.028-5.168 7.861-7.717 13.031-5.688 5.17 2.027 7.719 7.867 5.691 13.036z" ] [], g [] [ Svg.path [ fill "#524260", d "M343.206 189.937c2.199-1.203 4.982-3.986 6.186-6.185l3.684-6.733c1.203-2.199 3.172-2.199 4.374 0l3.682 6.732c1.202 2.199 3.985 4.982 6.185 6.186l6.733 3.682c2.199 1.203 2.199 3.171 0 4.374l-6.733 3.681c-2.199 1.203-4.981 3.986-6.185 6.185l-3.682 6.734c-1.203 2.199-3.171 2.199-4.374 0l-3.684-6.735c-1.203-2.199-3.986-4.982-6.186-6.185l-6.733-3.681c-2.199-1.203-2.199-3.17 0-4.374l6.733-3.681z" ] [] ], g [] [ Svg.path [ fill "#DAD0EF", d "M390.383 174.816c-1.907 1.043-4.321 3.457-5.363 5.363-1.043 1.907-2.75 1.907-3.793 0-1.043-1.907-3.457-4.32-5.364-5.363-1.907-1.043-1.907-2.75 0-3.793s4.321-3.457 5.364-5.363 2.75-1.907 3.793 0c1.042 1.907 3.456 4.32 5.363 5.363s1.907 2.75 0 3.793z" ] [] ], g [] [ Svg.path [ fill "#FFF", d "M42.865 434.753c4.772-2.609 10.812-8.649 13.422-13.422l7.994-14.616c2.61-4.772 6.88-4.772 9.49 0l7.992 14.616c2.609 4.772 8.649 10.813 13.421 13.422l14.613 7.991c4.772 2.609 4.772 6.88 0 9.49l-14.612 7.99c-4.772 2.61-10.813 8.649-13.422 13.422l-7.991 14.614c-2.61 4.772-6.88 4.772-9.491 0l-7.993-14.614c-2.61-4.772-8.65-10.812-13.423-13.422l-14.612-7.99c-4.772-2.61-4.772-6.881 0-9.49l14.612-7.991z" ] [] ], g [] [ Svg.path [ fill "#FFF", d "M108.568 478.528c2.167-1.185 4.909-3.927 6.093-6.094l3.628-6.632c1.185-2.167 3.124-2.167 4.309 0l3.628 6.633c1.185 2.166 3.927 4.908 6.094 6.093l6.634 3.628c2.167 1.185 2.167 3.124 0 4.309l-6.635 3.629c-2.167 1.185-4.909 3.927-6.093 6.094l-3.629 6.634c-1.185 2.167-3.124 2.167-4.309 0l-3.628-6.634c-1.185-2.167-3.927-4.909-6.093-6.094l-6.634-3.629c-2.167-1.185-2.167-3.124 0-4.309l6.635-3.628z" ] [] ], g [] [ Svg.path [ fill "#524260", d "M358.777 131.498l3.801 3.8a8.595 8.595 0 011.32-1.32l-3.802-3.801-1.319 1.321zm9.799.529c.318-.034.642-.054.97-.054.304 0 .604.016.9.045v-5.392h-1.87v5.401zm7.938 3.271l3.8-3.8-1.32-1.321-3.8 3.8c.242.197.477.403.697.624.219.22.426.455.623.697zm-15.941 5.648c0-.292.017-.58.044-.865h-5.308v1.869h5.323a9.238 9.238 0 01-.059-1.004zm17.903-.864c.027.285.044.573.044.865 0 .34-.022.674-.06 1.004h5.44v-1.869h-5.424zm-15.898 6.51l-3.801 3.801 1.319 1.32 3.801-3.801a8.726 8.726 0 01-1.319-1.32zm13.313.698a9.154 9.154 0 01-.697.624l3.8 3.8 1.32-1.32-3.8-3.799a9.33 9.33 0 01-.623.695zm-7.315 2.574v5.355h1.87v-5.346a9.24 9.24 0 01-.9.045c-.328 0-.651-.02-.97-.054z" ] [] ], g [] [ Svg.path [ fill "#524260", d "M79.634 517.127c.287-.286.59-.555.906-.811l-4.938-4.938-1.719 1.716 4.94 4.94c.256-.315.525-.62.811-.907zm19.855 7.127c.035.369.057.743.057 1.122 0 .442-.03.878-.078 1.309h7.075v-2.431h-7.054zm-23.272 1.122c0-.379.021-.753.057-1.122h-6.9v2.431h6.921a11.81 11.81 0 01-.078-1.309zm20.722-7.343l4.939-4.939-1.718-1.716-4.938 4.938c.315.256.62.524.906.811.288.287.556.591.811.906zm-10.318-4.252c.414-.044.834-.07 1.26-.07.395 0 .785.021 1.17.059v-7.009h-2.43v7.02zm9.508 19.841c-.287.287-.591.556-.907.812l4.939 4.939 1.718-1.716-4.939-4.939c-.256.314-.524.618-.811.904zm-17.306-.905l-4.94 4.94 1.719 1.716 4.939-4.939c-.315-.256-.62-.524-.906-.812a11.62 11.62 0 01-.812-.905zm7.798 4.252v6.961h2.43v-6.949c-.385.038-.775.059-1.17.059a12.182 12.182 0 01-1.26-.071z" ] [] ], Svg.path [ fill "#524260", d "M289.176 299.995c0 3.02-.609 5.894-1.716 8.506a21.923 21.923 0 01-11.631 11.631 21.804 21.804 0 01-8.504 1.715c-3.02 0-5.894-.61-8.507-1.715a21.938 21.938 0 01-11.632-11.631l20.976-8.506-20.976-8.504a21.866 21.866 0 014.685-6.948 21.789 21.789 0 0115.454-6.402 21.789 21.789 0 0115.45 6.402 21.965 21.965 0 014.685 6.948 21.761 21.761 0 011.716 8.504zM171.806 299.995c0 3.02-.612 5.894-1.718 8.506a21.93 21.93 0 01-11.628 11.631 21.821 21.821 0 01-8.506 1.715c-3.019 0-5.892-.61-8.507-1.715a21.94 21.94 0 01-6.946-4.683 21.947 21.947 0 01-4.682-6.948l20.971-8.506-20.971-8.504a21.902 21.902 0 0111.628-11.631 21.8 21.8 0 018.507-1.719 21.802 21.802 0 0115.452 6.402 21.858 21.858 0 014.682 6.948 21.763 21.763 0 011.718 8.504zM229.444 359.395c-5.226-6.373-17.722-7.325-24.705-7.325a61.94 61.94 0 00-4.186.126 61.63 61.63 0 00-4.183-.126c-6.984 0-19.479.952-24.705 7.325-2.169 2.648-2.883 5.933-2.118 9.755 3.719 18.599 29.284 24.944 30.371 25.205a1.195 1.195 0 00.584.002c1.115-.261 27.336-6.605 31.059-25.207.767-3.823.053-7.107-2.117-9.755zm-.365 9.26c-3.201 16.009-25.998 22.423-28.859 23.165-35.929-29.898.237-37.094.237-37.094.066.005.132.005.196 0 .015-.002 1.643-.126 4.086-.126 5.263 0 18.012.625 22.744 6.397 1.695 2.065 2.215 4.566 1.596 7.658z" ] [] ]
>>>>>>> 9dce7ade5dba5655f3c935ec5519ed953efa425f
