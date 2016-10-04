var daylightSavingTimeOnTimer;
var daylightSavingTimeOffTimer;
var astronomicalClockUpdateTimer;

//var clockFaceAnimationTimer;
//clockFaceAnimationTimer = setInterval(animateClockFace, 10);    // start animation
//var hideDesignAnimationTimer;
//var moveOrbisAnimationTimer;
//var goZodiacumAroundTimer;

function startAstronomicalClock() {
    astronomicalClockUpdateTimer = setInterval(showAstronomicalTodayTime, 1000);
}

function stopAstronomicalClock() {
    clearInterval(astronomicalClockUpdateTimer);
}

function animateDaylightSavingTimeOn() {
    var numbers = document.getElementById("numbers");
    var numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation > -15) {    // animate numbers
        numbersRotation--;
        rotateSvgById("numbers", numbersRotation);
    }
    else {
        var clockFace = document.getElementById("clockFace");
        var clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation < 285) {  // animate whole clock
            clockFaceRotation++;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOnTimer);     // stop this animation
            daylightSavingTimeSwitch.makeClickable();
        }
    }
}

function animateDaylightSavingTimeOff() {
    var numbers = document.getElementById("numbers");
    var numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation < 0) {  // animate numbers
        numbersRotation++;
        rotateSvgById("numbers", numbersRotation);
    }
    else {
        var clockFace = document.getElementById("clockFace");
        var clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation > 270) {  // animate whole clock
            clockFaceRotation--;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOffTimer);     // stop this animation
            daylightSavingTimeSwitch.makeClickable();
        }
    }
}

function animateYearAround() {
    stopAstronomicalClock();
    var yearAroundTimer;
    var days = 0;
    yearAroundTimer = setInterval(yearAroundAnimation, 50);
    function yearAroundAnimation() {
        if (days <= 365) {
            showAstronomicalTime();
            astronomicalClockTime.addDays(1);
            days++;
        } else {
            clearInterval(yearAroundTimer);
            startAstronomicalClock();
        }
    }
}

function animateDayAround() {
    stopAstronomicalClock();
    var dayAroundTimer;
    dayAroundTimer = setInterval(dayAroundAnimation, 50);
    var minutes = 0;
    var minuteStep = 4;
    function dayAroundAnimation() {
        if (minutes < 1440) {
            showAstronomicalTime();
            astronomicalClockTime.addMinutes(minuteStep);
            minutes += minuteStep;
        } else {
            clearInterval(dayAroundTimer);
            startAstronomicalClock();
        }
    }
}
//
//
//function animateClockFace() {
//    var element = document.getElementById("clockFace");
//    var rotation = element.getAttribute("transform").match(/\d+/)[0];       // get number from string
//    if (rotation < 270) {
//        rotation++;
//        element.setAttribute("transform", "rotate(" + rotation + ") scale(-1, 1)");
//    }
//    else {
//        clearInterval(clockFaceAnimationTimer);     // stop this animation
//        hideDesignAnimationTimer = setInterval(animateHideDesign, 100);    // start next animation
//    }
//}
//
//function animateHideDesign() {
//    var element = document.getElementById("design");
//    var opacity = element.getAttribute("opacity");
//    if (opacity > 0) {
//        opacity -= 0.05;
//        element.setAttribute("opacity", opacity);
//    }
//    else {
//        clearInterval(hideDesignAnimationTimer);     // stop this animation
//        moveOrbisAnimationTimer = setInterval(animateMoveOrbis, 50);    // start next animation
//    }
//}
//
//function animateMoveOrbis() {
//    var element = document.getElementById("orbis");
//    var cy = element.getAttribute("cy");
//    if (cy > 0) {
//        cy -= scale(0.02 * orbis.r);      // step ralative to the perimeter
//        element.setAttribute("cy", cy);
//    }
//    else {
//        clearInterval(moveOrbisAnimationTimer);     // stop this animation
//    }
//}

//function moveClickMe(x, y, onclick, color) {
//    var element = document.getElementById("clickMePoint");
//    element.setAttribute("onclick", onclick);
//    element.setAttribute("fill", color);
//    element.setAttribute("display", "inline");
//    drawCircle({id: "clickMePoint", r: 0.05, cx: x, cy: y});
//    var flash = document.getElementById("clickMeFlash");
//    var animationName = window.getComputedStyle(flash,null).getPropertyValue("animation-name");
//    if (animationName == "flash1") {
//        flash.style.animationName = "flash2";
//    } else {
//        flash.style.animationName = "flash1";
//    }
//    drawCircle({id: "clickMeFlash", r: 0.1, cx: x, cy: y});
//}
//
//
//function hideClickMe() {
//    document.getElementById("clickMe").setAttribute("display", "none");
//}

