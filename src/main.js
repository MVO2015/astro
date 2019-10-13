import '../css/astro.css';
import './math';
import './animations';
import './clockobj';
import './construction';
import './geometry';
import './graphics';
import './time';
import {backgroundResize, setBackgroundPositionX} from "./zoodiac-paintings";
require('file-loader?name=[name].[ext]!./index.html');

import {
    constructAstronomicalClock,
    moonHandle, moonShape,
    moonSymbol,
    scale,
    starSymbol,
    sunHandle,
    sunSymbol,
    zodiacum
} from "./clockobj";
import {deg2rad, normalizeAngleDeg, quadraticEquation} from "./math";
import * as myMath from "./math";
import {displayInlineById, drawAstronomicalClock, rotateZodiacum} from "./graphics";
import {astronomicalClockTime, dateToSunTimeAngle, daylightSavingTimeSwitch, sun2deg} from "./time";
import {
    animateTimeZigZag,
    animateYearAround, animateYearZigZag, setIntroDimensions,
    startAnimateDaylightSavingTimeOff, startAnimateDaylightSavingTimeOn,
    startAstronomicalClock,
    stopAstronomicalClock
} from "./animations";

var lastTouchMoveX;
var lastTouchMoveY;

function computePositionOnEclipse(angleDeg, zodiacum) {
    var normalizedAngle = normalizeAngleDeg(angleDeg);
    var m = zodiacum.cx;
    var n = zodiacum.cy;
    var r = zodiacum.r;
    var xySystem = true;
    if (!myMath.isEasyForTangents(normalizedAngle)) {
        normalizedAngle = normalizeAngleDeg(normalizedAngle - 90);
        m = [n, n=-m][0];    // m = n, n = -m
        xySystem = false;
    }
    var phi = deg2rad(normalizedAngle);
    var tgPhi = Math.tan(phi);
    var a = 1 + Math.pow(tgPhi, 2);
    var b = -2 * (m + n * tgPhi);
    var c = m * m + n * n - r * r;
    var x = 0;
    if (normalizedAngle <= 45 && normalizedAngle > -45) {
        x = quadraticEquation(a, b, c).x1;
    }
    if (normalizedAngle > 135 || normalizedAngle <= -135) {
        x = quadraticEquation(a, b, c).x2;
    }
    let y = tgPhi * x;
    if (!xySystem) {
        //noinspection JSSuspiciousNameCombination
        x = [-y, y = x][0];    // x = - y, y = x
    }
    return {x: scale(x), y: scale(y)}
}

function computeZodiacumAngleDeg(date) {
    var equinoxDate = new Date(2016,8,22,10,22);    // autumn equinox
    // var equinoxDate = new Date(2016,2,20,5,31);    // spring equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    var timezoneAngle = astronomicalClockTime.timezone * 15;
    var timeDiffDays = (date.getTime() - equinoxDate.getTime()) / 60000 / 60 /24;
    var angleCorrection = - 1.5 * Math.cos(timeDiffDays / 365.25 * 2 * Math.PI) + 1.5;
    return (timeDiffDays * 360 * 366.25 / 365.25 + equinoxTimeAngle - timezoneAngle + angleCorrection) % 360;
}

function computeMoonAngleDeg(date) {
    var synodicMoon = 29.530588853;     // days
    var daySpeed = (synodicMoon - 1) / synodicMoon;
    var aNewMoonDate = new Date(2016, 8, 1, 11, 3, 0);
    var timeDifference = date.getTime() - aNewMoonDate.getTime();
    var timeDiffMins = timeDifference / 60000;
    var timeDiffHours = timeDiffMins / 60;
    var timeDiffDays = timeDiffHours / 24;
    return (timeDiffDays * daySpeed * 360 + dateToSunTimeAngle(aNewMoonDate)) % 360;
}

function showDigitalTime() {
    var d = astronomicalClockTime.toDate();
    if (astronomicalClockTime.dst() && !daylightSavingTimeSwitch.status) {
        d = new Date(astronomicalClockTime.number - 3600000);
    }
    var timeElement = document.getElementById("time");
    var timezone = astronomicalClockTime.timezone;
    timeElement.innerText = d.toLocaleString() + " Timezone: " + ((timezone > 0) ? "+" : "-") + timezone +
    " DST: " + (astronomicalClockTime.dst() ? "ON" : "OFF");
    daylightSavingTimeSwitch.draw();
}

export function showAstronomicalTodayTime() {
    astronomicalClockTime.update();
    showAstronomicalTime();
}

export function showAstronomicalTime() {
    var d = astronomicalClockTime.toDate();
    var zodiacumAngleDeg = computeZodiacumAngleDeg(d);
    var sunAngleDeg = sun2deg(dateToSunTimeAngle(d));
    var moonAngleDeg = sun2deg(computeMoonAngleDeg(d));
    rotateZodiacum(zodiacumAngleDeg);
    zodiacum.compute(zodiacumAngleDeg);
    var sun = computePositionOnEclipse(sunAngleDeg, zodiacum);
    sunHandle.showByTime(d);
    sunSymbol.showAt(sun.x, sun.y);
    starSymbol.show();
    var moon = computePositionOnEclipse(moonAngleDeg, zodiacum);
    moonHandle.show(moonAngleDeg);
    moonShape.compute(sunAngleDeg, moonAngleDeg);
    moonSymbol.showAt(moon.x, moon.y, moonAngleDeg + 90);
    showDigitalTime();
    setBackgroundPositionX(normalizeAngleDeg(dateToSunTimeAngle(d)-zodiacumAngleDeg) + 180);
}

