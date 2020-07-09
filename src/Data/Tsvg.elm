module Data.Tsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, linearGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#E81021", stroke "#980006", strokeWidth "12.405", strokeMiterlimit "10", d "M375.183 354.55c-6.964 63.237-66.368 108.577-132.16 101.329l-113.628-12.518c-65.792-7.248-113.48-64.387-106.513-127.623l1.94-17.615c6.967-63.235 65.948-108.623 131.74-101.375l113.628 12.518c65.794 7.248 113.9 64.434 106.935 127.669l-1.942 17.615z" ] [], Svg.path [ fill "#22E200", d "M224.407 197.153c1.845-10.428 1.513-27.44 2.178-38.73.886-15.063-31.901-15.063-31.901-15.063 15.006 26.822 5.381 44.215-1.166 51.84-14.88-.981-30.24-1.052-38.351 3.232-10.267 5.424-6.198 13.56 18.208 14.722 0 0-22.276 9.686-20.339 25.763 1.937 16.078 34.488 3.606 41.454-19.758 0 0 11.621 3.485 14.72 17.433s18.208 18.208 26.344 8.33-6.199-17.24-.775-25.569c5.659-8.689 25.183 9.879 32.931-6.004 5.055-10.363-23.107-14.542-43.303-16.196z" ] [], Svg.path [ fill "#E81021", d "M41.117 167.555c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z" ] [], Svg.path [ fill "none", stroke "#E81021", strokeWidth "2.021", strokeMiterlimit "10", d "M374.407 446.056c-3.4 7.001-11.84 9.925-18.842 6.526-7.006-3.402-9.921-11.838-6.521-18.843 3.4-7 11.838-9.922 18.838-6.525 7.007 3.403 9.922 11.842 6.525 18.842z" ] [], Svg.path [ fill "#22E200", d "M340.203 467.339c-2.447 5.031-8.518 7.138-13.555 4.689-5.036-2.448-7.139-8.519-4.691-13.554 2.446-5.037 8.513-7.142 13.551-4.694 5.039 2.447 7.142 8.519 4.695 13.559zM328.712 187.082c2.349-1.284 5.32-4.256 6.604-6.604l3.935-7.191c1.284-2.348 3.386-2.348 4.67 0l3.933 7.19c1.284 2.348 4.256 5.32 6.604 6.604l7.189 3.933c2.349 1.284 2.349 3.386 0 4.669l-7.189 3.931c-2.349 1.284-5.32 4.256-6.604 6.604l-3.933 7.19c-1.284 2.348-3.386 2.348-4.67 0l-3.935-7.191c-1.284-2.348-4.256-5.32-6.604-6.604l-7.189-3.931c-2.349-1.284-2.349-3.385 0-4.669l7.189-3.931z" ] [], Svg.path [ fill "#E81021", d "M379.089 170.937c-2.036 1.114-4.613 3.691-5.728 5.728s-2.938 2.036-4.051 0c-1.114-2.036-3.692-4.614-5.729-5.728-2.036-1.114-2.036-2.938 0-4.051s4.614-3.691 5.729-5.727c1.113-2.036 2.937-2.036 4.051 0 1.114 2.036 3.691 4.613 5.728 5.727s2.036 2.936 0 4.051z" ] [], Svg.path [ fill "#FFF", d "M40.643 400.229c3.825-2.092 8.665-6.932 10.756-10.757l6.404-11.711c2.092-3.825 5.514-3.825 7.605 0l6.404 11.711c2.092 3.825 6.932 8.665 10.756 10.757l11.708 6.403c3.825 2.092 3.825 5.514 0 7.605l-11.709 6.404c-3.824 2.092-8.665 6.932-10.756 10.756l-6.404 11.712c-2.091 3.824-5.514 3.824-7.605 0l-6.404-11.712c-2.091-3.824-6.932-8.664-10.756-10.756l-11.71-6.404c-3.825-2.092-3.825-5.514 0-7.605l11.711-6.403zM93.293 435.311c1.737-.949 3.934-3.146 4.884-4.882l2.908-5.316c.95-1.735 2.503-1.735 3.453.001l2.906 5.314c.95 1.736 3.147 3.934 4.884 4.883l5.317 2.906c1.736.949 1.737 2.503 0 3.452l-5.318 2.909c-1.736.949-3.934 3.147-4.883 4.884l-2.907 5.315c-.949 1.736-2.503 1.736-3.453.001l-2.908-5.317c-.95-1.735-3.147-3.934-4.883-4.883l-5.316-2.909c-1.736-.949-1.736-2.503.001-3.452l5.315-2.906z" ] [], Svg.path [ fill "#22E200", d "M345.339 124.68l4.058 4.058c.211-.259.432-.51.667-.746.235-.235.484-.455.743-.665l-4.059-4.059-1.409 1.412zm1.918 10.09c0-.312.018-.62.047-.924h-5.667v1.995h5.684a9.476 9.476 0 01-.064-1.071zm8.545-9.525a9.591 9.591 0 011.997-.01v-5.757h-1.997v5.767zm8.477 3.492l4.057-4.057-1.41-1.411-4.057 4.057c.259.21.509.431.745.666.236.236.455.486.665.745zm-8.477 15.554v5.719h1.997v-5.709a9.577 9.577 0 01-1.997-.01zm10.572-10.445c.029.304.047.612.047.924 0 .362-.024.719-.063 1.071h5.81v-1.995h-5.794zm-16.978 6.952l-4.058 4.058 1.409 1.41 4.059-4.058a9.576 9.576 0 01-.743-.665 9.652 9.652 0 01-.667-.745zm14.218.745a9.63 9.63 0 01-.745.667l4.057 4.057 1.41-1.41-4.057-4.057c-.21.258-.43.508-.665.743z" ] [], Svg.path [ fill "#E81021", d "M68.948 483.497c.259-.259.534-.501.819-.731l-4.472-4.472-1.555 1.554 4.473 4.473c.231-.287.475-.563.735-.824zm6.325-3.025a10.605 10.605 0 012.201-.009v-6.35h-2.2v6.359zm-9.42 10.498c0-.344.02-.683.051-1.018h-6.248v2.201h6.268a10.267 10.267 0 01-.071-1.183zm18.765-6.651l4.471-4.472-1.555-1.554-4.471 4.471c.285.23.561.474.82.732.26.261.503.537.735.823zm-.735 14.116c-.26.261-.536.504-.822.736l4.473 4.473 1.555-1.555-4.472-4.473c-.231.285-.474.56-.734.819zm-15.67-.82l-4.474 4.474 1.555 1.555 4.474-4.474a10.812 10.812 0 01-.821-.735 10.785 10.785 0 01-.734-.82zm18.714-7.663c.032.335.051.674.051 1.018 0 .4-.027.795-.07 1.184h6.405v-2.201h-6.386zm-11.654 11.514v6.304h2.2v-6.294c-.348.035-.701.054-1.059.054a11.044 11.044 0 01-1.141-.064z" ] [], Svg.path [ fill "#A20004", d "M307.9 315.488a32.97 32.97 0 01-4.526 12.324 33.149 33.149 0 01-8.598 9.311 33.284 33.284 0 01-11.462 5.403 33.023 33.023 0 01-13.114.608 33.034 33.034 0 01-12.327-4.522 33.293 33.293 0 01-9.31-8.6 33.165 33.165 0 01-5.403-11.465l33.315-7.895-29.401-17.542a33.166 33.166 0 0120.064-14.712 32.973 32.973 0 0113.116-.609 32.996 32.996 0 0112.325 4.524 33.139 33.139 0 0114.709 20.062 32.973 32.973 0 01.612 13.113zM155.624 304.148a32.94 32.94 0 01-4.784 12.228 33.129 33.129 0 01-8.794 9.126 33.228 33.228 0 01-11.575 5.161 33.019 33.019 0 01-13.121.332 33.053 33.053 0 01-12.23-4.782 33.213 33.213 0 01-9.122-8.794 33.113 33.113 0 01-5.161-11.576l33.476-7.19-29.026-18.159a33.132 33.132 0 018.795-9.126 33.197 33.197 0 0111.571-5.16 32.993 32.993 0 0113.127-.333 32.964 32.964 0 0112.224 4.783 33.138 33.138 0 0114.285 20.369 32.889 32.889 0 01.335 13.121zM223.256 377c-3.9-8.082-15.906-11.167-22.715-12.288a55.155 55.155 0 00-4.102-.535 55.189 55.189 0 00-4.055-.809c-6.809-1.122-19.167-2.05-25.454 4.354-2.614 2.667-3.923 6.283-3.893 10.754.142 21.741 23.878 33.063 24.887 33.536.091.037.186.067.284.083.092.016.19.02.286.011 1.137-.121 27.888-3.12 35.001-23.671 1.46-4.225 1.382-8.07-.239-11.435zm-2.089 10.471c-6.122 17.683-29.546 21.317-32.475 21.702-29.426-39.757 7.179-42.134 7.179-42.134a.98.98 0 00.189.031c.014 0 1.625.124 4.006.517 5.131.845 17.444 3.601 20.979 10.93 1.261 2.614 1.303 5.546.122 8.954z" ] [] ]
