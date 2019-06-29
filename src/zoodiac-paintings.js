// Background
import backgroundImgPath from "../img/background-zodiac.png";

export function setBackgroundImage(imgPath)
{
    const urlString = 'url(' + imgPath + ')';
    const element = document.getElementById('container');
    element.style.backgroundImage =  urlString;
}

export function setBackgroundPositionX(x)
{
    const yearPart = (x + 180) / 360; // 0 .. 1
    const offsetX = -yearPart * bgImageWidth / 2  - backgroundOffset + displayWidth() / 2;
    document.getElementById('container').style.backgroundPositionX = offsetX + 'px';
    // displayWidth() / 2 is correction for various display width
}

// set appropriate background image offset in pixels
var backgroundOffset = 500;

setBackgroundImage(backgroundImgPath);

/* we need to get dimension of the background image */
var bgImageWidth;
let myBackgroundImage = new Image();
myBackgroundImage.src = backgroundImgPath;
myBackgroundImage.addEventListener('load', function() {
    bgImageWidth = this.naturalWidth;
    const element = document.getElementById('container');
    element.style.backgroundSize =  (bgImageWidth) + 'px';
});

function displayWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}
