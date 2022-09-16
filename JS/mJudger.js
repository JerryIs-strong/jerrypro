    //禁用鼠標右鍵
    window.addEventListener('contextmenu', function (e) { 
      var x = document.getElementById("snackbarerror");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      e.preventDefault(); 
      document.documentElement.style.setProperty('--main-light:', 'black');
    }, false);
  
/*https://jerryis-strong.github.io/jerrypro.github.io/not-support.html*/
