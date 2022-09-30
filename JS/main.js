function openNav() {
    document.getElementById("Sidebar").style.width = "250px";
    /*document.getElementById("topBG").style.marginLeft = "250px";*/
  }
  
  function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("topBG").style.marginLeft= "0";
  }

  function MusicOpen() {
    var x = document.getElementById("ltreeng2");
    var y = document.getElementById("musicinfo");

    if (x.style.height === "55px"){
     x.style.height = "200px";
     window.setTimeout(show, 1000);
     function show(){
      y.style.animation = "fade-in 1s";
      y.style.visibility = "visible";
      y.style.display = "block";
     }
    } else {
     x.style.height = "55px";
     y.style.animation = "fade-out 1s";
     y.style.visibility = "hidden";
     y.style.display = "none"
    }
  }

  /*function Snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }*/

  if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    if(window.location.href.indexOf("?mobile")<0){
        try{
            if(/iPad|iPhone|iPod|iOS|ipadOS/i.test(navigator.userAgent)){
              const browser = document.getElementById("topBG");
              browser.className = "topBGsafari";
              console.log("Done")
            }
        }catch(e){}
    }
 }
