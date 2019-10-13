import {deg2rad, polar2Cartesian} from "./math";
import {
    cancriTropicus,
    capricorniTropicus,
    clipCircleCancriTropicus,
    equator, holeCircleOldTimeInner,
    holeCircleZodiacumInner,
    latitudoHorizontis, maskCircleOldTimeOuter,
    maskCircleZodiacumOuter, oldTimeInnerCircle, oldTimeOuterCircle,
    opacusHorizontis,
    scale,
    zodiacumCenterPoints, zodiacumEquinox, zodiacumInnerCircle,
    zodiacumInnerPoints, zodiacumOuterCircle,
    zodiacumOuterPoints,
    zodiacumSolstice
} from "./clockobj";
import {deg2sun} from "./time";

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function scalePoint(point) {
    return {x: scale(point.x), y: scale(point.y)}
}
function setXYById(id, x, y) {
    const element = document.getElementById(id);
    element.setAttribute("x" , x);
    element.setAttribute("y" , y);
}
function setTranslateById(id, translate) {
    const element = document.getElementById(id);
    element.setAttribute(
        "transform", 'translate(' + translate.x + ', ' + translate.y + ')'
    );
}

function setRotateById(id, rotation, center) {
    let rotationCenter = "0,0";
    if (typeof center !== 'undefined') {
        rotationCenter = center.x + "," + center.y;
    }
    const element = document.getElementById(id);
    element.setAttribute("transform", ["rotate(", rotation, " ", rotationCenter, ")"].join("")    );
}

function drawCircle(obj) {
    const element = document.getElementById(obj.id);
    setCircleAttributes(element, obj.cx, obj.cy, obj.r);
    displayInlineByElement(element);
}

function drawLine(line) {
    const element = document.getElementById(line.id);
    element.setAttribute("x1", scale(line.x1));
    element.setAttribute("y1", scale(line.y1));
    element.setAttribute("x2", scale(line.x2));
    element.setAttribute("y2", scale(line.y2));
    displayInlineByElement(element);
}

function setCircleAttributesById(circleId, cx, cy, r) {
    const circleElement = document.getElementById(circleId);
    setCircleAttributes(circleElement, cx, cy, r);
}

function setCircleAttributes(circleElement, cx, cy, r) {
    circleElement.setAttribute("r", scale(r));
    circleElement.setAttribute("cx", scale(cx));
    circleElement.setAttribute("cy", scale(cy));
}

function setGradientAttributes(gradientId, cx, cy, r) {
    const gradientElement = document.getElementById(gradientId);
    setCircleAttributes(gradientElement, cx, cy, r);
}

function drawCircleWithGradient(obj) {
    const gradientId = "gradient" + obj.id.capitalizeFirstLetter();
    setGradientAttributes(gradientId, obj.cx, obj.cy, obj.r);
    drawCircle(obj);
}

export function displayInlineById(id) {
    const element = document.getElementById(id);
    displayInlineByElement(element);
}

export function displayInlineByElement(element) {
    element.setAttribute("display", "inline");
}

export function displayNoneById(id) {
    const element = document.getElementById(id);
    displayNoneByElement(element);
}

function displayNoneByElement(element) {
    element.setAttribute("display", "none");
}

