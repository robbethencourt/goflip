<<<<<<< HEAD
module Data.Zsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (svg)
import Svg.Attributes exposing (class, d, fill, stroke, strokeMiterlimit, strokeWidth, viewBox)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#006C05", d "M119.864 522.525s-18.148 21.779-7.259 31.76 33.992 27.467 46.278 17.24c12.286-10.228 19.056-22.948 19.056-22.948l-58.075-26.052z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "9.591", strokeMiterlimit "10", d "M165.235 102.39s-1.681-40.506-17.241-54.445c-4.43-3.969-1.814-9.981 8.621-11.797 10.436-1.815 23.914-12.71 35.533-10.477 4.327.832 7.309 1.487 7.156 9.818-.334 18.138 2.828 31.199 7.672 45.122l-41.741 21.779z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "9.591", strokeMiterlimit "10", d "M187.921 69.723c18.481-6.493 49.003-7.259 84.391 47.186 35.389 54.445 26.315 110.706 26.315 124.317 0 13.611-3.629 78.943 10.89 156.075 14.518 77.132-61.705 169.688-111.613 167.873-49.909-1.814-117.965-38.11-104.354-90.741 13.611-52.632 36.297-56.262 46.278-83.483 9.981-27.223 36.297-107.983 10.889-192.373-25.407-84.39 3.63-117.057 37.204-128.854z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "4.111", strokeMiterlimit "10", d "M159.904 36.654s12.86 25.437 13.752 40.509M170.866 32.544s13.466 38.133 13.752 40.508M194.371 71.011s-9.589-26.841-8.595-41.907" ] [], Svg.path [ fill "#006C05", d "M170.866 78.079s-13.721 52.124 9.546 99.31 21.143 173.969 9.626 197.335c-12.949 26.273-86.506 133.338-85.599 154.208l11.796 14.49s17.753-36.542 43.669-65.349c25.8-28.678 46.409-68.52 51.61-83.488 13.865-39.903 19.315-165.117-11.797-221.196-23.645-42.619-21.388-96.227-19.898-100.338l-8.953 5.028z" ] [], Svg.path [ fill "#006C05", d "M209.262 66.76s10.506 23.734 23.804 33.153c13.298 9.418 47.082 40.401 29.354 128.493-17.729 88.093 25.482 154 16.617 191.676-8.865 37.675-33.245 67.551-61.501 80.847-28.257 13.297-62.086 33.603-54.037 58.266l-14.704-5.29s-7.72-26.017 22.753-47.624c30.472-21.607 78.672-53.359 80.89-120.953 2.217-67.593-22.161-129.73-11.081-180.148 11.081-50.418-8.864-87.026-31.026-109.188-22.162-22.163-17.097-30.717-1.069-29.232zM106.234 94.468C95.021 83.257 82.2 98.117 92.393 108.31c9.174 9.173 25.992-1.689 33.336 5.654-7.344-7.344 3.52-24.161-5.654-33.335-10.194-10.194-25.054 2.628-13.841 13.839z" ] [], Svg.path [ fill "#006C05", d "M231.57 136.22a9.656 9.656 0 01-2.837 6.848 9.75 9.75 0 01-3.077 2.075c-1.161.489-2.434.761-3.771.761s-2.609-.271-3.771-.761a9.705 9.705 0 01-5.153-5.153l9.294-3.77-9.294-3.77a9.72 9.72 0 015.153-5.154c1.161-.49 2.434-.761 3.771-.761s2.609.271 3.771.761a9.71 9.71 0 015.152 5.154 9.656 9.656 0 01.762 3.77zM209.114 136.22a9.655 9.655 0 01-2.836 6.848 9.721 9.721 0 01-3.078 2.075c-1.158.489-2.433.761-3.77.761s-2.611-.271-3.771-.761a9.717 9.717 0 01-5.153-5.153l9.295-3.77-9.295-3.77a9.723 9.723 0 015.153-5.154c1.16-.49 2.435-.761 3.771-.761a9.662 9.662 0 016.848 2.836 9.693 9.693 0 012.075 3.079 9.637 9.637 0 01.761 3.77zM232.331 153.933c-2.677-3.807-9.08-4.373-12.658-4.373-1.145 0-1.94.056-2.144.071a28.983 28.983 0 00-2.144-.071c-3.578 0-9.979.566-12.656 4.373-1.113 1.584-1.478 3.546-1.086 5.83 1.904 11.112 15.004 14.905 15.561 15.062a.57.57 0 00.299 0c.571-.157 14.006-3.947 15.913-15.062.392-2.284.028-4.246-1.085-5.83zm-.186 5.533c-1.643 9.563-13.32 13.398-14.787 13.841-18.407-17.862.122-22.164.122-22.164a.557.557 0 00.1 0c.008 0 .843-.073 2.094-.073 2.697 0 9.229.372 11.655 3.824.863 1.232 1.133 2.728.816 4.572z" ] [] ]
=======
module Data.Zsvg exposing (drawing)

