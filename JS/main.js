:root {
  --main-text: #5d7fa2;
  --main-light: rgb(255, 255, 255);
  --main-dark: rgb(0, 0, 0);
  --b-alpha-5: rgba(0, 0, 0, 0.05); /*Background color : dark*/
  --b-alpha-10: rgba(0, 0, 0, 0.1);
  --b-alpha-15: rgba(0, 0, 0, 0.15);
  --b-alpha-20: rgba(0, 0, 0, 0.2);
  --b-alpha-30: rgba(0, 0, 0, 0.3);
  --b-alpha-35: rgba(0, 0, 0, 0.35);
  --b-alpha-40: rgba(0, 0, 0, 0.4);
  --b-alpha-50: rgba(0, 0, 0, 0.5);
  --b-alpha-60: rgba(0, 0, 0, 0.6);
  --b-alpha-70: rgba(0, 0, 0, 0.7);
  --b-alpha-80: rgba(0, 0, 0, 0.8);
  --b-alpha-90: rgba(0, 0, 0, 0.9);
  --w-alpha-5: rgba(255, 255, 255, 0.05); /*Background color : light*/
  --w-alpha-10: rgba(255, 255, 255, 0.1);
  --w-alpha-15: rgba(255, 255, 255, 0.15);
  --w-alpha-20: rgba(255, 255, 255, 0.2);
  --w-alpha-30: rgba(255, 255, 255, 0.3);
  --w-alpha-50: rgba(255, 255, 255, 0.5);
  --w-alpha-60: rgba(255, 255, 255, 0.6);
  --w-alpha-70: rgba(255, 255, 255, 0.7);
  --w-alpha-80: rgba(255, 255, 255, 0.8);
  --w-alpha-90: rgba(255, 255, 255, 0.9);
  --bg-w-p: white;
  --bg-w-s: rgb(245, 245, 245);
  --bg-w-pure: white;
  --bg-w-245: rgb(245, 245, 245);
}

@font-face {
  font-family: "LXGWWenKaiMono";
  src: url("../Resources/font/LXGWWenKaiMono-Regular.woff2") format("woff2"),
    url("../Resources/font/LXGWWenKaiMono-Regular.woff") format("woff"),
    url("../Resources/font/LXGWWenKaiMono-Regular.svg") format("svg"),
    url("../Resources/font/LXGWWenKaiMono-Regular.ttf") format("truetype");
}

.theme-blue {
  --main-color: #5d7fa2;
  --bg-transform: #6e8fb01d;
}

.theme-pink {
  --main-color: #d6b8c6fa;
  --bg-transform: #d6b8c629;
}

.theme-green {
  --main-color: #c2d6b8fa;
  --bg-transform: #c2d6b82e;
}

body,
html {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
  scroll-behavior: smooth;
  background-color: white;
  -webkit-user-select: none; /*Prevent copying text in web-page*/
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  padding: 0;
  margin: 0;
  width: auto;
  box-sizing: border-box;
  outline: 0;
  height: 100%;
  max-width: 100%;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica,
    "Segoe UI", Arial, sans-serif;
  -webkit-tap-highlight-color: transparent;
  cursor: url("../Resources/cusor/normal.cur"), default;
}

::selection {
  color: var(--main-light);
  background-color: var(--main-color);
}

/* width */
::-webkit-scrollbar {
  background: var(--main-light);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--b-alpha-15);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--b-alpha-40);
}

::-webkit-scrollbar-thumb:active {
  background: var(--main-color);
}

.underlineTop {
  position: absolute;
  left: calc(50% - 25px);
  margin-top: -35px;
  width: 50px;
  height: 3px;
  background-color: #fff;
}

.topBG {
  background-attachment: fixed;
  position: relative;
  background-position: center;
  background-position-x: center; /*position center for safari*/
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: margin-left 0.5s;
  background-image: url("");
  min-height: 100%;
  -webkit-animation: fade-in-bck 4s;
  animation: fade-in-bck 4s;
}

.topBGsafari {
  position: relative;
  background-position: center;
  background-position-x: center; /*position center for safari*/
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: margin-left 0.5s;
  background-image: url("");
  min-height: 100%;
  -webkit-animation: fade-in-bck 4s;
  animation: fade-in-bck 4s;
}

