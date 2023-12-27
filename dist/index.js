"use strict";
// Author: 1Kill2Steal
// Date: 27/12/2023 (DD/MM/YYYY)
/* Making static websites is a fucking pain. */
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
const functions_1 = require("./utils/functions");
var surviors = data_1.participants.length;
// you can say this is this websites version of int main() / __main__ / Main() - you get what i mean
function startGame() {
    try {
        console.log(data_1.daysIDs.length);
        console.log(data_1.nightsIDs.length);
        // every 1 day+night cycle someone dies either during the day or during night time
        for (var i = 0; i < surviors; i++) {
            var currDay = document.getElementById(data_1.daysIDs[i]);
            var currNight = document.getElementById(data_1.nightsIDs[i]);
            // @ts-ignore - currDay shouldn't be null
            var dayParagraphExists = currDay.querySelector('p') !== null;
            // @ts-ignore - currNight shouldn't be null
            var nightParagraphExists = currNight.querySelector('p') !== null;
            var deathOnNightOrDay = Math.floor(Math.random() * (0, functions_1.getRandomNumber)(2));
            // initial creation
            if (!nightParagraphExists && !dayParagraphExists) {
                var newNightParagraph = document.createElement("p");
                var newDayParagraph = document.createElement("p");
                if (deathOnNightOrDay == 1) {
                }
                if (deathOnNightOrDay == 2) {
                }
                try {
                    (0, functions_1.setNightParagraphStyle)(newNightParagraph);
                    // @ts-ignore - currNight shouldn't be null
                    currNight.appendChild(newNightParagraph);
                }
                catch (e) {
                    console.log(e);
                }
                try {
                    (0, functions_1.setDayParagraphStyle)(newDayParagraph);
                    // @ts-ignore - it shouldn't be null
                    currDay.appendChild(newDayParagraph);
                }
                catch (e) {
                    console.log(e);
                }
                continue;
            }
            if (dayParagraphExists && nightParagraphExists) {
                try { // @ts-ignore - currDay shouldn't be null
                    currDay.querySelector('p').textContent = "Updated day paragraph content";
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}
