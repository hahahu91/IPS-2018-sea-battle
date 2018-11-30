import {NO_SHIP, NO_SHIP_INV,MISS, HAVE_SHIP, KILLED, WIDTH_SQUARE} from "./consts.js";
import {line} from "./drawFields.js";
export {
    drawPlacementSquare,
    drawSquare
};
function drawPlacementSquare(ctx, x, y, state) {
    if (state == HAVE_SHIP) {
        drawDeckSquare(ctx, x, y);
    } else {
        drawEmptySquare(ctx, x, y);
    }
}
function drawSquare(ctx, x, y, state) {
    switch(state) {
        case HAVE_SHIP: 
            drawHitSquare(ctx, x, y);
            break;
        case MISS: 
            drawMissedSquare(ctx, x, y);
            break;
        case KILLED:
            drawKilledSquare(ctx, x, y);
            break;
        case NO_SHIP:
            drawNoShipSquare(ctx, x, y);
            break;
        case NO_SHIP_INV:
            //drawNoShipSquare2(ctx, x, y);
            break;
    }
}
function drawNoShipSquare2(ctx, x, y) {
    ctx.fillStyle = "black";
    ctx.font = "Regular 20pt Arial";
    ctx.fillText("!", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
}
function drawNoShipSquare(ctx, x, y) {
    drawEmptySquareWithoutFrame(ctx, x, y);
    ctx.fillStyle = "#4847b3";
    ctx.font = "25px Mistral"; 
    ctx.fillText("-", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
    ctx.font = "45px Mistral"; 
}
function drawKilledSquare(ctx, x, y) {
    drawHitSquare(ctx, x, y);
    drawScratched(ctx, x, y);
}
function drawMissedSquare(ctx, x, y) {
    drawEmptySquareWithoutFrame(ctx, x, y);
    ctx.fillStyle = "#4847b3";
    ctx.font = "80px Arial"; 
    ctx.fillText(".", x + WIDTH_SQUARE / 2, y - 2);
    ctx.font = "45px Mistral"; 
}
function drawDeckSquare(ctx, x, y) {
    ctx.strokeStyle = "#4847b3";
    ctx.strokeRect(x, y, WIDTH_SQUARE-2, WIDTH_SQUARE-2);
}
function drawHitSquare(ctx, x, y) {
    ctx.font = "45px Arial";    
    ctx.fillStyle = "#4847b3";
    ctx.fillText("X", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2); 
    ctx.font = "45px Mistral";     
}
function drawEmptySquare(ctx, x, y) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#b7e2e2";
    ctx.strokeRect(x , y, WIDTH_SQUARE, WIDTH_SQUARE);
    ctx.fillRect(x, y, WIDTH_SQUARE, WIDTH_SQUARE);
}
function drawEmptySquareWithoutFrame(ctx, x, y) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#b7e2e2";
    ctx.fillRect(x, y, WIDTH_SQUARE - 10, WIDTH_SQUARE - 10);
}
function drawScratched(ctx, x, y) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#4847b3";
    ctx.beginPath();
    ctx.moveTo(x, y)
    for (let i = 0; i < 5; i++) {
        ctx.lineTo(x + 5 * i, y);
        ctx.lineTo(x, y + 10 * i)
        // x  = 20  y 40
    }
    for (let i = 1; i < 5; i++) {
        ctx.lineTo(x + 20 + i * 5, y);
        ctx.lineTo(x + i * 5, y + 40);
    }
    for (let i = 1; i < 5; i++) {
        ctx.lineTo(x + 40, y + 10 * i);
        ctx.lineTo(x + 20 + 5 * i, y + 40)
        // x  = 20  y 40
    }
    ctx.stroke();
}
function line2(ctx, x, y, isVertical = false) {
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