.bgimg-2 {
  position: relative;
  background-position: center;
  background-size: cover;
  transition: margin-left 0.5s;
  background-image: url("../Resources/footerBg/3C10DB36-8B2E-4040-806D-B233281A5364.jpeg");
  height: 20vh;
  -webkit-animation: fade-in-bck 4s;
  animation: fade-in-bck 4s;
  display: fixed;
  opacity: 0.85;
}

@-webkit-keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
    transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-bck {
  0% {
    -webkit-transform: translateZ(80px);
    transform: translateZ(80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}

#topTitle {
  text-align: center;
  padding: 10% 0;
}

#topTitle h1 {
  font-weight: 400;
  font-size: 80px;
  color: #fff;
  display: block;
  margin-block-start: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-family: "Palanquin Dark", sans-serif;
}

#topTitle h1::before {
  content: "";
  background-image: url("../Resources/icon/github.png");
  background-size: 60px 60px;
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-right: 30px;
}

#topTitle h2 {
  font-weight: 400;
  font-size: 15px;
  color: #fff;
}

#topTitle h2 span {
  color: rgba(255, 255, 255, 0.6);
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #fff;
  color: #111;
  padding: 18px;
  font-size: 12px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

.PartTitle {
  text-align: center;
  cursor: url(../Resources/cusor/pointer.cur), pointer;
}

.PartTitle:hover::after {
  content: "#";
  font-size: 17px;
  color: var(--main-color);
  font-weight: bold;
}

.textContent {
  border: dashed 3px var(--main-color);
  border-radius: 30px;
  width: 90%;
  padding: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1300px) {
  .bgimg-1 {
    background-attachment: scroll;
  }
}

/*.text {
    background-color: white;
    color: black;
    font-size: 9vw; 
    font-weight: bold;
    margin: 0 auto;
    padding: 10px;
    width: 50%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
    opacity: 0.9;
  }*/

#navLogoH {
  width: 50px;
  background-image: url(icon.png);
  display: inline-block;
  background-size: contain;
}

.underline1 {
  position: absolute;
  left: calc(50% - 25px);
  margin-top: -10px;
  width: 50px;
  height: 3px;
  background-color: var(--main-color);
}

.tagBox {
  position: relative;
  margin-top: 40px;
  width: 100%;
  font-size: small;
  text-align: center;
  top: 50%;
  bottom: 20%;
  margin-bottom: 20px;
  cursor: url("../Resources/cusor/normal.cur"), default;
}

.tagBox span {
  margin: 0 3px;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.6);
  transition: 0.25s;
}

.tagBox span:hover {
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
  -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0 5px 10px;
  -moz-box-shadow: rgba(0, 0, 0, 0.1) 0 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 10px;
}

#about {
  position: relative;
  top: 100%;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 100px;
  text-align: center;
  transition: 0.25s;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

marquee {
  font-weight: bolder;
  font-size: 40px;
}

.Scrolltext {
  margin: 50px 0 20px;
}

.Bgimg01 {
  width: 28vh;
  left: 46%;
  position: relative;
  margin: 45px 0 0;
}

.Bgimgh02 {
  width: 28vh;
  right: 46%;
  position: relative;
  margin: 50px 0 0;
}

.Bgimgh03 {
  width: 35vh;
  right: 42%;
  position: relative;
  margin: 20px 0 0;
}

.container {
  position: absolute;
  width: 24px;
  height: 24px;
  text-align: center;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.a {
  display: block;
  margin-top: 75px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

li,
a,
button {
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  cursor: url("../Resources/cusor/normal.cur"), default;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2%;
}

.logo {
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
}

.navLinkBox {
  list-style: none;
}

.navLinkBox li {
  display: inline-block;
  padding: 0px 20px;
}

.navLinkBox li a {
  transform: all 0.3s ease 0s;
  font-family: "LXGWWenKaiMono", sans-serif;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
}

.nav li a:hover {
  color: var(--main-color);
}

.buttonTop {
  padding: 9px 25px;
  background-color: var(--main-color);
  border: none;
  border-radius: 50px;
  transform: all 0.3s ese 0s;
  cursor: url("../Resources/cusor/normal.cur"), default;
  font-weight: bold;
}

.buttonTop:hover {
  background-color: #ffffff;
  color: var(--main-color);
}

.author {
  color: cornflowerblue;
  text-align: center;
}

.famousText {
  font-style: italic;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
}

.ScrollDown {
  text-align: center;
  width: 40px;
  margin-bottom: 0;
}

.logo {
  width: 50px;
}

#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: var(--main-light);
  color: var(--main-dark);
  text-align: center;
  border-radius: 10px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#snackbarerror {
  visibility: hidden;
  min-width: 250px;
  margin-left: -180px;
  background-color: rgb(235, 41, 41);
  color: #fff;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
  font-family: "Microsoft JhengHei", "Microsoft Yahei", sans-serif;
}

#snackbarerror::before {
  content: "\00d7";
  color: #fff;
  font-size: 26px;
  margin-right: 10px;
  font-weight: bolder;
}

