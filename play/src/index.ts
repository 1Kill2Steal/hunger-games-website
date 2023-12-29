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

let dayAndNightCounter = 200;

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

// 2 participants interacting

const twoParticipantsInteraction = [
  "${participant1} asks ${participant2} for a date. 👉👈",
  "${participant1} decides to prank ${participant2}.",
  "${participant1} ditches ${participant2}.",
  "${participant1} and ${participant2} cuddle for warmth.",
  "${participant1} is chased by ${participant1}.",
  "${participant1} and ${participant1} eat some funky mushrooms together.",
  "${participant1} thinks about killing ${participant1} but decides against it.",
  "${participant1} hits ${participant1} with a snowball",
]

// 3 participants interacting

const threeParticipantsInteraction = [
  "${participant1} tells ${participant2} and ${participant3} that they suck (they didn't like it).",
  "${participant1} tells ${participant2} and ${participant3} that they suck (they liked it).",
  "${participant1} stops ${participant2} from beating the shit out of ${participant3}.",
]

// 4 participants interacting

const fourParticipantsInteraction = [
  "${participant1} joins the group of ${participant2}, ${participant3} and ${participant4}.",
  "${participant1} ditches the group of ${participant2}, ${participant3} and ${participant4}.",
  "${participant1}, ${participant2}, ${participant3} and ${participant4} start building a house.",
]


// `${killer}${waysToKill[partOne]}${personDying}${waysToKill[partTwo]}`

