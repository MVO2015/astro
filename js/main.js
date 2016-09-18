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
    var equinoxDate = new Date(2016,8,22,16,20,41);    // autumn equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    return ((date.getTime() - equinoxDate.getTime()) / 60000 / 4 * 366 / 365 + equinoxTimeAngle) % 360;
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
    var d = getTodayDate();
    if (daylightSavingTimeSwitch.status) {
        d.addHours(1);
    }
    var time = document.getElementById("time");
    time.innerText = d.toLocaleString();
    daylightSavingTimeSwitch.draw();
}

function showAstronomicalTodayTime() {
    var d = getTodayDate();
    showAstronomicalTime(d);
}

function showAstronomicalTime(d) {
    var zodiacumAngleDeg = computeZodiacumAngleDeg(d);
    var sunAngleDeg = sun2deg(dateToSunTimeAngle(d));
    var moonAngleDeg = sun2deg(computeMoonAngleDeg(d));
    drawZodiacum(zodiacumAngleDeg);
    zodiacum.compute(zodiacumAngleDeg);
    var sun = computePositionOnEclipse(sunAngleDeg, zodiacum);
    sunHandle.showByTime(d);
    sunSymbol.showAt(sun.x, sun.y);
    var moon = computePositionOnEclipse(moonAngleDeg, zodiacum);
    moonHandle.show(moonAngleDeg);
    moonShape.compute(sunAngleDeg, moonAngleDeg);
    moonSymbol.showAt(moon.x, moon.y, moonAngleDeg + 90);
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

startDigitalClock();
startAstronomicalClock();
//animateDayAround();
//animateYearAround();
