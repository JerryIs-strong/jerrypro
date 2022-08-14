//判斷設備是否為移動終端
!function () {
var devices = ["iPhone","Android","Windows Phone"]
var ua = window.navigator.userAgent
for (var i = 0; i < devices.length; i++) {
if (ua.indexOf(devices[i]) != -1) {
   window.location.href = 'https://jerryis-strong.github.io/jerrypro.github.io/not-support.html'
  }
}
}()

//禁用鼠標右鍵
window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbarH").style.top = "0";
  } else {
    document.getElementById("navbarH").style.top = "-50px";
  }
}


