// Author: 1Kill2Steal
// Date: 27/12/2023 (DD/MM/YYYY)
/* Making static websites is a fucking pain. */

import {
  randomizedElements,
  participants,
  daysIDs,
  nightsIDs,
} from './data/data';

import {
  getRandomNumber,
  getRandomElementFromArray,
  determineIfKillingSomeoneOrDying,
  setDayParagraphStyle,
  setNightParagraphStyle,
} from './utils/functions';


var surviors = participants.length;

// you can say this is this websites version of int main() / __main__ / Main() - you get what i mean
function startGame():number {
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

        if(deathOnNightOrDay == 1) {

        }
        if (deathOnNightOrDay == 2) {

        }
        
        try {
          setNightParagraphStyle(newNightParagraph);
          // @ts-ignore - currNight shouldn't be null
          currNight.appendChild(newNightParagraph);
        } catch (e) {
          console.log(e);
        }
        
        try {
          setDayParagraphStyle(newDayParagraph);
          // @ts-ignore - it shouldn't be null
          currDay.appendChild(newDayParagraph);
        } catch (e) {
          console.log(e);
        }
        
        continue;

      }

      if (dayParagraphExists && nightParagraphExists) {

        try { // @ts-ignore - currDay shouldn't be null
          currDay.querySelector('p').textContent = "Updated day paragraph content";
        } catch (e) {
          console.log(e);
        }

      }
      
    }

  } catch (e) {
    console.log(e);
  }
  return 0;

}

export { startGame };