#snackbarerror.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@media screen and (max-width: 1225px) {
  .navLinkBox {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 2%;
  }

  .openbtn {
    visibility: visible;
    float: right;
    right: 140px;
    margin: 0;
    position: absolute;
    height: 40px;
  }
}

.Jerry-sound {
  width: 80%;
  padding: 0 14%;
  position: absolute;
  bottom: 10%;
}

@media screen and (max-width: 590px) {
  #topTitle {
    top: 15%;
    position: absolute;
    width: 100%;
    text-align: center;
  }

  #Bg01 {
    color: #777;
    background-color: var(--main-light);
    text-align: center;
    padding: 50px 30px 0 15px;
  }

  #Bg02 {
    color: #777;
    background-color: var(--bg-w-245);
    text-align: center;
    padding: 50px 30px 0 15px;
  }

  #Bgimg01 {
    width: 20vh;
    left: 35%;
    position: relative;
    margin: 50px 0 0;
  }

  #Bgimgh02 {
    width: 20vh;
    right: 38%;
    position: relative;
    margin: 50px 0 0;
  }

  #slideshow-container {
    display: none;
    visibility: hidden;
  }

  #timeline {
    display: none;
    visibility: hidden;
  }

  #Bg001foot {
    color: #777;
    background-color: var(--main-light);
    text-align: center;
    padding: 50px 20px;
  }

  #moreabout {
    padding: 70px 20px;
  }

  .caption {
    position: absolute;
    left: 0;
    top: 20%;
    width: 100%;
    text-align: center;
    color: #000;
    line-height: 40px;
    opacity: 0.9;
  }

  .bgimg-2 {
    position: relative;
    background-position: center;
    background-size: cover;
    transition: margin-left 0.5s;
    background-image: url(../Resources/footerBg/3C10DB36-8B2E-4040-806D-B233281A5364.jpeg);
    height: 20vh;
    -webkit-animation: fade-in-bck 4s;
    animation: fade-in-bck 4s;
    display: fixed;
    opacity: 0.85;
    padding: 20px 20px;
  }

  #snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: var(--main-light);
    color: var(--main-dark);
    text-align: center;
    border-radius: 10px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 47%;
    bottom: 30px;
    font-size: 17px;
  }

  #musicinfo img {
    width: 90px;
    margin: 0 0 20px;
  }

  #musictitle {
    visibility: hidden;
    display: none;
  }

  #logBoxOuter {
    position: relative;
    left: 0;
    margin-top: 30px;
    width: 100%;
    overflow: hidden;
  }
}

@media screen and (min-width: 1226px) {
  .openbtn {
    display: none;
    padding-left: 80px;
  }
}

.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background-position: center;
  background-image: url('../Resources/Bgimg/1258.png');
}

.Sidebar-mask {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.263);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  
}

.sidebar a {
  padding: 15px 30px;
  text-decoration: none;
  font-size: 15px;
  color: var(--main-light);
  display: block;
  transition: 0.3s;
  position: relative;
  font-family: "LXGWWenKaiMono", sans-serif;
}

.sidebar a:hover {
  color: var(--main-color);
  background-color: rgba(0, 0, 0, 0.05);
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  border-radius: 40px;
}

.openbtn {
  font-size: 20px;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  background-color: Transparent;
  color: white;
  padding: 6px 15px;
  border: none;
}

.openbtn:hover {
  color: var(--main-color);
  transition: 0.3s;
}

