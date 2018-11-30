import {getRandomMap} from "./inc/maps.js"; 
import {LETTERS, BOX_WIDTH, NO_SHIP, NO_SHIP_INV, MISS, HAVE_SHIP, KILLED, EMPTY, END_FIELD, BEGIN_FIELD, MY_FIELD, 
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD, TYPE_SHIPS, MAX_SHIPS, MY_MOVE, ENEMY_MOVE, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE} from "./inc/consts.js";
import {Game, EnemyPrevHit, startGame} from "./inc/GameController.js";
import {markKilledShip, markWhenWounded, markDiaganalElements} from "./inc/markSquare.js";
import {getRandomInt, isNull, isEqualShips} from "./inc/othersFunctions.js";
import {draw, redrawAllFields} from './inc/drawFields.js';
function Player() {
    this.MyMap = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];
    this.EnemyMap = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];
    this.EnemyMoves = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];
    this.MyShips = {
        oneDesk: 0,
        twoDesk: 0,
        threeDesk: 0,
        fourDesk: 0,
    };
    this.EnemyShips = {
        oneDesk: 4,
        twoDesk: 3,
        threeDesk: 2,
        fourDesk: 1,
    };
}
const player1 = new Player;
const player2 = new Player;
player2.MyMap = getRandomMap();
player2.MyShips = player2.EnemyShips;
const MAP = getRandomMap();
var MyMap = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
const EnemyMap = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];

const MyShips = {
    oneDesk: 0,
    twoDesk: 0,
    threeDesk: 0,
    fourDesk: 0,
}
const EnemyShips = {
    oneDesk: 4,
    twoDesk: 3,
    threeDesk: 2,
    fourDesk: 1,
}
const EnemyMoves = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]


function main () {    
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener("mousedown", updateField, false);
    draw(ctx, WIDTH, HEIGHT);
    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
        redrawAllFields(ctx, MyMap, EnemyMap, EnemyMoves);
        requestAnimationFrame(animateFn);
    }
    animateFn();
}

