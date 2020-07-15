module Data.Fsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (linearGradient, stop, svg)
import Svg.Attributes exposing (class, d, fill, gradientUnits, id, offset, opacity, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#0F3300", stroke "#0F3300", strokeWidth "1.366", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M12.166 157s10.417 12.412 20.375 23.376c10.819 11.911 51.104 16.436 62.868 7.387 11.762-9.047 53.384 21.716 51.574 47.051l15.382-8.144s-19-72.247-75.098-60.622c-56.099 11.625-57.004-16.286-57.004-16.286L12.166 157z" ] [], Svg.path [ fill "#0F3300", stroke "#0F3300", strokeWidth "1.366", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M126.353 80.633s-13.045 6.957-22.613 6.377c0 1.45-32.625 60.326-17.972 80.88 14.653 20.554 31.887 60.877 31.887 60.877s-26.379-104.65 8.698-148.134z" ] [], Svg.path [ fill "#0F3300", stroke "#0F3300", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M173.955 132.5h16.395s-7.468 39.673 30.508 59.628l-9.856 30.179s-24.643-12.427-45.804 20.911l.168-37.354s19.254-14.462 34.329-4.808c-.001.001-34.377-44.556-25.74-68.556z" ] [], Svg.path [ fill "#0F3300", stroke "#0F3300", strokeWidth "1.366", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M279.389 171.055s-35.052-35.327-50.414-38.235c-15.366-2.908-27.145-27.542-26.328-53.348l-19.476 24.641s24.641 46.383 48.122 51.89c23.481 5.508 34.206 39.425 25.51 48.122l-33.047 1.45-2.898 20.873 51.6-1.45 6.931-53.943zM273.159 88.718c2.688-3.105 26.963-22.011 22.903-5.777-4.058 16.235-12.239 24.631 3.012 39.275 15.251 14.645-5.91 27.546-5.91 27.546s-44.066-33.236-20.005-61.044z" ] [], Svg.path [ fill "#0F3300", stroke "#0F3300", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M323.542 163.821c26.443-43.483 64.292-57.978 64.292-57.978-9.278-5.219-23.771-21.452-23.771-21.452-14.783 30.726-73.923 120.736-73.923 120.736l-34.206 84.795 29.351 35.94c-10.65-68.419 17.612-105.513 17.612-105.513 59.429 5.217 36.525-43.774 36.525-43.774 17.394-2.32 9.278 6.378 9.278 6.378s9.274 10.146 9.274 11.015c0 .87 24.641-17.683 9.856-31.598-14.783-13.913-44.288 1.451-44.288 1.451zm2.958 21.557a3.123 3.123 0 01-3.123 3.122h-8.754a3.122 3.122 0 01-3.123-3.122v-.757a3.123 3.123 0 013.123-3.122h8.754a3.122 3.122 0 013.123 3.122v.757zm.342 18.018l-6.506 4.99a3.414 3.414 0 11-4.158-5.42l6.506-4.989a3.414 3.414 0 114.158 5.419z" ] [], linearGradient [ id "b", gradientUnits "userSpaceOnUse", x1 "307.009", y1 "474.687", x2 "86.883", y2 "93.418" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset ".363", stopColor "#f7f7c9" ] [], stop [ offset ".4", stopColor "#f1f2c4" ] [], stop [ offset ".449", stopColor "#e0e4b5" ] [], stop [ offset ".504", stopColor "#c4cc9d" ] [], stop [ offset ".565", stopColor "#9eab7c" ] [], stop [ offset ".63", stopColor "#6c8150" ] [], stop [ offset ".697", stopColor "#304f1d" ] [], stop [ offset ".731", stopColor "#0f3300" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], linearGradient [ id "c", gradientUnits "userSpaceOnUse", x1 "185.739", y1 "528.553", x2 "185.739", y2 "84.045" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ fill "url(#b)", stroke "url(#c)", strokeWidth "10", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M323.542 117.354l-22.768-7.903-58.069 167.285c-7.511-4.47-15.525-7.729-23.908-9.554L260.297 103l-34.347-8.356L182.721 266h-15.578l-5.278-176.955-28.68.693 5.352 179.035c-4.043 1.247-7.994 2.779-11.827 4.673L75.345 107.433l-27.409 8.471 54.257 175.339c-23.628 23.627-38.914 61.23-38.914 103.542 0 71.422 43.548 128.768 97.266 128.768 7.274 0 11.894-.553 21.177-.553H202.9c53.719 0 97.266-57.348 97.266-128.77 0-41.447-14.682-78.086-37.488-101.675l60.864-175.201z" ] [], linearGradient [ id "d", gradientUnits "userSpaceOnUse", x1 "99.867", y1 "380.414", x2 "219.477", y2 "380.414" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#d)", strokeWidth "1.533", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M100.634 480.938c0-111.124 52.812-201.047 118.076-201.047" ] [], linearGradient [ id "e", gradientUnits "userSpaceOnUse", x1 "122.45", y1 "396.656", x2 "233.06", y2 "396.656" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#e)", strokeWidth "1.405", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M123.152 488.051c0-101.033 48.844-182.789 109.206-182.789" ] [], linearGradient [ id "f", gradientUnits "userSpaceOnUse", x1 "145.033", y1 "412.898", x2 "246.644", y2 "412.898" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#f)", strokeWidth "1.278", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M145.672 495.163c0-90.94 44.876-164.53 100.334-164.53" ] [], linearGradient [ id "g", gradientUnits "userSpaceOnUse", x1 "167.615", y1 "429.14", x2 "260.229", y2 "429.14" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#g)", strokeWidth "1.15", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M168.19 502.275c0-80.848 40.908-146.271 91.464-146.271" ] [], linearGradient [ id "h", gradientUnits "userSpaceOnUse", x1 "190.198", y1 "445.383", x2 "273.813", y2 "445.383" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#h)", strokeWidth "1.022", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M190.709 509.389c0-70.756 36.941-128.013 82.593-128.013" ] [], linearGradient [ id "i", gradientUnits "userSpaceOnUse", x1 "212.781", y1 "461.624", x2 "287.398", y2 "461.624" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#i)", strokeWidth ".895", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M213.229 516.501c0-60.664 32.973-109.754 73.723-109.754" ] [], linearGradient [ id "j", gradientUnits "userSpaceOnUse", x1 "86.639", y1 "359.699", x2 "185.909", y2 "359.699" ] [ stop [ offset "0", stopColor "#f7f7c9" ] [], stop [ offset "1", stopColor "#0f3300" ] [] ], Svg.path [ opacity ".3", fill "none", stroke "url(#j)", strokeWidth "1.254", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M87.266 440.784c0-89.637 43.838-162.169 98.017-162.169" ] [], Svg.path [ fill "#244C11", stroke "#0F3300", strokeWidth ".688", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M46.771 284.963c-12.829-12.829-27.499 4.173-15.836 15.835 10.497 10.496 29.739-1.933 38.14 6.47-8.401-8.402 4.028-27.644-6.468-38.141-11.664-11.662-28.665 3.007-15.836 15.836z" ] [], Svg.path [ fill "#244C11", stroke "#0F3300", strokeWidth "1.145", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M248.858 373.063c0 2.653-.536 5.18-1.51 7.477a19.356 19.356 0 01-4.117 6.109 19.299 19.299 0 01-6.108 4.116 19.165 19.165 0 01-7.476 1.508c-2.655 0-5.183-.537-7.48-1.508a19.266 19.266 0 01-10.225-10.225l18.44-7.477-18.44-7.479a19.24 19.24 0 014.118-6.106 19.154 19.154 0 0113.587-5.629 19.153 19.153 0 0113.584 5.629 19.282 19.282 0 014.117 6.106 19.116 19.116 0 011.51 7.479zM148.147 373.063c0 2.653-.538 5.18-1.51 7.477a19.287 19.287 0 01-4.116 6.109 19.317 19.317 0 01-6.107 4.116 19.18 19.18 0 01-7.479 1.508c-2.654 0-5.18-.537-7.479-1.508a19.307 19.307 0 01-6.106-4.116 19.284 19.284 0 01-4.117-6.109l18.438-7.477-18.438-7.479a19.204 19.204 0 014.117-6.106 19.16 19.16 0 0113.585-5.629 19.164 19.164 0 0113.586 5.629 19.23 19.23 0 014.116 6.106 19.134 19.134 0 011.51 7.479z" ] [], Svg.path [ fill "#244C11", stroke "#0F3300", strokeWidth "1.366", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M215.793 433.325c-5.545-6.765-18.806-7.773-26.216-7.773-2.372 0-4.019.103-4.441.131a68.48 68.48 0 00-4.439-.131c-7.411 0-20.67 1.009-26.215 7.773-2.303 2.81-3.061 6.295-2.248 10.352 3.946 19.734 31.075 26.469 32.229 26.745.104.026.208.038.314.038.102 0 .205-.012.306-.034 1.182-.278 29.008-7.01 32.957-26.749.813-4.057.056-7.542-2.247-10.352zm-.388 9.825c-3.397 16.988-27.588 23.794-30.624 24.581-38.126-31.725.252-39.36.252-39.36.069.004.139.004.206 0 .017-.003 1.744-.134 4.337-.134 5.584 0 19.113.663 24.137 6.79 1.796 2.19 2.349 4.845 1.692 8.123z" ] [] ]