#main {
  transition: margin-left 0.5s;
  padding: 16px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

#navLinkBox {
  right: 170px;
  top: 3px;
  white-space: nowrap;
  transition: 0.25s;
  text-align: center;
}

.navLink {
  position: relative;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  transition: 0.25s;
}

#navbar .navLink {
  margin: 0 10px;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
}

font {
  font-family: "LXGWWenKaiMono", sans-serif;
  font-weight: 300;
  line-height: 3;
}

font .highlight {
  text-decoration: none;
  color: var(--main-text);
  display: inline-block;
  position: relative;
  z-index: 0;
  transition: all 0.24s ease;
  padding: 0 0.2rem;
  line-height: 1.4em;
  font-weight: bold;
}

font .highlight::after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  border-radius: 30px;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(85, 162, 225, 0.165);
  z-index: -1;
  transition: all 0.24s ease;
}

font .highlight:hover::after {
  height: 100%;
  background-color: rgba(85, 162, 225, 0.39);
}

font .highlightldz {
  text-decoration: none;
  color: #f0ce0f;
  display: inline-block;
  position: relative;
  z-index: 0;
  transition: all 0.24s ease;
  padding: 0 0.2rem;
  line-height: 1.4em;
  font-weight: bold;
}

font .highlightldz::after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  border-radius: 30px;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: #e2d8191d;
  z-index: -1;
  transition: all 0.24s ease;
}

font .highlightldz:hover::after {
  height: 100%;
  background-color: #e2d8193c;
}

font .highlightldzs {
  text-decoration: none;
  color: #14ab2d;
  display: inline-block;
  position: relative;
  z-index: 0;
  transition: all 0.24s ease;
  padding: 0 0.2rem;
  line-height: 1.4em;
  font-weight: bold;
}

font .highlightldzs::after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  border-radius: 30px;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: #14ab2d1d;
  z-index: -1;
  transition: all 0.24s ease;
}

font .highlightldzs:hover::after {
  height: 100%;
  background-color: #14ab2d3c;
}

font::before {
  content: "👻";
}

#navbar .navLink:before {
  position: absolute;
  left: 20px;
  bottom: 3px;
  width: calc(100% - 40px);
  height: 3px;
  content: "";
  background: var(--main-color);
  border-radius: 2px;
  transition: 0.25s;
  transform: scale(0);
  opacity: 0;
}

#navbar .navLink:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

#navbar .navLink:hover:before {
  transform: scale(1);
  opacity: 1;
}

#navbar .navLink:active,
#navBar .navLink:active:before {
  opacity: 0.6;
}

#navbar.sticky .navLink {
  color: white;
}

.projecttag {
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--main-color);
  font-size: 40px;
  margin: 0;
}

#projecttagse {
  margin-top: 40px;
}

.projecttag::before {
  content: "#";
}

.tip {
  padding-top: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}

.logBoxOuter {
  position: relative;
  left: 15%;
  margin-top: 30px;
  width: 70%;
  overflow: hidden;
}

.logBoxOuter * {
  transition: 0.25s;
}

#logBox {
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

#logBox::-webkit-scrollbar {
  height: 5px;
  background-color: #fff;
}

#logBox::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

#logBox::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

#logBox::-webkit-scrollbar-thumb:active {
  background: var(--main-color);
  border-radius: 10px;
}

#logBox div {
  display: inline-block;
  margin: 0 80px;
  padding-bottom: 10px;
  text-align: left;
  vertical-align: top;
  overflow-x: auto;
}

.logText1,
.logText3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.logText1 {
  margin-bottom: 3px;
  color: black;
}

.logText2 {
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
}

.logText3 {
  color: rgba(0, 0, 0, 0.2);
}

.themeby {
  color: var(--main-color);
  font-size: 15px;
  font-weight: 600;
}

.Check {
  border: 2px solid var(--main-color);
  border-radius: 20px;
  color: var(--main-color);
  height: 40px;
  width: 180px;
  transition: 0.3s;
  margin: 40px 0 0 0;
  justify-content: center;
  align-items: center;
  display: flow-root;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  text-align: center;
  background-color: transparent;
}

.Check:hover {
  border: 2px solid var(--main-light);
  background-color: var(--main-color);
  border-radius: 20px;
  color: var(--main-light);
  height: 40px;
  width: 180px;
}

