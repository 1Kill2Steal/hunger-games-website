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

let dayAndNightCounter = 100;

// automate array creation (use more of the clients CPU ehehe)
const daysIDs: string[] = [];
for(let i = 1; i <= dayAndNightCounter; i++) {
  daysIDs.push(`day${[i]}`);
}
const nightsIDs: string[] = [];
for(let i = 1; i <= dayAndNightCounter; i++) {
  nightsIDs.push(`night${[i]}`);
}
// Create DOM - same reason
const gameObjectsContainer = document.querySelector('.gameContainer');
for (let i = 1; i <= dayAndNightCounter; i++) {
  const dayElement = document.createElement('div');
  dayElement.className = 'gameObjDay';
  dayElement.id = `day${i}`;

  const nightElement = document.createElement('div');
  nightElement.className = 'gameObjNight';
  nightElement.id = `night${i}`;

  const gameObjectsDiv = document.createElement('div');
  gameObjectsDiv.className = 'gameObjects';
  gameObjectsDiv.appendChild(dayElement);
  gameObjectsDiv.appendChild(nightElement);

  gameObjectsContainer?.appendChild(gameObjectsDiv);
}


// `${killer}${waysToKill[partOne]}${personDying}${waysToKill[partTwo]}`

type KillMessage = {
  killer: Participant;
  personDying: Participant;
  killString: string;
};

const killMessageTemplates: string[] = [
  "${personDying} couldn't handle ${killer}'s trolling and died.",
  "${killer} t-posed on ${personDying}.",
  "${personDying} rushed B but got AWP-ed by ${killer}"
  // Add more kill message templates as needed
];

