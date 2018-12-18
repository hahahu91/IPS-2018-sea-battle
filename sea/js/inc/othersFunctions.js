import {MAX_SHIPS, FIELD_BOUNDARIES} from './consts.js';
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
    return y >= FIELD_BOUNDARIES.BEGIN && y <= FIELD_BOUNDARIES.END && x >= FIELD_BOUNDARIES.BEGIN && x <= FIELD_BOUNDARIES.END;
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
