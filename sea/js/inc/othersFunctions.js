import {MAX_SHIPS, BORDER} from './consts.js';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function isNull(obj) {
    for (const element of Object.values(obj)) {
        if (element != 0) return false;
    };
    return true;
}
function isOnField(x, y) {
    return y >= BORDER.BEGIN && y <= BORDER.END && x >= BORDER.BEGIN && x <= BORDER.END;
}
function checkIfAllShipsAreReady(obj) {
    return obj.oneDesk == MAX_SHIPS.oneDesk
        && obj.twoDesk == MAX_SHIPS.twoDesk
        && obj.threeDesk == MAX_SHIPS.threeDesk
        && obj.fourDesk == MAX_SHIPS.fourDesk;
}
export {
    getRandomInt,
    isNull,
    checkIfAllShipsAreReady,
    isOnField,
};