// `${personDying} ${waysToDie[x]}`
const waysToDieTemplate: string[] = [
  "${personDying} slipped on a banana peel. (you silly goose)",
  "A meteorite fell on ${personDying}'s head. (relateable) { NO AoE SOMEHOW }"
  // TBA
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
function determineIfKillingSomeoneOrDying(): boolean { 
  let killOrDie: Boolean;
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

function generateRandomKillMessage(personDying: Participant, killer: Participant) {
  // Randomly select a kill message template
  const killStringTemplate = getRandomElementFromArray(killMessageTemplates);

  // Generate the killString by replacing placeholders with participant names
  const killString = killStringTemplate
    .replace('${personDying}', personDying.name)
    .replace('${killer}', killer.name);

  // return the randomly generated kill message
  return killString;
}

function generateWayToDieMessage(personDying: Participant) {
  // Randomly select a kill message template
  const killStringTemplate = getRandomElementFromArray(waysToDieTemplate);

  // Generate the killString by replacing placeholders with participant names
  const killString = killStringTemplate
    .replace('${personDying}', personDying.name);

  // return the randomly generated kill message
  return killString;
}


function setDayGridStyleWithKiller(
  element: HTMLElement,
  dayNumber: number,
  deadParticipant: Participant,
  killer: Participant
  ): void {
  element.innerHTML = `<p style="font-size: 25px; margin:0; color: rgba(231, 225, 143, 0.9); text-align: center;">Day ${dayNumber}</p>`;

  element.className = "dayGridBox";
  element.id = `day${dayNumber}GridBox`;
  
  let miniAvatar = document.createElement("img");
  let secondAvatar;
  let participantName = document.createElement("a");

  if (killer == deadParticipant) {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;
    
    participantName.className = "verticalCenter";
    participantName.textContent = generateWayToDieMessage(deadParticipant);
  } else {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;

    secondAvatar = document.createElement("img");
    secondAvatar.src = killer.image;
    secondAvatar.className = "miniAvatarKiller";
    secondAvatar.id = killer.id;
    
    participantName.className = "verticalCenter";
    participantName.textContent = generateRandomKillMessage(deadParticipant, killer);
  }

  

  const participantContainer = document.createElement("div");
  if (secondAvatar) { participantContainer.appendChild(secondAvatar); }
  participantContainer.appendChild(miniAvatar);
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
 

}

function setNightStyleWithKiller(
  element: HTMLElement,
  nightNumber: number,
  deadParticipant: Participant,
  killer: Participant
): void {
  element.innerHTML = `<p style="font-size: 25px; margin:0; color: rgba(108, 163, 214, 0.9); text-align: center;">Night ${nightNumber}</p>`;

  element.className = "nightGridBox";
  element.id = `night${nightNumber}GridBox`;

  let miniAvatar = document.createElement("img");
  let secondAvatar;
  let participantName = document.createElement("a");

  if (killer == deadParticipant) {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;
    
    participantName.className = "verticalCenter";
    participantName.textContent = generateWayToDieMessage(deadParticipant);
  } else {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;

    secondAvatar = document.createElement("img");
    secondAvatar.src = killer.image;
    secondAvatar.className = "miniAvatarKiller";
    secondAvatar.id = killer.id;
    
    participantName.className = "verticalCenter";
    participantName.textContent = generateRandomKillMessage(deadParticipant, killer);
  }

  

  const participantContainer = document.createElement("div");
  if (secondAvatar) { participantContainer.appendChild(secondAvatar); }
  participantContainer.appendChild(miniAvatar);
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
}



// Function to process a day iteration
function processDayInteractionWithKiller(dayNumber: number, randomDeadParticipant: Participant, killer: Participant) {
  console.log(`Processing day ${dayNumber}`);
  let currDay = document.getElementById(daysIDs[dayNumber - 1]);
  let dayDivExists = currDay?.querySelector('div') !== null;

  if (!dayDivExists) {
    console.log(`Creating new day grid box`);
    let newDayGridBox = document.createElement("div");

    try {
      setDayGridStyleWithKiller(newDayGridBox, dayNumber, randomDeadParticipant, killer);
      if (currDay) { currDay.appendChild(newDayGridBox); }
    } catch (e) {
      console.log(e);
    }
  }
}



// Function to process a night iteration
function processNightInteractionWithKiller(nightNumber: number, randomDeadParticipant: Participant, killer: Participant) {
  
  console.log(`Processing night ${nightNumber}`);
  let currNight = document.getElementById(nightsIDs[nightNumber - 1]);
  let nightDivExists = currNight?.querySelector('div') !== null;

  if (!nightDivExists) {
    console.log(`Creating new night grid box`);
    let newNightGridBox = document.createElement("div");

    try {
      setNightStyleWithKiller(newNightGridBox, nightNumber, randomDeadParticipant, killer);
      if (currNight) { currNight.appendChild(newNightGridBox); }
    } catch (e) {
      console.log(e);
    }
  }
}


// Function to perform the main game logic
function runGameCycle() {
  let participantsRemaining = participants.filter(participant => participant.state);

  for (let i = 0; i < nightsIDs.length + daysIDs.length; i++) {
    console.log(`Entering iteration ${i}`);
    const randomDeadParticipant = getRandomElementFromArray(participantsRemaining);

    let killOrBeKilled = determineIfKillingSomeoneOrDying();
    let killer = randomDeadParticipant;
    if (killOrBeKilled) {
      killer = getRandomElementFromArray(participantsRemaining);
    }
    
    participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant);

    if (i % 2 == 0) {  
      processDayInteractionWithKiller(Math.floor(i / 2) + 1, randomDeadParticipant, killer);
    } else {
      processNightInteractionWithKiller(Math.floor(i / 2) + 1, randomDeadParticipant, killer);
    }

    if (participantsRemaining.length === 1) {
      console.log('All participants are dead. Exiting loop.');
      break;
    }
  }
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
let haveYouPlayedThis = -1;
function startGame(): void {
  haveYouPlayedThis++;
  runGameCycle();
  if(haveYouPlayedThis >= 1) {
    alert("Please refresh the page if you want to run this again")
  }
  console.log(`Exited with return code '${0}' :D`);
}