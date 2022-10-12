function openNav() {
  document.getElementById("Sidebar").style.width = "250px";
  /*document.getElementById("topBG").style.marginLeft = "250px";*/
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0";
  document.getElementById("topBG").style.marginLeft = "0";
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

if (
  /AppleWebKit.*mobile/i.test(navigator.userAgent) ||
  /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
    navigator.userAgent
  )
) {
  if (window.location.href.indexOf("?mobile") < 0) {
    try {
      if (/iPad|iPhone|iPod|iOS|ipadOS/i.test(navigator.userAgent)) {
        const browser = document.getElementById("topBG");
        browser.className = "topBGsafari";
        console.log("Done");
      }
    } catch (e) {}
  }
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
  var randomNumber = Math.floor(Math.random() * 4);;

  if (randomNumber == "1") {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small.jpg')";
    console.log("Theme: 1");
  } else if (randomNumber == "2") {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small2.jpg')";
    console.log("Theme: 2");
  } else {
    x.style.backgroundImage =
      "url('https://jerrypro.xyz/Resources/headerBg/small3.jpg')";
    console.log("Theme: 3");
  }
};
