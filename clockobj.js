var orbisDecl = deg2rad(23.5);
var latitudos = deg2rad(50);
var horizontis = Math.PI / 2 - latitudos;
var opacus = deg2rad(18);

var orbisCenter = {
    id: "orbisCenter",
    x: 0,
    y: null,
    init: function () {
        this.y = orbis.r;
    }
};

var orbis = {
    id: "orbis",
    r: 0.5,
    cx: 0,
    cy: null,
    init: function() {
        this.cy = this.r
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
    init: function () {
        this.x1 = -orbis.r;
        this.y1 = orbis.r;
        this.x2 = orbis.r;
        this.y2 = orbis.r;
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
    init: function () {
        var orbisX = Math.cos(orbisDecl) * orbis.r;
        var orbisY = Math.sin(orbisDecl) * orbis.r;
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
    init: function () {
        var orbisX = Math.cos(orbisDecl) * orbis.r;
        var orbisY = - Math.sin(orbisDecl) * orbis.r;
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
    init: function () {
        var orbisX = Math.cos(-horizontis) * orbis.r;
        var orbisY = Math.sin(-horizontis) * orbis.r;
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
        var planumX = projection(orbisDecl) + this.overlap;
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
    init: function () {
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
        this.x2 = - projection(orbisDecl);
        this.x = this.x2;
    }
};

var cancriTropicus = {
    id: "cancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    init: function () {
        this.r = projection(orbisDecl);
        var element = document.getElementById("gradientCancriTropicus");
        element.setAttribute("r", scale(this.r));
        element.setAttribute("cx", scale(this.cx));
        element.setAttribute("cy", scale(this.cy));
    }
};

var clipCircleCancriTropicus = {
    id: "clipCircleCancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    init: function () {
        this.r = projection(orbisDecl);
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
        this.x = - projection(-orbisDecl);
        this.x2 = this.x;
    }
};

var capricorniTropicus = {
    id: "capricorniTropicus",
    r: null,
    cx: 0,
    cy: 0,
    init: function () {
        this.r = projection(-orbisDecl);
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
    init: function () {
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
    init: function() {
        this.r = scale(cancriTropicus.r);
        this.x2 = 0;
        this.y2 = scale(cancriTropicus.r * 0.95);
        var element = document.getElementById(this.id);
        element.setAttribute("y2", this.y2.toString());
    },
    show: function(angleDeg) {
        var element = document.getElementById(this.id);
        element.setAttribute("transform", "rotate(" + angleDeg + ")");
        element.setAttribute("display", "inline");
    },
    showTime: function() {
        var d = new Date();
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

var zodiacumCircle = {
    id: "zodiacumCircle",
    r: null,
    cx: 0,
    cy: 0,
    init: function(angleDeg) {
        angleDeg = (typeof angleDeg !== 'undefined') ?  angleDeg : 0;
        var angleRad = deg2rad(angleDeg);
        this.r = (cancriTropicus.r + capricorniTropicus.r) / 2;
        this.cy = (capricorniTropicus.r - this.r) * Math.sin(angleRad);
        this.cx = (capricorniTropicus.r - this.r) * Math.cos(angleRad);
    }
};

var zodiacumEquinox = {
    id:"zodiacumEquinox",
    x1: 0,
    y1: null,
    x2: 0,
    y2: null,
    init: function() {
        this.y1 = -equator.r;
        this.y2 = equator.r;
    }
};

var zodiacumSolstice = {
    id:"zodiacumSolstice",
    x1: null,
    y1: 0,
    x2: null,
    y2: 0,
    init: function() {
        this.x1 = capricorniTropicus.r;
        this.x2 = - cancriTropicus.r;
    }
};
