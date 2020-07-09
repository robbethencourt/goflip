module Data.Qsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, linearGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#623900", d "M191.101 124.345s8.312-41.774 31.792-53.318c23.478-11.544 24.974 6.492 3.37 22.77-11.896 8.964-20.06 27.635-14.869 29.37 5.191 1.734-20.293 1.178-20.293 1.178z" ] [], Svg.path [ fill "#FFF100", stroke "#FFD64E", strokeWidth "10.743", strokeLinecap "round", strokeMiterlimit "10", d "M116.866 152.298c26.22-8.098 36.59-13.214 29.475-25.409-7.114-12.196 15.247-16.262 19.312-12.196 4.065 4.064 16.262-10.164 29.475-7.115 13.213 3.05 18.295.152 30.49-.433 12.197-.584 13.213 10.596 25.41 9.58 12.196-1.017 13.213 5.644 13.213 12.986 0 7.342 8.131 14.455 34.558 22.587 26.426 8.131 107.736 26.425 56.917 140.261-50.818 113.836-21.04 45.357-52.854 134.163-30.719 85.759-153.391 54.021-165.496 48.627-11.478-5.115-41.845-26.268-56.074-105.545-14.229-79.279-102.654-174.819 35.574-217.506z" ] [], Svg.path [ fill "#FFD64E", d "M31.427 129.439c-13.992-13.99-29.989 4.552-17.271 17.271 11.447 11.446 32.432-2.108 41.594 7.055-9.163-9.163 4.393-30.147-7.054-41.595-12.719-12.719-31.261 3.279-17.269 17.269z" ] [], Svg.path [ fill "none", stroke "#FFD64E", strokeWidth "2", strokeMiterlimit "10", d "M337.548 443.566c-1.011 7.637-8.025 13.016-15.664 12.006-7.643-1.012-13.013-8.027-12.001-15.667 1.01-7.637 8.024-13.012 15.66-12.005 7.642 1.013 13.012 8.03 12.005 15.666z" ] [], Svg.path [ fill "#FFF100", d "M312.055 474.227c-.729 5.489-5.774 9.361-11.27 8.633-5.497-.729-9.363-5.775-8.635-11.27.728-5.495 5.769-9.363 11.265-8.637 5.498.728 9.367 5.776 8.64 11.274zM331.989 125.469c2.54-1.389 5.755-4.604 7.145-7.143l4.254-7.778c1.39-2.54 3.663-2.54 5.052 0l4.252 7.777c1.389 2.54 4.604 5.755 7.144 7.144l7.776 4.254c2.54 1.389 2.54 3.662 0 5.05l-7.776 4.252c-2.54 1.389-5.755 4.603-7.144 7.143l-4.252 7.776c-1.389 2.54-3.662 2.54-5.052 0l-4.254-7.777c-1.39-2.54-4.604-5.754-7.145-7.143l-7.777-4.252c-2.54-1.389-2.54-3.662 0-5.05l7.777-4.253z" ] [], Svg.path [ fill "#FFD64E", d "M386.477 108.005c-2.202 1.205-4.989 3.993-6.194 6.195s-3.177 2.203-4.382 0c-1.204-2.203-3.992-4.99-6.195-6.195s-2.203-3.177 0-4.381 4.991-3.992 6.195-6.195c1.205-2.203 3.177-2.203 4.382 0s3.992 4.99 6.194 6.195c2.203 1.205 2.203 3.176 0 4.381z" ] [], Svg.path [ fill "#FFF", d "M94.789 450.628c3.451-1.887 7.818-6.254 9.705-9.704l5.779-10.567c1.887-3.45 4.975-3.45 6.861 0l5.778 10.567c1.887 3.45 6.254 7.817 9.704 9.704l10.564 5.777c3.45 1.887 3.45 4.975 0 6.861l-10.564 5.778c-3.45 1.887-7.817 6.254-9.704 9.704l-5.778 10.566c-1.887 3.45-4.975 3.45-6.862 0l-5.778-10.566c-1.887-3.45-6.254-7.817-9.705-9.704l-10.566-5.778c-3.45-1.887-3.45-4.975 0-6.861l10.566-5.777zM142.292 482.279c1.566-.856 3.549-2.839 4.406-4.405l2.624-4.797c.856-1.566 2.259-1.566 3.115 0l2.623 4.797c.856 1.566 2.839 3.548 4.406 4.404l4.797 2.623c1.567.856 1.567 2.258 0 3.114l-4.798 2.625c-1.566.856-3.549 2.839-4.406 4.406l-2.623 4.797c-.857 1.566-2.259 1.566-3.115 0l-2.624-4.798c-.856-1.566-2.839-3.549-4.405-4.406l-4.796-2.623c-1.566-.857-1.566-2.26 0-3.116l4.796-2.621z" ] [], Svg.path [ fill "#FFF100", d "M349.973 57.974l4.391 4.39c.227-.28.466-.551.721-.806.254-.254.524-.492.804-.719l-4.391-4.391-1.525 1.526zm2.075 10.913c0-.337.019-.67.051-.999h-6.13v2.158h6.148a10.32 10.32 0 01-.069-1.159zm9.241-10.302c.369-.04.742-.063 1.122-.063.351 0 .697.019 1.039.053v-6.229h-2.161v6.239zm9.169 3.776l4.388-4.388-1.524-1.525-4.389 4.389c.28.227.552.466.807.721.253.254.491.524.718.803zm-.719 13.853c-.255.255-.525.493-.806.721l4.388 4.388 1.524-1.524-4.388-4.388a10.69 10.69 0 01-.718.803zm2.985-8.326c.032.329.051.662.051.999 0 .393-.026.778-.069 1.159h6.285v-2.158h-6.267zm-18.361 7.52l-4.391 4.39 1.524 1.524 4.39-4.39a10.533 10.533 0 01-.803-.719 10.387 10.387 0 01-.72-.805zm6.926 3.778v6.185h2.161v-6.175a10.49 10.49 0 01-1.039.053c-.38 0-.753-.023-1.122-.063z" ] [], Svg.path [ fill "#FFD64E", d "M117.535 532.495c0-.31.018-.615.046-.917h-5.637v1.986h5.655a9.426 9.426 0 01-.064-1.069zm2.792-6.74a9.87 9.87 0 01.739-.661l-4.034-4.034-1.403 1.401 4.036 4.036c.208-.259.428-.508.662-.742zm5.707-2.731a9.74 9.74 0 011.03-.058c.322 0 .641.017.955.048v-5.728h-1.985v5.738zm8.431 3.471l4.034-4.034-1.402-1.401-4.034 4.034c.257.208.505.428.74.661.234.234.453.483.662.74zm-14.8 11.997l-4.036 4.036 1.403 1.402 4.036-4.036a9.293 9.293 0 01-1.403-1.402zm6.369 3.474v5.688h1.985v-5.678a9.723 9.723 0 01-.955.048 10.013 10.013 0 01-1.03-.058zm10.514-10.388c.029.302.046.607.046.917 0 .362-.024.718-.064 1.069h5.78v-1.986h-5.762zm-2.745 7.653a9.743 9.743 0 01-.741.664l4.035 4.035 1.402-1.402-4.035-4.035a9.255 9.255 0 01-.661.738zM315.218 261.685c0 4.547-.924 8.884-2.59 12.823a33.042 33.042 0 01-17.534 17.538 32.926 32.926 0 01-12.826 2.586c-4.55 0-8.882-.922-12.828-2.586a33.092 33.092 0 01-10.474-7.062 33.023 33.023 0 01-7.06-10.476l31.622-12.823-31.622-12.827a33.077 33.077 0 0117.534-17.536 32.893 32.893 0 0112.828-2.587c4.547 0 8.881.921 12.826 2.587a33.063 33.063 0 0117.534 17.536 32.872 32.872 0 012.59 12.827zM160.563 261.685c0 4.547-.921 8.884-2.59 12.823a33.012 33.012 0 01-7.06 10.476 33.069 33.069 0 01-10.475 7.062 32.903 32.903 0 01-12.825 2.586c-4.549 0-8.884-.922-12.828-2.586a33.073 33.073 0 01-17.532-17.538l31.623-12.823-31.623-12.827a33.064 33.064 0 0117.532-17.536 32.89 32.89 0 0112.828-2.587c4.548 0 8.884.921 12.825 2.587a33.05 33.05 0 0110.475 7.063 33.016 33.016 0 017.06 10.473 32.8 32.8 0 012.59 12.827zM239.696 332.123c-6.056-8.612-20.539-9.896-28.631-9.896-2.589 0-4.389.131-4.849.164-.459-.033-2.258-.164-4.848-.164-8.094 0-22.575 1.283-28.629 9.896-2.517 3.581-3.343 8.019-2.456 13.187 4.309 25.133 33.936 33.712 35.194 34.064.114.029.23.046.345.046.111 0 .225-.013.334-.044 1.292-.354 31.683-8.927 35.994-34.066.888-5.168.063-9.606-2.454-13.187zm-.423 12.515c-3.712 21.634-30.129 30.303-33.445 31.307-41.636-40.402.275-50.13.275-50.13.076.006.153.006.227 0 .017-.004 1.903-.166 4.735-.166 6.098 0 20.876.842 26.363 8.648 1.956 2.784 2.563 6.171 1.845 10.341z" ] [] ]
