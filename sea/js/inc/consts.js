const CANVAS_SIZE = {
    WIDTH: 1000,
    HEIGHT: 500,
    TOTAL_SQUARE: {
        HEIGHT: 15,
        WIDTH: 24,
    },
};
const SQUARE_STATE = {
    NO_SHIP: -3,
    NO_SHIP_INV: -2,
    MISS: -1,
    HAVE_SHIP: 1,
    KILLED: 2,
    EMPTY: 0,
};
const FIELD_BOUNDARIES = {
    END: 9,
    BEGIN: 0,
};
const GAME_STAGE = {
    ARRANGEMENT: false,
    READY: true,
};
const MY_FIELD = 0;
const ENEMY_FIELD = 1;
const WIDTH_SQUARE = CANVAS_SIZE.HEIGHT / CANVAS_SIZE.TOTAL_SQUARE.HEIGHT;
const OFFSET_FIELD = {
    x: Math.max((CANVAS_SIZE.WIDTH-CANVAS_SIZE.TOTAL_SQUARE.WIDTH * WIDTH_SQUARE) / 2, 0) + WIDTH_SQUARE,
    y: 2 + WIDTH_SQUARE*4,
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
const MY_MOVE = true;
const ENEMY_MOVE = false;
const CHECK_ALL_WAY = {
    left: {y: 0, x: -1},
    right: {y: 0, x: 1},
    up: {y: -1, x: 0},
    down: {y: 1, x: 0},
};
const CHECK_ALL_DIAGANAL_SQUARE = {
    leftTop: {y: -1, x: -1},
    rightTop: {y: -1, x: 1},
    leftDown: {y: 1, x: -1},
    rightDown: {y: 1, x: 1},
};
const LETTERS = ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к'];

export {
    SQUARE_STATE,
    FIELD_BOUNDARIES,
    MY_FIELD,
    ENEMY_FIELD,
    WIDTH_SQUARE,
    OFFSET_FIELD,
    TYPE_SHIPS,
    MAX_SHIPS,
    MY_MOVE,
    ENEMY_MOVE,
    CHECK_ALL_WAY,
    CHECK_ALL_DIAGANAL_SQUARE,
    LETTERS,
    BOX_WIDTH,
    CANVAS_SIZE,
    GAME_STAGE,
};


