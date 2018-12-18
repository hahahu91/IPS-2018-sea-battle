import {BUTTONS} from './const/buttons.js';
import {ENEMY_FIELD} from './consts.js';
function isClickRandomButton(elem) {
    return elem.field == ENEMY_FIELD && isButton(elem, BUTTONS.RANDOM.BEGIN.x, BUTTONS.RANDOM.BEGIN.y, BUTTONS.RANDOM.WIDTH, BUTTONS.RANDOM.HEIGHT);
}
function isClickStartButton(elem) {
    return elem.field == ENEMY_FIELD && isButton(elem, BUTTONS.START.BEGIN.x, BUTTONS.START.BEGIN.y, BUTTONS.START.WIDTH, BUTTONS.START.HEIGHT);
}
function isButton(elem, xBegin, yBegin, width, height) {
    return elem.x >= xBegin && elem.y >= yBegin && elem.x <= xBegin + width && elem.y <= yBegin + height;
};
export {
    isClickRandomButton,
    isClickStartButton,
};

