"use strict";
/*/////////////////////////////////////////////////*
 * Unfortunately, exporting the project as modules *
 *   Isn't a feaseable solution, because Github    *
 *  Pages only supports statically hosted websites *
 *  and when I attempt to use exports this is the  *
 * error: "Uncaught ReferenceError: exports is not *
 *                    defined".                    *
 *                                                 *
 * I at least tried making this big file as sorted *
 * as I could for the convenience of code readers  *
 *                     and me.                     *
 */ ///////////////////////////////////////////////*/
/*
 *
 *
 *
 *
 *
 * DATA PART
 *
 * Author: 1Kill2Steal
 * Date: 27/12/2023 (DD/MM/YYYY)
 * Making static websites is a fucking pain.
 *
 *
 *
 *
 *
 */
const randomizedElements = [
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "lorem",
    "ipsum",
    "YOU NEED SOME MOTIVATION!" // ehe.
];
const participants = [
    "participant1",
    "participant2",
    "participant3",
    "participant4",
    "participant5",
    "participant6",
    "participant7",
    "participant8",
    "participant9",
    "participant10",
    "participant11",
    "participant12",
    "participant13",
    "participant14",
    "participant15",
    "participant16",
    "participant17",
    "participant18",
    "participant19",
    "participant20",
    "participant21",
    "participant22",
    "participant23",
    "participant24",
    "participant25",
    "participant26",
    "participant27",
    "participant28",
    "participant29",
    "participant30",
    "participant31",
    "participant32",
    "participant33",
    "participant34",
    "participant35",
    "participant36",
    "participant37",
    "participant38",
    "participant39",
    "participant40",
    "participant41",
    "participant42",
    "participant43",
    "participant44",
    "participant45",
    "participant46",
    "participant47",
    "participant48",
    "participant49",
    "participant50",
];
const daysIDs = [
    "day1",
    "day2",
    "day3",
    "day4",
    "day5",
    "day6",
    "day7",
    "day8",
    "day9",
    "day10",
    "day11",
    "day12",
    "day13",
    "day14",
    "day15",
    "day16",
    "day17",
    "day18",
    "day19",
    "day20",
    "day21",
    "day22",
    "day23",
    "day24",
    "day25",
    "day26",
    "day27",
    "day28",
    "day29",
    "day30",
    "day31",
    "day32",
    "day33",
    "day34",
    "day35",
    "day36",
    "day37",
    "day38",
    "day39",
    "day40",
    "day41",
    "day42",
    "day43",
    "day44",
    "day45",
    "day46",
    "day47",
    "day48",
    "day49",
    "day50",
];
const nightsIDs = [
    "night1",
    "night2",
    "night3",
    "night4",
    "night5",
    "night6",
    "night7",
    "night8",
    "night9",
    "night10",
    "night11",
    "night12",
    "night13",
    "night14",
    "night15",
    "night16",
    "night17",
    "night18",
    "night19",
    "night20",
    "night21",
    "night22",
    "night23",
    "night24",
    "night25",
    "night26",
    "night27",
    "night28",
    "night29",
    "night30",
    "night31",
    "night32",
    "night33",
    "night34",
    "night35",
    "night36",
    "night37",
    "night38",
    "night39",
    "night40",
    "night41",
    "night42",
    "night43",
    "night44",
    "night45",
    "night46",
    "night47",
    "night48",
    "night49",
    "night50",
];
/*
 *
 *
 *
 *
 *
 * FUNCTIONS PART
 *
 * Author: 1Kill2Steal
 * Date: 27/12/2023 (DD/MM/YYYY)
 * Making static websites is a fucking pain.
 *
 *
 *
 *
 *
 */
// rand number between 1 and range (included)
function getRandomNumber(range) {
    const randomNumber = Math.floor(Math.random() * range) + 1;
    return randomNumber;
}
function getRandomElementFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    return randomElement;
}
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
function setDayParagraphStyle(element) {
    element.textContent = "Day paragraph content";
    element.style.color = "blue";
    element.style.fontSize = "16px";
    element.style.fontFamily = "Arial, sans-serif";
}
function setNightParagraphStyle(element) {
    element.textContent = "Night paragraph content";
    element.style.color = "red";
    element.style.fontSize = "18px";
    element.style.fontFamily = "Arial, sans-serif";
}
/*
 *
 *
 *
 *
 *
 * ! ! ! MAIN PROGRAM PART ! ! !
 *
 * Author: 1Kill2Steal
 * Date: 27/12/2023 (DD/MM/YYYY)
 * Making static websites is a fucking pain.
 *
 *
 *
 *
 *
 */
function startGame() {
    /* GLOBAL VARIABLES */
    var surviors = participants.length;
    try {
        console.log(daysIDs.length);
        console.log(nightsIDs.length);
        // every 1 day+night cycle someone dies either during the day or during night time
        for (var i = 0; i < surviors; i++) {
            var currDay = document.getElementById(daysIDs[i]);
            var currNight = document.getElementById(nightsIDs[i]);
            // @ts-ignore - currDay shouldn't be null
            var dayParagraphExists = currDay.querySelector('p') !== null;
            // @ts-ignore - currNight shouldn't be null
            var nightParagraphExists = currNight.querySelector('p') !== null;
            var deathOnNightOrDay = Math.floor(Math.random() * getRandomNumber(2));
            // initial creation
            if (!nightParagraphExists && !dayParagraphExists) {
                var newNightParagraph = document.createElement("p");
                var newDayParagraph = document.createElement("p");
                if (deathOnNightOrDay == 1) {
                }
                if (deathOnNightOrDay == 2) {
                }
                try {
                    setNightParagraphStyle(newNightParagraph);
                    // @ts-ignore - currNight shouldn't be null
                    currNight.appendChild(newNightParagraph);
                }
                catch (e) {
                    console.log(e);
                }
                try {
                    setDayParagraphStyle(newDayParagraph);
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
    console.log(`Exited with return code '${0}' :D`);
    return 0;
}
