export {
    redrawAllFields,
    draw,
    clearField2,
    line
}
import {getRandomInt} from "./othersFunctions.js";
import {LETTERS, BOX_WIDTH, END_FIELD, BEGIN_FIELD, MY_FIELD, 
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD} from "./consts.js";

import {drawPlacementSquare, drawSquare} from "./drawSquare.js";
import {Game} from "./GameController.js";
function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
}
function createField(ctx, Width,  Height) {
    const x = WIDTH_SQUARE;
    const y = WIDTH_SQUARE;

    createOneField(ctx, x, y, MY_FIELD);
    createOneField(ctx, x * 2 + BOX_WIDTH, y, ENEMY_FIELD);
}
function redrawAllFields(ctx, map1, map2, map3) {
    if (Game.placement) {
        drawMap(ctx, map1, MY_FIELD);
        drawField2WhenPlacement(ctx);
    } else {
        drawMap(ctx, map2, ENEMY_FIELD);
        drawMap(ctx, map3, MY_FIELD, false);
    }
}
function drawField2WhenPlacement(ctx) {
    ctx.font = "45px Mistral";    
    ctx.fillStyle = "#4847b3";
    ctx.textAlign = "centre";
    ctx.textBaseline = "middle";

    const normalX = OFFSET_FIELD + (BOX_WIDTH + OFFSET_FIELD);
    const normalY = OFFSET_FIELD;

    outerField(ctx, normalX + 1 * WIDTH_SQUARE, normalY + 7 * WIDTH_SQUARE, 2, 4);
    ctx.fillText("случайно", normalX + 3 * WIDTH_SQUARE, normalY + 8 * WIDTH_SQUARE - 5);

    outerField(ctx, normalX + 6 * WIDTH_SQUARE, normalY + 7 * WIDTH_SQUARE, 2, 3);
    ctx.fillText("начать", normalX + 7.5 * WIDTH_SQUARE, normalY + 8 * WIDTH_SQUARE - 5);

    outerField(ctx, normalX, normalY, 10, 10);
}
function drawMap(ctx, map, field, needOuter = true) {
    const normalX = OFFSET_FIELD + field * (BOX_WIDTH + OFFSET_FIELD);
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
    if (needOuter) {
        outerField(ctx, normalX, normalY, 10, 10);
    }
}
function clearField2(ctx) {
    const normalX = OFFSET_FIELD * 2 + BOX_WIDTH;
    const normalY = OFFSET_FIELD
    createOneField(ctx, normalX, normalY, ENEMY_FIELD);
    outerField(ctx, normalX, normalY, 10, 10);
}
function createOneField(ctx, xBegin, yBegin, field = MY_FIELD) {
    const widthSquare = WIDTH_SQUARE;
    ctx.font = "45px Mistral";   
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let y = BEGIN_FIELD; y <= END_FIELD; y++) {
        for (let x = BEGIN_FIELD; x <= END_FIELD; x++) {
            ctx.fillStyle = "#4847b3";
            if (y == BEGIN_FIELD) {
                ctx.fillText(LETTERS[x], xBegin + x * widthSquare + widthSquare / 2, yBegin - widthSquare + widthSquare / 2);   
            }
            if (x == END_FIELD && field == ENEMY_FIELD) {
                ctx.fillText(y + 1, xBegin + (x + 1) * widthSquare + widthSquare / 2, yBegin + y * widthSquare + widthSquare / 2);  
            }
            if (x == BEGIN_FIELD && field == MY_FIELD) {
                ctx.fillText(y + 1, xBegin + (x - 1) * widthSquare + widthSquare / 2, yBegin + y * widthSquare + widthSquare / 2);  
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
        //ctx.bezierCurveTo(x - 1, y + 10, x - 1, y + 30, x, y + WIDTH_SQUARE + 3);
        ctx.quadraticCurveTo(x - 1, y + 20, x, y + WIDTH_SQUARE + 3);
    } else {
        ctx.quadraticCurveTo(x + 20, y - 1, x + WIDTH_SQUARE + 3, y);
        //ctx.bezierCurveTo(x + 10, y - 1, x + 30, y - 1, x + WIDTH_SQUARE + 3, y);
    }
    ctx.lineWidth = 2;
    ctx.stroke();
}
