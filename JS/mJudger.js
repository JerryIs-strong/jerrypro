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
      var x = document.getElementById("snackbarerror");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      e.preventDefault(); 
    }, false);
  

