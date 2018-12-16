import {NO_SHIP, NO_SHIP_INV, HAVE_SHIP, KILLED, EMPTY, END_FIELD, BEGIN_FIELD, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE} from './consts.js';
import {isOnField} from './othersFunctions.js';
export {
    markKilledShip,
    markWhenWounded,
    markDiaganalElements,
    isVertical,
    coordinateShip,
};
function markHorizontalShipOrOneDeckShip(coord, map) {
    let i = 0;
    const lenShip = coord.length;
    if (coord[i].x != BEGIN_FIELD) {
        markHorizontalElem(map, coord[i].y, coord[i].x - 1);
    }
    while (i < lenShip) {
        map[coord[i].y][coord[i].x] = KILLED;
        markHorizontalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].x != END_FIELD) {
        markHorizontalElem(map, coord[i - 1].y, coord[i - 1].x + 1);
    }
}
function markVerticalShip(coord, map) {
    let i = 0;
    const lenShip = coord.length;
    if (coord[i].y != BEGIN_FIELD) {
        markVerticalElem(map, coord[i].y - 1, coord[i].x);
    }
    while (i < lenShip) {
        map[coord[i].y][coord[i].x] = KILLED;
        markVerticalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].y != END_FIELD) {
        markVerticalElem(map, coord[i - 1].y + 1, coord[i - 1].x);
    }
}
function markHorizontalElem(map, y, x) {
    if (map[y][x] == EMPTY || map[y][x] == NO_SHIP_INV) {
        map[y][x] = NO_SHIP;
    }
    if (y != BEGIN_FIELD && (map[y - 1][x] == EMPTY || map[y - 1][x] == NO_SHIP_INV)) {
        map[y - 1][x] = NO_SHIP;
    }
    if (y != END_FIELD && (map[y + 1][x] == EMPTY || map[y + 1][x] == NO_SHIP_INV)) {
        map[y + 1][x] = NO_SHIP;
    }
}
function markVerticalElem(map, y, x) {
    if (map[y][x] == EMPTY || map[y][x] == NO_SHIP_INV) {
        map[y][x] = NO_SHIP;
    }
    if (x != BEGIN_FIELD && (map[y][x - 1] == EMPTY || map[y][x - 1] == NO_SHIP_INV)) {
        map[y][x - 1] = NO_SHIP;
    }
    if (x != END_FIELD && (map[y][x + 1] == EMPTY || map[y][x + 1] == NO_SHIP_INV)) {
        map[y][x + 1] = NO_SHIP;
    }
}
function markWhenWounded(elem, map) {
    map[elem.y][elem.x] = HAVE_SHIP;
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
        while (isOnField(x, y) && (map[y][x] == HAVE_SHIP || map[y][x] == KILLED)) {
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
        if (isOnField(x, y) && map[y][x] == EMPTY) {
            if (map[y][x] == EMPTY) {
                map[y][x] = NO_SHIP_INV;
            }
        }
    }
    return;
}
function compareEl(a, b) {
    if (a.x > b.x || a.y > b.y) return 1;
    if (a.x < b.x || a.y < b.y) return -1;
}
