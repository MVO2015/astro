function deg2rad(deg) {
    return deg * Math.PI / 180;
}

function oppositeAngle(rad) {
    return Math.PI + rad;
}

function quadraticEquation(a, b, c) {
    var d = quadraticDiscriminant(a, b, c);
    if (d >= 0) {
        var a2 = 2 * a;
        var sqrtD = Math.sqrt(d);
        var x1 = (-b + sqrtD) / a2;
        var x2 = (-b - sqrtD) / a2;
        return {x1: x1, x2: x2};
    }
}

function quadraticDiscriminant(a, b, c) {
    return b * b - 4 * a * c;
}