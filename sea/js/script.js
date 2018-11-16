//import {MAPS} from "./inc/maps.js"; 
//функции примерно по 20 строк
const MAPS =[
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    ],
    [
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    ],
    [
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    ],
    [
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    ],
    [
        [0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ],
    [
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
    [
        [0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    ],
    [
        [1, 1, 0, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
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
const MyMap = [
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
const EnemyMap = [
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
const TYPE_SHIPS = {
    1: 'oneDesk',
    2: 'twoDesk',
    3: 'threeDesk',
    4: 'fourDesk',
}
const MAX_SHIPS = {
    oneDesk: 4,
    twoDesk: 3,
    threeDesk: 2,
    fourDesk: 1,
}
const MyShips = {
    oneDesk: 0,
    twoDesk: 0,
    threeDesk: 0,
    fourDesk: 0,
}
const EnemyShips = {
    oneDesk: 4,
    twoDesk: 3,
    threeDesk: 2,
    fourDesk: 1,
}
const EnemyMoves = [
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
const Game = {
    placement: true,
    move: false,
    finish: false,
}
const EnemyPrevHit = {
    x: 0,
    y: 0,
    isHit: false,
}
const NO_SHIP = -2;
const MISS = -1;
const HAVE_SHIP = 1;
const KILLED = 2;
const EMPTY = 0;
const END_FIELD = 9;
const BEGIN_FIELD = 0;
const MY_FIELD = 0;
const ENEMY_FIELD = 1;
const WIDTH_SQUARE = 40;
const MY_MOVE = true;
const ENEMY_MOVE = false;
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
        redrawAllFields(ctx, MyMap, EnemyMap, EnemyMoves);
        requestAnimationFrame(animateFn);
    }
    animateFn();
}
function redrawAllFields(ctx, map1, map2, map3) {
    if (Game.placement) {
        drawMap(ctx, map1, MY_FIELD);
    } else {
        drawMap(ctx, map2, ENEMY_FIELD);
        drawMap(ctx, map3, MY_FIELD);
    }
}
function drawMap (ctx, map, field) {
    ctx.font = "Bold 30pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const boxWidth = 400;
    for(let i = 0; i < map.length; i++){
        for (let j = 0; j < map[i].length; j++){
            const x = OFFSET_FIELD + j * WIDTH_SQUARE + field * (boxWidth + OFFSET_FIELD);
            const y = OFFSET_FIELD + i * WIDTH_SQUARE;
            if (Game.placement) {
                if (field == MY_FIELD) {
                    drawPlacementSquare(ctx, x, y, map[i][j]);
                };
            } else {
                drawSquare(ctx, x, y, map[i][j]);
            }        
        }
    }
}
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
        //case EMPTY: 
           // drawEmptySquare(ctx, x, y); 
    }
}
function drawKilledSquare(ctx, x, y){
    ctx.fillStyle = "red";
    ctx.fillRect(x, y , WIDTH_SQUARE - 1, WIDTH_SQUARE - 1);
}
function drawMissedSquare(ctx, x, y) {
    ctx.fillStyle = "black";
    ctx.fillText(".", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 4);
}
function drawDeckSquare(ctx, x, y) {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, WIDTH_SQUARE - 1, WIDTH_SQUARE - 1);
}
function drawHitSquare(ctx, x, y) {
    ctx.fillStyle = "red";
    ctx.strokeRect(x, y, WIDTH_SQUARE - 1, WIDTH_SQUARE - 1);
    ctx.fillText("X", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);    
}
function drawEmptySquare (ctx, x, y) {
    ctx.fillStyle = "#808080";
    ctx.strokeStyle = "#000";
    ctx.strokeRect(x , y, WIDTH_SQUARE, WIDTH_SQUARE);
    ctx.fillRect(x, y, WIDTH_SQUARE, WIDTH_SQUARE);
}
function checkShips() {
    console.log(MAX_SHIPS, MyShips);
    if (isEqualShips(MAX_SHIPS, MyShips)) {        
        Game.placement = false;
        Game.move = true;
    } else {
        alert('не установленны корабли !!!');
    }
}
function enemyMove(ctx) {
    let elem = AI();
    const hit = attack(ctx, MyMap, EnemyMoves, MyShips, elem);
    if (hit) {
        enemyMove(ctx, elem);
    } else {
        Game.move = !Game.move;
    }

}
function killShip(el, enemyMove) {
    let x = el.x;
    let y = el.y;
    if (x != END_FIELD) {
        do {
            x++;
        } while (enemyMove[y][x] == HAVE_SHIP && x != END_FIELD);
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
    if (y != END_FIELD) {
        do {
            y++;
        } while (enemyMove[y][x] == HAVE_SHIP && y != END_FIELD);
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
    if (x != BEGIN_FIELD) {
        do {
            x--;
        } while (enemyMove[y][x] == HAVE_SHIP && x != BEGIN_FIELD);
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
    if (y != BEGIN_FIELD) {
        do {
            y--;
        } while (enemyMove[y][x] == HAVE_SHIP && y != BEGIN_FIELD);
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
function AI() {
    let el = {
        x: 0,
        y: 0,
        field: 0,
    };
    
    do { //переименовать
        if (EnemyPrevHit.isHit) { //ранение было добиваем 
            el = killShip(EnemyPrevHit, EnemyMoves);            
        } else {
            el.x = getRandomInt(0, 10);
            el.y = getRandomInt(0, 10);
        }
    } while (EnemyMoves[el.y][el.x] != EMPTY);
    if (MyMap[el.y][el.x] == HAVE_SHIP) {
        EnemyMoves[el.y][el.x] = HAVE_SHIP;
    } else {
        EnemyMoves[el.y][el.x] = MISS;
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
function isEqualShips(obj1, obj2) {
    return obj1.oneDesk == obj2.oneDesk
        && obj1.twoDesk == obj2.twoDesk
        && obj1.threeDesk == obj2.threeDesk
        && obj1.fourDesk == obj2.fourDesk;
}
function updateField(event) {
    const mousePos = mouseCoordinates(canvas, event);
    const ctx = canvas.getContext('2d');
    const elem = searchElem(mousePos, 400);
    updateOneField(ctx, elem);
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
function removeDesk(map, ships, elem) {
    map[elem.y][elem.x] = EMPTY;
    const typeShip = countShip(elem, map);                     
    const lengthShip  = checkShipLen(elem, map, typeShip); 
    ships[typeShip]--;
    if (typeShip == 'fourDesk') {
        if (lengthShip == 'threeDesk') {
            ships.threeDesk++;
        }
        if (lengthShip == 'twoDesk') {
            ships.twoDesk++;
            ships.oneDesk++;
        }   
    }
    if (typeShip == 'threeDesk') {
        if (lengthShip == 'oneDesk') {
            ships.oneDesk += 2;
        } 
        if (lengthShip == 'twoDesk'){
            ships.twoDesk++;
        }
    }
    if (typeShip == 'twoDesk') {
        ships.oneDesk++;
    } 
    //ctx.fillStyle = "#808080";
    //ctx.fillRect(x, y, 39, 39);
}
function addShip(map, ships, elem) {
    if (checkDiaganalElements(elem, map)) {
        const typeShip = countShip(elem, map);
        if (typeShip != null){
            if (!isEqualShips(ships, MAX_SHIPS)) {
                map[elem.y][elem.x] = HAVE_SHIP;
                ships[typeShip]++;
                const lenPrevShip  = checkShipLen(elem, map, typeShip);
                removePrevTypeShips(typeShip, lenPrevShip, ships);
            } 
        } 
    }
}
function removePrevTypeShips(typeShip, lenPrevShip, ships) {
    if (typeShip == 'threeDesk' || typeShip == 'fourDesk') {
        if (lenPrevShip == 'oneDesk') {
            ships.oneDesk -= 2;
        } else if (lenPrevShip == 'twoDesk'){
            ships.twoDesk--;
            if (typeShip == 'fourDesk') {
                ships.oneDesk--;
            }
        } else if (lenPrevShip == 'threeDesk') {
            ships.threeDesk--;
        }
    } else if (typeShip == 'twoDesk') {
        ships.oneDesk--;
    }
}
function updateOneField(ctx, elem) {
    if (elem) {
        if(Game.placement && elem.field == MY_FIELD) {
            (MyMap[elem.y][elem.x] == HAVE_SHIP) ? removeDesk(MyMap, MyShips, elem): addShip(MyMap, MyShips, elem);
        }
        if(elem.field == ENEMY_FIELD) { //конст
            if (Game.move == MY_MOVE) {
                if(!Game.finish) {
                    let hit = attack(ctx, MAP, EnemyMap, EnemyShips, elem);
                    if (!hit) {
                        Game.move = !Game.move;
                        enemyMove(ctx);
                    }
                }
            }
        } 
    }
}
function attack(ctx, map, EnemyMap, enemyShips, elem) {
    const widthSquare = 40;
    const x = OFFSET_FIELD + elem.x * widthSquare + elem.field * (400 + OFFSET_FIELD);
    const y = OFFSET_FIELD + elem.y * widthSquare;

    if (Game.move == ENEMY_MOVE || Game.move == MY_MOVE && EnemyMap[elem.y][elem.x] == EMPTY) { //|| Game.move == false
        if (map[elem.y][elem.x] == HAVE_SHIP) {
            EnemyMap[elem.y][elem.x] = HAVE_SHIP;
            markDiaganalElements(elem, EnemyMap);
            const lengthShip = countShip(elem, map);
            const len = countShip(elem, EnemyMap);
            if (lengthShip == len) { //убили   
                enemyShips[len]--;
                //console.log(enemyShips);
                if(isNull(enemyShips)) {
                    (Game.move) ? console.log("YOU WIN") : console.log("YOU LOST") ;
                    Game.finish = true;
                }
                //ctx.fillStyle = "red";
                const coord = coordinateShip(elem, EnemyMap);
                for(let i = 0; i < coord.length; i++) {
                    EnemyMap[coord[i].y][coord[i].x] = KILLED;
                }
                if (Game.move == false) {
                    EnemyPrevHit.isHit = false;
                }
                return true;
            } else {
                //ctx.fillStyle = "red";
                //ctx.strokeRect(x, y, widthSquare - 1, widthSquare - 1);
                //ctx.fillText("X", x + widthSquare / 2, y + widthSquare / 2);
                if (Game.move == ENEMY_MOVE) {
                    EnemyPrevHit.x = elem.x;
                    EnemyPrevHit.y = elem.y;
                    EnemyPrevHit.isHit = true;
                }
                return true;
            }
        } else {   
            EnemyMap[elem.y][elem.x] = MISS;
           // ctx.fillStyle = "black";
            //ctx.fillText(".", x + widthSquare / 2, y + widthSquare / 4);
            return false;
        }
    } else {
        return true;
    }   
}
function checkShipLen(elem, map, search) {
    count = 0;
    let x = elem.x;
    let y = elem.y;
    if (x < 9 && map[y][x + 1]) {
        let count2 = 0;
        while (x < 9 && map[y][x + 1]) {
            x++;
            count2++;
            if (TYPE_SHIPS[count2]  == search) return TYPE_SHIPS[count2];
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
            if (TYPE_SHIPS[count2] == search) return TYPE_SHIPS[count2];
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
            if (TYPE_SHIPS[count2] == search) return TYPE_SHIPS[count2];
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
            if (TYPE_SHIPS[count2] == search) return TYPE_SHIPS[count2];
            if (count2 > count) {
                count = count2;
            }
        }
    }
    return TYPE_SHIPS[count];
}
function countShip(elem, map) {    
    const checkAllWay = {
        left: {
            y: 0,
            x: -1
        },
        right: {
            y: 0,
            x: 1
        },
        up: {
            y: -1,
            x: 0
        },
        down: {
            y: 1,
            x: 0
        }
    }
    let count = 1;
    let x;
    let y;

    for (const key of Object.keys(checkAllWay)) {
        x = elem.x + checkAllWay[key].x;
        y = elem.y + checkAllWay[key].y;
        while (y >= 0 && y <= 9 && x >= 0 && x <= 9 && map[y][x] == 1) {
            y = y + checkAllWay[key].y;
            x = x + checkAllWay[key].x;
            count++;
        }
    }
    if (count >= 1 && count <= 4) {
        return TYPE_SHIPS[count];
    } else {
        return null;
    }
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
    el.sort(compareEl);
    return el;
}
function compareEl(a, b) {
    if (a.x > b.x || a.y > b.y) return 1;
    if (a.x < b.x || a.y < b.y) return -1;
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
function markAroundShip(coord, map) {
    if (coord.length > 1) {
        if (coord[0].x <  coord[1].x) { //корабль по горизонтали
            if (coord[0].x != 0 && coord[0].y != 0) {
                map[coord[0].x][coord[0].y] = -2
            }
        }
    }
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
