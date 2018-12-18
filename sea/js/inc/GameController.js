import {Player} from './Player.js';
import {getRandomMap} from './maps.js';
import {markKilledShip, markWhenWounded, markDiaganalElements, isEmptySquare} from './markSquare.js';
import {SQUARE_STATE, FIELD_BOUNDARIES, MY_FIELD,
    TYPE_SHIPS, MY_MOVE, ENEMY_MOVE, CHECK_ALL_WAY, GAME_STAGE} from './consts.js';
import {player1} from './../script.js';
import {prepareEnemyField} from './drawFields.js';
import {getRandomInt, isNull, checkIfAllShipsAreReady, isOnField} from './othersFunctions.js';

const Game = {
    state: GAME_STAGE.ARRANGEMENT, //or ready
    move: tossTheCoin(),
    finish: false,
    player2: 'AI',
};
const EnemyPrevHit = {
    x: 0,
    y: 0,
    isHit: false,
};
const player2 = new Player();
player2.MyMap = getRandomMap();
player2.fillShips();

function startGame(ships) {
    if (!checkIfAllShipsAreReady(ships)) {
        alertMessage();
        return;
    }
    Game.state = GAME_STAGE.READY; //TODO: rename placement to state (arangement | ready)

    prepareEnemyField();
    if (Game.move == ENEMY_MOVE && Game.player2 == 'AI') {
        enemyMove();
    }
}
function tossTheCoin() {
    const firstMove = getRandomInt(0, 2);
    if (firstMove == 0) {
        return MY_MOVE;
    } else {
        return ENEMY_MOVE;
    }
}
function alertMessage() {
    if (Game.state == GAME_STAGE.ARRANGEMENT) {
        alert('не установленны корабли !!!');
    } else {
        (Game.move == ENEMY_MOVE) ? alert('YOU LOST') : alert('YOU WIN');
    }
}

function handlerAttack(myMovesMap, enemyShips, elem) {
    let enemyMap;
    (Game.move == ENEMY_MOVE) ? enemyMap = player1.MyMap : enemyMap = player2.MyMap;
    const shotCondition = checkHit(enemyMap, myMovesMap, elem);
    if (Game.move == ENEMY_MOVE) {
        enemyHitHandler(shotCondition, elem, myMovesMap);
    }
    if (shotCondition == SQUARE_STATE.KILLED) {
        killedHandler(myMovesMap, enemyShips, elem);
    } else if (shotCondition == SQUARE_STATE.HAVE_SHIP) {
        markWhenWounded(elem, myMovesMap);
    } else if (shotCondition == SQUARE_STATE.MISS) {
        missHandler(myMovesMap, elem);
        return false;
    }
    return true;
}
function missHandler(map, elem) {
    map[elem.y][elem.x] = SQUARE_STATE.MISS;
    Game.move = !Game.move;
    if (Game.move == ENEMY_MOVE && Game.player2 == 'AI') {
        enemyMove();
    }
}
function killedHandler(map, ships, elem) {
    const lengthShip = countShip(elem, map);
    ships[lengthShip]--;
    markKilledShip(elem, map);
    if (isNull(ships)) {
        finishGame();
    };
}
function enemyHitHandler(shotCondition, elem, map) {
    if (shotCondition == SQUARE_STATE.KILLED) {
        EnemyPrevHit.isHit = false;
    } else if (shotCondition == SQUARE_STATE.HAVE_SHIP) {
        markDiaganalElements(elem, map);
        EnemyPrevHit.x = elem.x;
        EnemyPrevHit.y = elem.y;
        EnemyPrevHit.isHit = true;
    }
}
function finishGame() {
    setTimeout(function() {
        alertMessage();
    }, 100);
    Game.finish = true;
}
function checkHit(enemyMap, myMovesMap, elem) {
    if (enemyMap[elem.y][elem.x] == SQUARE_STATE.HAVE_SHIP) {
        const lengthShip = countShip(elem, enemyMap);
        const len = countShip(elem, myMovesMap);
        if (len == lengthShip) {
            return SQUARE_STATE.KILLED;
        } else {
            return SQUARE_STATE.HAVE_SHIP;
        }
    } else {
        return SQUARE_STATE.MISS;
    }
}
function countShip(elem, map) {
    let count = 1;

    for (const key of Object.keys(CHECK_ALL_WAY)) {
        let x = elem.x + CHECK_ALL_WAY[key].x;
        let y = elem.y + CHECK_ALL_WAY[key].y;
        while (isOnField(x, y) && map[y][x] == SQUARE_STATE.HAVE_SHIP) {
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
    const elem = aI();
    if (!Game.finish) {
        const hit = handlerAttack(player1.EnemyMoves, player1.MyShips, elem);
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
        //TODO: add function to check condition
        while (isOnField(x, y) && map[y][x] == SQUARE_STATE.HAVE_SHIP) {
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
            //TODO: add variable
            if (isOnField(x, y) && isEmptySquare(map[y][x])) {
                return {
                    y: y,
                    x: x,
                    field: MY_FIELD,
                };
            }
        }
    }
}

function aI() {
    let el = {
        x: 0,
        y: 0,
        field: 0,
    };
    do {
        if (EnemyPrevHit.isHit) { //ранение было добиваем
            el = killShip(EnemyPrevHit, player1.EnemyMoves);
        } else {
            el.x = getRandomInt(FIELD_BOUNDARIES.BEGIN, FIELD_BOUNDARIES.END + 1);
            el.y = getRandomInt(FIELD_BOUNDARIES.BEGIN, FIELD_BOUNDARIES.END + 1);
        }
    } while (player1.EnemyMoves[el.y][el.x] != SQUARE_STATE.EMPTY);
    if (player1.MyMap[el.y][el.x] == SQUARE_STATE.HAVE_SHIP) {
        player1.EnemyMoves[el.y][el.x] = SQUARE_STATE.HAVE_SHIP;
    } else {
        player1.EnemyMoves[el.y][el.x] = SQUARE_STATE.MISS;
    }
    return el;
}

export {Game, EnemyPrevHit, startGame, handlerAttack, countShip};