.AboutP {
  width: 50vw;
  text-align: center;
  margin: 20px 0 0;
}

.LtreeAll {
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
}

.LtreeAll h6 {
  text-align: center;
  display: block;
  font-family: "Caveat", cursive;
  color: var(--b-alpha-50);
  font-size: 15px;
}

.Ltree {
  color: black;
  text-align: center;
  display: block;
  font-family: "Shippori Antique B1", sans-serif;
  border: none;
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 15px;
  background-color: #ebeef1;
  width: 100%;
  height: 55px;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
}

.Ltree a {
  display: inline-block;
  position: relative;
  transition: 0.5s;
  color: #000;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  font-family: "LXGWWenKaiMono", sans-serif;
  font-weight: 500;
}

.Ltree a:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.Ltree:hover a {
  padding-right: 25px;
}

.Ltree:hover a:after {
  opacity: 1;
  right: 0;
}

.LTreeP {
  width: 42vw;
  margin: 20px 0 20px;
  text-align: center;
}

.ngl {
  width: 40px;
}

#ltreeng2 {
  transition: height 1s;
}

.musicinfo {
  padding: 20px;
  position: absolute;
  top: 86%;
  visibility: hidden;
  display: none;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

.music-inline {
  display: inline-block;
  align-items: center;
  justify-items: center;
  text-align: center;
}

.musicinfo img {
  width: 140px;
  margin-right: 40px;
}

.musicinfo audio {
  vertical-align: middle;
}

.musictitle {
  position: absolute;
  font-size: 90px;
  bottom: 2;
  top: 0px;
  left: 70px;
  z-index: -2;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--main-color);
  /* font-size: 40px; */
  margin: 0;
  font-family: "PingFang SC", "Microsoft Yahei", "Helvetica Neue", Helvetica,
    "Segoe UI", Arial, sans-serif;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

section {
  width: 100%;
  box-sizing: border-box;
  min-height: 33vh;
}
section .section-wrapper {
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
}

.line {
  width: 90%;
  height: 4px;
  background: linear-gradient(
    to right,
    var(--main-color) 13.25%,
    #fbfcfc 13.25%
  );
  margin-top: 20vh;
  margin-left: 5%;
}
.line:hover {
  cursor: url("../Resources/cusor/normal.cur"), default;
}
.line .year {
  background-color: #fbfcfc;
  border-radius: 50%;
  float: left;
  position: relative;
  left: 5.3%;
  box-sizing: border-box;
  margin-right: calc(2.65% - 12.5px);
  margin-left: calc(2.65% - 12.5px);
  width: 25px;
  height: 25px;
  top: -10px;
}
.line .year::before {
  content: attr(data-timelinelabel);
  position: absolute;
  top: -75px;
  left: -5px;
  width: 150px;
  transform: rotateZ(-45deg);
  display: block;
  font-size: 0.8em;
  font-weight: bold;
}
.line .year::after {
  content: attr(data-mobiletext);
  position: absolute;
  top: 23px;
  left: -15px;
  padding: 10px;
}
.line .quarter {
  background-color: #fbfcfc;
  border-radius: 50%;
  float: left;
  position: relative;
  left: 5.3%;
  box-sizing: border-box;
  margin-right: calc(2.65% - 7.5px);
  margin-left: calc(2.65% - 7.5px);
  width: 15px;
  height: 15px;
  top: -5px;
}
.line .complete {
  background-color: var(--main-color);
  transition: 0.5s;
}

#timeline {
  padding-bottom: 50px;
  background-color: #fff;
  color: var(--main);
  transition: 0.5s;
}

#description {
  min-height: 30vh;
  background-color: #34495e;
  transition: 0.5s;
}
#description h3 {
  color: var(--main-color);
  font-weight: 600;
}
#description .section-wrapper > div {
  display: none;
}
#description .section-wrapper > div.text-default {
  display: block;
}

#illustrate {
  display: inline-block;
  position: relative;
  text-align: center;
}

.mySlides {
  display: none;
  margin-top: 20px;
}

img {
  vertical-align: middle;
  pointer-events: none;
}

/* Slideshow container */
.slideshow-container {
  width: 700px;
  height: 400px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
  border-radius: 0 3px 3px 0;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}

