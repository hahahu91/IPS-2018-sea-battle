import {LETTERS, BOX_WIDTH, FIELD_BOUNDARIES, MY_FIELD,
    ENEMY_FIELD, WIDTH_SQUARE, OFFSET_FIELD, GAME_STAGE} from './consts.js';
import {FONT} from './const/font.js';
import {COLOR} from './const/color.js';
import {drawPlacementSquare, drawSquare, drawEmptySquare} from './drawSquare.js';
import {getShipsMap} from './setShips.js';
import {isVertical} from './markSquare.js';
import {Game} from './GameController.js';
import {BUTTONS} from './const/buttons.js';
function draw(ctx) {
    createField(ctx);
}
function createField(ctx) {
    const x = OFFSET_FIELD.x;
    const y = OFFSET_FIELD.y;
    createCommonField(ctx, x - WIDTH_SQUARE, y - WIDTH_SQUARE*4, 24, 15);
    createOneField(ctx, x, y, MY_FIELD);
}
function createCommonField(ctx, xBegin, yBegin, width, height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            drawEmptySquare(ctx, xBegin + x * WIDTH_SQUARE, yBegin + y * WIDTH_SQUARE);
        }
    }
}
function redrawAllFields(ctx, player) {
    if (Game.state == GAME_STAGE.ARRANGEMENT) {
        drawMap(ctx, player.MyMap, MY_FIELD);
        drawField2WhenPlacement(ctx);
    } else {
        drawMap(ctx, player.EnemyMap, ENEMY_FIELD);
        drawMap(ctx, player.EnemyMoves, MY_FIELD, false);
    }
}
function drawField2WhenPlacement(ctx) {
    ctx.font = FONT.NORMAL;
    ctx.fillStyle = COLOR.PEN;
    ctx.textAlign = 'centre';
    ctx.textBaseline = 'middle';

    const normalX = OFFSET_FIELD.x + BOX_WIDTH;
    const normalY = OFFSET_FIELD.y;

    drawButton(ctx, normalX, normalY, BUTTONS.RANDOM);
    drawButton(ctx, normalX, normalY, BUTTONS.START);
}

function drawButton(ctx, normalX, normalY, button) {
    const x = normalX + button.BEGIN.x * WIDTH_SQUARE;
    const y = normalY + button.BEGIN.y * WIDTH_SQUARE;
    const xMid = x + (button.WIDTH * WIDTH_SQUARE) / 2;
    const yMid = y + (button.HEIGHT * WIDTH_SQUARE) / 2 - 5;
    outerField(ctx, x, y, button.HEIGHT, button.WIDTH);
    ctx.fillText(button.NAME, xMid, yMid, button.WIDTH * WIDTH_SQUARE);
};
function drawMap(ctx, map, field, needOuter = true) {
    const normalX = OFFSET_FIELD.x + field * (BOX_WIDTH);
    const normalY = OFFSET_FIELD.y;
    if (needOuter) {
        createCommonField(ctx, normalX, normalY, 10, 10);
    }
    if (Game.state == GAME_STAGE.ARRANGEMENT) {
        const ships = getShipsMap(map);
        getOuterShips(ctx, normalX, normalY, ships);
    } else {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                const x = normalX + j * WIDTH_SQUARE;
                const y = normalY + i * WIDTH_SQUARE;
                if (Game.state == GAME_STAGE.ARRANGEMENT) {
                    if (field == MY_FIELD) {
                        drawPlacementSquare(ctx, x, y, map[i][j]);
                    };
                } else {
                    drawSquare(ctx, x, y, map[i][j]);
                }
            }
        }
    }

    if (needOuter) {
        outerField(ctx, normalX, normalY, 10, 10);
    }
}
function getOuterShips(ctx, normalX, normalY, ships) {
    for (let i = 0; i < ships.length; i++) {
        const x = normalX + ships[i][0].x * WIDTH_SQUARE;
        const y = normalY + ships[i][0].y * WIDTH_SQUARE;
        if (isVertical(ships[i])) {
            outerField(ctx, x, y, ships[i].length, 1);
        } else {
            outerField(ctx, x, y, 1, ships[i].length);
        }
    }
}
function prepareEnemyField() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const normalX = OFFSET_FIELD.x + BOX_WIDTH;
    const normalY = OFFSET_FIELD.y;

    createOneField(ctx, normalX, normalY, ENEMY_FIELD);
}
function createOneField(ctx, xBegin, yBegin, field = MY_FIELD) {
    const widthSquare = WIDTH_SQUARE;
    ctx.font = FONT.NORMAL;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let y = FIELD_BOUNDARIES.BEGIN; y <= FIELD_BOUNDARIES.END; y++) {
        for (let x = FIELD_BOUNDARIES.BEGIN; x <= FIELD_BOUNDARIES.END; x++) {
            ctx.fillStyle = COLOR.PEN;
            const xMidSquare = xBegin + x * widthSquare + widthSquare / 2;
            const yMidSquare = yBegin + y * widthSquare + widthSquare / 2;
            if (y == FIELD_BOUNDARIES.BEGIN) {
                ctx.fillText(LETTERS[x], xMidSquare, yBegin - widthSquare + widthSquare / 2);
            }
            if (y == FIELD_BOUNDARIES.END) {
                ctx.fillText(LETTERS[x], xMidSquare, yMidSquare + widthSquare);
            }
            if (x == FIELD_BOUNDARIES.END && field == ENEMY_FIELD) {
                ctx.fillText(y + 1, xMidSquare + widthSquare, yMidSquare);
            }
            if (x == FIELD_BOUNDARIES.BEGIN) {
                ctx.fillText(y + 1, xMidSquare - widthSquare, yMidSquare);
            }
            ctx.fillStyle = COLOR.BACKGROUND;
            ctx.strokeStyle = COLOR.BORDER;
            ctx.strokeRect(xMidSquare - widthSquare / 2, yMidSquare - widthSquare / 2, widthSquare, widthSquare);
            ctx.fillRect(xMidSquare - widthSquare / 2, yMidSquare - widthSquare / 2, widthSquare, widthSquare);
        }
    }
}

