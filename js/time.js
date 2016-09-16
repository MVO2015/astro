function getTodayDate() {
    var today= new Date();
    if (today.dst()) {  // if daylight saving time is on, subtract 1 hour (to get real sun time)
        today.addHours(-1);
    }
    var s= today.getSeconds();
    var mi = today.getMinutes();
    var h = today.getHours();
    var d = today.getDate();
    var m = today.getMonth();
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

function dateToSunTimeAngle(date) {
    return (date.getMinutes() + date.getHours() * 60) / 4
}

// http://stackoverflow.com/questions/11887934/check-if-daylight-saving-time-is-in-effect-and-if-it-is-for-how-many-hours

Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};

Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
};

var daylightSavingTimeSwitch = {
    id: "dstSwitch",
    status: false,
    clickable: false,
    init: function() {
        var dst = getTodayDate().dst();
        this.status = dst;
        if (dst) {
            this.activate()
        } else {
            this.suspend()
        }
    },
    on: function() {
        this.status = true;
    },
    off: function() {
        this.status = false;
    },
    activate: function() {
        this.clickable = true;
        var dstSwitchOn = document.getElementById("dstOn");
        dstSwitchOn.setAttribute("onclick", "daylightSavingTimeOff()");
        this.draw();
    },
    suspend: function() {
        this.clickable = false;
        var dstSwitchOff = document.getElementById("dstOff");
        dstSwitchOff.setAttribute("onclick", "");
        this.draw();
    },
    draw: function() {
        var dstSwitch = document.getElementById(this.id);
        dstSwitch.setAttribute("class", this.clickable ? "clickable" : "unclickable");
        var off = "display: none";
        var on = "display: inline";
        var dstOff = document.getElementById("dstOff");
        dstOff.setAttribute("style", this.status ? off : on);
        var dstOn = document.getElementById("dstOn");
        dstOn.setAttribute("style", this.status ? on : off);
    }
};
