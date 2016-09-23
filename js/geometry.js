function intersectionOfCircleAndLine(circle, pointA, pointB) {
    var equationConstant = generalEquationConstantsOfLine(pointA, pointB);
    var a = equationConstant.a;
    var b = equationConstant.b;
    var c = equationConstant.c;

    // circle equation (x - m)2 + (y - n)2 = r2
    var m = circle.cx;
    var n = circle.cy;
    var r = circle.r;

    // prepare powers of 2
    var a2 = Math.pow(a, 2);
    var b2 = Math.pow(b, 2);
    var c2 = Math.pow(c, 2);
    var m2 = Math.pow(m, 2);
    var n2 = Math.pow(n, 2);
    var r2 = Math.pow(r, 2);

    // intersection of circle and line
    // set of two equations leads to a quadratic equation
    // Ax2 + Bx + C = 0
    // results: x1, x2
    var A = a2 + b2;
    var B = 2 * (c * a + a * b * n - b2 * m);
    var C = b2 * m2 + c2 + 2 * b * c * n + b2 * n2 - b2 * r2;
    var result = quadraticEquation(A, B, C);

    // compute Y coordination
    function computeYCoordination(x) {
        return (-c - a * x) / b;
    }

    var y1 = computeYCoordination(result.x1);
    var y2 = computeYCoordination(result.x2);
    return {
        p1: {x: result.x1, y: y1},
        p2: {x: result.x2, y: y2}
    }
}

function generalEquationConstantsOfLine(pointA, pointB) {
    // directional vector
    var sx = pointB.x - pointA.x;
    var sy = pointB.y - pointA.y;

    // normal vector
    var nx = -sy;
    var ny = sx;

    // line equation ax + by +c = 0
    var a = nx;
    var b = ny;
    var c = -a * pointA.x - b * pointA.y;   // any point on this line - here pointA

    return {a: a, b: b, c: c};
}

function intersectionOfLineAndXaxis(generalEquationConstants) {
    return - generalEquationConstants.c / generalEquationConstants.a;
}