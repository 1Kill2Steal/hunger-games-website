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
 *////////////////////////////////////////////////*/

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

type Participant = {
  id: string; 
  name: string;
  state: boolean;
  image: string;
};

const participants: Participant[] = [ // "It's easier than it looks I swear." (I love you ChatGPT)
  {
    id: "participant1",
    name: "rcweebs",
    state: true,
    image: "../images/participants/participant1.jpg"
  },
  {
    id: "participant2",
    name: "NoPengoo",
    state: true,
    image: "../images/participants/participant2.png"
  },
  {
    id: "participant3",
    name: "mqc",
    state: true,
    image: "../images/participants/participant3.jpg"
  },
  {
    id: "participant4",
    name: "Coco",
    state: true,
    image: "../images/participants/participant4.jpg"
  },
  {
    id: "participant5",
    name: "fishe",
    state: true,
    image: "../images/participants/participant5.png"
  },
  {
    id: "participant6",
    name: "anato",
    state: true,
    image: "../images/participants/participant6.png"
  },
  {
    id: "participant7",
    name: "Clip",
    state: true,
    image: "../images/participants/participant7.jpg"
  },
  {
    id: "participant8",
    name: "1Kill2Steal",
    state: true,
    image: "../images/participants/participant8.jpg"
  },
  {
    id: "participant9",
    name: "Dendi",
    state: true,
    image: "../images/participants/participant9.gif"
  },
  {
    id: "participant10",
    name: "Dendro Simp",
    state: true,
    image: "../images/participants/participant10.jpg"
  },
  {
    id: "participant11",
    name: "Emper",
    state: true,
    image: "../images/participants/participant11.png"
  },
  {
    id: "participant12",
    name: "Gaming",
    state: true,
    image: "../images/participants/participant12.png"
  },
  {
    id: "participant13",
    name: "Zaptros",
    state: true,
    image: "../images/participants/participant13.jpg"
  },
  {
    id: "participant14",
    name: "Jecinb",
    state: true,
    image: "../images/participants/participant14.jpg"
  },
  {
    id: "participant15",
    name: "Iodine",
    state: true,
    image: "../images/participants/participant15.jpg"
  },
  {
    id: "participant16",
    name: "Yomi",
    state: true,
    image: "../images/participants/participant16.png"
  },
  {
    id: "participant17",
    name: "Fu",
    state: true,
    image: "../images/participants/participant17.png"
  },
  {
    id: "participant18",
    name: "EggMango",
    state: true,
    image: "../images/participants/participant18.png"
  },
  {
    id: "participant19",
    name: "RPC",
    state: true,
    image: "../images/participants/participant19.png"
  },
  {
    id: "participant20",
    name: "Kälhtzsteiss",
    state: true,
    image: "../images/participants/participant20.jpg"
  },
  {
    id: "participant21",
    name: "Delka",
    state: true,
    image: "../images/participants/participant21.png"
  },
  {
    id: "participant22",
    name: "Vertin",
    state: true,
    image: "../images/participants/participant22.jpg"
  },
  {
    id: "participant23",
    name: "Furina de Fontaine",
    state: true,
    image: "../images/participants/participant23.jpg"
  },
  {
    id: "participant24",
    name: "Aishira",
    state: true,
    image: "../images/participants/participant24.png"
  },
  {
    id: "participant25",
    name: "Drag",
    state: true,
    image: "../images/participants/participant25.jpg"
  },
  {
    id: "participant26",
    name: "BlueArmorDragon",
    state: true,
    image: "../images/participants/participant26.gif"
  },
  {
    id: "participant27",
    name: "MrDoge",
    state: true,
    image: "../images/participants/participant27.gif"
  },
  {
    id: "participant28",
    name: "AETHER",
    state: true,
    image: "../images/participants/participant28.jpg"
  },
  {
    id: "participant29",
    name: "Chongus",
    state: true,
    image: "../images/participants/participant29.jpg"
  },
  {
    id: "participant30",
    name: "Tokarev",
    state: true,
    image: "../images/participants/participant30.png"
  },
  {
    id: "participant31",
    name: "Raouka",
    state: true,
    image: "../images/participants/participant31.jpg"
  },
  {
    id: "participant32",
    name: "KTSUNE",
    state: true,
    image: "../images/participants/participant32.jpg"
  },
  {
    id: "participant33",
    name: "Sorus",
    state: true,
    image: "../images/participants/participant33.gif"
  },
  {
    id: "participant34",
    name: "chocofrog",
    state: true,
    image: "../images/participants/participant34.png"
  },
  {
    id: "participant35",
    name: "Seb",
    state: true,
    image: "../images/participants/participant35.png"
  },
  {
    id: "participant36",
    name: "Librari",
    state: true,
    image: "../images/participants/participant36.png"
  },
  {
    id: "participant37",
    name: "Maike Taisan",
    state: true,
    image: "../images/participants/participant37.jpg"
  },
  {
    id: "participant38",
    name: "Pengi",
    state: true,
    image: "../images/participants/participant38.gif"
  },
  {
    id: "participant39",
    name: "Daikon",
    state: true,
    image: "../images/participants/participant39.jpg"
  },
  {
    id: "participant40",
    name: "TechnoDragoVin",
    state: true,
    image: "../images/participants/participant40.png"
  },
  {
    id: "participant41",
    name: "Aki",
    state: true,
    image: "../images/participants/participant41.png"
  },
  {
    id: "participant42",
    name: "Cyber",
    state: true,
    image: "../images/participants/participant42.png"
  },
  {
    id: "participant43",
    name: "Uyrem",
    state: true,
    image: "../images/participants/participant43.png"
  },
  {
    id: "participant44",
    name: "Roll",
    state: true,
    image: "../images/participants/participant44.jpg"
  },
  {
    id: "participant45",
    name: "ponoma",
    state: true,
    image: "../images/participants/participant45.png"
  },
  {
    id: "participant46",
    name: "Hu Tao",
    state: true,
    image: "../images/participants/participant46.png"
  },
  {
    id: "participant47",
    name: "cow",
    state: true,
    image: "../images/participants/participant47.png"
  },
  {
    id: "participant48",
    name: "bonny",
    state: true,
    image: "../images/participants/participant48.png"
  },
  {
    id: "participant49",
    name: "vons",
    state: true,
    image: "../images/participants/participant49.jpg"
  },
  {
    id: "participant50",
    name: "Nick",
    state: true,
    image: "../images/participants/participant50.jpg"
  },
];

