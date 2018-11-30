export {Game, EnemyPrevHit, startGame, handlerAttack, countShip}

import {getRandomMap} from "./maps.js"; 
import {markKilledShip, markWhenWounded, markDiaganalElements} from "./markSquare.js";
import {LETTERS, BOX_WIDTH, NO_SHIP, NO_SHIP_INV, MISS, HAVE_SHIP, KILLED, EMPTY, END_FIELD, BEGIN_FIELD, MY_FIELD, 
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD, TYPE_SHIPS, MAX_SHIPS, MY_MOVE, ENEMY_MOVE, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE} from "./consts.js";
import {MyMap, EnemyMoves, MyShips} from "./../script.js";
import {clearField2} from "./drawFields.js";
import {getRandomInt, isNull, isEqualShips} from "./othersFunctions.js";

const Game = {
    placement: true,
    move: false,
    finish: false,
    player2: 'AI',
}
const EnemyPrevHit = {
    x: 0,
    y: 0,
    isHit: false,
}
const MAP = getRandomMap();

function startGame(ships) {
    if (isEqualShips(MAX_SHIPS, ships)) {  
        Game.placement = false;
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        clearField2(ctx);
        let firstMove = getRandomInt(0, 2);
        if (firstMove == 0) {
            Game.move = MY_MOVE;
        }  else {
            Game.move = ENEMY_MOVE;
            enemyMove();
        } 
    } else {
        if (Game.placement == true) {
            alert('не установленны корабли !!!');
        }
    }
}
function handlerAttack(myMovesMap, enemyShips, elem) { 
    let enemyMap;
    (Game.move == ENEMY_MOVE) ? enemyMap = MyMap : enemyMap = MAP;
    const shotCondition = checkHit(enemyMap, myMovesMap, elem);
    if (Game.move == ENEMY_MOVE) {
        enemyHitHandler(shotCondition, elem, myMovesMap);
    }
    if (shotCondition == KILLED) {
        const lengthShip = countShip(elem, myMovesMap);
        enemyShips[lengthShip]--;
        markKilledShip(elem, myMovesMap);        
        if(isNull(enemyShips)) {
            finishGame();   
        };
    } else if (shotCondition == HAVE_SHIP) {
        markWhenWounded(elem, myMovesMap);
    } else if (shotCondition == MISS) {
        myMovesMap[elem.y][elem.x] = MISS;
        Game.move = !Game.move;
        if (Game.move == ENEMY_MOVE && Game.player2 == 'AI') {
            enemyMove();
        }
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
function checkHit(enemyMap, myMovesMap, elem) {
    if (enemyMap[elem.y][elem.x] == HAVE_SHIP) {
        const lengthShip = countShip(elem, enemyMap);
        const len = countShip(elem, myMovesMap);
        if (len == lengthShip) {
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
function enemyMove() {
    const elem = AI();
    if (!Game.finish) {
        const hit = handlerAttack(EnemyMoves, MyShips, elem);
        if (hit) {
            setTimeout(function() { 
                enemyMove();
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