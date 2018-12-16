export {player1};
import {getRandomMap} from './inc/maps.js';
import {WIDTH, HEIGHT, END_FIELD,
    ENEMY_FIELD, WIDTH_SQUARE, MY_MOVE, BOX_WIDTH, OFFSET_FIELD} from './inc/consts.js';
import {Game, startGame, handlerAttack} from './inc/GameController.js';
import {draw, redrawAllFields} from './inc/drawFields.js';
import {Player} from './inc/Player.js';
import {updateFieldWhenPlacing} from './inc/setShips.js';

const player1 = new Player;

function main() {
    const canvas = document.getElementById('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', updateField, false);
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
    };
    animateFn();
}

function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const elem = searchElem(mousePos);
    if (elem != null) {
        updateOneField(elem);
    }
}
function searchElem(mouseCoordinates) {
    const xBegin = mouseCoordinates.x - OFFSET_FIELD.x + WIDTH_SQUARE;
    const yBegin = mouseCoordinates.y - OFFSET_FIELD.y + WIDTH_SQUARE;
    let field1 = 0;
    if (xBegin > BOX_WIDTH) {
        field1 = 1;
    };
    const x = parseInt((xBegin - BOX_WIDTH * field1) / WIDTH_SQUARE);
    const y = parseInt(yBegin / WIDTH_SQUARE);
    if (x > END_FIELD || y > END_FIELD) {
        return null;
    } else {
        return {
            field,
            x,
            y,
        };
    };
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
    if (Game.state == 'arrangement') {
        checkButtons(elem);
        updateFieldWhenPlacing(player1.MyMap, player1.MyShips, elem);
    } else if (elem.field == ENEMY_FIELD && Game.move == MY_MOVE && !Game.finish) {
        handlerAttack(player1.EnemyMap, player1.EnemyShips, elem);
    }
}


function mouseCoordinates(canvas, event) {
    const tempX = event.pageX - canvas.offsetLeft;
    const tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - WIDTH_SQUARE,
        y: tempY - WIDTH_SQUARE,
    };
}

main();
