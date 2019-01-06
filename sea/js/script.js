import {getRandomMap} from './inc/maps.js';
import {CANVAS_SIZE, WIDTH_SQUARE, MY_MOVE, BOX_WIDTH, OFFSET_FIELD, GAME_STAGE} from './inc/consts.js';
import {FIELDS} from './inc/const/fields.js';
import {Game, startGame, handlerAttack} from './inc/GameController.js';
import {draw, redrawAllFields} from './inc/drawFields.js';
import {Player} from './inc/Player.js';
import {updateFieldWhenPlacing} from './inc/setShips.js';
import {isOnField} from './inc/checksFunctions.js';
import {isClickRandomButton, isClickStartButton} from './inc/buttonsFunctions.js';

const player1 = new Player;
function main() {
    const canvas = document.getElementById('canvas');
    canvas.width = CANVAS_SIZE.WIDTH;
    canvas.height = CANVAS_SIZE.HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', updateField, false);
    draw(ctx);
    const animateFn = () => {
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
    let field = FIELDS.MY;
    if (xBegin > BOX_WIDTH) {
        field = FIELDS.ENEMY;
    };
    const x = parseInt((xBegin - BOX_WIDTH * field) / WIDTH_SQUARE);
    const y = parseInt(yBegin / WIDTH_SQUARE);
    if (!isOnField(x, y)) {
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

function updateOneField(elem) {
    if (Game.state == GAME_STAGE.ARRANGEMENT) {
        checkButtons(elem);
        updateFieldWhenPlacing(player1.MyMap, player1.MyShips, elem);
    } else if (elem.field == FIELDS.ENEMY && Game.move == MY_MOVE && !Game.finish) {
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

export {player1};