import Html exposing (Html)
import Svg exposing (circle, linearGradient, stop, svg)
import Svg.Attributes exposing (class, cx, cy, d, fill, gradientUnits, id, offset, r, stopColor, stroke, strokeLinecap, strokeLinejoin, strokeMiterlimit, strokeWidth, viewBox, x1, x2, y1, y2)


drawing : Html msg
drawing =
    svg [ viewBox "0 0 400 600", class "drawing" ] [ Svg.path [ fill "#006C05", d "M114.035 506.521s-18.148 21.779-7.259 31.76 33.992 27.467 46.278 17.24c12.286-10.228 19.056-22.948 19.056-22.948l-58.075-26.052z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "9.591", strokeMiterlimit "10", d "M159.406 86.386s-1.681-40.506-17.241-54.445c-4.43-3.969-1.814-9.981 8.621-11.797 10.436-1.815 23.914-12.71 35.533-10.477 4.327.832 7.309 1.487 7.156 9.818-.334 18.138 2.828 31.199 7.672 45.122l-41.741 21.779z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "9.591", strokeMiterlimit "10", d "M182.092 53.719c18.481-6.493 49.003-7.259 84.391 47.186 35.389 54.445 26.315 110.706 26.315 124.317 0 13.611-3.629 78.943 10.89 156.075 14.518 77.132-61.705 169.688-111.613 167.873-49.909-1.814-117.965-38.11-104.354-90.741 13.611-52.632 36.297-56.262 46.278-83.483 9.981-27.223 36.297-107.983 10.889-192.373-25.408-84.39 3.63-117.057 37.204-128.854z" ] [], Svg.path [ fill "#2CFF5C", stroke "#006C05", strokeWidth "4.111", strokeMiterlimit "10", d "M154.075 20.65s12.86 25.437 13.752 40.509M165.037 16.54s13.466 38.133 13.752 40.508M188.542 55.007s-9.589-26.841-8.595-41.907" ] [], Svg.path [ fill "#006C05", d "M165.037 62.075s-13.721 52.124 9.546 99.31 21.143 173.969 9.626 197.335C171.26 384.994 97.703 492.059 98.61 512.929l11.796 14.49s17.753-36.542 43.669-65.349c25.8-28.678 46.409-68.52 51.61-83.488C219.55 338.679 225 213.465 193.888 157.386 170.243 114.767 172.5 61.159 173.99 57.048l-8.953 5.027z" ] [], Svg.path [ fill "#006C05", d "M203.433 50.756s10.506 23.734 23.804 33.153c13.298 9.418 47.082 40.401 29.354 128.493-17.729 88.093 25.482 154 16.617 191.676-8.865 37.675-33.245 67.551-61.501 80.847-28.257 13.297-62.086 33.603-54.037 58.266l-14.704-5.29s-7.72-26.017 22.753-47.624c30.472-21.607 78.672-53.359 80.89-120.953 2.217-67.593-22.161-129.73-11.081-180.148 11.081-50.418-8.864-87.026-31.026-109.188-22.162-22.163-17.097-30.717-1.069-29.232zM100.405 78.464c-11.214-11.211-24.034 3.648-13.842 13.841 9.174 9.173 25.992-1.689 33.336 5.654-7.344-7.344 3.52-24.161-5.654-33.335-10.193-10.193-25.054 2.629-13.84 13.84z" ] [], Svg.path [ fill "none", stroke "#006C05", strokeWidth "1.659", strokeMiterlimit "10", d "M314.171 492.879c-1.113 5.267-6.294 8.639-11.563 7.523-5.271-1.114-8.637-6.294-7.521-11.564 1.115-5.267 6.295-8.638 11.562-7.522 5.271 1.114 8.637 6.294 7.522 11.563z" ] [], Svg.path [ fill "#2CFF5C", d "M294.754 512.877a7.018 7.018 0 11-13.731-2.912 7.018 7.018 0 0113.731 2.912zM284.418 85.674c2.271-1.242 5.146-4.116 6.388-6.387l3.804-6.954c1.242-2.271 3.275-2.271 4.517 0l3.804 6.954c1.241 2.271 4.116 5.145 6.387 6.387l6.953 3.803c2.271 1.242 2.271 3.274 0 4.516l-6.953 3.802c-2.271 1.242-5.146 4.116-6.387 6.387l-3.804 6.954c-1.241 2.271-3.274 2.271-4.517 0l-3.804-6.954c-1.242-2.271-4.117-5.145-6.388-6.387l-6.954-3.802c-2.271-1.242-2.271-3.274 0-4.516l6.954-3.803z" ] [], Svg.path [ fill "#006C05", d "M333.138 70.06c-1.969 1.078-4.462 3.57-5.539 5.539-1.077 1.969-2.841 1.969-3.919 0-1.077-1.969-3.57-4.461-5.539-5.539s-1.969-2.84 0-3.918c1.969-1.077 4.462-3.569 5.539-5.539 1.078-1.969 2.842-1.969 3.919 0s3.57 4.461 5.539 5.539c1.968 1.077 1.968 2.84 0 3.918z" ] [], Svg.path [ fill "#FFF", d "M76.543 514.228c2.717-1.485 6.156-4.925 7.642-7.642l4.55-8.321c1.486-2.717 3.917-2.717 5.403 0l4.55 8.321c1.486 2.717 4.925 6.156 7.642 7.642l8.318 4.55c2.717 1.485 2.717 3.917 0 5.403l-8.319 4.551c-2.717 1.486-6.156 4.925-7.642 7.643l-4.55 8.319c-1.486 2.717-3.917 2.717-5.403 0l-4.55-8.319c-1.486-2.718-4.925-6.156-7.642-7.643l-8.321-4.551c-2.717-1.486-2.717-3.918 0-5.403l8.322-4.55zM113.949 539.153c1.234-.675 2.795-2.235 3.47-3.469l2.065-3.777c.675-1.233 1.779-1.233 2.454.001l2.064 3.775c.675 1.234 2.236 2.795 3.47 3.469l3.778 2.065c1.234.674 1.234 1.777 0 2.452l-3.779 2.066c-1.233.675-2.794 2.236-3.469 3.47l-2.065 3.776c-.674 1.233-1.778 1.234-2.453 0l-2.066-3.777c-.674-1.233-2.236-2.794-3.469-3.469l-3.776-2.066c-1.233-.675-1.233-1.778 0-2.453l3.776-2.063z" ] [], Svg.path [ fill "#2CFF5C", d "M300.497 25.325l3.925 3.924a9.17 9.17 0 01.645-.721c.228-.227.469-.44.719-.643l-3.925-3.925-1.364 1.365zm10.119.546a9.204 9.204 0 011.932-.009v-5.568h-1.932v5.577zm8.199 3.378l3.924-3.923-1.365-1.365-3.923 3.923c.25.203.492.417.721.645.227.227.44.469.643.72zm-16.463 5.834c0-.302.017-.6.045-.894h-5.48v1.929h5.497a9.06 9.06 0 01-.062-1.035zm15.82 6.551c-.229.228-.47.441-.721.645l3.923 3.923 1.365-1.363-3.924-3.924a9.732 9.732 0 01-.643.719zm-13.75-.721l-3.925 3.925 1.363 1.363 3.925-3.924a9.533 9.533 0 01-.719-.643 9.384 9.384 0 01-.644-.721zm16.419-6.724c.028.294.045.592.045.894 0 .351-.023.695-.062 1.035h5.618v-1.929h-5.601zm-10.225 10.102v5.531h1.932V44.3c-.306.03-.616.047-.93.047-.339 0-.673-.021-1.002-.056z" ] [], Svg.path [ fill "#006C05", d "M94.454 578.697c0-.244.014-.484.037-.723h-4.44v1.563h4.453a7.518 7.518 0 01-.05-.84zm2.198-5.309c.184-.184.379-.356.582-.521l-3.177-3.177-1.105 1.104 3.178 3.179c.165-.204.338-.401.522-.585zm11.133.583l3.177-3.177-1.104-1.104-3.176 3.177c.203.164.398.337.583.521.183.184.356.381.52.583zm-6.638-2.733c.267-.028.537-.045.811-.045.254 0 .505.014.752.038v-4.512h-1.563v4.519zm0 14.915v4.479h1.563v-4.473a7.254 7.254 0 01-1.563-.006zm8.279-8.178c.023.238.037.479.037.723 0 .284-.019.563-.05.84h4.55v-1.563h-4.537zM107.264 584a7.414 7.414 0 01-.584.523l3.178 3.178 1.104-1.104-3.178-3.178a7.537 7.537 0 01-.52.581zm-11.133-.582l-3.179 3.18 1.105 1.104 3.178-3.179a7.408 7.408 0 01-.583-.522 7.578 7.578 0 01-.521-.583zM225.741 120.216a9.656 9.656 0 01-2.837 6.848 9.75 9.75 0 01-3.077 2.075c-1.161.489-2.434.761-3.771.761s-2.609-.271-3.771-.761a9.705 9.705 0 01-5.153-5.153l9.294-3.77-9.294-3.77a9.72 9.72 0 015.153-5.154c1.161-.49 2.434-.761 3.771-.761s2.609.271 3.771.761a9.71 9.71 0 015.152 5.154 9.656 9.656 0 01.762 3.77zM203.285 120.216a9.655 9.655 0 01-2.836 6.848 9.721 9.721 0 01-3.078 2.075c-1.158.489-2.433.761-3.77.761s-2.611-.271-3.771-.761a9.717 9.717 0 01-5.153-5.153l9.295-3.77-9.295-3.77a9.723 9.723 0 015.153-5.154c1.16-.49 2.435-.761 3.771-.761a9.662 9.662 0 016.848 2.836 9.693 9.693 0 012.075 3.079 9.637 9.637 0 01.761 3.77zM226.502 137.929c-2.677-3.807-9.08-4.373-12.658-4.373-1.145 0-1.94.056-2.144.071a28.983 28.983 0 00-2.144-.071c-3.578 0-9.979.566-12.656 4.373-1.113 1.584-1.478 3.546-1.086 5.83 1.904 11.112 15.004 14.905 15.561 15.062a.57.57 0 00.299 0c.571-.157 14.006-3.947 15.913-15.062.392-2.284.028-4.246-1.085-5.83zm-.187 5.533c-1.643 9.563-13.32 13.398-14.787 13.841-18.407-17.862.122-22.164.122-22.164a.557.557 0 00.1 0c.008 0 .843-.073 2.094-.073 2.697 0 9.229.372 11.655 3.824.864 1.232 1.134 2.728.816 4.572z" ] [] ]
>>>>>>> 9dce7ade5dba5655f3c935ec5519ed953efa425f