function daylightSavingTimeOn() {
    daylightSavingTimeSwitch.makeUnclickable();
    startAnimateDaylightSavingTimeOn();
    daylightSavingTimeSwitch.on();
}

function daylightSavingTimeOff() {
    daylightSavingTimeSwitch.makeUnclickable();
    startAnimateDaylightSavingTimeOff();
    daylightSavingTimeSwitch.off();
}

constructAstronomicalClock();
drawAstronomicalClock();

astronomicalClockTime.init();
daylightSavingTimeSwitch.init();
if (daylightSavingTimeSwitch.status) {
    daylightSavingTimeOff();
}

showAstronomicalTodayTime();
displayInlineById("zodiacum");
displayInlineById("moonPhase");
displayInlineById("sunSymbol");

// == Listeners ==
// Mouse Wheel
addWheelListener("zodiacum", zodiacWheel);
addWheelListener("time", sunWheel);

// Mouse Drag
let isMouseDown = false;
addMouseDrag('container', touchMove);
addMouseDrag('background-zodiac', touchMove);

// Touch Move
addTouchMove("container", touchMove);
addTouchMove("background-zodiac", touchMove);

// Resize
window.addEventListener('resize', function () {
    showAstronomicalTime();
    setIntroDimensions();
    backgroundResize();
});

// == Show actual time ==
// Escape Key
window.addEventListener('keydown', function (event)  {
    if (event.key === 'Escape') {
        startAstronomicalClock();
    }
});
// Double Click
window.addEventListener('dblclick', function (event)  {
        startAstronomicalClock();
});
// Double Tap
let timeout;
let lastTap = 0;
window.addEventListener('touchend', function(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    clearTimeout(timeout);
    if (tapLength < 500 && tapLength > 0) {
        event.preventDefault();
        startAstronomicalClock();
    } else {
        // Single Tap
        timeout = setTimeout(function() {
            // Single Tap timeout
            clearTimeout(timeout);
        }, 500);
    }
    lastTap = currentTime;
});


// učesat
var zodiacumSlider = document.getElementById("zodiacumSlider");
zodiacumSlider.oninput = function() {
    stopAstronomicalClock();
    astronomicalClockTime.update();
    astronomicalClockTime.addDays(this.value);
    showAstronomicalTime();
}

function addWheelListener(id, wheelFunction) {
    // Zodiacum (year cycle)
    const element = document.getElementById(id);
    if (element.addEventListener)
    {
        // IE9, Chrome, Safari, Opera
        element.addEventListener("mousewheel", wheelFunction, false);
        // Firefox
        element.addEventListener("DOMMouseScroll", wheelFunction, false);
    }
// IE 6/7/8
    else
    {
        element.attachEvent("onmousewheel", wheelFunction);
    }
}

function addMouseDrag(id, mouseDragFunction) {
    const element = document.getElementById(id);
    if (element.addEventListener) {
        element.addEventListener("mousedown", function() { isMouseDown = true });
        element.addEventListener("mouseup", function() { isMouseDown = false });
        element.addEventListener("mousemove",
            function(e) {if(isMouseDown) { mouseDragFunction(e)}}, false
        );
    }
}

function addTouchMove(id, touchMoveFunction) {
    const element = document.getElementById(id);
    if (element.addEventListener) {
        element.addEventListener("touchmove", touchMoveFunction, false);
    }
}

function zodiacWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    apiAddDays(-delta);
}

function sunWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    apiAddMinutes(- delta * 20)
}

function touchMove(e)
{
    e.preventDefault();
    let x;
    let y;
    if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    let deltaDays = 0;
    let deltaMinutes = 0;
    let deltaX = x - lastTouchMoveX;
    let deltaY = y - lastTouchMoveY;
    const minimalStep = 1;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (x < lastTouchMoveX - minimalStep) {
            deltaDays = -1;
        }
        if (x > lastTouchMoveX + minimalStep) {
            deltaDays = 1;
        }
    } else {

        if (y < lastTouchMoveY - minimalStep) {
            deltaMinutes = -1;
        }
        if (y > lastTouchMoveY + minimalStep) {
            deltaMinutes = 1;
        }
    }

    lastTouchMoveX = x;
    lastTouchMoveY = y;

    apiAddDays(deltaDays);
    apiAddMinutes(- deltaMinutes * 10)
}

export function apiAddDays(days) {
    stopAstronomicalClock();
    astronomicalClockTime.addDays(days);
    showAstronomicalTime();
}

export function apiAddMinutes(minutes) {
    stopAstronomicalClock();
    astronomicalClockTime.addMinutes(minutes);
    showAstronomicalTime();
}

window.daylightSavingTimeOff = daylightSavingTimeOff;
window.daylightSavingTimeOn = daylightSavingTimeOn;

backgroundResize();

// animateYearZigZag();
// animateTimeZigZag();
startAstronomicalClock();
