function scale(num)
{
    return (100 * num).toString();
}

orbisCenter.init();
orbis.init();
orbisAxonX.init();
orbisAxonY.init();
planum.init();
orbisEquator.init();
equatorProjection.init();
orbisCancriTropicus.init();
orbisCapricorniTropicus.init();
orbisLatitudo.init();
orbisOpacus.init();
cancriTropicusProjection.init();
capricorniTropicusProjection.init();
equator.init();
cancriTropicus.init();
clipCircleCancriTropicus.init();
capricorniTropicus.init();
latitudoProjectionA.init();
latitudoProjectionB.init();
latitudoHorizontis.init();
opacusProjectionA.init();
opacusProjectionB.init();
opacusHorizontis.init();
clickMePoint.init();
zodiacumCircle.init();
zodiacumEquinox.init();
zodiacumSolstice.init();
sunTime.init();
daylightSavingTimeSwitch.init();

function projection(alpha) {
    return (2 * orbis.r * Math.tan(Math.PI / 4 + alpha/2));
}

function drawPoint(point) {
    drawCircle({id: point.id, r: 0.05, cx: point.x, cy: point.y});
}

function drawCircle(obj) {
    var element = document.getElementById(obj.id);
    element.setAttribute("r", scale(obj.r));
    element.setAttribute("cx", scale(obj.cx));
    element.setAttribute("cy", scale(obj.cy));
    element.setAttribute("display", "inline");
}

function drawLine(line) {
    var element = document.getElementById(line.id);
    element.setAttribute("x1", scale(line.x1));
    element.setAttribute("y1", scale(line.y1));
    element.setAttribute("x2", scale(line.x2));
    element.setAttribute("y2", scale(line.y2));
    element.setAttribute("display", "inline");
}

function moveClickMe(x, y, onclick, color) {
    var element = document.getElementById("clickMePoint");
    element.setAttribute("onclick", onclick);
    element.setAttribute("fill", color);
    drawCircle({id: "clickMePoint", r: 0.05, cx: x, cy: y});
    var flash = document.getElementById("clickMeFlash");
    var animationName = window.getComputedStyle(flash,null).getPropertyValue("animation-name");
    if (animationName == "flash1") {
        flash.style.animationName = "flash2";
    } else {
        flash.style.animationName = "flash1";
    }
    drawCircle({id: "clickMeFlash", r: 0.1, cx: x, cy: y});
}


function hideClickMe() {
    document.getElementById("clickMe").setAttribute("display", "none");
}

function clickOrbisCenter() {
    drawLine(orbisAxonX);
    drawLine(orbisAxonY);
    drawCircle(orbis);
    drawLine(planum);
    moveClickMe(orbis.r, orbis.r, "clickOrbis()", "blue");
}

function clickOrbis() {
    drawLine(orbisEquator);
    moveClickMe(-orbis.r, orbis.r, "clickOrbisEquatorPoint()", "violet");
}

function clickOrbisEquatorPoint() {
    drawLine(equatorProjection);
    moveClickMe(equatorProjection.x, equatorProjection.y, "clickEquatorProjection()", "lightgrey");
}

function clickEquatorProjection() {
    drawCircle(equator);
    moveClickMe(orbisCancriTropicus.x2, orbisCancriTropicus.y2, "clickOrbisCancriTropicus()", "green");
}

function clickOrbisCancriTropicus() {
    drawLine(orbisCancriTropicus);
    moveClickMe(orbisCancriTropicus.x1, orbisCancriTropicus.y1, "clickCancriTropicusProjectionPoint()", "green");
}

function clickCancriTropicusProjectionPoint() {
    drawLine(cancriTropicusProjection);
    moveClickMe(cancriTropicusProjection.x, cancriTropicusProjection.y, "clickCancriTropicusProjection()", "green");
}

function clickCancriTropicusProjection() {
    drawCircle(cancriTropicus);
    moveClickMe(orbisCapricorniTropicus.x2, orbisCapricorniTropicus.y2, "clickOrbisCapricorniTropicus()", "orange");
}

function clickOrbisCapricorniTropicus() {
    drawLine(orbisCapricorniTropicus);
    moveClickMe(orbisCapricorniTropicus.x1, orbisCapricorniTropicus.y1, "clickOrbisCapricorniTropicusPoint()", "orange");
}

