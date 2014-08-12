"use strict";
(function() {
    var cb = (function() {
        for(var i=0;i<window.defer.css.length;++i) {
            var l = document.createElement('link'); 
            l.rel = 'stylesheet';
            l.href = window.defer.css[i];
            var h = document.getElementsByTagName('head')[0];
            h.parentNode.insertBefore(l, h);
        }
    });
    var req = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    if(req) req(cb);
    else window.addEventListener('load', cb);    
    
})();
