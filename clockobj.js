var orbisDeclination = deg2rad(23.5);
var latitudos = deg2rad(50);
var horizontis = Math.PI / 2 - latitudos;
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
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

// not used at this time
var equator = {
    id: "equator",
    r: null,
    cx: 0,
    cy: 0,
    compute: function () {
        this.r = projection(0);
    }

};

// not used at this time
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

var sunTime = {
    id: "sunTime",
    x1: 0,
    y1: 0,
    x2: null,
    y2: null,
    r: null,
    angle: 0,
    compute: function(cancriTropicusRadius) {
        this.r = scale(cancriTropicusRadius);
        this.x2 = 0;
        this.y2 = scale(cancriTropicusRadius * 0.95);
        var element = document.getElementById(this.id);
        element.setAttribute("y2", this.y2.toString());
    },
    show: function(angleDeg) {
        var element = document.getElementById(this.id);
        element.setAttribute("transform", "rotate(" + angleDeg + ")");
        element.setAttribute("display", "inline");
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
    showSun: function(angleDeg) {
        this.r = scale(cancriTropicus.r);
        var angleRad = deg2rad(angleDeg + 90);
        this.x = Math.cos(angleRad) * this.r;
        this.y = Math.sin(angleRad) * this.r;
        var element = document.getElementById(this.id);
        element.setAttribute("transform", "rotate(" + angleDeg + ")");
        element.setAttribute("display", "inline");
        var sun = document.getElementById("sunPosition");
        sun.setAttribute("transform", "translate(" + this.x + " " + this.y + ")");
        sun.setAttribute("display", "inline");
    },

    showAt: function(xPx, yPx) {
        var sun = document.getElementById("sunPosition");
        sun.setAttribute("transform", "translate(" + xPx + " " + yPx + ")");
        sun.setAttribute("display", "inline");
    }
};

var zodiacum = {
    r: null,
    cx: 0,
    cy: 0,
    compute: function(angleDeg) {
        angleDeg = (typeof angleDeg !== 'undefined') ?  angleDeg : 0;
        var angleRad = deg2rad(angleDeg);
        this.r = (cancriTropicus.r + capricorniTropicus.r) / 2;
        this.cy = (capricorniTropicus.r - this.r) * Math.sin(angleRad);
        this.cx = (capricorniTropicus.r - this.r) * Math.cos(angleRad);
    }
};

var zodiacumCircle = {
    id: "zodiacumCircle",
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

function scale(num)
{
    return (100 * num).toString();
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
    zodiacumCircle.init();
    zodiacumEquinox.compute(equator.r);
    zodiacumSolstice.compute(cancriTropicus.r, capricorniTropicus.r);
    sunTime.compute(cancriTropicus.r);
}
