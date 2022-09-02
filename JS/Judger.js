var not_mobi = navigator.userAgent.toLowerCase().match(/(Windows|Mac)/i) != null;
if (not_mobi) {
    window.location.href = "./jerrypro.html";
}
