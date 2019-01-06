import {BORDER} from './consts.js';
import {CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE} from './const/check.js';
import {SQUARE_STATE} from './const/square_state.js';
import {isOnField} from './checksFunctions.js';

function markHorizontalShipOrOneDeckShip(coord, map) {
    let i = 0;
    const lenShip = coord.length;
    if (coord[i].x != BORDER.BEGIN) {
        markHorizontalElem(map, coord[i].y, coord[i].x - 1);
    }
    while (i < lenShip) {
        map[coord[i].y][coord[i].x] = SQUARE_STATE.KILLED;
        markHorizontalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].x != BORDER.END) {
        markHorizontalElem(map, coord[i - 1].y, coord[i - 1].x + 1);
    }
}
function markVerticalShip(coord, map) {
    let i = 0;
    const lenShip = coord.length;
    if (coord[i].y != BORDER.BEGIN) {
        markVerticalElem(map, coord[i].y - 1, coord[i].x);
    }
    while (i < lenShip) {
        map[coord[i].y][coord[i].x] = SQUARE_STATE.KILLED;
        markVerticalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].y != BORDER.END) {
        markVerticalElem(map, coord[i - 1].y + 1, coord[i - 1].x);
    }
}
function markHorizontalElem(map, y, x) {
    if (isUntouchedSquare(map[y][x])) {
        map[y][x] = SQUARE_STATE.NO_SHIP;
    }
    if (y != BORDER.BEGIN && (isUntouchedSquare(map[y - 1][x]))) {
        map[y - 1][x] = SQUARE_STATE.NO_SHIP;
    }
    if (y != BORDER.END && (isUntouchedSquare(map[y + 1][x]))) {
        map[y + 1][x] = SQUARE_STATE.NO_SHIP;
    }
}
function markVerticalElem(map, y, x) {
    if (isUntouchedSquare(map[y][x])) {
        map[y][x] = SQUARE_STATE.NO_SHIP;
    }
    if (x != BORDER.BEGIN && (isUntouchedSquare(map[y][x - 1]))) {
        map[y][x - 1] = SQUARE_STATE.NO_SHIP;
    }
    if (x != BORDER.END && (isUntouchedSquare(map[y][x + 1]))) {
        map[y][x + 1] = SQUARE_STATE.NO_SHIP;
    }
}

function markWhenWounded(elem, map) {
    map[elem.y][elem.x] = SQUARE_STATE.HAVE_SHIP;
    markDiaganalElements(elem, map);
}
function markKilledShip(elem, map) {
    const coord = coordinateShip(elem, map);
    if (isVertical(coord)) {
        markVerticalShip(coord, map);
    } else {
        markHorizontalShipOrOneDeckShip(coord, map);
    }
}
function isVertical(coord) {
    const i = 0;
    const lenShip = coord.length;
    return lenShip > 1 && coord[i].y < coord[i + 1].y;
}
function coordinateShip(elem, map) {
    const el = [];
    let count = 0;
    el[count++] = {
        y: elem.y,
        x: elem.x,
    };
    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x + CHECK_ALL_WAY[key].x;
        let y = elem.y + CHECK_ALL_WAY[key].y;
        while (isOnField(x, y) && (isHaveAnyShipSquare(map[y][x]))) {
            el[count++] = {
                y: y,
                x: x,
            };
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
        }
    }
    el.sort(compareEl);
    return el;
}
function markDiaganalElements(elem, map) {
    for (const key of Object.keys(CHECK_ALL_DIAGANAL_SQUARE)) {
        const x = elem.x + CHECK_ALL_DIAGANAL_SQUARE[key].x;
        const y = elem.y + CHECK_ALL_DIAGANAL_SQUARE[key].y;
        if (isOnField(x, y) && isEmptySquare(map[y][x])) {
            map[y][x] = SQUARE_STATE.NO_SHIP_INV;
        }
    }
    return;
}
function isUntouchedSquare(state) {
    return state == SQUARE_STATE.EMPTY || state == SQUARE_STATE.NO_SHIP_INV;
}
function isHaveShipSquare(state) {
    return state == SQUARE_STATE.HAVE_SHIP || state == SQUARE_STATE.KILLED;
}
function isHaveAnyShipSquare(state) {
    return state == SQUARE_STATE.HAVE_SHIP || state == SQUARE_STATE.KILLED;
}
function isEmptySquare(state) {
    return state == SQUARE_STATE.EMPTY;
}
function compareEl(a, b) {
    if (a.x > b.x || a.y > b.y) return 1;
    if (a.x < b.x || a.y < b.y) return -1;
}

export {
    markKilledShip,
    markWhenWounded,
    markDiaganalElements,
    isVertical,
    coordinateShip,
    isUntouchedSquare,
    isHaveShipSquare,
    isEmptySquare,
};
