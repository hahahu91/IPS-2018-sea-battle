import {MAX_SHIPS, BEGIN_FIELD, END_FIELD} from "./consts.js";
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
    return y >= BEGIN_FIELD && y <= END_FIELD && x >= BEGIN_FIELD && x <= END_FIELD;
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
    isOnField
}