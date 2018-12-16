
const WIDTH = 1000;
const HEIGHT = 500;
const CANVAS_SIZE = {
    WIDTH: 1000,
    HEIGHT: 500,
};
const NO_SHIP = -3;
const NO_SHIP_INV = -2;
const MISS = -1;
const HAVE_SHIP = 1;
const KILLED = 2;
const EMPTY = 0;
const END_FIELD = 9;
const BEGIN_FIELD = 0;
const MY_FIELD = 0;
const ENEMY_FIELD = 1;
const WIDTH_SQUARE = HEIGHT/15;
const OFFSET_FIELD = {
    x: Math.max((WIDTH-24*WIDTH_SQUARE)/2, 0) + WIDTH_SQUARE,
    y: 2 + WIDTH_SQUARE*4,
};
const BOX_WIDTH = WIDTH_SQUARE * 12;
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
    NO_SHIP,
    NO_SHIP_INV,
    MISS,
    HAVE_SHIP,
    KILLED,
    EMPTY,
    END_FIELD,
    BEGIN_FIELD,
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
    WIDTH,
    HEIGHT,
    CANVAS_SIZE,
};


