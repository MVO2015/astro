import {showAstronomicalTime, showAstronomicalTodayTime} from "./main";
import {astronomicalClockTime, daylightSavingTimeSwitch} from "./time";
import {rotateSvgById} from "./graphics";

var daylightSavingTimeOnTimer;
var daylightSavingTimeOffTimer;
let astronomicalClockUpdateTimer;

export function startAstronomicalClock() {
    astronomicalClockUpdateTimer = setInterval(showAstronomicalTodayTime, 1000);
}

export function stopAstronomicalClock() {
    clearInterval(astronomicalClockUpdateTimer);
}

export function animateDaylightSavingTimeOn() {
    const numbers = document.getElementById("numbers");
    let numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation > -15) {    // animate numbers
        numbersRotation--;
        rotateSvgById("numbers", numbersRotation);
    }
    else {
        const clockFace = document.getElementById("clockFace");
        let clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation < 285) {  // animate whole clock
            clockFaceRotation++;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOnTimer);     // stop this animation
            daylightSavingTimeSwitch.makeClickable();
        }
    }
}

export function animateDaylightSavingTimeOff() {
    const numbers = document.getElementById("numbers");
    let numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation < 0) {  // animate numbers
        numbersRotation++;
        rotateSvgById("numbers", numbersRotation);
    }
    else {
        const clockFace = document.getElementById("clockFace");
        let clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation > 270) {  // animate whole clock
            clockFaceRotation--;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOffTimer);     // stop this animation
            daylightSavingTimeSwitch.makeClickable();
        }
    }
}

export function startAnimateDaylightSavingTimeOff() {
    daylightSavingTimeOffTimer = setInterval(animateDaylightSavingTimeOff, 33);
}

export function startAnimateDaylightSavingTimeOn() {
    daylightSavingTimeOnTimer = setInterval(animateDaylightSavingTimeOn, 33);
}

function animateYearAround() {
    stopAstronomicalClock();
    let days = 0;
    const yearAroundTimer = setInterval(yearAroundAnimation, 50);
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
    const dayAroundTimer = setInterval(dayAroundAnimation, 50);
    let minutes = 0;
    const minuteStep = 4;
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
