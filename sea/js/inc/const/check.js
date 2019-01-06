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

export {
    CHECK_ALL_WAY,
    CHECK_ALL_DIAGANAL_SQUARE,
};
