//判斷設備是否為移動終端
!function () {
var devices = ["iPhone","Android","Windows Phone"]
var ua = window.navigator.userAgent
for (var i = 0; i < devices.length; i++) {
if (ua.indexOf(devices[i]) != -1) {
   window.location.href = '../not-support.html'
  }
}
}()

//禁用鼠標右鍵
window.addEventListener('contextmenu', function (e) { 
  // do something here... 
  e.preventDefault(); 
}, false);


