function computePositionOnEclipse(angleDeg, zodiacum) {
    var normalizedAngle = normalizeAngleDeg(angleDeg);
    var m = zodiacum.cx;
    var n = zodiacum.cy;
    var r = zodiacum.r;
    var xySystem = true;
    if (!isEasyForTangents(normalizedAngle)) {
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
    y = tgPhi * x;
    if (!xySystem) {
        //noinspection JSSuspiciousNameCombination
        x = [-y, y = x][0];    // x = - y, y = x
    }
    //console.log("m: "+m+"\nn: "+n+"\nr: "+r+"\nx: "+x+"\ny: "+y+"\n"+"phi: "+normalizedAngle+"\ntg phi:"+tgPhi +"\nxySystem: "+xySystem+"\n");
    return {x: scale(x), y: scale(y)}
}

function computeZodiacumAngleDeg(date) {
    var equinoxDate = new Date(2016,8,22,10,22);    // autumn equinox
    // var equinoxDate = new Date(2016,2,20,5,31);    // spring equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    var timeDiffDays = (date.getTime() - equinoxDate.getTime()) / 60000 / 60 /24;
    return (timeDiffDays * 360 * 366.25 / 365.25 * 1.000015 + equinoxTimeAngle) % 360;   // 1.00005
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
    var d = new Date(astronomicalClockTime);
    if (daylightSavingTimeSwitch.status) {
        d.addHours(1);
    }
    var time = document.getElementById("time");
    time.innerText = d.toLocaleString();
    daylightSavingTimeSwitch.draw();
}

function showAstronomicalTodayTime() {
    astronomicalClockTime = getTodayDate();
    showAstronomicalTime(astronomicalClockTime);
}

function showAstronomicalTime(d) {
    var zodiacumAngleDeg = computeZodiacumAngleDeg(d);
    var sunAngleDeg = sun2deg(dateToSunTimeAngle(d));
    var moonAngleDeg = sun2deg(computeMoonAngleDeg(d));
    rotateZodiacum(zodiacumAngleDeg);
    zodiacum.compute(zodiacumAngleDeg);
    var sun = computePositionOnEclipse(sunAngleDeg, zodiacum);
    sunHandle.showByTime(d);
    sunSymbol.showAt(sun.x, sun.y);
    var moon = computePositionOnEclipse(moonAngleDeg, zodiacum);
    moonHandle.show(moonAngleDeg);
    moonShape.compute(sunAngleDeg, moonAngleDeg);
    moonSymbol.showAt(moon.x, moon.y, moonAngleDeg + 90);
    showDigitalTime();
}

function daylightSavingTimeOn() {
    daylightSavingTimeOnTimer = setInterval(animateDaylightSavingTimeOn, 33);
    daylightSavingTimeSwitch.on();
}

function daylightSavingTimeOff() {
    daylightSavingTimeOffTimer = setInterval(animateDaylightSavingTimeOff, 33);
    daylightSavingTimeSwitch.off();
}

constructAstronomicalClock();
drawAstronomicalClock();

daylightSavingTimeSwitch.init();
if (daylightSavingTimeSwitch.status) {
    daylightSavingTimeOff();
}

var astronomicalClockTime;

showAstronomicalTodayTime();
displayInlineById("zodiacum");
displayInlineById("moonPhase");
displayInlineById("sunSymbol");
addListener("zodiacum", zodiacWheel);
addListener("time", sunWheel);
startAstronomicalClock();
//animateDayAround();
//animateYearAround();

function addListener(id, wheelFunction) {
    // Zodiacum (year cycle)
    var element = document.getElementById(id);
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

    // Sun (day cycle)

}


function zodiacWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    stopAstronomicalClock();
    astronomicalClockTime = astronomicalClockTime.addHours(delta * 24);
    showAstronomicalTime(astronomicalClockTime);
}

function sunWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    stopAstronomicalClock();
    astronomicalClockTime = astronomicalClockTime.addHours(delta / 10);
    showAstronomicalTime(astronomicalClockTime);
}

function pressedEsc(event) {
    var x = event.which || event.keyCode;
    startAstronomicalClock();
}