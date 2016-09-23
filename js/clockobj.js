var orbisDeclinationDeg = 23.5;
var orbisDeclination = deg2rad(orbisDeclinationDeg);
var latitudo = deg2rad(50);
var horizontis = Math.PI / 2 - latitudo;
var opacus = deg2rad(18);
var orbisDiameter = 1;

var orbisCenter = {
    id: "orbisCenter",
    x: 0,
    y: null,
    compute: function (orbisDiameter) {
        this.y = orbisDiameter / 2;
    }
};

var orbis = {
    id: "orbis",
    r: null,
    cx: 0,
    cy: null,
    compute: function(orbisDiameter) {
        this.r = orbisDiameter / 2;
        this.cy = this.r;
    }
};

var orbisAxonX = {
    id: "orbisAxonX",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    overlap: 0.1,
    init: function() {
        this.x1 = -orbis.r - this.overlap;
        this.y1 = orbis.r;
        this.x2 = orbis.r + this.overlap;
        this.y2 = orbis.r;
    }
};

var orbisAxonY = {
    id: "orbisAxonY",
    x1: 0,
    y1: null,
    x2: 0,
    y2: null,
    overlap: 0.1,
    init: function() {
        this.y1 = - this.overlap;
        this.y2 = 2 * orbis.r + this.overlap;
    }
};

var orbisEquator = {
    id: "orbisEquator",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisDiameter) {
        var radius = orbisDiameter / 2;
        this.x1 = -radius;
        this.y1 = radius;
        this.x2 = radius;
        this.y2 = radius;
    }
};

var clickMePoint = {
    id: "clickMePoint",
    x: 0,
    y: 0,
    init: function () {
    }
};

var orbisCancriTropicus = {
    id: "orbisCancriTropicus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, orbisDeclination) {
        var orbisX = Math.cos(orbisDeclination) * orbisRadius;
        var orbisY = Math.sin(orbisDeclination) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = this.y1;
    }
};

var orbisCapricorniTropicus = {
    id: "orbisCapricorniTropicus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, orbisDeclination) {
        var orbisX = Math.cos(orbisDeclination) * orbisRadius;
        var orbisY = - Math.sin(orbisDeclination) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = this.y1;
    }
};

var orbisLatitudo = {
    id: "orbisLatitudo",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, horizontis) {
        var orbisX = Math.cos(-horizontis) * orbisRadius;
        var orbisY = Math.sin(-horizontis) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = orbisCenter.y - orbisY;
    }
};

var orbisOpacus = {
    id: "orbisOpacus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    init: function () {
        var orbisX1 = Math.cos(oppositeAngle(horizontis + opacus)) * orbis.r;
        var orbisY1 = Math.sin(oppositeAngle(horizontis + opacus)) * orbis.r;
        var orbisX2 = Math.cos(horizontis - opacus) * orbis.r;
        var orbisY2 = Math.sin(horizontis - opacus) * orbis.r;
        this.x1 = orbisCenter.x + orbisX1;
        this.y1 = orbisCenter.y + orbisY1;
        this.x2 = orbisCenter.x + orbisX2;
        this.y2 = orbisCenter.y + orbisY2;
    }
};

var planum = {
    id: "planum",
    x1: null,
    y1: 0,
    x2: null,
    y2: 0,
    overlap: 0.1,
    init: function () {
        var planumX = projection(orbisDeclination) + this.overlap;
        this.x1 = planumX;
        this.x2 = -planumX;
    }
};

var equatorProjection = {
    id: "equatorProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    overlap: 0.1,
    x: null,
    y: null,
    init: function () {
        this.x = - projection(0);
        this.y = 0;
        this.x1 = this.overlap;
        this.y1 = 2 * orbis.r + this.overlap;
        this.x2 = this.x - this.overlap;
        this.y2 = this.y - this.overlap;
    }
};

var equator = {
    id: "equator",
    r: null,
    cx: 0,
    cy: 0,
    compute: function () {
        this.r = projection(0);
    }

};

var cancriTropicusProjection = {
    id: "cancriTropicusProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.x = this.x2;
        this.y = 0;
        this.y1 = 2 * orbis.r;
        this.x2 = - projection(orbisDeclination);
        this.x = this.x2;
    }
};

var cancriTropicus = {
    id: "cancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(orbisDeclination);
    }
};

var clipCircleCancriTropicus = {
    id: "clipCircleCancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(orbisDeclination);
    }
};

var capricorniTropicusProjection = {
    id: "capricorniTropicusProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 =  2 * orbis.r;
        this.x = - projection(-orbisDeclination);
        this.x2 = this.x;
    }
};