// function clickOrbisCenter() {
//     drawLine(orbisAxonX);
//     drawLine(orbisAxonY);
//     drawCircle(orbis);
//     drawLine(planum);
//     moveClickMe(orbis.r, orbis.r, "clickOrbis()", "blue");
// }
//
// function clickOrbis() {
//     drawLine(orbisEquator);
//     moveClickMe(-orbis.r, orbis.r, "clickOrbisEquatorPoint()", "violet");
// }
//
// function clickOrbisEquatorPoint() {
//     drawLine(equatorProjection);
//     moveClickMe(equatorProjection.x, equatorProjection.y, "clickEquatorProjection()", "lightgrey");
// }
//
// function clickEquatorProjection() {
//     drawCircle(equator);
//     moveClickMe(orbisCancriTropicus.x2, orbisCancriTropicus.y2, "clickOrbisCancriTropicus()", "green");
// }
//
// function clickOrbisCancriTropicus() {
//     drawLine(orbisCancriTropicus);
//     moveClickMe(orbisCancriTropicus.x1, orbisCancriTropicus.y1, "clickCancriTropicusProjectionPoint()", "green");
// }
//
// function clickCancriTropicusProjectionPoint() {
//     drawLine(cancriTropicusProjection);
//     moveClickMe(cancriTropicusProjection.x, cancriTropicusProjection.y, "clickCancriTropicusProjection()", "green");
// }
//
// function clickCancriTropicusProjection() {
//     drawCircle(cancriTropicus);
//     moveClickMe(orbisCapricorniTropicus.x2, orbisCapricorniTropicus.y2, "clickOrbisCapricorniTropicus()", "orange");
// }
//
// function clickOrbisCapricorniTropicus() {
//     drawLine(orbisCapricorniTropicus);
//     moveClickMe(orbisCapricorniTropicus.x1, orbisCapricorniTropicus.y1, "clickOrbisCapricorniTropicusPoint()", "orange");
// }
//
// function clickOrbisCapricorniTropicusPoint() {
//     drawLine(capricorniTropicusProjection);
//     moveClickMe(capricorniTropicusProjection.x, capricorniTropicusProjection.y, "clickCapricorniTropicusProjection()", "orange");
// }
//
// function clickCapricorniTropicusProjection() {
//     drawCircle(capricorniTropicus);
//     moveClickMe(orbisLatitudo.x1, orbisLatitudo.y1, "clickOrbisLatitudo()", "red");
// }
//
// function clickOrbisLatitudo() {
//     drawLine(orbisLatitudo);
//     moveClickMe(orbisLatitudo.x2, orbisLatitudo.y2, "clickOrbisLatitudoPointA()", "red");
// }
//
// function clickOrbisLatitudoPointA() {
//     drawLine(latitudoProjectionA);
//     moveClickMe(orbisLatitudo.x1, orbisLatitudo.y1, "clickOrbisLatitudoPointB()", "red");
// }
//
// function clickOrbisLatitudoPointB() {
//     drawLine(latitudoProjectionB);
//     moveClickMe(latitudoProjectionB.x, latitudoProjectionB.y, "clickLatitudoHorizontis()", "red");
// }
//
// function clickLatitudoHorizontis() {
//     drawCircle(latitudoHorizontis);
//     moveClickMe(orbisOpacus.x2, orbisOpacus.y2, "clickOrbisOpacus()", "black");
// }
//
// function clickOrbisOpacus() {
//     drawLine(orbisOpacus);
//     moveClickMe(orbisOpacus.x1, orbisOpacus.y1, "clickOrbisOpacusPointA()", "black");
// }
//
// function clickOrbisOpacusPointA() {
//     drawLine(opacusProjectionA);
//     moveClickMe(orbisOpacus.x2, orbisOpacus.y2, "clickOrbisOpacusPointB()", "black");
// }
//
// function clickOrbisOpacusPointB() {
//     drawLine(opacusProjectionB);
//     moveClickMe(opacusProjectionB.x, opacusProjectionB.y, "clickOpacusHorizontis()", "black");
// }
//
// function clickOpacusHorizontis() {
//     drawCircle(opacusHorizontis);
//     clockFaceAnimationTimer = setInterval(animateClockFace, 33);    // start animation
//     hideClickMe();
// }
