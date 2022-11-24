function openNav() {
  document.getElementById("Sidebar").style.transform = "translateX(0)";
  document.getElementById("Sidebar-mask").className = "Sidebar-mask-active";
  document.body.style.overflowY = "hidden";
  /*document.getElementById("topBG").style.marginLeft = "250px";*/
}

function closeNav() {
  document.getElementById("Sidebar").style.transform = "translateX(-100%)";
  document.getElementById("Sidebar-mask").className = "Sidebar-mask";
  document.body.style.overflowY = "visible";
}

function MusicOpen() {
  var x = document.getElementById("ltreeng2");
  var y = document.getElementById("musicinfo");

  if (x.style.height === "55px") {
    x.style.height = "200px";
    window.setTimeout(show, 1000);
    function show() {
      y.style.animation = "fade-in 1s";
      y.style.visibility = "visible";
      y.style.display = "block";
    }
  } else {
    x.style.height = "55px";
    y.style.animation = "fade-out 1s";
    y.style.visibility = "hidden";
    y.style.display = "none";
  }
}

/*function Snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }*/
function appleBg() {
  if (
    /AppleWebKit.*mobile/i.test(navigator.userAgent) ||
    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
      navigator.userAgent
    )
  ) {
    if (window.location.href.indexOf("?mobile") < 0) {
      try {
        if (/iPad|iPhone|iPod|iOS|ipadOS/i.test(navigator.userAgent)) {
          document.getElementById("topBG").className = "topBGsafari";
          console.log("Done");
        }
      } catch (e) {}
    }
  }
}

function error() {
  var xxxy = document.getElementById("Ltree-music");
  var error = document.getElementById("ltreeng2");
  xxxy.innerHTML = "❌ERROR: No Resources";
  error.style.transition = "0.5s";
  error.style.backgroundColor = "rgb(241 235 237)";
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function changeTheme() {
  if (localStorage.getItem("theme") === "theme-pink") {
    setTheme("theme-blue");
  } else {
    setTheme("theme-pink");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-pink") {
    setTheme("theme-pink");
  } else {
    setTheme("theme-blue");
  }
})();

function Themebgloder() {
  var x = document.getElementById("topBG");
  var randomNumber = Math.floor(Math.random() * 5);
  document.body.id = "Done"

  if (randomNumber == "1") {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small.jpg')";
    console.log("Theme: 1");
  } else if (randomNumber == "2") {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small2.jpg')";
    console.log("Theme: 2");
  } else if (randomNumber == "3") {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small3.jpg')";
    console.log("Theme: 3");
  } else {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small4.jpg')";
    console.log("Theme: 4");
  }
}

function bplayer() {
  var playername = document.getElementById("bilibili-player");
  var side = document.getElementById("slideshow-container");

  if (playername.className == "play-ture") {
    document.title = "JERRY PRO :: 直播開始啦(≧▽≦*)o";
    side.style.visibility = "hidden";
    side.style.display = "none";
  } else {
    console.log("No event");
  }
}

function musicPlayerChecker() {
  var music = document.getElementById("musicPlayer");
  // var musicName = music.target.files.name;
  var getButton = document.getElementById("bmusicinfo");
  var success = document.getElementById("ltreeng2");
  var successA = document.getElementById("bmusicinfo");

  if (document.title == "JERRY PRO :: ?Playing") {
    music.pause();
    getButton.innerHTML = "Music";
    document.title = "JERRY PRO :: (～￣▽￣)～";
    success.style.backgroundColor = "rgb(235, 238, 241)";
    successA.style.color = "rgb(0, 0, 0)";
  } else {
    getButton.innerHTML = "Getting...";
    setTimeout(musicPlayert, 2000);
  }

  function musicPlayert() {
    music.play();
    success.style.backgroundColor = "rgb(239 245 244)";
    successA.style.color = "rgb(123 182 172)";
    getButton.innerHTML = "Playing: cici_ - 至少還有你(溫柔版)";
    document.title = "JERRY PRO :: ?Playing";
    music.addEventListener("ended", function () {
      music.currentTime = 0;
      getButton.innerHTML = "Music";
      document.title = "JERRY PRO :: (～￣▽￣)～";
      success.style.backgroundColor = "rgb(235, 238, 241)";
      successA.style.color = "rgb(0, 0, 0)";
    });
  }
}

function loader() {
  var loader = document.getElementById("pre-loder-index");
  // loader.style.display = "none";

  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);
}

function gray(){
  document.body.style.filter = "grayscale(100%)";
  document.getElementById("h1").innerHTML = "傻瓜 每天都要開心噢"
  document.getElementById("h1").style.fontSize = "60px"
}
