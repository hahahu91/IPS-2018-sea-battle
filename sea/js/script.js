export {player1}
import {getRandomMap} from "./inc/maps.js"; 
import {WIDTH, HEIGHT, HAVE_SHIP, EMPTY, END_FIELD, BEGIN_FIELD, MY_FIELD, 
    ENEMY_FIELD, WIDTH_SQUARE, TYPE_SHIPS, MAX_SHIPS, MY_MOVE, CHECK_ALL_WAY, CHECK_ALL_DIAGANAL_SQUARE, BOX_WIDTH, OFFSET_FIELD} from "./inc/consts.js";
import {Game, startGame, handlerAttack, countShip} from "./inc/GameController.js";
import {draw, redrawAllFields} from './inc/drawFields.js';
import {Player} from "./inc/Player.js";
import {updateFieldWhenPlacing} from "./inc/setShips.js";

const player1 = new Player;

function main () {    
    const canvas = document.getElementById('canvas');
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
        redrawAllFields(ctx, player1);
        if (!Game.finish) {
            requestAnimationFrame(animateFn);
        }
    }
    animateFn();
}

function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const elem = searchElem(mousePos, BOX_WIDTH);
    if (elem != null) {
        updateOneField(elem);
    }
}
function searchElem(mouseCoordinates, boxWidth) {
    const widthSquare = WIDTH_SQUARE;
    for (let field = 0; field < 2; field++) {
        for (let y = BEGIN_FIELD; y <= END_FIELD; y++) {
            for (let x = BEGIN_FIELD; x <= END_FIELD; x++) {
                if ((OFFSET_FIELD.x + (x - 1) * widthSquare + (boxWidth) * field  <= mouseCoordinates.x) && 
                    ((y - 1) * widthSquare + OFFSET_FIELD.y <= mouseCoordinates.y) && 
                    (OFFSET_FIELD.x + x * widthSquare + (boxWidth) * field > mouseCoordinates.x) && 
                    (y * widthSquare  + OFFSET_FIELD.y  > mouseCoordinates.y)) {
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
function checkButtons(elem) {
    if (isClickRandomButton(elem)) {
        player1.MyMap = getRandomMap();
        player1.fillShips();
    }
    if (isClickStartButton(elem)) {
        startGame(player1.MyShips);
    }
}
function isClickRandomButton(elem) {
    return elem.field == ENEMY_FIELD && elem.x >= 1 && elem.y >= 7 && elem.x <= 4 && elem.y <= 8;
}
function isClickStartButton(elem) {
    return elem.field == ENEMY_FIELD && elem.x >= 6 && elem.y >= 7 && elem.x <= 8 && elem.y <= 8;
}
function updateOneField(elem) {
    if(Game.state == "arrangement") {
        checkButtons(elem);
        updateFieldWhenPlacing(player1.MyMap, player1.MyShips, elem);
    } else if(elem.field == ENEMY_FIELD && Game.move == MY_MOVE && !Game.finish) { 
        handlerAttack(player1.EnemyMap, player1.EnemyShips, elem);
    } 
}


function mouseCoordinates(canvas, event){
    let tempX = event.pageX - canvas.offsetLeft;
    let tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - WIDTH_SQUARE,
        y: tempY - WIDTH_SQUARE,
    }
}

main();
