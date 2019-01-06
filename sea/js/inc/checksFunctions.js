import {MAX_SHIPS, BORDER} from './consts.js';

function isNull(obj) {
    for (const element of Object.values(obj)) {
        if (element != 0) return false;
    };
    return true;
}
function isOnField(x, y) {
    return y >= BORDER.BEGIN && y <= BORDER.END && x >= BORDER.BEGIN && x <= BORDER.END;
}
function checkIfAllShipsAreReady(ships) {
    return ships.oneDesk == MAX_SHIPS.oneDesk
        && ships.twoDesk == MAX_SHIPS.twoDesk
        && ships.threeDesk == MAX_SHIPS.threeDesk
        && ships.fourDesk == MAX_SHIPS.fourDesk;
}
export {
    isNull,
    checkIfAllShipsAreReady,
    isOnField,
};