var capricorniTropicus = {
    id: "capricorniTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(-orbisDeclination);
    }
};

var latitudoProjectionA = {
    id: "latitudoProjectionA",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x2 = projection(horizontis);
    }
};

var latitudoProjectionB = {
    id: "latitudoProjectionB",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x = projection(oppositeAngle(horizontis));
        this.x2 = this.x;
    }
};

var latitudoHorizontis = {
    id: "latitudoHorizontis",
    r: null,
    cx: null,
    cy: 0,
    init: function () {
        var x1 = projection(horizontis);
        var x2 = projection(oppositeAngle(horizontis));
        this.cx = (x1 + x2) / 2 ;
        this.r = Math.abs(x2 - x1) / 2;
    }
};

var opacusProjectionA = {
    id: "opacusProjectionA",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x2 = projection(horizontis - opacus);
    }
};

var opacusProjectionB = {
    id: "opacusProjectionB",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x = projection(oppositeAngle(horizontis + opacus));
        this.x2 = this.x;
    }
};

var opacusHorizontis = {
    id: "opacusHorizontis",
    r: null,
    cx: null,
    cy: 0,
    compute: function (horizontis, opacus) {
        var x1 = projection(horizontis - opacus);
        var x2 = projection(oppositeAngle(horizontis + opacus));
        this.cx = (x1 + x2) / 2 ;
        this.r = Math.abs(x2 - x1) / 2;
    }
};

var sunHandle = {
    id: "sunHandle",
    x1: 0,
    y1: 0,
    x2: null,
    y2: null,
    r: null,
    angle: 0,
    init: function(cancriTropicusRadius) {
        this.r = scale(cancriTropicusRadius);
        this.x2 = 0;
        this.y2 = scale(cancriTropicusRadius * 0.95);
        var handle = document.getElementById(this.id);
        handle.setAttribute("y2", this.y2.toString());
    },
    show: function(angleDeg) {
        var handle = document.getElementById(this.id);
        handle.setAttribute("transform", "rotate(" + angleDeg + ")");
        displayInlineByElement(handle)
    },
    showByTime: function(d) {
        this.show(dateToSunTimeAngle(d));
    }
};

var sunSymbol = {
    id: "sunSymbol",
    angle: 0,
    r: null,
    x: null,
    y: null,
    // showSun: function(angleDeg) {
    //     this.r = scale(cancriTropicus.r);
    //     var angleRad = deg2rad(angleDeg + 90);
    //     this.x = Math.cos(angleRad) * this.r;
    //     this.y = Math.sin(angleRad) * this.r;
    //     var element = document.getElementById(this.id);
    //     element.setAttribute("transform", "rotate(" + angleDeg + ")");
    //     element.setAttribute("display", "inline");
    //     var sun = document.getElementById("sunPosition");
    //     sun.setAttribute("transform", "translate(" + this.x + " " + this.y + ")");
    //     sun.setAttribute("display", "inline");
    // },

    showAt: function(xPx, yPx) {
        var sun = document.getElementById("sunPosition");
        sun.setAttribute("transform", "translate(" + xPx + " " + yPx + ")");
        displayInlineByElement(sun);
    }
};

var moonHandle = {
    id: "moonHandle",
    x1: 0,
    y1: 0,
    x2: null,
    y2: null,
    r: null,
    angle: 0,
    init: function(cancriTropicusRadius) {
        this.r = scale(cancriTropicusRadius);
        this.y2 = 0;
        this.x2 = scale(cancriTropicusRadius * 0.95);
        var handle = document.getElementById(this.id);
        handle.setAttribute("x2", this.x2.toString());
    },
    show: function(angleDeg) {
        var handle = document.getElementById(this.id);
        handle.setAttribute("transform", "rotate(" + angleDeg + ")");
        displayInlineByElement(handle)
    }
};

var moonSymbol = {
    id: "moonSymbol",
    angle: 0,
    r: null,
    x: null,
    y: null,

    showAt: function(xPx, yPx, rotationDeg) {
        var moon = document.getElementById("moonPosition");
        moon.setAttribute("transform", "translate(" + xPx + " " + yPx + ") rotate(" + rotationDeg  + ")");
        displayInlineByElement(moon);
    }
};

