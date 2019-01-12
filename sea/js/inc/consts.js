const CANVAS_SIZE = {
    WIDTH: document.documentElement.clientWidth,
    HEIGHT: document.documentElement.clientHeight,
    TOTAL_SQUARE: {
        HEIGHT: 15,
        WIDTH: 24,
    },
};
const BORDER = {
    END: 9,
    BEGIN: 0,
};
const GAME_STAGE = {
    ARRANGEMENT: false,
    READY: true,
};
const WIDTH_SQUARE = getWidthSquare();
const OFFSET_FIELD = {
    x: getOffsetX(),
    y: WIDTH_SQUARE * 4,
};
const BOX_WIDTH = WIDTH_SQUARE * CANVAS_SIZE.TOTAL_SQUARE.WIDTH / 2;
const TYPE_SHIPS = {
    1: 'oneDesk',
    2: 'twoDesk',
    3: 'threeDesk',
    4: 'fourDesk',
};
const MAX_SHIPS = {
    oneDesk: 4,
    twoDesk: 3,
    threeDesk: 2,
    fourDesk: 1,
};
const AI = 'AI';
const MY_MOVE = true;
const ENEMY_MOVE = false;

const LETTERS = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к'];
function getWidthSquare() {
    const h = CANVAS_SIZE.HEIGHT / CANVAS_SIZE.TOTAL_SQUARE.HEIGHT;
    const w = CANVAS_SIZE.WIDTH / CANVAS_SIZE.TOTAL_SQUARE.WIDTH;
    return Math.min(h, w, 40);
}
function getOffsetX() {
    const indentLeft = Math.max((CANVAS_SIZE.WIDTH - CANVAS_SIZE.TOTAL_SQUARE.WIDTH * WIDTH_SQUARE) / 2, 0);
    return WIDTH_SQUARE * parseInt(indentLeft / WIDTH_SQUARE) + WIDTH_SQUARE;
}
export {
    BORDER,
    WIDTH_SQUARE,
    OFFSET_FIELD,
    TYPE_SHIPS,
    MAX_SHIPS,
    MY_MOVE,
    ENEMY_MOVE,
    LETTERS,
    BOX_WIDTH,
    CANVAS_SIZE,
    GAME_STAGE,
    AI,
};


