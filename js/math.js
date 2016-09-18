function deg2rad(deg) {
    return deg * Math.PI / 180;
}

function oppositeAngle(rad) {
    return Math.PI + rad;
}

function polar2Cartesian(centerX, centerY, radius, angleDeg) {
    var angleRad = deg2rad(angleDeg);

    return {
        x: centerX + (radius * Math.cos(angleRad)),
        y: centerY + (radius * Math.sin(angleRad))
    };
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

// conversion of angle above 180 deg and below -180 deg
function normalizeAngleDeg(angleDeg) {
    var angle = angleDeg % 360;
    if (angle > 180) {
        return angle - 360; // converted to negative angle (0...-180)
    }
    if (angle < -180) {
        return angle + 360; // converted to positive angle (0...180)
    }
    return angle;   // can be between -180 and 180
}

// return true if angle is between -45 and 45 deg or between 135 and 225 deg.
function isEasyForTangents(angleDeg) {
    var normalizedAngle = normalizeAngleDeg(angleDeg);
    if (normalizedAngle > -45 && normalizedAngle <= 45) {
        return true;
    }
    return (normalizedAngle > 135 || normalizedAngle <= -135);
}