var zodiacum = {
    r: null,
    cx: 0,
    cy: 0,
    c0: {x: null, y: null}, // center X, Y coordinates while angle = 0
    e0: {x: null, y: null}, // eclipse pole X, Y coordinates while angle = 0

    init: function() {
        this.compute(0);
        this.c0 = {x: this.cx, y: this.cy};
        this.e0 = this.eclipsePoleConstruction();
    },
    compute: function(angleDeg) {
        angleDeg = (typeof angleDeg !== 'undefined') ?  angleDeg : 0;
        var angleRad = deg2rad(angleDeg);
        this.r = (cancriTropicus.r + capricorniTropicus.r) / 2;
        var centerRotationRadius = capricorniTropicus.r - this.r;
        this.cy = centerRotationRadius * Math.sin(angleRad);
        this.cx = centerRotationRadius * Math.cos(angleRad);
    },
    eclipsePoleConstruction: function () {
        var pointOnEquator1 = polar2Cartesian(0, 0, equator.r, 90 + orbisDeclinationDeg);
        var pointOnEquator2 = {x:0, y: -equator.r};
        var lineGeneralEquationConstants = generalEquationConstantsOfLine(pointOnEquator1, pointOnEquator2);
        var x = intersectionOfLineAndXaxis(lineGeneralEquationConstants);
        return {x: x, y: 0};
    }
};

var zodiacumOuterCircle = {
    id: "zodiacumOuterCircle",
    r: null,
    cx: null,
    cy: null,
    init: function() {
        zodiacum.compute(0);
        this.r = zodiacum.r;
        this.cx = zodiacum.cx;
        this.cy = zodiacum.cy;
    }
};

var zodiacumInnerCircle = {
    id: "zodiacumInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumOuterCircle) {
        this.r = zodiacumOuterCircle.r * 0.8;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var zodiacumCentralCircle = {
    id: "zodiacumInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumInnerCircle, zodiacumOuterCircle) {
        this.r = (zodiacumOuterCircle.r + zodiacumInnerCircle.r) / 2;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var holeCircleZodiacumInner = {
    id: "holeCircleZodiacumInner",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumInnerCircle) {
        this.r = zodiacumInnerCircle.r;
        this.cx = zodiacumInnerCircle.cx;
        this.cy = zodiacumInnerCircle.cy;
    }
};

var maskCircleZodiacumOuter = {
    id: "maskCircleZodiacumOuter",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumOuterCircle) {
        this.r = zodiacumOuterCircle.r;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var zodiacumPieces = {
    top: null,
    bottom: null,
    init: function (zodiacumOuterCircle, zodiacumInnerCircle) {
        var cx = scale(zodiacumOuterCircle.cx);
        var cy = scale(zodiacumOuterCircle.cy);
        var r1 = scale(zodiacumOuterCircle.r);
        var r2 = scale(zodiacumInnerCircle.r);
        this.top = [];
        this.bottom = [];

        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30;
            this.top[i] = polar2Cartesian(cx, cy, r1, angleDeg - 90);
            this.bottom[i] = polar2Cartesian(cx, cy, r2, angleDeg - 90);
        }
    }
};

// Points on equator for construction of Zodiac
var equatorPoints = {
    point: null,
    init: function (equator) {
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30;
            this.point[i] = polar2Cartesian(equator.cx, equator.cy, equator.r, angleDeg - 90);
        }
    }
};

// Points on equator for construction of Zodiac - rotation 15 deg
var equatorPointsRotated = {
    point: null,
    init: function (equator) {
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30 - 15;
            this.point[i] = polar2Cartesian(equator.cx, equator.cy, equator.r, angleDeg - 90);
        }
    }
};

var zodiacumOuterPoints = {
    point: null,
    eclipsePole: {x: null, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacum, equatorPoints) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];
        this.eclipsePole = zodiacum.e0;
        this.cx = zodiacum.cx;
        this.cy = zodiacum.cy;
        this.r = zodiacum.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var twoPoints = this.computeProjection(equatorPoints.point[i]);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return intersectionOfCircleAndLine(zodiacum, this.eclipsePole, point)
    }
};

var zodiacumInnerPoints = {
    point: null,
    centralPoint: {x: 0, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacumInnerCircle, equatorPoints) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1];
        this.cx = zodiacumInnerCircle.cx;
        this.cy = zodiacumInnerCircle.cy;
        this.r = zodiacumInnerCircle.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var twoPoints = this.computeProjection(equatorPoints.point[i]);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return intersectionOfCircleAndLine(zodiacumInnerCircle, this.centralPoint, point)
    }
};

var zodiacumCenterPoints = {
    point: null,
    centralPoint: {x: 0, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacumCentralCircle, equatorPointsRotated) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];
        this.eclipsePole = zodiacum.e0;
        this.cx = zodiacumCentralCircle.cx;
        this.cy = zodiacumCentralCircle.cy;
        this.r = zodiacumCentralCircle.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var twoPoints = this.computeProjection(equatorPointsRotated.point[i]);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return intersectionOfCircleAndLine(zodiacumCentralCircle, this.centralPoint, point)
    }
};

