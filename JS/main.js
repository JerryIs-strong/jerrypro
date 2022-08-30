function openNav() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementById("topBG").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementById("topBG").style.marginLeft= "0";
  }

  function Snackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  