.Bg001 {
  color: #777;
  background-color: var(--main-light);
  text-align: center;
  padding: 50px 80px 0;
}

.Bg001foot {
  color: #777;
  background-color: var(--main-light);
  text-align: center;
  padding: 50px 80px;
}

.Bg001-dark {
  color: var(--main-light);
  background-color: var(--b-alpha-90);
  text-align: center;
  padding: 50px 80px;
}

.Bg002 {
  color: #777;
  background-color: var(--bg-w-245);
  text-align: center;
  padding: 50px 80px 0;
}

.PartTitle-dark {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: rgb(255, 255, 255);
}

.PartTitle-dark::after {
  content: "#";
  font-size: 17px;
  color: #5d7fa2;
  font-weight: bold;
}

.Bg002-dark {
  color: rgb(255, 255, 255);
  background-color: var(--w-alpha-5);
  text-align: center;
}

.fixedText {
  font-family: "LXGWWenKaiMono", sans-serif;
}

.TypingText {
  font-family: "LXGWWenKaiMono", sans-serif;
  color: var(--main-color);
  font-weight: bolder;
  font-size: large;
}

.aboutTyping {
  background-color: var(--bg-transform);
  margin: 10px 0 10px;
  border-radius: 30px;
  width: 40%;
  margin-left: 30%;
}

.wrapper {
  /*Social media button*/
  margin: 100px 0 70px;
}

.wrapper .button {
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 0 10px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.wrapper .button:hover {
  width: 200px;
}
.wrapper .button .icon {
  display: inline-block;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50px;
  box-sizing: border-box;
  line-height: 60px;
  transition-property: opacity, right;
  transition-duration: 3s, 5s;
}
.wrapper .button:nth-child(1):hover .icon {
  background: #4267b2;
  float: left;
}
.wrapper .button:nth-child(2):hover .icon {
  background: #1da1f2;
  float: left;
}
.wrapper .button:nth-child(3):hover .icon {
  background: #e1306c;
  float: left;
}
.wrapper .button:nth-child(4):hover .icon {
  background: #333;
  float: left;
}
.wrapper .button:nth-child(5):hover .icon {
  background: #ff0000;
  float: left;
}
.wrapper .button:nth-child(6):hover .icon {
  background: #b0def4;
  float: left;
}
.wrapper .button .icon i {
  font-size: 25px;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.wrapper .button:hover .icon i {
  color: #fff;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
}
.wrapper .button span {
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
  font-family: "LXGWWenKaiMono", sans-serif;
}
.wrapper .button:nth-child(1) span {
  color: #4267b2;
  transition: all 0.3s ease-in-out;
}
.wrapper .button:nth-child(2) span {
  color: #1da1f2;
}
.wrapper .button:nth-child(3) span {
  color: #e1306c;
}
.wrapper .button:nth-child(4) span {
  color: #333;
}
.wrapper .button:nth-child(5) span {
  color: #ff0000;
}
.wrapper .button:nth-child(6) span {
  color: #b0def4;
}

.ContactTag {
  font-family: "DynaPuff", cursive;
  text-align: center;
  position: relative;
  margin-top: 0;
  display: flow-root;
}

.ContactTagadd {
  font-family: "DynaPuff", cursive;
  font-size: 20px;
  color: rgb(243, 217, 22);
}

.FootCard {
  color: black;
  background-color: var(--bg-w-245);
  text-align: center;
  padding: 50px 80px;
  text-align: justify;
}

details {
  border: solid 3px;
  border-radius: 10px;
  padding: 10px;
  user-select: none;
}

details > summary::marker {
  content: "";
}

details > summary::after {
  content: "➕";
  display: inline-block;
  position: absolute;
  right: 110px;
}

details > summary {
  padding: 4px;
  border: none;
  cursor: url("../Resources/cusor/pointer.cur"), pointer;
  font-weight: bolder;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 3px;
}

details > p {
  padding: 4px;
  margin: 20;
  font-family: "Roboto", sans-serif;
}

details::before {
  content: "";
  height: 3px;
  width: 10px;
  margin: 0;
  color: black;
}
.haa2 {
  margin-top: 20px;
}

.moreabout {
  padding: 70px 80px;
}