function clickOrbisCapricorniTropicusPoint() {
    drawLine(capricorniTropicusProjection);
    moveClickMe(capricorniTropicusProjection.x, capricorniTropicusProjection.y, "clickCapricorniTropicusProjection()", "orange");
}

function clickCapricorniTropicusProjection() {
    drawCircle(capricorniTropicus);
    moveClickMe(orbisLatitudo.x1, orbisLatitudo.y1, "clickOrbisLatitudo()", "red");
}

function clickOrbisLatitudo() {
    drawLine(orbisLatitudo);
    moveClickMe(orbisLatitudo.x2, orbisLatitudo.y2, "clickOrbisLatitudoPointA()", "red");
}

function clickOrbisLatitudoPointA() {
    drawLine(latitudoProjectionA);
    moveClickMe(orbisLatitudo.x1, orbisLatitudo.y1, "clickOrbisLatitudoPointB()", "red");
}

function clickOrbisLatitudoPointB() {
    drawLine(latitudoProjectionB);
    moveClickMe(latitudoProjectionB.x, latitudoProjectionB.y, "clickLatitudoHorizontis()", "red");
}

function clickLatitudoHorizontis() {
    drawCircle(latitudoHorizontis);
    moveClickMe(orbisOpacus.x2, orbisOpacus.y2, "clickOrbisOpacus()", "black");
}

function clickOrbisOpacus() {
    drawLine(orbisOpacus);
    moveClickMe(orbisOpacus.x1, orbisOpacus.y1, "clickOrbisOpacusPointA()", "black");
}

function clickOrbisOpacusPointA() {
    drawLine(opacusProjectionA);
    moveClickMe(orbisOpacus.x2, orbisOpacus.y2, "clickOrbisOpacusPointB()", "black");
}

function clickOrbisOpacusPointB() {
    drawLine(opacusProjectionB);
    moveClickMe(opacusProjectionB.x, opacusProjectionB.y, "clickOpacusHorizontis()", "black");
}

function clickOpacusHorizontis() {
    drawCircle(opacusHorizontis);
    clockFaceAnimationTimer = setInterval(animateClockFace, 33);    // start animation
    hideClickMe();
}

function animateClockFace() {
    var element = document.getElementById("clockFace");
    var rotation = element.getAttribute("transform").match(/\d+/)[0];       // get number from string
    if (rotation < 270) {
        rotation++;
        element.setAttribute("transform", "rotate(" + rotation + ") scale(-1, 1)");
    }
    else {
        clearInterval(clockFaceAnimationTimer);     // stop this animation
        hideDesignAnimationTimer = setInterval(animateHideDesign, 100);    // start next animation
    }
}

function animateHideDesign() {
    var element = document.getElementById("design");
    var opacity = element.getAttribute("opacity");
    if (opacity > 0) {
        opacity -= 0.05;
        element.setAttribute("opacity", opacity);
    }
    else {
        clearInterval(hideDesignAnimationTimer);     // stop this animation
        moveOrbisAnimationTimer = setInterval(animateMoveOrbis, 50);    // start next animation
    }
}

function animateMoveOrbis() {
    var element = document.getElementById("orbis");
    var cy = element.getAttribute("cy");
    if (cy > 0) {
        cy -= scale(0.02 * orbis.r);      // step ralative to the perimeter
        element.setAttribute("cy", cy);
    }
    else {
        clearInterval(moveOrbisAnimationTimer);     // stop this animation
    }
}

function drawClockNumbers() {
    var r = scale(cancriTropicus.r) * 0.9;
    for (var i = 0; i < 24; i++) {
        var textElement = document.getElementById("number" + i.toString());
        var positionElement =  document.getElementById("position" + + i.toString());
        var angle = i * 15;
        var angleRad = deg2rad(deg2sun(angle));
        var x = Math.cos(angleRad) * r;
        var y = Math.sin(angleRad) * r;
        positionElement.setAttribute("transform", "translate(" + x + " " + y + ")");
        textElement.setAttribute("transform", "rotate(" + angle + " 0,0)");
    }
    displayInlineById("clock");
}

