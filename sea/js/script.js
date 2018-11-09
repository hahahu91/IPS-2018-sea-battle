//import {MAPS} from './inc/maps.js';

const MAPS =[
    [
        [1, 0, 0, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 0, 0]

    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
    ],
    [
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    [  
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    ],
    [
        [1, 1, 0, 1, 1, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
    ],
    [
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
    ],
    [
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    ],
    [
        [1,0,0,1,1,1,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,1,0,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [1,0,0,0,1,0,0,0,0,0],
        [1,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,0,0,1,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
    ],
    [
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    [
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    ],
    [
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 1, 1, 0, 0, 0],
    ],
    [
        [1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
    ],
    [
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
    ],
    [   
       [1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
       [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
       [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
       [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    ]
];
const num = getRandomInt(0, MAPS.length);
console.log(MAPS.length, num);
const MAP = MAPS[num];
const MY_MAP = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
const ENEMY_MAP = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
const OFFSET_FIELD = 40;
const MAX_SHIPS = {
    1: 4,
    2: 3,
    3: 2,
    4: 1,
}
const MY_SHIPS = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
}
const ENEMY_SHIPS = {
    1: 4,
    2: 3,
    3: 2,
    4: 1,
}
const ENEMY_MOVES = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
const GAME = {
    placement: true,
    move: false,
    finish: false,
}
const ENEMY_PREV_HIT = {
    x: 0,
    y: 0,
    isHit: false,
}
function main () {    
    const canvas = document.getElementById('canvas');
    const WIDTH = 1000;
    const HEIGHT = 500;
    canvas.width = WIDTH;
	canvas.height = HEIGHT;
    const ctx = canvas.getContext('2d');
    canvas.addEventListener("mousedown", updateField, false);
    const button = document.getElementById('begin');
    button.addEventListener('click', checkShips, false );
    draw(ctx, WIDTH, HEIGHT);
    let lastTimestamp = Date.now();
    const animateFn = () => {
        const currentTimeStamp = Date.now();
        const deltaTime = (currentTimeStamp - lastTimestamp) * 0.001;
        lastTimestamp = currentTimeStamp;
    }
    animateFn();
}
function checkShips() {
    if (isEqual(MAX_SHIPS, MY_SHIPS)) {
        console.log(MY_MAP);
        GAME.placement = false;
        GAME.move = true;
    } else {
        console.log('не установленны корабли !!!');
    }
}
function enemyMove(ctx) {
    let elem = II();
    const hit = attack(ctx, MY_MAP, ENEMY_MOVES, MY_SHIPS, elem);
    if (hit) {
        enemyMove(ctx, elem);
    } else {
        GAME.move = !GAME.move;
    }

}
function killShip(el, enemyMove) {
    let x = el.x;
    let y = el.y;
    if (x != 9) {
        do {
            x++;
        } while (enemyMove[y][x] == 1 && x != 9);
        if (enemyMove[y][x] != 0) {
            x = el.x;
        } else {
            return {
                x: x,
                y: y,
                field: 0,
            }
        }
    }
    if (y != 9) {
        do {
            y++;
        } while (enemyMove[y][x] == 1 && y != 9);
        if (enemyMove[y][x] != 0) {
            y = el.y;
        } else {
            return {
                x: x,
                y: y,
                field: 0,
            }
        }
    }
    if (x != 0) {
        do {
            x--;
        } while (enemyMove[y][x] == 1 && x != 0);
        if (enemyMove[y][x] != 0) {
            x = el.x;
        } else {
            return {
                x: x,
                y: y,
                field: 0,
            }
        }
    }
    if (y != 0) {
        do {
            y--;
        } while (enemyMove[y][x] == 1 && y != 0);
        if (enemyMove[y][x] != 0) {
            y = el.y;
        } else {
            return {
                x: x,
                y: y,
                field: 0,
            }
        }
    }
    return {
        x: x,
        y: y,
        field: 0,
    }
}
function II() {
    let el = {
        x: 0,
        y: 0,
        field: 0,
    };
    
    do {
        if (ENEMY_PREV_HIT.isHit) { //ранение было добиваем
            el = killShip(ENEMY_PREV_HIT, ENEMY_MOVES);            
        } else {
            el.x = getRandomInt(0, 10);
            el.y = getRandomInt(0, 10);
        }
    } while (ENEMY_MOVES[el.y][el.x] != 0);
    if (MY_MAP[el.y][el.x] == 1) {
        ENEMY_MOVES[el.y][el.x] = 1;
    } else {
        ENEMY_MOVES[el.y][el.x] = -1;
    }
    return el;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
function isNull(obj) {
    for (const element of Object.values(obj)) { 
        if (element != 0) return false;
    };
    return true;
}
function isEqual(obj1, obj2) {
    return obj1[1] == obj2[1]
        && obj1[2] == obj2[2]
        && obj1[3] == obj2[3]
        && obj1[4] == obj2[4];
}
function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const ctx = canvas.getContext('2d');
    const elem = searchElem(mousePos, 400);
    updateOneField(ctx, OFFSET_FIELD, OFFSET_FIELD, 400, elem);
}
function searchElem(mouseCoordinates, boxWidth) {
    const widthSquare = boxWidth / 10;
    for (let field = 0; field < 2; field++) {
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                //console.log(x * widthSquare, y * widthSquare, mouseCoordinates.x, mouseCoordinates.y);
                if ((x * widthSquare + (boxWidth + OFFSET_FIELD) * field  <= mouseCoordinates.x) && 
                    (y * widthSquare <= mouseCoordinates.y) && 
                    (x * widthSquare + widthSquare + (boxWidth + OFFSET_FIELD) * field > mouseCoordinates.x) && 
                    (y * widthSquare + widthSquare > mouseCoordinates.y)) {
                        //console.log(x * widthSquare + OFFSET_FIELD + (boxWidth + OFFSET_FIELD) * field,  mouseCoordinates, x * widthSquare + widthSquare + OFFSET_FIELD + (boxWidth + OFFSET_FIELD) * field, field);
                        return {
                            field,
                            x,
                            y
                        }
                    }
            }
        }
    }
    
    return false;
}
function updateOneField(ctx, xBegin, yBegin, boxWidth, elem) {
    const widthSquare = boxWidth / 10;
    if (elem) {
        const x = xBegin + elem.x * widthSquare + elem.field * (boxWidth + OFFSET_FIELD);
        const y = yBegin + elem.y * widthSquare;
        if(elem.field == 1) {
            if (GAME.move) {
                if(!GAME.finish) {
                    let Hit = attack(ctx, MAP, ENEMY_MAP, ENEMY_SHIPS, elem);
                    if (!Hit.isHit) {
                        GAME.move = !GAME.move;
                        enemyMove(ctx);
                    }
                }
            }
        } else {
            if(GAME.placement) {
                if (MY_MAP[elem.y][elem.x]) {
                    MY_MAP[elem.y][elem.x] = 0;
                    const count = countShip(elem, MY_MAP);                
                    MY_SHIPS[count]--;
                    let c  = check3(elem, MY_MAP, count); 
                    if (count == 4) {
                        if (c == 3) {
                            MY_SHIPS[3]++;
                        }
                        if (c == 2) {
                            MY_SHIPS[2]++;
                            MY_SHIPS[1]++;
                        }   
                    }
                    if (count == 3) {
                        if (c == 1) {
                            MY_SHIPS[1] += 2;
                        } 
                        if (c == 2){
                            MY_SHIPS[2]++;
                        }
                    }
                    if (count == 2) {
                        MY_SHIPS[1]++;
                    } 
                    ctx.fillStyle = "#808080";
                    ctx.fillRect(x, y, widthSquare - 1, widthSquare - 1);
                } else {
                    let can = checkDiaganalElements(elem, MY_MAP);
                    if (can) {
                        const count = countShip(elem, MY_MAP);
                        if (count >= 1 && count <= 4){
                            if (MY_SHIPS[1] < MAX_SHIPS[1] || MY_SHIPS[2] < MAX_SHIPS[2] || MY_SHIPS[3] < MAX_SHIPS[3] || MY_SHIPS[4] < MAX_SHIPS[4]) {
                                MY_SHIPS[count]++;
                                if (count >= 3) {
                                    let c  = check3(elem, MY_MAP, count); 
                                    //console.log(c, count);
                                    if (c == 1) {
                                        MY_SHIPS[1] -= 2;
                                    } else if (c == 2){
                                        MY_SHIPS[2]--;
                                        if (count == 4) {
                                            MY_SHIPS[1]--;
                                        }
                                    } else if (c == 3) {
                                        MY_SHIPS[3]--;
                                    }
                                } else if (count == 2) {
                                    MY_SHIPS[1]--;
                                }
                            } else {
                                can = false;
                            }
                        } else {
                            can = false;
                        }
                        if (can ) {
                            MY_MAP[elem.y][elem.x] = 1;
                            ctx.fillStyle = "green";
                            ctx.fillRect(x, y, widthSquare - 1, widthSquare - 1);
                        }
                    }
                }
            }
            
        }
    }
}
function attack(ctx, map, enemyMap, enemyShips, elem) {
    const widthSquare = 40;
    const x = OFFSET_FIELD + elem.x * widthSquare + elem.field * (400 + OFFSET_FIELD);
    const y = OFFSET_FIELD + elem.y * widthSquare;

    if (GAME.move == false || GAME.move == true && enemyMap[elem.y][elem.x] != 1 && enemyMap[elem.y][elem.x] != -1) { //|| GAME.move == false

        //console.log(enemyMap[elem.y][elem.x] , GAME.move);
        if (map[elem.y][elem.x]) {
            enemyMap[elem.y][elem.x] = 1;
            markDiaganalElements(elem, enemyMap);
            const lengthShip = countShip(elem, map);
            const len = countShip(elem, enemyMap);
            if (lengthShip == len) { //убили   
                enemyShips[len]--;
                //console.log(enemyShips);
                if(isNull(enemyShips)) {
                    (GAME.move) ? console.log("YOU WIN") : console.log("YOU LOST") ;
                    GAME.finish = true;
                }
                ctx.fillStyle = "red";
                const coord = coordinateShip(elem, enemyMap);
                for(let i = 0; i < coord.length; i++) {
                    const diffX = (elem.x - coord[i].x) * widthSquare ;
                    const diffY = (elem.y - coord[i].y) * widthSquare;
                    ctx.fillRect( x - diffX, y - diffY, widthSquare - 1, widthSquare - 1);
                }
                if (GAME.move == false) {
                    ENEMY_PREV_HIT.isHit = false;
                }
                return true;
            } else {
                ctx.fillStyle = "red";
                ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
                ctx.fillText("X", x + widthSquare / 2, y + widthSquare / 2);
                if (GAME.move == false) {
                    ENEMY_PREV_HIT.x = elem.x;
                    ENEMY_PREV_HIT.y = elem.y;
                    ENEMY_PREV_HIT.isHit = true;
                }
                return true;
            }
        } else {
            enemyMap[elem.y][elem.x] = -1;
            ctx.fillStyle = "black";
            ctx.fillText(".", x + widthSquare / 2, y + widthSquare / 4);
            elem.field = 2;
            //GAME.move = !GAME.move;
            return false;
        }
    } else {
        return true;
    }
   
}
function check3(elem, map, search) {
    count = 0;
    let x = elem.x;
    let y = elem.y;
    if (x < 9 && map[y][x + 1]) {
        let count2 = 0;
        while (x < 9 && map[y][x + 1]) {
            x++;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (x > 0 && map[y][x - 1]) {
        count2 = 0;
        while (x > 0 && map[y][x - 1]) {
            x--;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (y < 9 && map[y + 1][x]) {
        count2 = 0;
        while (y < 9 && map[y + 1][x]) {
            y++;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    x = elem.x;
    y = elem.y;
    if (y > 0 && map[y - 1][x]) {
        count2 = 0;
        while (y > 0 && map[y - 1][x]) {
            y--;
            count2++;
            if (count2 == search) return count2;
            if (count2 > count) {
                count = count2;
            }
        }
    }
    return count;
}
function countShip(elem, map) {    
    let count = 1;
    let x = elem.x;
    let y = elem.y;
    while (x < 9 && map[y][x + 1] == 1) {
        x++;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (x > 0 && map[y][x - 1] == 1) {
        x--;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (y < 9 && map[y + 1][x] == 1) {
        y++;
        count++;
    }
    x = elem.x;
    y = elem.y;
    while (y > 0 && map[y - 1][x] == 1) {
        y--;
        count++;
    }
    return count;
}
function coordinateShip(elem, map) {    
    let el = [];
    let count = 0;
    let x = elem.x;
    let y = elem.y;
    el[count++] = {
        y: y,
        x: x,
    };
    while (x < 9 && map[y][x + 1] == 1) {
        el[count++] = {
            y: y,
            x: x + 1,
        };
        x++;
    }
    x = elem.x;
    y = elem.y;
    while (x > 0 && map[y][x - 1] == 1) {
        el[count++] = {
            y: y,
            x: x - 1,
        };
        x--;
    }
    x = elem.x;
    y = elem.y;
    while (y < 9 && map[y + 1][x] == 1) {
        el[count++] = {
            y: y + 1,
            x: x
        };
        y++;
    }
    x = elem.x;
    y = elem.y;
    while (y > 0 && map[y - 1][x] == 1) {
        el[count++] = {
            y: y - 1,
            x: x
        };
        y--;
    }
    return el;
}
function checkDiaganalElements(elem, map) {
    let can = true;
    if (elem.y != 0 && elem.y != 9 && elem.x != 0 && elem.x != 9) {
        if (map[elem.y + 1][elem.x + 1] || map[elem.y + 1][elem.x - 1] || 
            map[elem.y - 1][elem.x + 1] || map[elem.y - 1][elem.x - 1]) can = false;
    } else {
        if (elem.y == 0 && elem.x == 0) {
            if (map[elem.y + 1][elem.x + 1]) can = false;
        } else if (elem.y == 9 && elem.x == 9) {
            if (map[elem.y - 1][elem.x - 1]) can = false;
        } else if (elem.y == 0 && elem.x == 9) {
            if (map[elem.y + 1][elem.x - 1]) can = false;
        }  else if (elem.y == 9 && elem.x == 0) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }   else if (elem.y == 0 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y + 1][elem.x - 1] || map[elem.y + 1][elem.x + 1]) can = false;
        }   else if (elem.x == 0 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y + 1][elem.x + 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }   else if (elem.x == 9 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y + 1][elem.x - 1]) can = false;
        }   else if (elem.y == 9 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y - 1][elem.x - 1] || map[elem.y - 1][elem.x + 1]) can = false;
        }
    }
    return can;
}
function markDiaganalElements(elem, map) {
    if (elem.y != 0 && elem.y != 9 && elem.x != 0 && elem.x != 9) {
        if (map[elem.y + 1][elem.x + 1] == 0) map[elem.y + 1][elem.x + 1] = -2;
        if (map[elem.y + 1][elem.x - 1] == 0) map[elem.y + 1][elem.x - 1] = -2;
        if (map[elem.y - 1][elem.x + 1] == 0) map[elem.y + 1][elem.x - 1] = -2;
        if (map[elem.y - 1][elem.x - 1] == 0) map[elem.y - 1][elem.x - 1] = -2;
    } else {
        if (elem.y == 0 && elem.x == 0) {
            if (map[elem.y + 1][elem.x + 1] == 0) map[elem.y + 1][elem.x + 1] = -2;
        } else if (elem.y == 9 && elem.x == 9) {
            if (map[elem.y - 1][elem.x - 1] == 0) map[elem.y - 1][elem.x - 1] = -2;
        } else if (elem.y == 0 && elem.x == 9) {
            if (map[elem.y + 1][elem.x - 1] == 0) map[elem.y + 1][elem.x - 1] = -2;
        }  else if (elem.y == 9 && elem.x == 0) {
            if (map[elem.y - 1][elem.x - 1] == 0) map[elem.y - 1][elem.x - 1] = -2;
            if (map[elem.y - 1][elem.x + 1] == 0) map[elem.y - 1][elem.x + 1] = -2;
        }   else if (elem.y == 0 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y + 1][elem.x - 1] == 0) map[elem.y + 1][elem.x - 1] = -2;
            if (map[elem.y + 1][elem.x + 1] == 0) map[elem.y + 1][elem.x + 1] = -2;
        }   else if (elem.x == 0 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y + 1][elem.x + 1] == 0) map[elem.y + 1][elem.x + 1] = -2;
            if (map[elem.y - 1][elem.x + 1] == 0) map[elem.y - 1][elem.x + 1] = -2;
        }   else if (elem.x == 9 && elem.y != 0 && elem.y != 9) {
            if (map[elem.y - 1][elem.x - 1] == 0) map[elem.y - 1][elem.x - 1] = -2;
            if (map[elem.y + 1][elem.x - 1] == 0) map[elem.y + 1][elem.x - 1] = -2;
        }   else if (elem.y == 9 && elem.x != 0 && elem.x != 9) {
            if (map[elem.y - 1][elem.x - 1] == 0) map[elem.y - 1][elem.x - 1] = -2;
            if (map[elem.y - 1][elem.x + 1] == 0) map[elem.y - 1][elem.x + 1] = -2;
        }
    }
    return;
}
function createOneField(ctx, xBegin, yBegin, boxWidth) {
    const widthSquare = boxWidth / 10;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            ctx.strokeRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
            ctx.fillRect(xBegin + x * widthSquare, yBegin + y * widthSquare, widthSquare, widthSquare);
        }
    }
    
}
function createField(ctx, Width,  Height) {
    ctx.fillStyle = "#808080";
    ctx.strokeStyle = "#000";
    ctx.font = "Bold 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const x = OFFSET_FIELD;
    const y = OFFSET_FIELD;
    let minWidth;
    (Width > Height) ? minWidth = Width : minWidth = Height;
    const boxWidth = minWidth * 0.4;
    createOneField(ctx, x, y, boxWidth);
    createOneField(ctx, x * 2 + boxWidth, y, boxWidth);
}
function mouseCoordinates(canvas, event){
    //let margin = canvas.getBoundingClientRect();
    let tempX = event.pageX - canvas.offsetLeft;
    let tempY = event.pageY - canvas.offsetTop;
    return {
        x: tempX - OFFSET_FIELD,
        y: tempY - OFFSET_FIELD,
    }
}



function draw(ctx, WIDTH, HEIGHT) {
    createField(ctx, WIDTH, HEIGHT);
}

main();