const participantsMap = new Map<string, Participant>();

participants.forEach((participant: Participant) => {
  participantsMap.set(participant.id, participant);
});


const daysIDs: string[] = [
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
]

const nightsIDs: string[] = [
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
]


// `${killer}${waysToKill[partOne]}${personDying}${waysToKill[partTwo]}`

type killMessage = {
  killer: Participant;
  personDying: Participant;
  killString: string;
};

const waysToKill: killMessage[] = [
    killString: `${killer.name} t-posed on ${personDying.name}.`,


  {
    partOne: " slapped ",
    partTwo: " with a baguette.",
  },
  {
    partOne: " hit the griddy on ",
    partTwo: ".",
  },
  {
    partOne: " gave some cheese to ",
    partTwo: ".",
  },
  {
    partOne: " played basketball with ",
    partTwo: "'s head.",
  },
  {
    partOne: " beat the shit out of ",
    partTwo: "."
  },
  {
    partOne: "",
    partTwo: ""
  },
  {
    partOne: "",
    partTwo: ""
  },
  {
    partOne: "",
    partTwo: ""
  },
  {
    partOne: "",
    partTwo: ""
  },
  {
    partOne: "",
    partTwo: ""
  },
  {
    partOne: "",
    partTwo: ""
  },
  
]

// `${personDying} ${waysToDie[x]}`
const waysToDie: string[] = [

]

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
function getRandomNumber(range: number) {
  const randomNumber = Math.floor(Math.random() * range) + 1;
  return randomNumber;
}

