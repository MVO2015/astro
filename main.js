function computeSunPosition(sunTimeAngleDeg) {
    var normalizedAngle = normalizeAngleDeg(sunTimeAngleDeg);
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
    sunSymbol.showAt(scale(x), scale(y));
}

function computeZodiacumAngleDeg(date) {
    var minutesYear = 60 * 24 * 365.25;
    var equinoxDate = new Date(2016,8,22,16,20,41);    // autumn equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    return ((date.getTime()-equinoxDate.getTime()) / 60000 / 4 * 366 / 365 + equinoxTimeAngle) % 360;
}

function showDigitalTime() {
    var d = getTodayDate();
    var time = document.getElementById("time");
    time.innerText = d.toString();
    daylightSavingTimeSwitch.draw();
}

function showAstronomicalTodayTime() {
    var d = getTodayDate();
    showAstronomicalTime(d);
}

function showAstronomicalTime(d) {
    var zodiacumAngleDeg = computeZodiacumAngleDeg(d);
    drawZodiacum(zodiacumAngleDeg);
    zodiacum.compute(zodiacumAngleDeg);
    computeSunPosition(sun2deg(dateToSunTimeAngle(d)));
    sunTime.showByTime(d);
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
