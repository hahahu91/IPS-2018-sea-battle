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
export {
    getRandomInt,
    isNull,
    isEqualShips
}