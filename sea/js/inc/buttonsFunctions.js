import {BUTTONS} from './const/buttons.js';
import {FIELDS} from './const/fields.js';
function isClickRandomButton(elem) {
    const isClick = isButton(elem, BUTTONS.RANDOM);
    return elem.field == FIELDS.ENEMY && isClick;
}
function isClickStartButton(elem) {
    const isClick = isButton(elem, BUTTONS.START);
    return elem.field == FIELDS.ENEMY && isClick;
}
function isButton(elem, button) {
    const xBegin = button.BEGIN.x;
    const yBegin = button.BEGIN.y;
    const xEnd = button.BEGIN.x + button.WIDTH;
    const yEnd = button.BEGIN.y + button.HEIGHT;
    return elem.x >= xBegin && elem.y >= yBegin && elem.x <= xEnd && elem.y <= yEnd;
};
export {
    isClickRandomButton,
    isClickStartButton,
};

