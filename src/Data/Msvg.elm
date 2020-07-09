module Data.Msvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, linearGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#00FF4E", stroke "#009A4F", strokeWidth "8.263", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M225.227 94.568s44.006-47.828 71.548-11.241c0 0 8.293 5.292 14.582-.955-.001 0-24.492 82.45-86.13 12.196z" ] [], Svg.path [ fill "#623900", stroke "#623900", strokeWidth "9.614", strokeLinecap "round", strokeLinejoin "round", strokeMiterlimit "10", d "M193.218 150.17c2.202-28.924 19.533-64.292 16.786-87.9 0 0 9.158 9.157 21.061 7.325s-28.69 49.444-18.924 70.503l-18.923 10.072z" ] [], linearGradient [ id "n", gradientUnits "userSpaceOnUse", x1 "60.042", y1 "189.905", x2 "301.06", y2 "430.923" ] [ stop [ offset "0", stopColor "#ff1426" ] [], stop [ offset "1", stopColor "#fbff5d" ] [] ], Svg.path [ fill "url(#n)", stroke "#FF9A6A", strokeWidth "9.614", strokeMiterlimit "10", d "M49.771 238.527c18.587-155.464 296.661-177.63 287.505 64.094C328.119 544.345 59.67 538.237 90.059 451.869c34.794-98.888-50.359-129.102-40.288-213.342z" ] [], Svg.path [ fill "#FF1426", d "M36.993 125.794c-17.474-17.472-37.452 5.684-21.568 21.568 14.296 14.295 40.503-2.633 51.946 8.812-11.443-11.445 5.486-37.65-8.811-51.948-15.884-15.884-39.04 4.096-21.567 21.568z" ] [], Svg.path [ fill "none", stroke "#FD8541", strokeWidth "1.373", strokeMiterlimit "10", d "M335.29 443.287c-1.798 5.95-8.081 9.316-14.029 7.52-5.951-1.8-9.312-8.085-7.516-14.032 1.799-5.947 8.081-9.311 14.029-7.517 5.948 1.801 9.31 8.083 7.516 14.029z" ] [], Svg.path [ fill "#FF1426", d "M311.011 464.375a8.101 8.101 0 01-10.093 5.404 8.098 8.098 0 014.684-15.502c4.279 1.293 6.703 5.817 5.409 10.098z" ] [], Svg.path [ fill "#FD8541", d "M346.113 104.447c1.922-1.051 4.354-3.482 5.405-5.404l3.22-5.884c1.051-1.921 2.771-1.921 3.821.001l3.217 5.882c1.051 1.922 3.482 4.354 5.404 5.405l5.884 3.218c1.922 1.051 1.922 2.771 0 3.821l-5.884 3.217c-1.922 1.051-4.354 3.482-5.404 5.404l-3.217 5.883c-1.051 1.922-2.771 1.922-3.821 0l-3.22-5.884c-1.051-1.921-3.483-4.353-5.405-5.404l-5.884-3.217c-1.922-1.05-1.922-2.77 0-3.821l5.884-3.217z" ] [], Svg.path [ fill "#FF1426", d "M387.336 91.235c-1.666.911-3.775 3.021-4.687 4.687-.911 1.667-2.402 1.667-3.313 0-.912-1.666-3.021-3.775-4.688-4.687-1.667-.912-1.667-2.404 0-3.315 1.666-.911 3.775-3.021 4.688-4.687.911-1.666 2.402-1.666 3.313 0s3.021 3.775 4.687 4.687c1.667.912 1.667 2.404 0 3.315z" ] [], Svg.path [ fill "#FFF", d "M90.011 474.31c3.31-1.81 7.498-5.998 9.308-9.307l5.542-10.135c1.81-3.309 4.772-3.309 6.582.001l5.542 10.133c1.81 3.31 5.998 7.498 9.308 9.309l10.132 5.54c3.31 1.811 3.31 4.771 0 6.582l-10.132 5.54c-3.31 1.811-7.498 5.999-9.308 9.309l-5.542 10.133c-1.81 3.31-4.771 3.31-6.582.001l-5.542-10.135c-1.81-3.309-5.999-7.497-9.308-9.307l-10.133-5.542c-3.31-1.81-3.31-4.771 0-6.58l10.133-5.542zM135.573 504.666c1.502-.822 3.404-2.724 4.226-4.226l2.516-4.6c.822-1.502 2.167-1.502 2.988 0l2.516 4.6c.822 1.502 2.724 3.403 4.226 4.226l4.602 2.516c1.502.822 1.502 2.166 0 2.988l-4.602 2.517c-1.502.821-3.404 2.724-4.226 4.226l-2.516 4.602c-.822 1.502-2.167 1.502-2.988 0l-2.517-4.602c-.821-1.502-2.723-3.404-4.225-4.226l-4.599-2.517c-1.502-.821-1.502-2.166 0-2.988l4.599-2.516z" ] [], Svg.path [ fill "#FD8541", d "M359.719 53.384l3.321 3.321c.172-.212.353-.417.546-.61.192-.192.396-.372.607-.544l-3.322-3.322-1.152 1.155zm17.214 7.5c.023.249.038.5.038.756 0 .297-.02.588-.052.876h4.752v-1.632h-4.738zm-1.715-4.18l3.32-3.32-1.153-1.155-3.321 3.321c.212.172.416.352.609.545.192.193.373.397.545.609zM361.29 61.64c0-.255.015-.507.038-.756h-4.638v1.632h4.651a8.161 8.161 0 01-.051-.876zm6.99-7.793c.279-.03.562-.048.849-.048.266 0 .527.014.786.04v-4.712h-1.635v4.72zm-5.24 12.726l-3.321 3.321 1.152 1.154 3.322-3.322a7.813 7.813 0 01-.607-.543 7.894 7.894 0 01-.546-.61zm11.633.61a7.84 7.84 0 01-.608.544l3.32 3.32 1.153-1.154-3.32-3.32a7.903 7.903 0 01-.545.61zm-6.393 2.248v4.68h1.635V69.44c-.259.025-.521.04-.786.04a8.217 8.217 0 01-.849-.049zM99.723 537.284c0-.277.016-.55.042-.82h-5.053v1.781h5.069a8.463 8.463 0 01-.058-.961zm7.619-8.489a8.503 8.503 0 011.78-.009v-5.134h-1.781v5.143zm7.557 3.112l3.617-3.617-1.258-1.255-3.615 3.615c.23.187.453.383.663.593.209.21.406.434.593.664zm-12.673-.664c.209-.209.432-.405.662-.593l-3.615-3.615-1.259 1.255 3.618 3.618c.186-.231.384-.454.594-.665zm-.595 11.418l-3.618 3.618 1.259 1.258 3.617-3.617c-.23-.188-.453-.385-.663-.595s-.407-.432-.595-.664zm12.674.664c-.21.21-.433.407-.664.595l3.616 3.617 1.258-1.258-3.617-3.617a8.474 8.474 0 01-.593.663zm2.461-6.861c.026.271.042.543.042.82 0 .325-.022.646-.058.961h5.181v-1.781h-5.165zm-9.424 9.309v5.101h1.781v-5.092a8.261 8.261 0 01-1.781-.009z" ] [], Svg.path [ fill "#FF1426", d "M310.037 323.845a28.783 28.783 0 01-4.979 10.381 29.218 29.218 0 01-8.293 7.412 29.021 29.021 0 01-10.462 3.755c-3.724.571-7.622.419-11.503-.565s-7.381-2.707-10.382-4.979a29.026 29.026 0 01-7.411-8.289 29.116 29.116 0 01-3.761-10.467l29.76-4.102-24.211-17.783a29.018 29.018 0 018.292-7.409 28.906 28.906 0 0110.463-3.758 28.897 28.897 0 0111.504.563 28.93 28.93 0 0110.384 4.981 28.989 28.989 0 017.403 8.292 29.051 29.051 0 013.763 10.464 28.81 28.81 0 01-.567 11.504zM194.867 296.335a28.89 28.89 0 01-5.359 10.197 29.128 29.128 0 01-19.146 10.478 28.907 28.907 0 01-11.474-.99 28.89 28.89 0 01-10.197-5.354 29.13 29.13 0 01-7.104-8.552 29.108 29.108 0 01-3.374-10.593l29.884-3.019-23.543-18.649a29.04 29.04 0 018.554-7.105 29.111 29.111 0 0110.593-3.376 28.917 28.917 0 0111.478.982 28.948 28.948 0 0110.195 5.359 29.02 29.02 0 017.1 8.555 28.908 28.908 0 012.393 22.067zM234.182 380.979c-3.078-8.225-15.352-13.477-22.397-15.875a65.769 65.769 0 00-4.264-1.309c-.389-.166-1.92-.797-4.173-1.564-7.042-2.397-19.97-5.732-27.43-1.1-3.097 1.926-4.944 4.992-5.487 9.11-2.638 20.035 20.963 35.213 21.968 35.851.09.057.187.105.29.138.094.034.197.056.3.063 1.217.121 29.836 2.729 39.978-14.751 2.088-3.592 2.493-7.148 1.215-10.563zm-3.546 9.211c-8.728 15.043-33.92 13.681-37.062 13.447-25.961-42.49 12.98-37.324 12.98-37.324.065.027.132.051.198.067.013.003 1.699.438 4.162 1.276 5.31 1.809 17.951 6.816 20.738 14.266 1.002 2.662.668 5.363-1.016 8.268z" ] [] ]