const killMessageTemplates: string[] = [
  "${personDying} couldn't handle ${killer}'s trolling and died.",
  "${killer} t-posed on ${personDying}.",
  "${personDying} rushed B but got AWP-ed by ${killer}",
  "${killer} and ${personDying} started fighting over resources. It ended with a knife in ${personDying}'s abdomen.",
  "${killer} backstabs ${personDying} with a katana despite their promise to team up.",
  "${killer} severely wounds ${personDying} and left them to bleed to death.",
  "${killer} shoot 2 arrows tipped with Instant Damage II into ${personDying}'s body.",
  "${killer} stabs ${personDying} with a spiked tree branch.",
  "${killer} set up a booby trap to kill ${personDying}, which worked flawlessly.",
  "${killer} kills ${personDying} as they tried to kill supplies from the camp.",
  "${killer} sets off a string of exploresive, killing ${personDying}.",
  "${killer} saw multiple people in the distance and started firing arrows, but it only hit and killed ${personDying}.",
  "${killer} bashed ${personDying}'s head with a mace.",
  "While looking at the mountains over a cliff, ${killer} pushed ${personDying} off.",
  "${killer} found ${personDying} way too annoying and punched them into lava.",
  "${killer} murdered ${personDying} with beautiful notes and compositions.",
  "${killer} throws a spear into ${personDying}'s head. They bled to death.",
  "After hearing footsteps, ${killer} catches ${personDying} sneaking up on them and kills ${personDying}.",
  "${killer} used a two-headed axe to obliterate ${personDying}.",
  "${killer} spun chakrams into ${personDying}, slicing off their extremites.",
  "${killer} pelted ${personDying} with 1000 baseballs.",
  "${killer} kills ${personDying} for their supplies and food.",
  "${killer} nailed ${personDying} with a crossbow.",
  "${killer} used their elemental burst onto ${personDying}.",
  "${killer} and ${personDying} punched each other due to differences in surival approach. ${killer} is triumphant.",
  "${killer} fed ${personDying} poisonous mushrooms.",
  "${personDying} is unable to convince ${killer} to not kill them during their altercation.",
  "${personDying} got hunted down by ${killer} in the dense bushes.",
  "${personDying} got gunned down by ${killer}. The guns were from Vertin.",
  "${personDying} couldn't defend themselves against ${killer}'s dull blade.",
  "${personDying}'s entrails were ripped out by ${killer}.",
  "${personDying}'s face was torn off by ${killer}.",
  "${personDying} was strangled to death by ${killer}.",
  "${personDying} was drowned by ${killer}.",
  "${personDying} was overpowered and killed by ${killer}.",
  "${personDying}'s plea for death was answered by ${killer}.",
  "${personDying}'s flailing about was finally stopped by ${killer}.",
  "${killer} 360-no-scoped ${personDying}.",
  "${killer} tied ${personDying} up and left them to starve to death.",
  "${killer} scooped ${personDying}'s heart and ate it raw.",
  "${killer} demostrated ${personDying}'s detailed ragdoll physics.",
  "${personDying} got L + ratio'ed by ${killer}.",
  "${personDying} got skinned alive with its ribcage inside out and their jaw opened wide by ${killer}.",
  "${killer} watched as ${personDying} were stung by killer bees.",
  "${killer} told ${personDying} to sleep in the Nether.",
  "After a long argument, ${killer} duked it out with ${personDying} due to differing tastes in waifus. ${killer} won.",
  "${killer} crushed ${personDying}'s skull with their thighs.",
  "${killer} used a Flint 'n Steel to set ${personDying} ablaze.",
  "${killer} used /kill ${personDying}.",
  "${killer} used ${personDying}'s corpse to summon a demon after killing them.",
  "${killer} blew ${personDying}'s brains out with a BFG-9000.",
  "${killer} hit ${personDying} with a vehicle.",
  "${killer} commited cannibalism on ${personDying} due to being hungry.",
  "${killer} built a rooftop trap and successfully killed ${personDying}.",
  "${killer} breathed blue flames onto ${personDying}.",
  "${killer} played Gura's theme, which gave ${personDying} diabetes.",
  "${personDying} had a bad time and got dunked on by ${killer}.",
  "${personDying} got dragged to Brazil by ${killer}.",
  "${personDying} made a minor spelling mistake, and ${killer} was a grammar nazi.",
  "${personDying} was eviscerated by ${killer}'s Netherite sword.",
  "${personDying} received ${killer}'s Burgeon backshots.",
  "${personDying} got Trailblazer batted in the face by ${killer}.",
  "${personDying}'s name was crossed off ${killer}'s list.",
  "${personDying} was crushed by ${killer}'s whale status.",
  "${killer} animated ${personDying}'s death and won a Best Pictures Nomination.",
  "${killer} summoned his Persona and brutalized ${personDying}.",
  "${killer} beats ${personDying} to death with a black hole.",
  "${killer} caged ${personDying} and buried them 6 ft. under.",
  "${personDying} sets up a trap, but ${killer} reversed engineered it and killed ${personDying} instead.",
  "${killer} decides to have order by killing ${personDying}.",
  "${personDying} attempted to kill ${killer}, but oh how the tables turned.",
  "${personDying} tried to cure ${killer}'s insomnia, but that only made ${killer} more irritated. ${personDying} ended up sleeping forever.",
  "${personDying} got bit by ${killer}.",
  "${personDying} angered ${killer}, which turned ${killer} into Mike Tyson and resulted in ${personDying}'s death.",
  "${personDying} was dragging ${killer} down, so they got killed off for being a newbie.",
  "${personDying} got iodine poisoning from ${killer}'s cooking.",
  "${personDying} didn't go to sleep on time, which made ${killer} upset, so ${killer} put them to bed early.",
  "${personDying} found ${killer} too hot and sexy to handle.",
  "${personDying} became Collateral Damage to ${killer}",
  "${personDying} and ${killer} are fighting domain together, but ${personDying} stands to close to ${killer} and gets killed by his elemental burst.",
  "${personDying} became ${killer}'s next target.",
  "${personDying} insulted ${killer}'s programming ability.",
  "The last thing ${personDying} heard from ${killer} was \"YOU GONN BE SORRY BRO\".",
  "${killer} pushes ${personDying} into the chasm and leaves them to die.",
  "${killer} receives a dare to kill ${personDying} and they do it in a fantastic manner.",
  "${killer} breathed too loud and killed ${personDying}.",
  "${killer} picks up a cursed sword and is possessed by it, killing ${personDying}.",
  "${killer} sabotages ${personDying}'s weapon, causing ${personDying} to end up end because they were using a broken weapon.",
  "${personDying} spills ${killer}'s coffee and is strangled to death.",
  "${personDying} played Russian Roulette with ${killer}. ${personDying} perished."
  // Add more kill message templates as needed
];