export function rotateSvgById(id, angleDeg) {
    document.getElementById(id).setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawClockAxisSystem() {
    const e = document.getElementById("clockAxisSystem");
    e.setAttribute("display", "inline");
}

function drawClockNumbers() {
    const r = scale(cancriTropicus.r) * 0.9;
    for (let i = 0; i < 24; i++) {
        const textElement = document.getElementById("number" + i.toString());
        const positionElement =  document.getElementById("position" + + i.toString());
        const angle = i * 15;
        const angleRad = deg2rad(deg2sun(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        positionElement.setAttribute("transform", "translate(" + x + " " + y + ")");
        textElement.setAttribute("transform", "rotate(" + angle + " 0,0)");
    }
    displayInlineById("clock");
}

export function rotateZodiacum(angleDeg) {   // angleDeg from autumn equinox   (0 ... equinox, 90 ... winter solstice)
    const zodiacumGroup = document.getElementById("zodiacum");
    zodiacumGroup.setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawZodiacum() {
    drawCircle(maskCircleZodiacumOuter);
    drawCircle(holeCircleZodiacumInner);
    drawCircle(zodiacumOuterCircle);
    drawCircle(zodiacumInnerCircle);
    drawLine(zodiacumEquinox);
    drawLine(zodiacumSolstice);

    for (let i = 0; i < 12; i++) {
        const leftOuter = scalePoint(zodiacumOuterPoints.point[i]);
        const leftInner = scalePoint(zodiacumInnerPoints.point[i]);
        const centerPoint = scalePoint(zodiacumCenterPoints.point[i]);
        setTranslateById("positionSign" + i, centerPoint);
        const id = "sign" + i;
        const sign = document.getElementById(id);
        sign.setAttribute("x", "0");
        sign.setAttribute("y", "0");
        sign.setAttribute("width", "110");
        sign.setAttribute("height", "110");
        setRotateById(id, -i * 30 - 15, {x: 0, y: 0});

        const arcZ = document.getElementById("arcZ" + i.toString());
        const leftBar = ["M", leftOuter.x, leftOuter.y, "L", leftInner.x, leftInner.y].join(' ');
        const dz = [leftBar].join(' ');
        arcZ.setAttribute("d", dz);
        arcZ.setAttribute("stroke", "orange");
        arcZ.setAttribute("stroke-width", "2");
        arcZ.setAttribute("fill", "none");
    }
}

export function drawAstronomicalClock() {
    drawCircle(clipCircleCancriTropicus);
    drawCircleWithGradient(equator);
    drawCircleWithGradient(cancriTropicus);
    drawCircleWithGradient(capricorniTropicus);
    drawCircleWithGradient(latitudoHorizontis);
    drawCircle(opacusHorizontis);
    drawClockNumbers();
    drawInfoText();
    drawZodiacum();
    drawOldTime();
}


export function describeArc(x, y, radius, startAngle, endAngle) {
    const start = polar2Cartesian(x, y, radius, endAngle);
    const end = polar2Cartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return describeArcByCartesian(start, radius, largeArcFlag, end);
}

function describeArcByCartesian(start, radius, largeArcFlag, end) {
    return [
        "M", parseFloat(start.x.toFixed(8)), parseFloat(start.y.toFixed(8)),
        "A", radius, radius, 0, largeArcFlag, 0, parseFloat(end.x.toFixed(8)), parseFloat(end.y.toFixed(8))
    ].join(" ");
}

function drawInfoText() {
    const r = scale(equator.r) * 1.1;
    for (let i = 0; i < 16; i++) {
        const textElement = document.getElementById("info" + i.toString());
        const angle = i * 8 - 60;
        const angleRad = deg2rad(deg2sun(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        textElement.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + angle + " 0,0)");
        displayInlineById("info" + i.toString());
    }
}

function drawOldTime() {
    drawCircle(maskCircleOldTimeOuter);
    drawCircle(holeCircleOldTimeInner);
    drawCircle(oldTimeOuterCircle);
    drawCircle(oldTimeInnerCircle);
    const r = scale(cancriTropicus.r) * 1.02;
    for (let i = 1; i < 25; i++) {
        const imageElement = document.getElementById("oldtime" + i.toString());
        const angle = (i - 1) * 15;
        const angleRad = deg2rad(deg2sun(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        imageElement.setAttribute("x", "-25");
        imageElement.setAttribute("y", "-15");
        imageElement.setAttribute("width", "110");
        imageElement.setAttribute("height", "110");
        imageElement.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + angle + " 0,0)");
        displayInlineById("oldtime" + i.toString());
    }
}


export function displayWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

export function displayHeight() {
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}
