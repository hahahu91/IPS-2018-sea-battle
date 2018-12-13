import {HAVE_SHIP, EMPTY, END_FIELD, BEGIN_FIELD, MY_FIELD, KILLED,
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD, TYPE_SHIPS, MAX_SHIPS, MY_MOVE, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE, BOX_WIDTH} from "./consts.js";
import {countShip} from "./GameController.js";
import {checkIfAllShipsAreReady, isOnField} from "./othersFunctions.js";
import {isVertical, coordinateShip} from "./markSquare.js";
function removeDesk(map, ships, elem) {
    map[elem.y][elem.x] = EMPTY;
    const typePrevShip = countShip(elem, map);                     
    const lengthCurShip  = mostPartOfShip(elem, map, typePrevShip); 
    ships[typePrevShip]--;
    addCurTypeShips(typePrevShip, lengthCurShip, ships);
}
function addShip(map, ships, elem) {
    if (checkDiaganalElements(elem, map)) {
        const typeShip = countShip(elem, map);
        if (typeShip != null){
            if (!checkIfAllShipsAreReady(ships)) {
                map[elem.y][elem.x] = HAVE_SHIP;
                ships[typeShip]++;
                const lenPrevShip  = mostPartOfShip(elem, map, typeShip);
                removePrevTypeShips(typeShip, lenPrevShip, ships);
            } 
        } 
    }
}
function addCurTypeShips(typePrevShip, lenCurShip, ships) {
    if (typePrevShip == 'fourDesk') {
        if (lenCurShip == 'threeDesk') {
            ships.threeDesk++;
        }
        if (lenCurShip == 'twoDesk') {
            ships.twoDesk++;
            ships.oneDesk++;
        }   
    }
    if (typePrevShip == 'threeDesk') {
        if (lenCurShip == 'oneDesk') {
            ships.oneDesk += 2;
        } 
        if (lenCurShip == 'twoDesk'){
            ships.twoDesk++;
        }
    }
    if (typePrevShip == 'twoDesk') {
        ships.oneDesk++;
    } 
}
function removePrevTypeShips(typeShip, lenPrevShip, ships) {
    if (typeShip == 'threeDesk' || typeShip == 'fourDesk') {
        if (lenPrevShip == 'oneDesk') {
            ships.oneDesk -= 2;
        } else if (lenPrevShip == 'twoDesk'){
            ships.twoDesk--;
            if (typeShip == 'fourDesk') {
                ships.oneDesk--;
            }
        } else if (lenPrevShip == 'threeDesk') {
            ships.threeDesk--;
        };
    } else if (typeShip == 'twoDesk') {
        ships.oneDesk--;
    }
}
function getShipsMap(map) {
    let ships = [];
    for(let i = 0; i < map.length; i++){
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] == HAVE_SHIP || map[i][j] == KILLED) {
                const coord = coordinateShip({y: i, x: j}, map);
                    ships.push(coord);
                
            }
        }   
    }
    
    return uniq_fast(ships);
}

function uniq_fast(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item[0].x + 10 * item[0].y] !== 1) {
               seen[item[0].x + 10 * item[0].y] = 1;
               out[j++] = item;
         }
    }
    return out;
}
function mostPartOfShip(elem, map, search) {    
    let count = 0;
    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x + CHECK_ALL_WAY[key].x;
        let y = elem.y + CHECK_ALL_WAY[key].y;
        let curLen = 0;
        while (isOnField(x, y) && map[y][x] == 1) {
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
            curLen++;
        }
        if (curLen > count) {
            count = curLen;
        }
        if (TYPE_SHIPS[count] == search) return TYPE_SHIPS[count];
    }
    if (count >= 1 && count <= 4) {
        return TYPE_SHIPS[count];
    } else {
        return null;
    }
}
function checkDiaganalElements(elem, map) { 
    for (const key of Object.keys(CHECK_ALL_DIAGANAL_SQUARE)) {
        const x = elem.x + CHECK_ALL_DIAGANAL_SQUARE[key].x;
        const y = elem.y + CHECK_ALL_DIAGANAL_SQUARE[key].y;
        if (isOnField(x, y) && map[y][x] == 1) {
            return false;
        }
    }
    return true
}
function updateFieldWhenPlacing(map, ships, elem) {
    if (elem.field == MY_FIELD) {
         (map[elem.y][elem.x] == HAVE_SHIP) ? removeDesk(map, ships, elem): addShip(map, ships, elem);
    }
 }
export {
    removePrevTypeShips,
    addCurTypeShips,
    addShip,
    removeDesk,
    updateFieldWhenPlacing,
    getShipsMap
}