// `${personDying} ${waysToDie[x]}`
const waysToDieTemplate: string[] = [
  "${personDying} slipped on a banana peel. (you silly goose)",
  "A meteorite fell on ${personDying}'s head. (relateable) { NO AoE SOMEHOW }",
  "${personDying} experienced kinetic energy attempting to scale a tree.",
  "${personDying} walks over a land mine.",
  "${personDying} dies from an infection.",
  "${personDying} got their home remodeled.",
  "${personDying} literally became immortal, by which I mean, they are no longer alive.",
  "${personDying} took expired medicine.",
  "${personDying} used their private part as pirahna bait.",
  "${personDying} was exposed to dangerous levels of radiation.",
  "${personDying} died of dehydration.",
  "${personDying} slept too close to a fire and got carbon monoxide poisoning.",
  "${personDying} stepped over a rock and fell to their death.",
  "${personDying} dies from hypothermia while in the jungle.",
  "${personDying} died.",
  "${personDying} commited suicide by hanging.",
  "${personDying} died from administration bullshit.",
  "${personDying} gave in to their intrusive thoughts.",
  "${personDying} fucked around and found out.",
  "${personDying} had a brain aneurysm trying to code in C++.",
  "${personDying} ate yucky.",
  "${personDying}'s springlocks failed.",
  "${personDying}'s free trial of life has expired.",
  "${personDying} saw R34 of things they shouldn't have.",
  "${personDying}'s mom found the homework folder.",
  "${personDying} played on Asian difficulty and a poisonous leave fell onto them.",
  "${personDying} was poor, stressed and drinking.",
  "${personDying} posted Genshin leaks on NoPengoo's discord server.",
  "${personDying} got cancelled on Twitter.",
  "${personDying} danced under a giant blue sword.",
  "${personDying} stubbed their toe.",
  "${personDying} watched NoPengoo's animation and died of diabetes.",
  "${personDying} got isekai'ed to another world.",
  "${personDying} got ejected.",
  "${personDying} hit the bell 6 times.",
  "${personDying} was orange juice gang.",
  "${personDying} got eaten by a hungry tiger.",
  "${personDying} was mawled by a bear.",
  "${personDying} didn't know there were alligators in the waters.",
  "${personDying} regretted not listening to Cyber's advice.",
  "${personDying} lost their 50/50 and commited unalive.",
  "${personDying} slept in a tree during a thunderstorm.",
  "${personDying} tried to take revenge on a Local Legend that they had accidentally angered, which did not go well for them.",
  "${personDying} uses a dodoco to light a fire. It did not go well.",
  "${personDying} attempted to parry the Musou no Hitotachi.",
  "${personDying} died of dysentery.",
  "${personDying} experienced a heart attack.",
  "${personDying} charges into a hilichurl camp, forgetting they have no plot armor.",
  "${personDying} did not bring any Teyvat fried eggs to revive themselves.",
  "${personDying} wins their 50/50, only to realize it was on the wrong banner.",
  "${personDying} forgot to equip their Elytra before jumping off.",
  "${personDying} got bit by a poisonous insect.",
  "${personDying} got an A- in an Asian household.",
  "${personDying} messes up fried rice and dies of emotional damage.",
  "${personDying} fails the cake or fake challenge and eats a rusty nail.",
  "${personDying} got sent to the fortress of meropide and is clawed to death by cats.",
  "${personDying} experienced 1/2 mv^2.",

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
function getTwoUniqueRandomElementsFromArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5); // Shuffling the array

  return shuffledArray.slice(0, 2); // Return the first two elements
}
function getThreeUniqueRandomElementsFromArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5); // Shuffling the array

  return shuffledArray.slice(0, 3); // Return the first three elements
}
function getFourUniqueRandomElementsFromArray<T>(array: T[]): T[] {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5); // Shuffling the array

  return shuffledArray.slice(0, 4); // Return the first three elements
}

function generateInteractionAvatars(participants: Participant[], count: number): HTMLImageElement[] {
  return participants.slice(0, count).map((participant) => {
    const miniAvatar = document.createElement("img");
    miniAvatar.src = participant.image;
    miniAvatar.className = "miniAvatarInteraction";
    miniAvatar.id = participant.id;
    return miniAvatar;
  });
}

function setDayInteractionGrid(participant1: Participant, participant2: Participant, participant3: Participant, participant4: Participant, element: HTMLElement, dayNumber: number) {
  element.innerHTML = `<p style="font-size: 25px; margin:0; color: rgba(231, 225, 143, 0.9); text-align: center;">Day ${dayNumber}</p>`;
  element.className = "dayGridBox";
  element.id = `day${dayNumber}GridBox`;

  let miniAvatars: HTMLImageElement[] = [];

  if (participant2 !== participant3 && participant3 !== participant4) {
    // 4 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2, participant3, participant4], 4);
  } else if (participant2 !== participant3) {
    // 3 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2, participant3], 3);
  } else {
    // 2 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2], 2);
  }

  const participantName = document.createElement("a");
  participantName.className = "verticalCenter";
  participantName.textContent = generateInteractionMessage(participant1, participant2, participant3, participant4);

  const participantContainer = document.createElement("div");
  miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
}

