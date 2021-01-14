import { getSystemInfoSync } from 'remax/wechat';
const sysInfo = getSystemInfoSync();
const sw = sysInfo.screenWidth;
const sh = sysInfo.screenHeight;

const RATIO = 750/sw;

function rtx(n) {
  return RATIO * n;
}
function pix(v) {
    return `${v}PX`
}

export {
    rtx,
    pix,
    sw,
    sh
}