import {WIDTH_SQUARE} from './consts.js';
import {SQUARE_STATE} from './const/square_state.js';
import {FONT} from './const/font.js';
import {COLOR} from './const/color.js';
import {outerField} from './drawFields.js';
export {
    drawPlacementSquare,
    drawEmptySquare,
    drawSquare,
};
function drawPlacementSquare(ctx, x, y, state) {
    if (state == HAVE_SHIP) {
        drawDeckSquare(ctx, x, y);
    }
}
function drawSquare(ctx, x, y, state) {
    switch (state) {
    case SQUARE_STATE.HAVE_SHIP:
        drawHitSquare(ctx, x, y);
        break;
    case SQUARE_STATE.MISS:
        drawMissedSquare(ctx, x, y);
        break;
    case SQUARE_STATE.KILLED:
        drawKilledSquare(ctx, x, y);
        break;
    case SQUARE_STATE.NO_SHIP:
        drawNoShipSquare(ctx, x, y);
    }
}

function drawNoShipSquare(ctx, x, y) {
    drawEmptySquareWithoutFrame(ctx, x, y);
    ctx.fillStyle = COLOR.PEN;
    ctx.font = FONT.SMALL;
    ctx.fillText('-', x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
    ctx.font = FONT.NORMAL;
}
function drawKilledSquare(ctx, x, y) {
    drawEmptySquareWithoutFrame(ctx, x, y);
    drawHitSquare(ctx, x, y);
    drawScratched(ctx, x, y);
}

function drawMissedSquare(ctx, x, y) {
    drawEmptySquareWithoutFrame(ctx, x, y);
    ctx.fillStyle = COLOR.PEN;
    ctx.font = FONT.BIG;
    ctx.fillText('.', x + WIDTH_SQUARE / 2, y);
    ctx.font = FONT.NORMAL;
}
function drawDeckSquare(ctx, x, y) {
    ctx.strokeStyle = COLOR.PEN;
    outerField(ctx, x, y, 1, 1);
}
function drawHitSquare(ctx, x, y) {
    ctx.font = FONT.NORMAL_ALTERNATE;
    ctx.fillStyle = COLOR.PEN;
    ctx.fillText('X', x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
    ctx.font = FONT.NORMAL;
}
function drawEmptySquare(ctx, x, y) {
    ctx.lineWidth = 3;
    ctx.fillStyle = COLOR.BACKGROUND;
    ctx.strokeStyle = COLOR.BORDER;
    ctx.strokeRect(x, y, WIDTH_SQUARE, WIDTH_SQUARE);
    ctx.fillRect(x, y, WIDTH_SQUARE, WIDTH_SQUARE);
}
function drawEmptySquareWithoutFrame(ctx, x, y) {
    ctx.fillStyle = COLOR.BACKGROUND;
    ctx.fillRect(x + WIDTH_SQUARE / 10, y + WIDTH_SQUARE / 10, WIDTH_SQUARE * 0.8, WIDTH_SQUARE * 0.8);
}
function drawScratched(ctx, x, y) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = COLOR.PEN;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(x + WIDTH_SQUARE/8 * i, y);
        ctx.lineTo(x, y + WIDTH_SQUARE/4 * i);
        // x  = 20  y 40
    }
    for (let i = 1; i < 5; i++) {
        ctx.lineTo(x + WIDTH_SQUARE/2 + i * WIDTH_SQUARE/8, y);
        ctx.lineTo(x + i * WIDTH_SQUARE/8, y + WIDTH_SQUARE);
    }
    for (let i = 1; i < 5; i++) {
        ctx.lineTo(x + WIDTH_SQUARE, y + WIDTH_SQUARE/4 * i);
        ctx.lineTo(x + WIDTH_SQUARE/2 + WIDTH_SQUARE/8 * i, y + WIDTH_SQUARE);
        // x  = 20  y 40
    }
    ctx.stroke();
}