function getRandomElementFromArray<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  return randomElement;
}

// true = kill, false = die
function determineIfKillingSomeoneOrDying(killOrDie: Boolean) { 
  // chanceToDie/(chanceToDie+chanceToKill) and vice versa
  const chanceToKill = 420;
  const chanceToDie = 69;

  const result = Math.random();

  if (result > chanceToDie/chanceToKill) {
    return killOrDie = true;
  } else {
    return killOrDie = false;
  }
}

function setDayGridStyle(
  element: HTMLDivElement,
  dayNumber: number,
  participant: Participant
  ): void {
  element.innerHTML = `<p style="font-size: 25px; margin:0;">Day ${dayNumber}</p>`;

  element.className = "dayGridBox";
  element.id = `day${dayNumber}GridBox`;

  
  const miniAvatar = document.createElement("img");
  miniAvatar.src = participant.image;
  miniAvatar.className = "miniAvatar";
  miniAvatar.id = participant.id;

  const participantName = document.createElement("a");
  participantName.className = "verticalCenter";
  participantName.textContent = participant.name;

  const participantContainer = document.createElement("div");
  participantContainer.appendChild(miniAvatar);
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
 

}

function setNightGridStyle(
  element: HTMLDivElement,
  nightNumber: number,
  participant: Participant
): void {
  element.innerHTML = `<p style="font-size: 25px; margin:0;">Night ${nightNumber}</p>`;

  element.className = "nightGridBox";
  element.id = `night${nightNumber}GridBox`;

  const miniAvatar = document.createElement("img");
  miniAvatar.src = participant.image;
  miniAvatar.className = "miniAvatar";
  miniAvatar.id = participant.id;

  const participantName = document.createElement("a");
  participantName.className = "verticalCenter";
  participantName.textContent = participant.name;

  const participantContainer = document.createElement("div");
  participantContainer.appendChild(miniAvatar);
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
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

function startGame():number {
  /* GLOBAL VARIABLES */
  var surviors = participants.length;
  var participantsRemaining = participants.filter(participant => participant)

  try {
    console.log(daysIDs.length);
    console.log(nightsIDs.length);

    // every 1 day+night cycle someone dies either during the day or during night time
    for (var i = 0; i < nightsIDs.length-1; i++) {
      const randomDeadParticipant = getRandomElementFromArray(participantsRemaining);
      var participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant)
      
      var currDay = document.getElementById(daysIDs[i]);
      var currNight = document.getElementById(nightsIDs[i]);
      
      // @ts-ignore - currDay shouldn't be null
      var dayDivExists = currDay.querySelector('div') !== null;
      // @ts-ignore - currNight shouldn't be null
      var nightDivExists = currNight.querySelector('div') !== null;

      var deathOnNightOrDay = getRandomNumber(2);

      var result = -1;

      if(deathOnNightOrDay == 1) {
        var result:number = getRandomNumber(participantsCopy.length-1);
      }
      if (deathOnNightOrDay == 2) {
        var result:number = getRandomNumber(participantsCopy.length-1);
      }

      // initial creation
      if (!nightDivExists && !dayDivExists) {
        var newDayGridBox = document.createElement("div");
        var newNightGridBox = document.createElement("div");

        
        
        try {
          setNightGridStyle(newNightGridBox, i+1, result, randomDeadParticipant);
          // @ts-ignore - currNight shouldn't be null
          currNight.appendChild(newnightDiv);
        } catch (e) {
          console.log(e);
        }
        
        try {
          setDayGridStyle(newDayGridBox, i+1, result, participantsCopy);
          // @ts-ignore - it shouldn't be null
          currDay.appendChild(newDayGridBox);
        } catch (e) {
          console.log(e);
        }
        
        continue;

      }

      if (dayDivExists && nightDivExists) {

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

  console.log(`Exited with return code '${0}' :D`);
  return 0;

}