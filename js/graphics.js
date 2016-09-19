String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function drawPoint(point) {
    drawCircle({id: point.id, r: 0.05, cx: point.x, cy: point.y});
}

function drawCircle(obj) {
    var element = document.getElementById(obj.id);
    setCircleElementAttributes(element, obj.cx, obj.cy, obj.r);
    displayInlineByElement(element);
}

function drawLine(line) {
    var element = document.getElementById(line.id);
    element.setAttribute("x1", scale(line.x1));
    element.setAttribute("y1", scale(line.y1));
    element.setAttribute("x2", scale(line.x2));
    element.setAttribute("y2", scale(line.y2));
    displayInlineByElement(element);
}

function setCircleElementAttributes(circleElement, cx, cy,r) {
    circleElement.setAttribute("r", scale(r));
    circleElement.setAttribute("cx", scale(cx));
    circleElement.setAttribute("cy", scale(cy));
}

function setGradientAttributes(gradientId, cx, cy, r) {
    var gradientElement = document.getElementById(gradientId);
    setCircleElementAttributes(gradientElement, cx, cy, r);
}

function drawCircleWithGradient(obj) {
    var gradientId = "gradient" + obj.id.capitalizeFirstLetter();
    setGradientAttributes(gradientId, obj.cx, obj.cy, obj.r);
    drawCircle(obj);
}

function displayInlineById(id) {
    var element = document.getElementById(id);
    displayInlineByElement(element);
}

function displayInlineByElement(element) {
    element.setAttribute("display", "inline");
}

function displayNoneById(id) {
    var element = document.getElementById(id);
    displayNoneByElement(element);
}

function displayNoneByElement(element) {
    element.setAttribute("display", "none");
}

function rotateSvgById(id, angleDeg) {
    var element = document.getElementById(id);
    element.setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawClockAxisSystem() {
    var e = document.getElementById("clockAxisSystem");
    e.setAttribute("display", "inline");
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

function drawZodiacum(angleDeg) {   // angleDeg from autumn equinox   (0 ... equinox, 90 ... winter solstice)
    var zodiacumGroup = document.getElementById("zodiacum");
    zodiacumGroup.setAttribute("transform", "rotate(" + angleDeg + ")");
    drawCircle(zodiacumCircle);
    drawLine(zodiacumEquinox);
    drawLine(zodiacumSolstice);
}

function drawAstronomicalClock() {
    drawCircle(clipCircleCancriTropicus);
    // drawPoint(orbisCenter);
    // moveClickMe(0, orbis.r, "clickOrbisCenter()");
    drawCircleWithGradient(equator);
    drawCircleWithGradient(cancriTropicus);
    drawCircleWithGradient(capricorniTropicus);
    drawCircleWithGradient(latitudoHorizontis);
    drawCircle(opacusHorizontis);
    drawClockNumbers();
}


function describeArc(x, y, radius, startAngle, endAngle){

    var start = polar2Cartesian(x, y, radius, endAngle);
    var end = polar2Cartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", parseFloat(start.x.toFixed(8)), parseFloat(start.y.toFixed(8)),
        "A", radius, radius, 0, largeArcFlag, 0, parseFloat(end.x.toFixed(8)), parseFloat(end.y.toFixed(8))
    ].join(" ");
    return d;
}

