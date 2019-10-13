import {displayHeight, displayWidth} from "./graphics";

require('../img/background-zodiac.png');

export function setBackgroundPositionX(x)
{
    const image = document.getElementById('zodiac-paintings');
    if (scaleBackground !== undefined) {
        image.style.opacity = '1';
        const bgImageWidth = image.width;
        const backgroundOffset = 500; // set appropriate background image offset in pixels
        const yearPart = (x + 180) / 360; // 0 .. 1
        const offsetX = -yearPart * bgImageWidth / 2 - backgroundOffset * scaleBackground + displayWidth() / 2;

        const translate = 'translateX(' + offsetX + 'px)';
        image.style.transform = translate;
        image.style.webkitTransform = translate;
    }
    // displayWidth() / 2 is correction for various display width
}

var scaleBackground;

export function backgroundResize() {
    const h = displayHeight();
    const w = displayWidth();
    const zodiacPaintings = document.getElementById('zodiac-paintings');
    if (w >= h) {
        scaleBackground = 1;
        if (h < zodiacPaintings.naturalHeight) {
            scaleBackground = h / zodiacPaintings.naturalHeight;
            zodiacPaintings.height = scaleBackground * zodiacPaintings.naturalHeight;
        }
    } else {
        scaleBackground = 1;
        zodiacPaintings.height = scaleBackground * zodiacPaintings.naturalHeight;
    }
}
