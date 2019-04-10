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
        var orbisX1 = Math.cos(oppositeAngle(horizontis + Opacus)) * orbis.r;
        var orbisY1 = Math.sin(oppositeAngle(horizontis + Opacus)) * orbis.r;
        var orbisX2 = Math.cos(horizontis - Opacus) * orbis.r;
        var orbisY2 = Math.sin(horizontis - Opacus) * orbis.r;
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


var opacusProjectionA = {
    id: "opacusProjectionA",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x2 = projection(horizontis - Opacus);
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
        this.x = projection(oppositeAngle(horizontis + Opacus));
        this.x2 = this.x;
    }
};