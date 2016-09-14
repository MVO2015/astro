String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function drawPoint(point) {
    drawCircle({id: point.id, r: 0.05, cx: point.x, cy: point.y});
}

function drawCircle(obj) {
    var element = document.getElementById(obj.id);
    setCircleElementAttributes(element, obj.cx, obj.cy, obj.r);
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
