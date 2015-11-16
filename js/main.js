document.addEventListener('DOMContentLoaded', yogahotSun);
function yogahotSun() {
    'use strict';
    var t, showTooltip;
    var sunChildCenter = document.querySelector('.sun-child-center');
    var sunChildCenterSpan = document.querySelector('.sun-child-center > span');

    document.addEventListener('click', tooltipSunShow);

    function tooltipSunShow(event) {
        t = event.target;
        if (t.hasAttribute('data-sun-tooltip')) {
            t.classList.toggle('sun-child-hover');
            if (showTooltip === t) {
                sunChildCenter.classList.toggle('tooltipSun');

            } else if (!sunChildCenter.classList.contains('tooltipSun')) {
                sunChildCenter.classList.add('tooltipSun');
            } else if (showTooltip !== t) {
                showTooltip.classList.remove('sun-child-hover');
            }
            sunChildCenterSpan.innerHTML = t.getAttribute('data-sun-tooltip');
            showTooltip = t;
        } else {
            return;
        }
    }


//console.log(showTooltip);
    // if (sunH > h) {
    //     sun.style.height = h + 'px';
    //     sun.style.width =  'auto';
    // };


    //var heightCash;
    //setInterval(function() {
    //    var sunGlobal = document.querySelector('.sun-global');
    //    var sun = document.querySelector('.sun  img');
    //    var sunH = Math.round(sun.offsetHeight);
    //    var sunGlobalH = Math.round(sunGlobal.offsetHeight);
    //    var h = Math.round(document.documentElement.clientHeight);
    //    var n;
    //    if ( h < 611 && heightCash != h) {
    //       n = sunH / sunGlobalH;
    //        sun.style.height = Math.round(h * n) + 'px';
    //        sun.style.width = 'auto';
    //    } else if(612 <= h){
    //        sun.style.height = '';
    //        sun.style.width = '';
    //    }
    //
    //    heightCash = h;
    //
    //}, 1500);


};