function outerField(ctx, xBegin, yBegin, height, width) {
    const widthSquare = WIDTH_SQUARE;
    ctx.strokeStyle = COLOR.PEN;
    const isVertical = true;

    drawCurve(ctx, xBegin, yBegin, width, height);
    drawCurve(ctx, xBegin, yBegin, width, height, isVertical);
    drawCurve(ctx, xBegin, yBegin + height * widthSquare, width, height);
    drawCurve(ctx, xBegin + width * widthSquare, yBegin, width, height, isVertical);
}

function drawCurve(ctx, x, y, width, height, isVertical = false) {
    const myPoints = getPoints(x, y, width, height, isVertical);

    ctx.beginPath();
    drawLines(ctx, getCurvePoints(myPoints));
    ctx.lineWidth = 3;
    ctx.stroke();
}
function getPoints(x, y, width, height, isVertical = false) {
    let points;
    if (isVertical) {
        points = [x, y,
            x - 1, y + height * WIDTH_SQUARE * 0.25,
            x - 2, y + height * WIDTH_SQUARE * 0.5,
            x - 1, y + height * WIDTH_SQUARE * 0.75,
            x, y + height * WIDTH_SQUARE + 1,
        ];
    } else {
        points = [x, y,
            x + width * WIDTH_SQUARE * 0.25, y - 1,
            x + width * WIDTH_SQUARE * 0.5, y - 2,
            x + width * WIDTH_SQUARE * 0.75, y + 1,
            x + width * WIDTH_SQUARE + 1, y,
        ];
    }
    if (width == 1 && !isVertical) {
        points = [x, y,
            x + width * WIDTH_SQUARE * 0.5, y - 1,
            x + width * WIDTH_SQUARE + 1, y,
        ];
    }
    if (height == 1 && isVertical) {
        points = [x, y,
            x - 1, y + height * WIDTH_SQUARE * 0.5,
            x, y + height * WIDTH_SQUARE + 1,
        ];
    }
    return points;
}
function getCurvePoints(pts) {
    // use input value if provided, or use a default value
    const tension = 0.5;
    const numOfSegments = 16;

    let _pts = []; const res = [];
    let x; let y;
    let t1x; let t2x; let t1y; let t2y;
    let c1; let c2; let c3; let c4;
    let st; let t; let i;

    _pts = pts.slice(0);

    _pts.unshift(pts[1]); //copy 1. point and insert at beginning
    _pts.unshift(pts[0]);
    _pts.push(pts[pts.length - 2]); //copy last point and append
    _pts.push(pts[pts.length - 1]);

    // ok, lets start..

    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 pts + 1e point before and after
    for (let i = 2; i < (_pts.length - 4); i += 2) {
        for (let t = 0; t <= numOfSegments; t++) {
            // calc tension vectors
            t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
            t2x = (_pts[i + 4] - _pts[i]) * tension;

            t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
            t2y = (_pts[i + 5] - _pts[i + 1]) * tension;

            // calc step
            st = t / numOfSegments;

            // calc cardinals
            c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
            c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
            c4 = Math.pow(st, 3) - Math.pow(st, 2);

            // calc x and y cords with common control vectors
            x = c1 * _pts[i] + c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
            y = c1 * _pts[i+1] + c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

            //store points in array
            res.push(x);
            res.push(y);
        }
    }

    return res;
}
function drawLines(ctx, pts) {
    ctx.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length - 1; i += 2) ctx.lineTo(pts[i], pts[i + 1]);
}

export {
    redrawAllFields,
    draw,
    prepareEnemyField,
    drawCurve,
    outerField,
};
