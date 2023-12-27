"use strict";
// Author: 1Kill2Steal
// Date: 27/12/2023 (DD/MM/YYYY)
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNightParagraphStyle = exports.setDayParagraphStyle = exports.determineIfKillingSomeoneOrDying = exports.getRandomElementFromArray = exports.getRandomNumber = void 0;
// rand number between 1 and range (included)
function getRandomNumber(range) {
    const randomNumber = Math.floor(Math.random() * range) + 1;
    return randomNumber;
}
exports.getRandomNumber = getRandomNumber;
function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}
exports.getRandomElementFromArray = getRandomElementFromArray;
// true = kill, false = die
function determineIfKillingSomeoneOrDying(killOrDie) {
    // chanceToDie/(chanceToDie+chanceToKill) and vice versa
    const chanceToKill = 420;
    const chanceToDie = 69;
    const result = Math.random();
    if (result > chanceToDie / chanceToKill) {
        return killOrDie = true;
    }
    else {
        return killOrDie = false;
    }
}
exports.determineIfKillingSomeoneOrDying = determineIfKillingSomeoneOrDying;
function setDayParagraphStyle(element) {
    element.textContent = "Day paragraph content";
    element.style.color = "blue";
    element.style.fontSize = "16px";
    element.style.fontFamily = "Arial, sans-serif";
}
exports.setDayParagraphStyle = setDayParagraphStyle;
function setNightParagraphStyle(element) {
    element.textContent = "Night paragraph content";
    element.style.color = "red";
    element.style.fontSize = "18px";
    element.style.fontFamily = "Arial, sans-serif";
}
exports.setNightParagraphStyle = setNightParagraphStyle;
