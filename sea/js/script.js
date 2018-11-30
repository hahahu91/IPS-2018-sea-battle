import {getRandomMaps} from "./inc/maps.js"; 
import {LETTERS, NO_SHIP, NO_SHIP_INV, MISS, HAVE_SHIP, KILLED, EMPTY, END_FIELD, BEGIN_FIELD, MY_FIELD, 
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD, TYPE_SHIPS, MAX_SHIPS, MY_MOVE, ENEMY_MOVE, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE} from "./inc/consts.js";
import {drawPlacementSquare, drawSquare} from "./inc/drawSquare.js";
import {markKilledShip, markWhenWounded, markDiaganalElements} from "./inc/markSquare.js";
import  {getRandomInt, isNull, isEqualShips} from "./inc/othersFunctions.js";
const MAP = getRandomMaps();
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
const Game = {
    placement: true,
    move: false,
    finish: false,
}
const EnemyPrevHit = {
    x: 0,
    y: 0,
    isHit: false,
}

function main () {    
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener("mousedown", updateField, false);
    const button = document.getElementById('begin');
    button.addEventListener('click', checkShips, false );
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
function redrawAllFields(ctx, map1, map2, map3) {
    if (Game.placement) {
        drawMap(ctx, map1, MY_FIELD);
        drawField2WhenPlacement(ctx);
    } else {
        drawMap(ctx, map2, ENEMY_FIELD);
        drawMap(ctx, map3, MY_FIELD);
    }
}
function drawField2WhenPlacement(ctx) {
    ctx.font = "45px Mistral";    
    ctx.fillStyle = "#4847b3";
    ctx.textAlign = "centre";
    ctx.textBaseline = "middle";
    const boxWidth = 400;
    const normalX = OFFSET_FIELD + (boxWidth + OFFSET_FIELD);
    const normalY = OFFSET_FIELD;

    outerField(ctx, normalX + 1 * WIDTH_SQUARE, normalY + 7 * WIDTH_SQUARE, 2, 4);
    ctx.fillText("случайно", normalX + 3 * WIDTH_SQUARE, normalY + 8 * WIDTH_SQUARE - 5);

    outerField(ctx, normalX + 6 * WIDTH_SQUARE, normalY + 7 * WIDTH_SQUARE, 2, 3);
    ctx.fillText("начать", normalX + 7.5 * WIDTH_SQUARE, normalY + 8 * WIDTH_SQUARE - 5);

    outerField(ctx, normalX, normalY, 10, 10);
}
function drawMap (ctx, map, field) {
    ctx.font = "Bold 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const boxWidth = 400;
    const normalX = OFFSET_FIELD + field * (boxWidth + OFFSET_FIELD);
    const normalY = OFFSET_FIELD;
    for(let i = 0; i < map.length; i++){
        for (let j = 0; j < map[i].length; j++) {
            const x = normalX + j * WIDTH_SQUARE;
            const y = normalY + i * WIDTH_SQUARE;
            if (Game.placement) {
                if (field == MY_FIELD) {
                    drawPlacementSquare(ctx, x, y, map[i][j]);
                };
            } else {
                drawSquare(ctx, x, y, map[i][j]);
            }   
        }
    }
    outerField(ctx, normalX, normalY, 10, 10);
}
function checkShips() {
    if (isEqualShips(MAX_SHIPS, MyShips)) {        
        Game.placement = false;
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
    if (elem.field == ENEMY_FIELD && elem.x >= 1 && elem.y >= 7 && elem.x <= 4 && elem.y <= 8 ) {
        MyMap = getRandomMaps();
        MyShips.oneDesk = 4;
        MyShips.twoDesk = 3;
        MyShips.threeDesk = 2;
        MyShips.fourDesk = 1;
    }

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
function createOneField(ctx, xBegin, yBegin, boxWidth) {
    const widthSquare = WIDTH_SQUARE;
    ctx.font = "40px Mistral";    
    ctx.fillStyle = "#4847b3";
    
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            ctx.fillStyle = "#4847b3";
            if (y == BEGIN_FIELD) {
                ctx.fillText(x + 1, xBegin + x * widthSquare + widthSquare / 2, yBegin - widthSquare + widthSquare / 2);   
            }
            if (x == END_FIELD) {
                ctx.fillText(LETTERS[y], xBegin - widthSquare + widthSquare / 2, yBegin + y * widthSquare + widthSquare / 2);  
            }
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#b7e2e2";
            ctx.strokeRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
            ctx.fillRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
        }
    }
    
}
function outerField(ctx, xBegin, yBegin, height, width) {
    const widthSquare = WIDTH_SQUARE;
    ctx.strokeStyle = "#4847b3";
    const isVertical = true;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (y == 0) {
                line(ctx, xBegin + x * widthSquare, yBegin);
            }
            if (y == height - 1) {
                line(ctx, xBegin + x * widthSquare, yBegin + (y + 1) * widthSquare);
            }
            if (x == 0) {
                line(ctx, xBegin, yBegin + y * widthSquare, isVertical);
            }
            if (x == width - 1) {
                line(ctx, xBegin + (x + 1) * widthSquare, yBegin + y * widthSquare, isVertical);
            }
        }
    }
    
}
function line(ctx, x, y, isVertical = false) {
    ctx.beginPath();
    ctx.moveTo(x, y); //(controlX1, controlY1, controlX2, controlY2, endX, endY);
    if (isVertical) {
        ctx.bezierCurveTo(x - 2, y + 10, x + 2, y + 30, x, y + WIDTH_SQUARE + 3);
    } else {
        ctx.bezierCurveTo(x + 10, y - 2, x + 30, y + 2, x + WIDTH_SQUARE + 3, y);
    }
    ctx.lineWidth = 3;
    ctx.stroke();
}
function createField(ctx, Width,  Height) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#b7e2e2";
    ctx.font = "30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const x = OFFSET_FIELD;
    const y = OFFSET_FIELD;
    let minWidth;
    (Width > Height) ? minWidth = Width : minWidth = Height;
    const boxWidth = minWidth * 0.4;
    createOneField(ctx, x, y, boxWidth);
    createOneField(ctx, x * 2 + boxWidth, y, boxWidth);
}

function mouseCoordinates(canvas, event){
    let tempX = event.pageX - canvas.offsetLeft;
    let tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - OFFSET_FIELD,
        y: tempY - OFFSET_FIELD,
    }
}


function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
}

main();