function setNightInteractionGrid(participant1: Participant, participant2: Participant, participant3: Participant, participant4: Participant, element: HTMLElement, nightNumber: number) {
  element.innerHTML = `<p style="font-size: 25px; margin:0; color: rgba(231, 225, 143, 0.9); text-align: center;">Day ${nightNumber}</p>`;
  element.className = "nightGridBox";
  element.id = `night${nightNumber}GridBox`;

  let miniAvatars: HTMLImageElement[] = [];

  if (participant2 !== participant3 && participant3 !== participant4) {
    // 4 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2, participant3, participant4], 4);
  } else if (participant2 !== participant3) {
    // 3 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2, participant3], 3);
  } else {
    // 2 participant interaction
    miniAvatars = generateInteractionAvatars([participant1, participant2], 2);
  }

  const participantName = document.createElement("a");
  participantName.className = "verticalCenter";
  participantName.textContent = generateInteractionMessage(participant1, participant2, participant3, participant4);

  const participantContainer = document.createElement("div");
  miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
  participantContainer.appendChild(participantName);
  element.appendChild(participantContainer);
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
function generateTwoParticipantsInteraction(dayOrNight: number, participant1: Participant, participant2: Participant) {
  if (dayOrNight % 2 === 0) { // day
    console.log(`Processing day ${dayOrNight/2+1}`);
    let currDay = document.getElementById(daysIDs[Math.floor(dayOrNight/2) - 1]);
    let dayDivExists = currDay?.querySelector('div') !== null;
    if (!dayDivExists) {
      console.log(`Creating new day grid box`);
      let newDayGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant2, participant2, newDayGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currDay) { currDay.appendChild(newDayGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  } else { // night
    console.log(`Processing night ${Math.floor(dayOrNight/2)+1}`);
    let currNight = document.getElementById(nightsIDs[Math.floor(dayOrNight/2) - 1]);
    let nightDivExists = currNight?.querySelector('div') !== null;
    if (!nightDivExists) {
      console.log(`Creating new night grid box`);
      let newNightGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant2, participant2, newNightGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currNight) { currNight.appendChild(newNightGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
function generateThreeParticipantsInteraction(dayOrNight: number, participant1: Participant, participant2: Participant, participant3: Participant) {
  if (dayOrNight % 2 === 0) { // day
    console.log(`Processing day ${dayOrNight/2+1}`);
    let currDay = document.getElementById(daysIDs[Math.floor(dayOrNight/2) - 1]);
    let dayDivExists = currDay?.querySelector('div') !== null;
    if (!dayDivExists) {
      console.log(`Creating new day grid box`);
      let newDayGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant3, participant3, newDayGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currDay) { currDay.appendChild(newDayGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  } else { // night
    console.log(`Processing night ${Math.floor(dayOrNight/2)+1}`);
    let currNight = document.getElementById(nightsIDs[Math.floor(dayOrNight/2) - 1]);
    let nightDivExists = currNight?.querySelector('div') !== null;
    if (!nightDivExists) {
      console.log(`Creating new night grid box`);
      let newNightGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant3, participant3, newNightGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currNight) { currNight.appendChild(newNightGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
function generateFourParticipantsInteraction(dayOrNight: number, participant1: Participant, participant2: Participant, participant3: Participant, participant4: Participant) {
  if (dayOrNight % 2 === 0) { // day
    console.log(`Processing day ${dayOrNight/2+1}`);
    let currDay = document.getElementById(daysIDs[Math.floor(dayOrNight/2) - 1]);
    let dayDivExists = currDay?.querySelector('div') !== null;
    if (!dayDivExists) {
      console.log(`Creating new day grid box`);
      let newDayGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant3, participant4, newDayGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currDay) { currDay.appendChild(newDayGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  } else { // night
    console.log(`Processing night ${Math.floor(dayOrNight/2)+1}`);
    let currNight = document.getElementById(nightsIDs[Math.floor(dayOrNight/2) - 1]);
    let nightDivExists = currNight?.querySelector('div') !== null;
    if (!nightDivExists) {
      console.log(`Creating new night grid box`);
      let newNightGridBox = document.createElement("div");
  
      try {
        setNightInteractionGrid(participant1, participant2, participant3, participant4, newNightGridBox, Math.floor(dayOrNight/2)+1) // Too many similar functions otherwise
        if (currNight) { currNight.appendChild(newNightGridBox); }
      } catch (e) {
        console.log(e);
      }
    }
  }
}


function generateRandomKillMessage(personDying: Participant, killer: Participant) {
  // Randomly select a kill message template
  const killStringTemplate = getRandomElementFromArray(killMessageTemplates);

  // Generate the killString by replacing placeholders with participant names
  const killString = killStringTemplate
    .replace(/\${personDying}/g, personDying.name)
    .replace(/\${killer}/g, killer.name);

  // return the randomly generated kill message
  return killString;
}

function generateWayToDieMessage(personDying: Participant) {
  // Randomly select a kill message template
  const killStringTemplate = getRandomElementFromArray(waysToDieTemplate);

  // Generate the killString by replacing placeholders with participant names
  const killString = killStringTemplate
    .replace(/\${personDying}/g, personDying.name);

  // return the randomly generated kill message
  return killString;
}

function generateInteractionMessage(participant1: Participant, participant2: Participant, participant3: Participant, participant4: Participant, ) {
  // Randomly select a kill message template
  
  let interactString;
  if (participant2 !== participant3 && participant3 !== participant4) {
    // 4 participant interaction
    const fourParticipantsInteractionString = getRandomElementFromArray(fourParticipantsInteraction);
    interactString = fourParticipantsInteractionString
    .replace(/\${participant1}/g, participant1.name)
    .replace(/\${participant2}/g, participant2.name)
    .replace(/\${participant3}/g, participant3.name)
    .replace(/\${participant4}/g, participant4.name);
  } else if (participant2 !== participant3) {
    // 3 participant interaction
    const threeParticipantsInteractionString = getRandomElementFromArray(threeParticipantsInteraction);
    interactString = threeParticipantsInteractionString
    .replace(/\${participant1}/g, participant1.name)
    .replace(/\${participant2}/g, participant2.name)
    .replace(/\${participant3}/g, participant3.name);
  } else {
    // 2 participant interaction
    const twoParticipantsInteractionString = getRandomElementFromArray(twoParticipantsInteraction);
    interactString = twoParticipantsInteractionString
    .replace(/\${participant1}/g, participant1.name)
    .replace(/\${participant2}/g, participant2.name);
  }
  // Generate the killString by replacing placeholders with participant names
  
  // return the randomly generated kill message
  return interactString;
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

  if (killer === deadParticipant) {
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

  if (killer === deadParticipant) {
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
    let killOrInteraction = getRandomNumber(5); // 2-4 = interaction (2,3,4) | the rest = kill
    let interactionParticipant: Participant[]; // since it can be Participant[] or just Participant
    if (killOrInteraction >= 2 && killOrInteraction <= 4) {
      if(participantsRemaining.length > 4 && killOrInteraction === 4) {
        interactionParticipant = getFourUniqueRandomElementsFromArray(participantsRemaining);
        generateFourParticipantsInteraction(i, interactionParticipant[0], interactionParticipant[1], interactionParticipant[2], interactionParticipant[3]);
        continue;
      } else if (participantsRemaining.length > 3 && killOrInteraction === 3) {
        interactionParticipant = getThreeUniqueRandomElementsFromArray(participantsRemaining);
        generateThreeParticipantsInteraction(i, interactionParticipant[0], interactionParticipant[1], interactionParticipant[2]);
        continue;
      } else if (participantsRemaining.length > 2 && killOrInteraction === 2) {
        interactionParticipant = getTwoUniqueRandomElementsFromArray(participantsRemaining);
        generateTwoParticipantsInteraction(i, interactionParticipant[0], interactionParticipant[1]);
        continue;
      }
    } 
    
    
    else {
      const randomDeadParticipant = getRandomElementFromArray(participantsRemaining);

      

      let killOrBeKilled = determineIfKillingSomeoneOrDying();
      let killer = randomDeadParticipant;
      if (killOrBeKilled) {
        killer = getRandomElementFromArray(participantsRemaining);
      }
      
      participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant);

      if (i % 2 === 0) {  
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