function enemyMove() {
    let elem = AI();
    if (!Game.finish) {
        const hit = handlerAttack(MyMap, EnemyMoves, MyShips, elem);
        if (hit) {
            setTimeout(function() { 
                enemyMove(elem);
            }, 500);
            
        } 
    }
}
function killShip(elem, map) {    
    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x;
        let y = elem.y;
        while (y >= BEGIN_FIELD && y <= END_FIELD && x >= BEGIN_FIELD && x <= END_FIELD && map[y][x] == HAVE_SHIP) {
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
            if (y >= BEGIN_FIELD && y <= END_FIELD && x >= BEGIN_FIELD && x <= END_FIELD && map[y][x] == EMPTY) {
                return {
                    y: y,
                    x: x,
                    field: MY_FIELD
                }
            }
        }
    }
}
function AI() {
    let el = {
        x: 0,
        y: 0,
        field: 0,
    };
    do { 
        if (EnemyPrevHit.isHit) { //ранение было добиваем 
            el = killShip(EnemyPrevHit, EnemyMoves);            
        } else {
            el.x = getRandomInt(0, 10);
            el.y = getRandomInt(0, 10);
        }
    } while (EnemyMoves[el.y][el.x] != EMPTY);
    if (MyMap[el.y][el.x] == HAVE_SHIP) {
        EnemyMoves[el.y][el.x] = HAVE_SHIP;
    } else {
        EnemyMoves[el.y][el.x] = MISS;
    }
    return el;
}
function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const elem = searchElem(mousePos, 400);
    if (elem != null) {
        updateOneField(elem);
    }
}
function searchElem(mouseCoordinates, boxWidth) {
    const widthSquare = WIDTH_SQUARE;
    for (let field = 0; field < 2; field++) {
        for (let y = BEGIN_FIELD; y <= END_FIELD; y++) {
            for (let x = BEGIN_FIELD; x <= END_FIELD; x++) {
                if ((x * widthSquare + (boxWidth + OFFSET_FIELD) * field  <= mouseCoordinates.x) && 
                    (y * widthSquare <= mouseCoordinates.y) && 
                    (x * widthSquare + widthSquare + (boxWidth + OFFSET_FIELD) * field > mouseCoordinates.x) && 
                    (y * widthSquare + widthSquare > mouseCoordinates.y)) {
                        return {
                            field,
                            x,
                            y
                        }
                    }
            }
        }
    }    
    return null;
}
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
            if (!isEqualShips(ships, MAX_SHIPS)) {
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
function checkButtons(elem) {
    if (isClickRandomButton(elem)) {
        MyMap = getRandomMap();
        MyShips.oneDesk = 4;
        MyShips.twoDesk = 3;
        MyShips.threeDesk = 2;
        MyShips.fourDesk = 1;
    }
    if (isClickStartButton(elem)) {
        startGame(MyShips);
    }
}
function isClickRandomButton(elem) {
    return elem.field == ENEMY_FIELD && elem.x >= 1 && elem.y >= 7 && elem.x <= 4 && elem.y <= 8;
}
function isClickStartButton(elem) {
    return elem.field == ENEMY_FIELD && elem.x >= 7 && elem.y >= 7 && elem.x <= 9 && elem.y <= 8;
}
function updateOneField(elem) {
    if(Game.placement) {
        checkButtons(elem);
        updateFieldWhenPlacing(MyMap, MyShips, elem);
    } else if(elem.field == ENEMY_FIELD && Game.move == MY_MOVE && !Game.finish) { 
        const hit = handlerAttack(MAP, EnemyMap, EnemyShips, elem);
        if (!hit) {
            enemyMove();
        }
    } 
}
function updateFieldWhenPlacing(map, ships, elem) {
   if (elem.field == MY_FIELD) {
        (map[elem.y][elem.x] == HAVE_SHIP) ? removeDesk(map, ships, elem): addShip(map, ships, elem);
   }
}
function handlerAttack(enemyMap, myMovesMap, enemyShips, elem) { 
    const shotCondition = checkHit(enemyMap, myMovesMap, enemyShips, elem);
    if (Game.move == ENEMY_MOVE) {
        enemyHitHandler(shotCondition, elem, myMovesMap);
    }
    if (shotCondition == KILLED) {
        markKilledShip(elem, myMovesMap);        
        if(isNull(enemyShips)) {
            finishGame();   
        };
    } else if (shotCondition == HAVE_SHIP) {
        markWhenWounded(elem, myMovesMap);
    } else if (shotCondition == MISS) {
        myMovesMap[elem.y][elem.x] = MISS;
        Game.move = !Game.move;
        return false;
    }
    return true;
}
function enemyHitHandler(shotCondition, elem, map) {
    if (shotCondition == KILLED) {
        EnemyPrevHit.isHit = false;
    } else if (shotCondition == HAVE_SHIP) {
        markDiaganalElements(elem, map);
        EnemyPrevHit.x = elem.x;
        EnemyPrevHit.y = elem.y;
        EnemyPrevHit.isHit = true;
    }
}
function finishGame() {
    setTimeout(function() { 
        (Game.move == ENEMY_MOVE) ? alert("YOU LOST") : alert("YOU WIN");
    }, 100);  
    Game.finish = true;       
}
function checkHit(enemyMap, myMovesMap, ships, elem) {
    if (enemyMap[elem.y][elem.x] == HAVE_SHIP) {
        const lengthShip = countShip(elem, enemyMap);
        const len = countShip(elem, myMovesMap);
        if (len == lengthShip) {
            ships[len]--;
            return KILLED;
        } else {
            return HAVE_SHIP;
        }
    } else {
        return MISS;
    }
}
function countShip(elem, map) {    
    let count = 1;

    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x + CHECK_ALL_WAY[key].x;
        let y = elem.y + CHECK_ALL_WAY[key].y;
        while (y >= 0 && y <= 9 && x >= 0 && x <= 9 && map[y][x] == 1) {
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
            count++;
        }
    }
    if (count >= 1 && count <= 4) {
        return TYPE_SHIPS[count];
    } else {
        return null;
    }
}
function mostPartOfShip(elem, map, search) {    
    let count = 0;
    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x + CHECK_ALL_WAY[key].x;
        let y = elem.y + CHECK_ALL_WAY[key].y;
        let curLen = 0;
        while (y >= 0 && y <= 9 && x >= 0 && x <= 9 && map[y][x] == 1) {
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
        if (y >= 0 && y <= 9 && x >= 0 && x <= 9 && map[y][x] == 1) {
            return false;
        }
    }
    return true
}
function mouseCoordinates(canvas, event){
    let tempX = event.pageX - canvas.offsetLeft;
    let tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - OFFSET_FIELD,
        y: tempY - OFFSET_FIELD,
    }
}

main();
