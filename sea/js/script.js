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
var MyMap = [
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
const WIDTH_SQUARE = 40;
const MY_MOVE = true;
const ENEMY_MOVE = false;
const CHECK_ALL_WAY = {
    left:   {y: 0, x: -1},
    right:  {y: 0, x: 1},
    up:     {y: -1, x: 0},
    down:   {y: 1, x: 0}
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
        case NO_SHIP:
            drawNoShipSquare(ctx, x, y);
            break;
        case -2:
            drawNoShipSquare2(ctx, x, y);
            break;
    }
}
function drawNoShipSquare2(ctx, x, y) {
    ctx.fillStyle = "black";
    ctx.font = "regular 20pt Arial";
    ctx.fillText("!", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
}
function drawNoShipSquare(ctx, x, y) {
    drawEmptySquare(ctx, x, y);
    ctx.fillStyle = "black";
    ctx.font = "regular 20pt Arial";
    ctx.fillText("-", x + WIDTH_SQUARE / 2, y + WIDTH_SQUARE / 2);
}
function drawKilledSquare(ctx, x, y) {
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
    ctx.font = "bold 30pt Arial";
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
        let firstMove = getRandomInt(0, 2);
        if (firstMove == 0) {
            Game.move = MY_MOVE;
        }  else {
            Game.move = ENEMY_MOVE;
            enemyMove();
        } 
    } else {
        if (Game.placement == true) {
            alert('не установленны корабли !!!');
        }
    }
}
function enemyMove() {
    let elem = AI();
    const hit = handlerAttack(MyMap, EnemyMoves, MyShips, elem);
    if (hit) {
        enemyMove(elem);
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
    const elem = searchElem(mousePos, 400);
    if (elem != null) {
        updateOneField(elem);
    }
}
function searchElem(mouseCoordinates, boxWidth) {
    const widthSquare = boxWidth / 10;
    for (let field = 0; field < 2; field++) {
        for (let y = BEGIN_FIELD; y <= END_FIELD; y++) {
            for (let x = BEGIN_FIELD; x <= END_FIELD; x++) {
                if ((x * widthSquare + (boxWidth + OFFSET_FIELD) * field  <= mouseCoordinates.x) && 
                    (y * widthSquare <= mouseCoordinates.y) && 
                    (x * widthSquare + widthSquare + (boxWidth + OFFSET_FIELD) * field > mouseCoordinates.x) && 
                    (y * widthSquare + widthSquare > mouseCoordinates.y)) {
                        return {
                            field,
                            x,
                            y
                        }
                    }
            }
        }
    }    
    return null;
}
function removeDesk(map, ships, elem) {
    map[elem.y][elem.x] = EMPTY;
    const typePrevShip = countShip(elem, map);                     
    const lengthCurShip  = checkShipLen(elem, map, typePrevShip); 
    ships[typePrevShip]--;
    addCurTypeShips(typePrevShip, lengthCurShip, ships);
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
function addCurTypeShips(typePrevShip, lenCurShip, ships) {
    if (typePrevShip == 'fourDesk') {
        if (lenCurShip == 'threeDesk') {
            ships.threeDesk++;
        }
        if (lenCurShip == 'twoDesk') {
            ships.twoDesk++;
            ships.oneDesk++;
        }   
    }
    if (typePrevShip == 'threeDesk') {
        if (lenCurShip == 'oneDesk') {
            ships.oneDesk += 2;
        } 
        if (lenCurShip == 'twoDesk'){
            ships.twoDesk++;
        }
    }
    if (typePrevShip == 'twoDesk') {
        ships.oneDesk++;
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
function updateOneField(elem) {
    if(Game.placement) {
        if (elem.field == ENEMY_FIELD && elem.x >= 7 && elem.y >= 7) {
            MyMap = getRandomMaps();
            MyShips.oneDesk = 4;
            MyShips.twoDesk = 3;
            MyShips.threeDesk = 2;
            MyShips.fourDesk = 1;
        }
        updateFieldWhenPlacing(MyMap, MyShips, elem);
    } else if(elem.field == ENEMY_FIELD && Game.move == MY_MOVE && !Game.finish) { 
        let hit = handlerAttack(MAP, EnemyMap, EnemyShips, elem);
        if (!hit) {
            enemyMove();
        }
    } 
}
function getRandomMaps() {
    const num = getRandomInt(0, MAPS.length);
    let map = MAPS[num];
    const reverse = getRandom(0, 4);
    switch (reverse) {
        case 0: 
            reverseX(map);
        case 1:
            reverseY(map);
            break;
        case 2: 
            reverseX(map);
        // case 3: оставляем как есть
    }
    return map;
}
function reverseX(map) {
    for (let i = 0; i < map.length; i++) {
        map[i].reverse();
    }
}
function reverseY(map) {
    map.reverse();
}
function updateFieldWhenGaming(MAP, EnemyMap, EnemyShips, elem) {

}
function updateFieldWhenPlacing(map, ships, elem) {
   if (elem.field == MY_FIELD) {
        (map[elem.y][elem.x] == HAVE_SHIP) ? removeDesk(map, ships, elem): addShip(map, ships, elem);
   }
}
function handlerAttack(enemyMap, myMovesMap, enemyShips, elem) { 
    const shotCondition = checkHit(enemyMap, myMovesMap, enemyShips, elem);
    if (shotCondition == KILLED) {
        markKilledShip(elem, myMovesMap);        
        if (Game.move == ENEMY_MOVE) {
            EnemyPrevHit.isHit = false;
        };
        if(isNull(enemyShips)) {
            (Game.move == MY_MOVE) ? alert("YOU WIN") : alert("YOU LOST") ;
            Game.finish = true;
        };
    } else if (shotCondition == HAVE_SHIP) {
        markWhenWounded(elem, myMovesMap);
        if (Game.move == ENEMY_MOVE) {
            EnemyPrevHit.x = elem.x;
            EnemyPrevHit.y = elem.y;
            EnemyPrevHit.isHit = true;
        }
    } else if (shotCondition == MISS) {
        myMovesMap[elem.y][elem.x] = MISS;
        Game.move = !Game.move;
        return false;
    }
    return true;
}
function checkHit(enemyMap, myMovesMap, ships, elem) {
    if (enemyMap[elem.y][elem.x] == HAVE_SHIP) {
        const lengthShip = countShip(elem, enemyMap);
        const len = countShip(elem, myMovesMap);
        if (len == lengthShip) {
            ships[len]--;
            return KILLED;
        } else {
            return HAVE_SHIP;
        }
    } else {
        return MISS;
    }
}
function markHorizontalShipOrOneDeckShip(coord, map) {
    let i = 0;
    let lenShip = coord.length;
    if (coord[i].x != BEGIN_FIELD) {
        markHorizontalElem(map, coord[i].y, coord[i].x - 1);
    }
    while(i < lenShip) {
        map[coord[i].y][coord[i].x] = KILLED;
        markHorizontalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].x != END_FIELD) {
        markHorizontalElem(map, coord[i - 1].y, coord[i - 1].x + 1);
    }
}
function markVerticalShip(coord, map) {
    let i = 0;
    let lenShip = coord.length;
    if (coord[i].y != BEGIN_FIELD) {
        markVerticalElem(map, coord[i].y -  1, coord[i].x);
    }
    while(i < lenShip) {
        map[coord[i].y][coord[i].x] = KILLED;
        markVerticalElem(map, coord[i].y, coord[i].x);
        i++;
    }
    if (coord[i - 1].y != END_FIELD) {
        markVerticalElem(map, coord[i - 1].y + 1, coord[i - 1].x);
    }
}
function markHorizontalElem(map, y, x) {
    if (map[y][x] == EMPTY || map[y][x] == NO_SHIP_INV) {
        map[y][x] = NO_SHIP;
    }
    if (y != BEGIN_FIELD && (map[y - 1][x] == EMPTY || map[y - 1][x] == NO_SHIP_INV))  {
        map[y - 1][x] = NO_SHIP;
    }
    if (y != END_FIELD && (map[y + 1][x] == EMPTY || map[y + 1][x] == NO_SHIP_INV)) {
        map[y + 1][x] = NO_SHIP;
    }
}
function markVerticalElem(map, y, x) {
    if (map[y][x] == EMPTY || map[y][x] == NO_SHIP_INV) {
        map[y][x] = NO_SHIP;
    }
    if (x != BEGIN_FIELD && (map[y][x - 1] == EMPTY || map[y][x - 1] == NO_SHIP_INV)) {
        map[y][x - 1] = NO_SHIP;
    }
    if (x != END_FIELD && (map[y][x + 1] == EMPTY || map[y][x + 1] == NO_SHIP_INV)) {
        map[y][x + 1] = NO_SHIP;
    }
}
function markWhenWounded(elem, map) {
    map[elem.y][elem.x] = HAVE_SHIP;
    markDiaganalElements(elem, map);
}
function markKilledShip(elem, map) {
    const coord = coordinateShip(elem, map);
    if (isVertical(coord)) {
        markVerticalShip(coord, map);
    } else {
        markHorizontalShipOrOneDeckShip(coord, map); 
    }
}
function isVertical(coord) {
    let i = 0;
    let lenShip = coord.length;
    return lenShip > 1 && coord[i].y < coord[i + 1].y;
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

    let count = 1;
    let x;
    let y;

    for (const key of Object.keys(CHECK_ALL_WAY)) {
        x = elem.x + CHECK_ALL_WAY[key].x;
        y = elem.y + CHECK_ALL_WAY[key].y;
        while (y >= 0 && y <= 9 && x >= 0 && x <= 9 && map[y][x] == 1) {
            y = y + CHECK_ALL_WAY[key].y;
            x = x + CHECK_ALL_WAY[key].x;
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