var zodiacumEquinox = {
    id:"zodiacumEquinox",
    x1: 0,
    y1: null,
    x2: 0,
    y2: null,
    compute: function(equatorRadius) {
        this.y1 = -equatorRadius;
        this.y2 = equatorRadius;
    }
};

var zodiacumSolstice = {
    id:"zodiacumSolstice",
    x1: null,
    y1: 0,
    x2: null,
    y2: 0,
    compute: function(cancriTropicusRadius, capricorniTropicusRadius) {
        this.x1 = capricorniTropicusRadius;
        this.x2 = - cancriTropicusRadius;
    }
};

var moonShape = {
    r: 6,
    init: function() {
        var dw = describeArc(0, 0, this.r, -90, 90);
        var moonWhite = document.getElementById("moonWhite");
        moonWhite.setAttribute("d", dw);
        moonWhite.setAttribute("r", this.r.toString());

        var db = describeArc(0, 0, this.r, 90, -90);
        var moonBlack = document.getElementById("moonBlack");
        moonBlack.setAttribute("d", db);
        moonBlack.setAttribute("r", this.r.toString());
    },
    compute: function(sunAngleDeg, moonAngleDeg) {
        var moonAge = normalizeAngleDeg(sunAngleDeg - moonAngleDeg);
        if (moonAge < 0) {  // swap B&W background of moon symbol
            var moonPhase = document.getElementById("moonPhase");
            moonPhase.setAttribute("style", "transform: rotate(180deg)");
        }
        // make light and dark part of the moon
        if (Math.abs(moonAge) < 90) {
            var darkness = moonAge;
            var moonDark = document.getElementById("moonDark");
            moonDark.setAttribute("style", "transform: rotateY(" + darkness + "deg)");
            displayInlineByElement(moonDark);
            displayNoneById("moonLight");
        } else {
            var moonLight = document.getElementById("moonLight");
            var lightness = 180 - Math.abs(moonAge);
            moonLight.setAttribute("style", "transform: rotateY(" + lightness + "deg)");
            displayInlineByElement(moonLight);
            displayNoneById("moonDark");
        }
    }
};

function scale(num)
{
    return (100 * num);
}

function projection(alpha) {
    return (2 * orbis.r * Math.tan(Math.PI / 4 + alpha/2));
}

function constructAstronomicalClock() {
    orbisCenter.compute(orbisDiameter);
    orbis.compute(orbisDiameter);
    // orbisAxonX.init();
    // orbisAxonY.init();
    //planum.init();
    //orbisEquator.compute(orbisDiameter);
    //equatorProjection.init();
    // orbisCancriTropicus.compute(orbisCenter, orbis.r, orbisDeclination);
    // orbisCapricorniTropicus.compute(orbisCenter, orbis.r, orbisDeclination);
    // orbisLatitudo.compute(orbisCenter, orbis.r, horizontis);
    // orbisOpacus.init();
    // cancriTropicusProjection.init();
    // capricorniTropicusProjection.init();
    equator.compute();
    cancriTropicus.compute(orbisDeclination);
    clipCircleCancriTropicus.compute(orbisDeclination);
    capricorniTropicus.compute(orbisDeclination);
    // latitudoProjectionA.init();
    // latitudoProjectionB.init();
    latitudoHorizontis.init();
    // opacusProjectionA.init();
    // opacusProjectionB.init();
    opacusHorizontis.compute(horizontis, opacus);
    //clickMePoint.init();
    zodiacum.init();
    zodiacumOuterCircle.init();
    zodiacumInnerCircle.init(zodiacumOuterCircle);7
    zodiacumCentralCircle.init(zodiacumInnerCircle, zodiacumOuterCircle);
    holeCircleZodiacumInner.init(zodiacumInnerCircle);
    maskCircleZodiacumOuter.init(zodiacumOuterCircle);
    zodiacumEquinox.compute(equator.r);
    zodiacumSolstice.compute(cancriTropicus.r, capricorniTropicus.r);
    zodiacumPieces.init(zodiacumOuterCircle, zodiacumInnerCircle);
    sunHandle.init(cancriTropicus.r);
    moonHandle.init(cancriTropicus.r);
    moonShape.init();
    equatorPoints.init(equator);
    equatorPointsRotated.init(equator);
    zodiacumOuterPoints.init(zodiacum, equatorPoints);
    zodiacumCenterPoints.init(zodiacumCentralCircle, equatorPointsRotated);
    zodiacumInnerPoints.init(zodiacumInnerCircle, equatorPoints);
}
