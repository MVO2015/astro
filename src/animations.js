import {showAstronomicalTime, showAstronomicalTodayTime} from "./main";
import {astronomicalClockTime, daylightSavingTimeSwitch} from "./time";
import {displayHeight, displayWidth, rotateSvgById} from "./graphics";
import {apiAddMinutes, apiAddDays} from "./main";
import indexFingerIcon from "../img/index-finger-icon.png";

var daylightSavingTimeOnTimer;
var daylightSavingTimeOffTimer;
let astronomicalClockUpdateTimer;

export function startAstronomicalClock() {
    stopAstronomicalClock();
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

export function animateYearAround() {
    stopAstronomicalClock();
    let days = 0;
    const yearAroundTimer = setInterval(yearAroundAnimation, 50);
    function yearAroundAnimation() {
        if (days <= 365) {
            showAstronomicalTime();
            astronomicalClockTime.addDays(1);
            days++;
        } else {
            console.log('start');
            clearInterval(yearAroundTimer);
            startAstronomicalClock();
        }
    }
}

function animateDayAround() {
    stopAstronomicalClock();
    const dayAroundTimer = setInterval(dayAroundAnimation, 25);
    let minutes = 0;
    const minuteStep = 4;
    function dayAroundAnimation() {
        if (minutes < 1440) {
            showAstronomicalTime();
            astronomicalClockTime.addMinutes(minuteStep);
            minutes += minuteStep;
        } else {
            clearInterval(dayAroundTimer);
        }
    }
}

export function setIntroDimensions() {
    const element = document.getElementById('intro');
    let dimension = '50vw';
    if (displayWidth() > displayHeight()) {
        dimension = '50vh';
    }
    element.style.width = dimension;
    element.style.height = dimension;
}

export function animateYearZigZag() {
    setIntroDimensions();
    const element = document.getElementById('introText');
    element.innerText = 'Swipe horizontally to adjust date.';
    const buttonOk = document.getElementById('intro');
    let step = 1;
    let timer = setInterval(yearAroundAnimation, 30);
    buttonOk.addEventListener('click', function _click() {
        switch (step) {
            case 1:
                clearInterval(timer);
                animateTimeZigZag();
                step++;
                break;
            case 2:
                clearInterval(timer);
                animateDblTap();
                step++;
                break;
            case 3:
                clearInterval(timer);
                const introElement = document.getElementById('intro');
                introElement.parentNode.removeChild(introElement);
                step++;
                break;
        }
    });
    let counter = 0;
    let lastFlooredSinus = 0;
    function yearAroundAnimation() {
        if (counter <= 360) {
            showAstronomicalTime();
            const sinus = Math.sin(counter / 180 * Math.PI) * 20;
            const element = document.getElementById('indexFingerIcon');
            element.style = 'transform: translateX(' + sinus + 'px)';
            const increment = Math.floor(sinus - lastFlooredSinus);
            if (Math.abs(increment) >= 1) {
                apiAddDays(increment);
            }
            counter += 4;
            lastFlooredSinus = Math.floor(sinus);
        } else {
            clearInterval(timer);
        }
    }

    function animateTimeZigZag() {
        const element = document.getElementById('introText');
        element.innerText = 'Swipe vertically to adjust time.';
        let counter = 0;
        let lastSinus = 0;
        timer = setInterval(dayAroundAnimation, 30);

        function dayAroundAnimation() {
            if (counter <= 360) {
                const sinus = Math.sin(counter / 180 * Math.PI) * 120;
                const element = document.getElementById('indexFingerIcon');
                element.style = 'transform: translateY(' + sinus / 4 + 'px)';
                const increment = sinus - lastSinus;
                apiAddMinutes(Math.floor(increment));
                counter += 4;
                lastSinus = sinus;
            } else {
                clearInterval(timer);
            }
        }
    }

    function animateDblTap() {
        const element = document.getElementById('introText');
        element.innerText = 'Double click or tap for current date/time.';
        const handElement = document.getElementById('indexFingerIcon');
        handElement.style.transform = 'translate(0,0)';

        const circle1Element = document.getElementById('circle1');
        const circle2Element = document.getElementById('circle2');

        let counter1 = 0;
        let counter2 = -60;
        const maxCount1 = 120;
        const maxCount2 = 120;
        timer = setInterval(dblClickAnimation, 30);

        function dblClickAnimation() {
            if (counter1 <= maxCount1) {
                let r1 = 10 + counter1 / 4;
                let opacity1 = 0.5 - (counter1 / maxCount1 * 0.5);
                circle1Element.style.width = r1 + "px";
                circle1Element.style.height = r1 + "px";
                circle1Element.style.opacity = opacity1;
                circle1Element.style.transform = 'translate(' + -r1 / 2 + 'px,' + -r1 / 2 + 'px)';
                counter1 += 4;
                if (counter2 < 0) {
                    counter2 += 4;
                }
            }
            if (counter2 >= 0 && counter2 < maxCount2) {
                let r2 = 10 + counter2 / 4;
                let opacity2 = 0.5 - (counter2 / maxCount2 * 0.5);
                circle2Element.style.width = r2 + "px";
                circle2Element.style.height = r2 + "px";
                circle2Element.style.opacity = opacity2;
                circle2Element.style.transform = 'translate(' + -r2 / 2 + 'px,' + -r2 / 2 + 'px)';
                counter2 += 4;
            }
            if (counter2 >= maxCount2) {
                clearInterval(timer);
            }
        }
    }
}

