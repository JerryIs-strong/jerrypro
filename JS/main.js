window.onload = function () {
  Themebgloder(), appleBg(), loader(), dateCount(), scroll();

  var things = ['.exe', 'Powershell', 'Hyper-V', 'DDoS', 'Self-XSS', 'DNS hijacking', 'win+r的作用'];
  var thing = things[Math.floor(Math.random() * things.length)];
  var text = document.getElementById("textKnow");
  text.innerHTML = thing;
};

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
      } catch (e) { }
    }
  }
}

function setThemeDL(themeName) {
  localStorage.setItem("theme-DL", themeName);
  if (themeName === "theme-light") {
    document.documentElement.classList.add("theme-light");
    document.documentElement.classList.remove("theme-dark");
  } else {
    document.documentElement.classList.add("theme-dark");
    document.documentElement.classList.remove("theme-light");
  };
  Themebgloder();
  DLbuttoncheck();
}

// function to toggle between light and dark theme
function changeThemeDL() {
  if (localStorage.getItem("theme-DL") === "theme-dark") {
    setThemeDL("theme-light");
  } else {
    setThemeDL("theme-dark");
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

  //Dark mode
  if (localStorage.getItem("theme-DL") === "theme-dark") {
    setThemeDL("theme-dark");
  } else {
    setThemeDL("theme-light");
  }
})();

function Themebgloder() {
  var x = document.getElementById("topBG");
  if (localStorage.getItem("theme-DL") == "theme-dark") {
    x.style.backgroundImage = "url('./Resources/headerBg/a1cadb0911675232054cc13deee6a3221b4dd88e.jpg')";
  } else {
    x.style.backgroundImage = "url('./Resources/headerBg/2bb9062555f5b2bf7e5a5f8d92dfb841ec6919e8.jpg')";
  }
}

function DLbuttoncheck() {
  let state = ["wb_sunny", "dark_mode"];
  let state2 = ["🌕Light", "🌑Dark"];
  if (localStorage.getItem("theme-DL") === "theme-dark") {
    document.getElementById("DLmode").innerHTML = state[0];
    document.getElementById("DLtext-2").innerHTML = state2[0];
  } else {
    document.getElementById("DLmode").innerHTML = state[1];
    document.getElementById("DLtext-2").innerHTML = state2[1];
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

function dateCount() {
  let then = new Date("11/04/2022");
  let now = new Date();

  const days = (then, now) => {
    let difference = then.getTime() - now.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  // 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
  document.getElementById("dateCount").innerHTML = Math.ceil(
    days(then, now) * -1
  );
}


function scroll() {
  addEventListener("scroll", (event) => {
    if (
      document.body.scrollTop > 1 ||
      document.documentElement.scrollTop > 1
    ) {
      document.getElementById("navbar").className = "navbar-active";
    } else {
      document.getElementById("navbar").className = "navbar";
    }
  });
}
