var OrbisDeclinationDeg = 23.5;
var orbisDeclination = deg2rad(OrbisDeclinationDeg);
var Latitudo = deg2rad(50);
var horizontis = Math.PI / 2 - Latitudo;
var Opacus = deg2rad(18);
var OrbisDiameter = 1;

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


var equator = {
    id: "equator",
    r: null,
    cx: 0,
    cy: 0,
    compute: function () {
        this.r = projection(0);
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


var capricorniTropicus = {
    id: "capricorniTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(-orbisDeclination);
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

    showAt: function(xPx, yPx) {
        var sun = document.getElementById("sunPosition");
        sun.setAttribute("transform", "translate(" + xPx + " " + yPx + ")");
        displayInlineByElement(sun);
    }
};

var starSymbol = {
    id: "starSymbol",
    x: null,
    y: null,
    init: function (zodiacumEquinox) {
        this.x = scale(zodiacumEquinox.x1);
        this.y = scale(zodiacumEquinox.y1);
    },
    show: function() {
        var star = document.getElementById("starPosition");
        star.setAttribute("transform", "translate(" + this.x + " " + this.y + ")");
        displayInlineByElement(star);
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
        var pointOnEquator1 = polar2Cartesian(0, 0, equator.r, 90 + OrbisDeclinationDeg);
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
    init: function(zodiacumInnerCircle, outerPoints) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1];
        this.cx = zodiacumInnerCircle.cx;
        this.cy = zodiacumInnerCircle.cy;
        this.r = zodiacumInnerCircle.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            // var twoPoints = this.computeProjection(equatorPoints.point[i]);
            var twoPoints = intersectionOfCircleAndLine(zodiacumInnerCircle, outerPoints.point[i], this.centralPoint);
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
        this.y1 = -equatorRadius * 1.2;
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
        var sunAngleDeg = normalizeAngleDeg(sunAngleDeg);
        var moonAngleDeg = normalizeAngleDeg(moonAngleDeg);
        var moonAge = normalizeAngleDeg(sunAngleDeg - moonAngleDeg);
        var moonPhase = document.getElementById("moonPhase");
        if (moonAge < 0) {  // swap B&W background of moon symbol
            moonPhase.setAttribute("style", "transform: rotate(180deg)");
        } else {
            moonPhase.setAttribute("style", "transform: rotate(0deg)");
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

var oldTimeOuterCircle = {
    id: "oldTimeOuterCircle",
    r: null,
    cx: null,
    cy: null,
    init: function() {
        this.r = cancriTropicus.r * 1.14;
        this.cx = cancriTropicus.cx;
        this.cy = cancriTropicus.cy;
    }
};

var oldTimeInnerCircle = {
    id: "oldTimeInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeOuterCircle) {
        this.r = oldTimeOuterCircle.r * 0.89;
        this.cx = oldTimeOuterCircle.cx;
        this.cy = oldTimeOuterCircle.cy;
    }
};

var holeCircleOldTimeInner = {
    id: "holeCircleOldTimeInner",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeInnerCircle) {
        this.r = oldTimeInnerCircle.r;
        this.cx = oldTimeInnerCircle.cx;
        this.cy = oldTimeInnerCircle.cy;
    }
};

var maskCircleOldTimeOuter = {
    id: "maskCircleOldTimeOuter",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeOuterCircle) {
        this.r = oldTimeOuterCircle.r;
        this.cx = oldTimeOuterCircle.cx;
        this.cy = oldTimeOuterCircle.cy;
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
    orbisCenter.compute(OrbisDiameter);
    orbis.compute(OrbisDiameter);
    // orbisAxonX.init();
    // orbisAxonY.init();
    //planum.init();
    //orbisEquator.compute(OrbisDiameter);
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
    opacusHorizontis.compute(horizontis, Opacus);
    //clickMePoint.init();

    oldTimeOuterCircle.init();
    oldTimeInnerCircle.init(oldTimeOuterCircle);
    holeCircleOldTimeInner.init(oldTimeInnerCircle);
    maskCircleOldTimeOuter.init(oldTimeOuterCircle);

    zodiacum.init();
    zodiacumOuterCircle.init();
    zodiacumInnerCircle.init(zodiacumOuterCircle);
    zodiacumCentralCircle.init(zodiacumInnerCircle, zodiacumOuterCircle);
    holeCircleZodiacumInner.init(zodiacumInnerCircle);
    maskCircleZodiacumOuter.init(zodiacumOuterCircle);
    zodiacumEquinox.compute(equator.r);
    zodiacumSolstice.compute(cancriTropicus.r, capricorniTropicus.r);
    zodiacumPieces.init(zodiacumOuterCircle, zodiacumInnerCircle);
    starSymbol.init(zodiacumEquinox);
    sunHandle.init(cancriTropicus.r);
    moonHandle.init(cancriTropicus.r);
    moonShape.init();
    equatorPoints.init(equator);
    equatorPointsRotated.init(equator);
    zodiacumOuterPoints.init(zodiacum, equatorPoints);
    zodiacumCenterPoints.init(zodiacumCentralCircle, equatorPointsRotated);
    zodiacumInnerPoints.init(zodiacumInnerCircle, zodiacumOuterPoints);
}
