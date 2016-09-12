function getTodayDate() {
    var today= new Date();
    var s= today.getSeconds();
    var mi = today.getMinutes();
    var h = today.getHours();
    var d = today.getDate();
    var m = today.getMonth() + 1; //January is 0!
    var y = today.getFullYear();
    return new Date(y, m, d, h, mi, s);
}

// Convert angle of sun time to normal angle.
// 0 ... Midnight (90 deg), 180 ... Noon (270 deg)
function sun2deg(sunAngle) {
    return (sunAngle + 90) % 360;
}

// Convert normal angle to sun time angle.
// 90 deg (Midnight) ... 0, 270 deg (Noon) ... 180
function deg2sun(angleDeg) {
    return (angleDeg + 270) % 360;
}