function goSunAround() {
    var goSunAroundTimer;
    sunTime.angle = 0;
    goSunAroundTimer = setInterval(goSunAroundAnimation, 50);
    function goSunAroundAnimation() {
        var angle = sunTime.angle;
        if (angle <= 360) {
            sunTime.show(angle);
            sunSymbol.showSun(angle);
            sunTime.angle++;
        } else {
            clearInterval(goSunAroundTimer);
        }
    }
}

function drawZodiacum(angleDeg) {   // angleDeg from autumn equinox   (0 ... equinox, 90 ... winter solstice)
    var zodiacumGroup = document.getElementById("zodiacum");
    zodiacumGroup.setAttribute("transform", "rotate(" + angleDeg + ")");
    drawCircle(zodiacumCircle);
    drawLine(zodiacumEquinox);
    drawLine(zodiacumSolstice);
}

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
    var equinoxDate = new Date(2016,9,22,16,20,41);    // autumn equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    return ((date.getTime()-equinoxDate.getTime()) / 60000 / 4 * 366 / 365 + equinoxTimeAngle) % 360;
}

function goZodiacumAround() {
    var goZodiacumAroundTimer;
    animationTime = new Date(2016, 1, 21, 12, 0, 0);         // GLOBAL VARIABLE
    days = 0;
    goZodiacumAroundTimer = setInterval(goZodiacumAroundAnimation, 50);
    function goZodiacumAroundAnimation() {
        var month = animationTime.getMonth();
        if (days <= 365) {
            drawZodiacum(computeZodiacumAngleDeg(animationTime));
            days++;
            var date = animationTime.getDate() + 1;
            animationTime.setDate(date);
        } else {
            clearInterval(goZodiacumAroundTimer);
        }
    }
}

function drawClockAxisSystem() {
    var e = document.getElementById("clockAxisSystem");
    e.setAttribute("display", "inline");
}

function displayInlineById(id) {
    var element = document.getElementById(id);
    element.setAttribute("display", "inline");
}

function rotateSvgById(id, angleDeg) {
    var element = document.getElementById(id);
    element.setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawDigitalTime() {
    var d = getTodayDate();
    var time = document.getElementById("time");
    time.innerText = d.toString();
    daylightSavingTimeSwitch.clickable = d.dst();
    daylightSavingTimeSwitch.draw();
}

function drawAstronomicalTime() {
    var d = getTodayDate();
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

function animateDaylightSavingTimeOn() {
    var clockFace = document.getElementById("clockFace");
    var clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
    if (clockFaceRotation < 285) {
        clockFaceRotation++;
        clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
    }
    else {
        var numbers = document.getElementById("numbers");
        var numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
        if (numbersRotation > -15) {
            numbersRotation--;
            rotateSvgById("numbers", numbersRotation);
        } else {
            clearInterval(daylightSavingTimeOnTimer);     // stop this animation
        }
    }
}

function animateDaylightSavingTimeOff() {
    var clockFace = document.getElementById("clockFace");
    var clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
    if (clockFaceRotation > 270) {
        clockFaceRotation--;
        clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
    }
    else {
        var numbers = document.getElementById("numbers");
        var numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
        if (numbersRotation < 0) {
            numbersRotation++;
            rotateSvgById("numbers", numbersRotation);
        } else {
            clearInterval(daylightSavingTimeOffTimer);     // stop this animation
        }
    }
}

var clockFaceAnimationTimer;
var hideDesignAnimationTimer;
var moveOrbisAnimationTimer;
var goZodiacumAroundTimer;
var daylightSavingTimeOnTimer;
var daylightSavingTimeOffTimer;
drawCircle(clipCircleCancriTropicus);
// drawPoint(orbisCenter);
// moveClickMe(0, orbis.r, "clickOrbisCenter()");
drawCircle(equator);
drawCircle(cancriTropicus);
drawCircle(capricorniTropicus);
drawCircle(latitudoHorizontis);
drawCircle(opacusHorizontis);
drawClockNumbers();

clockFaceAnimationTimer = setInterval(animateClockFace, 10);    // start animation

if (daylightSavingTimeSwitch.status) {
    daylightSavingTimeOn();
}
var clockUpdateTimer = setInterval(drawDigitalTime, 100);
var astronomicalClockUpdateTimer = setInterval(drawAstronomicalTime, 1000);
