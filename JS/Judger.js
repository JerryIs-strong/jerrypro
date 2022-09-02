var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (is_mobi) {
    window.location.href = "./index(2nd).html";
}else{
    window.location.href = "./jerrypro.html";
}