"use strict";
// Dear programmer, if you're reading this, I
// sincerely apologize for the messy code
// everyone learns from their mistakes and this code
// was nothing more than a ton of mistakes
// please don't try to refactor/fix it because your
// head will probably hurt after doing it (if you
// succeed that is)
// This is the type of shitty code that just works
// *and it impresses randoms because they think its
// "good", when in reality its very bad...*
const PARTICIPANTS = [
    {
        id: "participant1",
        name: "rcweebs",
        image: "../images/participants/participant1.jpg"
    },
    {
        id: "participant2",
        name: "NoPengoo",
        image: "../images/participants/participant2.png"
    },
    {
        id: "participant3",
        name: "Aishira",
        image: "../images/participants/participant3.jpg"
    },
    {
        id: "participant4",
        name: "Coco",
        image: "../images/participants/participant4.jpg"
    },
    {
        id: "participant5",
        name: "fishe",
        image: "../images/participants/participant5.png"
    },
    {
        id: "participant6",
        name: "anato",
        image: "../images/participants/participant6.png"
    },
    {
        id: "participant7",
        name: "Clip",
        image: "../images/participants/participant7.jpg"
    },
    {
        id: "participant8",
        name: "1Kill2Steal",
        image: "../images/participants/participant8.jpg"
    },
    {
        id: "participant9",
        name: "Dendi",
        image: "../images/participants/participant9.gif"
    },
    {
        id: "participant10",
        name: "Dendro Simp",
        image: "../images/participants/participant10.jpg"
    },
    {
        id: "participant11",
        name: "Emper",
        image: "../images/participants/participant11.png"
    },
    {
        id: "participant12",
        name: "Gaming",
        image: "../images/participants/participant12.png"
    },
    {
        id: "participant13",
        name: "Zaptros",
        image: "../images/participants/participant13.jpg"
    },
    {
        id: "participant14",
        name: "Jecinb",
        image: "../images/participants/participant14.jpg"
    },
    {
        id: "participant15",
        name: "Iodine",
        image: "../images/participants/participant15.jpg"
    },
    {
        id: "participant16",
        name: "Yomi",
        image: "../images/participants/participant16.png"
    },
    {
        id: "participant17",
        name: "Fu",
        image: "../images/participants/participant17.png"
    },
    {
        id: "participant18",
        name: "EggMango",
        image: "../images/participants/participant18.png"
    },
    {
        id: "participant19",
        name: "RPC",
        image: "../images/participants/participant19.png"
    },
    {
        id: "participant20",
        name: "Kälhtzsteiss",
        image: "../images/participants/participant20.jpg"
    },
    {
        id: "participant21",
        name: "Delka",
        image: "../images/participants/participant21.png"
    },
    {
        id: "participant22",
        name: "Vertin",
        image: "../images/participants/participant22.jpg"
    },
    {
        id: "participant23",
        name: "Furina de Fontaine",
        image: "../images/participants/participant23.jpg"
    },
    {
        id: "participant24",
        name: "Mqc",
        image: "../images/participants/participant24.png"
    },
    {
        id: "participant25",
        name: "Drag",
        image: "../images/participants/participant25.jpg"
    },
    {
        id: "participant26",
        name: "BlueArmorDragon",
        image: "../images/participants/participant26.gif"
    },
    {
        id: "participant27",
        name: "MrDoge",
        image: "../images/participants/participant27.gif"
    },
    {
        id: "participant28",
        name: "AETHER",
        image: "../images/participants/participant28.jpg"
    },
    {
        id: "participant29",
        name: "Chongus",
        image: "../images/participants/participant29.jpg"
    },
    {
        id: "participant30",
        name: "Tokarev",
        image: "../images/participants/participant30.png"
    },
    {
        id: "participant31",
        name: "Raouka",
        image: "../images/participants/participant31.jpg"
    },
    {
        id: "participant32",
        name: "KTSUNE",
        image: "../images/participants/participant32.jpg"
    },
    {
        id: "participant33",
        name: "Sorus",
        image: "../images/participants/participant33.gif"
    },
    {
        id: "participant34",
        name: "chocofrog",
        image: "../images/participants/participant34.png"
    },
    {
        id: "participant35",
        name: "Seb",
        image: "../images/participants/participant35.png"
    },
    {
        id: "participant36",
        name: "Librari",
        image: "../images/participants/participant36.png"
    },
    {
        id: "participant37",
        name: "Maike Taisan",
        image: "../images/participants/participant37.jpg"
    },
    {
        id: "participant38",
        name: "Pengi",
        image: "../images/participants/participant38.gif"
    },
    {
        id: "participant39",
        name: "Daikon",
        image: "../images/participants/participant39.jpg"
    },
    {
        id: "participant40",
        name: "TechnoDragoVin",
        image: "../images/participants/participant40.png"
    },
    {
        id: "participant41",
        name: "Aki",
        image: "../images/participants/participant41.png"
    },
    {
        id: "participant42",
        name: "Cyber",
        image: "../images/participants/participant42.png"
    },
    {
        id: "participant43",
        name: "Uyrem",
        image: "../images/participants/participant43.png"
    },
    {
        id: "participant44",
        name: "Roll",
        image: "../images/participants/participant44.jpg"
    },
    {
        id: "participant45",
        name: "ponoma",
        image: "../images/participants/participant45.png"
    },
    {
        id: "participant46",
        name: "Hu Tao",
        image: "../images/participants/participant46.png"
    },
    {
        id: "participant47",
        name: "cow",
        image: "../images/participants/participant47.png"
    },
    {
        id: "participant48",
        name: "bonny",
        image: "../images/participants/participant48.png"
    },
    {
        id: "participant49",
        name: "vons",
        image: "../images/participants/participant49.jpg"
    },
    {
        id: "participant50",
        name: "Nick",
        image: "../images/participants/participant50.jpg"
    },
    {
        id: "participant51",
        name: "piro",
        image: "../images/participants/participant51.png"
    },
    {
        id: "participant52",
        name: "Martoxeno",
        image: "../images/participants/participant52.png"
    },
];
// 1 participant interaction
const ONE_PARTICIPANT_INTERACTIONS = [
    "${participant1} tried to drift. Their car is a FWD and there's no drift on FWD 😠 ",
    // Rooftop (Raouka)
    "${participant1} tried enchanting a dirt block. nothing happened.",
    "${participant1} tried enchanting gunpowder, ending up with their tent in ashes.",
    "${participant1} tried setting his gamemode to creative. it was a fairly dumb move.",
    "${participant1} crafted a wooden chicken.",
    "${participant1} saw a banana.",
    "${participant1} became unpredictable.",
    "${participant1} is sneaking around.",
    "${participant1} tried to catch a coconut, but instead fell right into his head, knocking him out for 2 minutes.",
    "${participant1} acquired coal.",
    "${participant1} killed one.. two.. THREE ANTS!",
    "${participant1} thought about flying.",
    "${participant1} got rickrolled for the 69th time.",
    "${participant1} got rickrolled for the 420th time.",
    "${participant1} got rickrolled for the 2462th time.",
    "${participant1} got rickrolled for the 1365th time.",
    "${participant1} got rickrolled for the 246th time.",
    "${participant1} got rickrolled for the 135th time.",
    "${participant1} decided to cry.",
    "${participant1} decided to go insane.",
    "${participant1} decided to be depressed.",
    "${participant1} is uhhh.. wtf is ${participant1} doing?",
    "${participant1} spotted a ufo.",
    "${participant1} did absolutely nothing. how uneventful.",
    "${participant1} did something. they did something guys, believe me.",
    "${participant1} made a ladder. it was useless for their tent.",
    "${participant1} discovered fire.",
    "${participant1}.. uh oh.. don't let ${participant1} cook.",
    "${participant1} got sent to gulag randomly, and won.",
    "${participant1} didn't want to sleep.",
    "${participant1} and the sun had a staring contest. ${participant1} lost, and was blind for 5 minutes.",
    "${participant1} crafted steel and flint, instead of flint and steel. it doesn't work.",
    "${participant1} was the one who asked.",
];
// 2 participants interacting
const TWO_PARTICIPANTS_INTERACTIONS = [
    "To our surprise, ${participant1} managed to drift a FWD, but his tires are all worn out. ${participant2} won the race with a better tire usage",
    // Emper
    "${participant1} and ${participant2} cuddle for warmth.",
    "${participant1} is chased by ${participant2}.",
    "${participant1} and ${participant2} eat some funky mushrooms together.",
    "${participant1} thinks about killing ${participant2} but decides against it.",
    "${participant1} hits ${participant2} with a snowball",
    "${participant1} is building a camp together with ${participant2}.",
    // Rooftop (Raouka)
    "${participant1} bought ${participant2} a shopping cart full of oranges to solve a math problem.",
    "${participant1} bought ${participant2} a shopping cart full of Hu Tao plushies to solve a math problem. (They ended being a distraction)",
    "${participant1} bought ${participant2} a shopping cart full of Furina plushies to solve a math problem. (They ended being a distraction)",
    "${participant1} and ${participant2} excavated an entire mountain, they still haven't found who asked",
    "${participant1} lied!!!!!!!!!!!!!!!! ${participant2} became angy.",
    "${participant1} tied ${participant2} up. it was purely just for fun.",
    "${participant1} had a private discussion with ${participant2}.",
    "${participant1} tried ${participant2}'s dish. it was delicious!",
    "${participant1} tried ${participant2}'s dish. it was decent.",
    "${participant1} tried ${participant2}'s dish. yucky.",
    "${participant1} wore cat ears. ${participant2} was amused.",
    "${participant1} wore cat ears. ${participant2} thought it was funny.",
    "${participant1} wore car ears. ${participant2} was disturbed and left in a hurry.",
    "${participant1} asked ${participant2} about why the earth is round.",
    "${participant1} asked ${participant2} about why the earth is flat.",
    "${participant1} asked ${participant2} about who asked in the first place.",
    "${participant1} fished out ${participant2}, who almost drowned catching fish by hand.",
    "${participant1} and ${participant2} got in a fight, cried together, then joked around with each other afterwards.",
    "${participant1} pinned ${participant2} against a wall.",
    "${participant1} died in- nevermind. ${participant2} was just getting too dramatic of ${participant1}'s sleeping posture.",
    "${participant1} tried telling ${participant2} a joke. it was hilarious.",
    "${participant1} tried telling ${participant2} a joke. ${participant2} wasn't in the mood for it.",
    "${participant1} tried telling ${participant2} a joke. ${participant2} wanted to die because of how unfunny it is.",
    "${participant1} laughed so loud it woke up ${participant2}. ${participant2} is now in a bad mood.",
    // 1Kill2Steal
    "${participant1} asks ${participant2} for a date. 👉👈",
    "${participant1} decides to prank ${participant2}.",
    "${participant1} ditches ${participant2}.",
];
// 3 participants interacting
const THREE_PARTICIPANTS_INTERACTIONS = [
    "Fujiwara's apprentice ${participant1} showed up, but ${participant2} wasn't scared, till he won the entire thing and ${participant3} was recording it all",
    // Rooftop (Raouka)
    "${participant1} walked in on ${participant2} and ${participant3} doing insanely stupid stuff. ${participant1} joined them regardless.",
    "${participant1} found a skull. ${participant2} and ${participant3} were rattled.",
    "${participant1} parkoured in the woods. ${participant2} and ${participant3} followed shortly after.",
    "${participant1} cried. ${participant2} and ${participant3} were concerned about it.",
    "${participant1} cried. ${participant2} and ${participant3} gave ${participant1} some space.",
    "${participant1} cried. ${participant2} and ${participant3} laughed about it. how cruel.",
    "${participant1} chases after ${participant2}, who's chasing after ${participant3}. ",
    "${participant1} tried killing ${participant2}, but only dealt 1 damage. ${participant3} was confused about it.",
    "${participant1} threw a fake grenade. ${participant2} and ${participant3} weren't entertained.",
    "${participant1} threw a live grenade. ${participant2} and ${participant3} ran away from it.",
    "${participant1}, ${participant2}, and ${participant3} tried to kill each other. they felt dumb when all of them realized they'd actually make a good team.",
    "${participant1} got knocked down by ${participant2}, but was revived by ${participant3} and ran away.",
    "${participant1} discovered that ${participant2} and ${participant3} were plotting against him. ${participant1} escaped the group immediately.",
    "${participant1} discovered that ${participant2} and ${participant3} were plotting against him. ${participant1} cried and hoped for the best.",
    "${participant1} discovered that ${participant2} and ${participant3} were plotting against him. ${participant1} simply laughed and shrugged it off. ",
    // 1Kill2Steal
    "${participant1} tells ${participant2} and ${participant3} that they suck (they didn't like it).",
    "${participant1} tells ${participant2} and ${participant3} that they suck (they liked it).",
    "${participant1} stops ${participant2} from beating the shit out of ${participant3}.",
    // Coco
    "${participant1} has invaded ${participant2} and ${participant3}'s Bedroom. (${participant1} is pissed)",
];
// 4 participants interacting
const FOUR_PARTICIPANTS_INTERACTIONS = [
    // 1Kill2Steal
    "${participant1} joins the group of ${participant2}, ${participant3} and ${participant4}.",
    "${participant1} ditches the group of ${participant2}, ${participant3} and ${participant4}.",
    "${participant1}, ${participant2}, ${participant3} and ${participant4} start building a house.",
    "${participant1} takes a bath together with ${participant2}, ${participant3} and ${participant4}",
    "${participant1}, ${participant2}, ${participant3} and ${participant4} all have a stand off and they decide to spare each other.",
    // Coco
    "${participant1}, ${participant2}, ${participant3} and ${participant4} are farming artifacts in domain.",
];
// `${killer}${waysToKill[partOne]}${personDying}${waysToKill[partTwo]}`
const KILL_MESSAGE_TEMPLATES = [
    // Emper
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
    "${personDying} played Russian Rouconstte with ${killer}. ${personDying} perished.",
    "${killer} japping combo on ${personDying} and finished with uppercut",
    // Rooftop (Raouka)
    "${personDying} was cropped badly by ${killer}.",
    "${personDying} became ${killer}'s emergency food",
    "${killer} betrayed ${personDying} using a waxed lightly weathered cut copper stairs.",
    "${killer} jumpscared ${personDying} with a leaf. ${personDying} then later died of a heart attack.",
    // 1Kill2Steal
    "${personDying} couldn't handle ${killer}'s trolling and died.",
    "${killer} t-posed on ${personDying}.",
    "${personDying} rushed B but got AWP-ed by ${killer}",
];
// "${killer} ${personDying2} ${personDying1}", comment exists for copy-paste reasons
const TWO_KILL_MESSAGE_TEMPLATES = [
    // Raouka (Rooftop)
    "${killer} threw a live grenade. ${personDying1} and ${personDying2} thought it was fake, killing both of them in the explosion.",
    "${killer} and ${personDying1} had a poisonous tea break. ${personDying2} unexpectedly joined in, ending with both of them dead.",
    "${killer} tried healing ${personDying1} and ${personDying2} using hydro while fighting the cryo hypostasis. ",
    // 1Kill2Steal
    "${killer} did a double kill (${personDying1} ${personDying2})",
    "${killer} shot ${personDying2} but accidentally ended up killing ${personDying1} as well...",
    "${personDying2} tried to kill ${personDying1} but ${killer} decided to kill both (they're very sane - source: trust me bro)",
];
// "${killer} ${personDying1} ${personDying2} ${personDying3}",
const THREE_KILL_MESSAGE_TEMPLATES = [
    // 1Kill2Steal
    "${killer} did the hippidy hoppity (and that made: ${personDying1} ${personDying2} ${personDying3} die from cringe) ",
    "${killer} gave a boombastic side eye to: ${personDying1}, ${personDying2} and ${personDying3} and they died from ${killer}'s charm",
];
// "${killer} ${personDying1} ${personDying2} ${personDying3} ${personDying4}",
const FOUR_KILL_MESSAGE_TEMPLATES = [
    // 1Kill2Steal
    "${killer} DID A QUADRA KILL!!! (${personDying1} ${personDying2} ${personDying3} ${personDying4})",
    "${killer} decided to go rampage and killed ${personDying1}, ${personDying2}, ${personDying3} and ${personDying4}",
    "${killer} woke up and chose violence. (Killed: ${personDying1} ${personDying2} ${personDying3} ${personDying4})",
    "${killer} did a: QUADRA KILL! (Killed: ${personDying1} ${personDying2} ${personDying3} ${personDying4}) (sorry guys, penta kill is impossible here)",
];
// `${personDying} ${waysToDie[x]}`
const WAYS_TO_DIE_TEMPLATES = [
    "${personDying} watched too much Initial D and committed Shingo Shoji style. (They crashed)",
    // Emper
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
    // Rooftop (Raouka)
    "${personDying} broke the first rule in Minecraft. Died of emotional damage.",
    "${personDying} tested if fall damage was disabled. turns out, it wasn't.",
    "${personDying} tried hacking but instead noclipped out of the world.",
    "${personDying} encountered the man behind the slaughter.",
    "${personDying} forgot their happy thought.",
    "${personDying} got sent to gulag randomly, and lost.",
    "${personDying} forgot to breathe in their sleep.",
    "${personDying} tried their luck. it didn't go well.",
    "${personDying} was caught by a weird tribe and got tickled to death.",
    "${personDying} had a stroke reading allat.",
    "${personDying} fell out of the world.",
    "${personDying} tried to prevent drowning by drinking water. nice try, though.",
    "${personDying} suffocated in a wall. how? i have no idea.",
    "${personDying} was killed by [Intentional Game Design]",
    "${personDying} was compressed using the wrong file format.",
    "${personDying} either went high above or down below.",
    "${personDying} glitched out and won! err, wait, i think they died.",
    "${personDying} blamed the lag.",
    "${personDying} didn't bring a totem of undying.",
    "${personDying} got pricked to death.",
    "${personDying} said shazam! they got struck by lightning.",
    "${personDying} fell off a chair.",
    // 1Kill2Steal
    "${personDying} slipped on a banana peel. (you silly goose)",
    "A meteorite fell on ${personDying}'s head. (relateable) { NO AoE SOMEHOW }",
    "${personDying} forgot to do their artifacts and capped up on resin.",
    "${personDying} tried to study JavaScript.",
    "${personDying} was sentenced to 1 game of League of Legends.",
    // TBA
];
// This is some basic functionality but its also functionality for data retrieval
/////////////////////////////////////////////////////////////////////////////////
// counter for both as they're always equal in count for this project
const DAY_AND_NIGHT_COUNTER = 200;
// automate array creation (use more of the clients CPU ehehe)
let daysIDs = [];
for (let i = 1; i <= DAY_AND_NIGHT_COUNTER; i++) {
    daysIDs.push(`day${[i]}`);
}
let nightsIDs = [];
for (let i = 1; i <= DAY_AND_NIGHT_COUNTER; i++) {
    nightsIDs.push(`night${[i]}`);
}
// Create DOM - same reason
const GAME_OBJECTS_CONTAINER = document.querySelector('.gameContainer');
for (let i = 1; i <= DAY_AND_NIGHT_COUNTER; i++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'gameObjDay';
    dayElement.id = `day${i}`;
    const nightElement = document.createElement('div');
    nightElement.className = 'gameObjNight';
    nightElement.id = `night${i}`;
    const GAME_OBJECTS_DIV = document.createElement('div');
    GAME_OBJECTS_DIV.className = 'gameObjects';
    GAME_OBJECTS_DIV.appendChild(dayElement);
    GAME_OBJECTS_DIV.appendChild(nightElement);
    GAME_OBJECTS_CONTAINER === null || GAME_OBJECTS_CONTAINER === void 0 ? void 0 : GAME_OBJECTS_CONTAINER.appendChild(GAME_OBJECTS_DIV);
}
// Just 1 winner instance at the end of it.
const winnerElement = document.createElement('div');
winnerElement.className = 'gameObjWinner';
winnerElement.id = `winner`;
const GAME_OBJECTS_DIV = document.createElement('div');
GAME_OBJECTS_DIV.className = 'gameObjects';
GAME_OBJECTS_DIV.appendChild(winnerElement);
GAME_OBJECTS_CONTAINER === null || GAME_OBJECTS_CONTAINER === void 0 ? void 0 : GAME_OBJECTS_CONTAINER.appendChild(GAME_OBJECTS_DIV);
/////////////////////////////////////////////////////////////////////////////////
/*
 *
 *
 *
 *
 *
 * FUNCTIONS PART (fookin hell - loved making it tho... ***SLAMS KEYBOARD***)
 *
 *  - masochist, why did you make it all in 1 file???
 *  Well you see, I tried bundling it, but it didn't work!
 *
 * Author: 1Kill2Steal
 * Date: 1/1/2024 (DD/MM/YYYY)
 *
 *
 *
 *
 *
 *
 */
// Random number between 1 and range (included)
function getRandomNumberFromOneToArgumentIncluded(range) {
    let randomNumber = Math.floor(Math.random() * range) + 1;
    return randomNumber;
}
function getRandomElementFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    return randomElement;
}
// It's important that the random interacting people are unique array elements
// Therefore we shuffle the sorting by using Math.random() and get the first
// elements from the sorted array with slicing
function getUniqueRandomElementsFromArray(array, count) {
    let shuffledArray = array.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
}
// Reusable self-explanatory functions
function dayParagraphTextContent(dayNumber) {
    const RESULT = `<p class="dayParagraph">Day ${dayNumber}</p>`;
    return RESULT;
}
// Pure function - similar to dayParagraphTextContent
function nightParagraphTextContent(nightNumber) {
    const RESULT = `<p class="nightParagraph">Night ${nightNumber}</p>`;
    return RESULT;
}
// For modularity purpose the functions will take Participant[] and participantCount
// Otherwise I'd repeat myself several times.
function generateInteractionAvatarsAndAssignTheirClassAndID(participants, participantCount) {
    return participants.slice(0, participantCount).map((participant) => {
        let miniAvatar = document.createElement("img");
        miniAvatar.src = participant.image;
        miniAvatar.title = participant.name;
        miniAvatar.alt = participant.name;
        miniAvatar.className = "miniAvatarInteraction";
        miniAvatar.id = participant.id;
        return miniAvatar;
    });
}
function generateKilledAvatarsAndAssignTheirClassAndID(participants, participantCount) {
    return participants.slice(1, participantCount).map((participant) => {
        let miniAvatar = document.createElement("img");
        miniAvatar.src = participant.image;
        miniAvatar.title = participant.name;
        miniAvatar.alt = participant.name;
        miniAvatar.className = "miniAvatar";
        miniAvatar.id = participant.id;
        return miniAvatar;
    });
}
// This is again moved to a seperate function for modularity purpose,
// because its reused in the day and night generation
// Function to determine interaction participants based on count
function determineInteractionUsersAvatarsGeneration(participant, count) {
    const selectedParticipants = getUniqueRandomElementsFromArray(participant, count);
    return generateInteractionAvatarsAndAssignTheirClassAndID(selectedParticipants, count);
}
// Day interactions for the users interacting
function setDayInteractionGrid(participant, participantCount, element, dayNumber) {
    element.innerHTML = dayParagraphTextContent(dayNumber);
    element.className = "dayGridBox";
    element.id = `day${dayNumber}GridBox`;
    let miniAvatars = determineInteractionUsersAvatarsGeneration(participant, participantCount);
    let participantName = document.createElement("a");
    participantName.className = "verticalCenter";
    participantName.textContent = generateInteractionMessage(participant, participantCount);
    let participantContainer = document.createElement("div");
    miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
function setKillerAvatar(participant) {
    let miniAvatarKiller = document.createElement("img");
    miniAvatarKiller.src = participant[0].image;
    miniAvatarKiller.title = participant[0].name;
    miniAvatarKiller.alt = participant[0].name;
    miniAvatarKiller.className = "miniAvatarKiller";
    miniAvatarKiller.id = participant[0].id;
    return miniAvatarKiller;
}
function setDayKillGrid(participant, participantCount, element, dayNumber) {
    element.innerHTML = dayParagraphTextContent(dayNumber);
    element.className = "dayGridBox";
    element.id = `day${dayNumber}GridBox`;
    let miniAvatarKiller = setKillerAvatar(participant);
    let miniAvatars = generateKilledAvatarsAndAssignTheirClassAndID(participant, participantCount);
    let participantName = document.createElement("a");
    participantName.className = "verticalCenter";
    participantName.textContent = generateRandomKillMessage(participant, participant[0], participantCount - 1);
    let participantContainer = document.createElement("div");
    participantContainer.appendChild(miniAvatarKiller);
    miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
function setNightContainer(element, nightNumber) {
    element.innerHTML = nightParagraphTextContent(nightNumber);
    element.className = "nightGridBox";
    element.id = `night${nightNumber}GridBox`;
}
// Night interactions for the users interacting
function setNightInteractionGrid(participant, participantCount, element, nightNumber) {
    setNightContainer(element, nightNumber);
    let miniAvatars = determineInteractionUsersAvatarsGeneration(participant, participantCount);
    let participantName = document.createElement("a");
    participantName.className = "verticalCenter";
    participantName.textContent = generateInteractionMessage(participant, participantCount);
    let participantContainer = document.createElement("div");
    miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
function setNightKillGrid(participant, participantCount, element, nightNumber) {
    setNightContainer(element, nightNumber);
    let miniAvatarKiller = setKillerAvatar(participant);
    let miniAvatars = generateKilledAvatarsAndAssignTheirClassAndID(participant, participantCount);
    let participantName = document.createElement("a");
    participantName.className = "verticalCenter";
    participantName.textContent = generateRandomKillMessage(participant, participant[0], participantCount - 1);
    let participantContainer = document.createElement("div");
    participantContainer.appendChild(miniAvatarKiller);
    miniAvatars.forEach((miniAvatar) => participantContainer.appendChild(miniAvatar));
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
// This function is getting called from the second one below it
function setUpDayInteraction(participant, participantCount, dayOrNight) {
    console.log(`Processing day ${dayOrNight / 2 + 1}`);
    let currDay = document.getElementById(daysIDs[dayOrNight / 2]);
    console.log(`Creating new day grid box`);
    const newDayGridBox = document.createElement("div");
    try {
        setDayInteractionGrid(participant, participantCount, newDayGridBox, dayOrNight / 2 + 1);
        if (currDay) {
            currDay.appendChild(newDayGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set day interaction grid: ${e}`);
    }
}
// This function is getting called from the one below it
function setUpNightInteraction(participant, participantCount, dayOrNight) {
    console.log(`Processing night ${Math.floor(dayOrNight / 2) + 1}`);
    let currNight = document.getElementById(nightsIDs[Math.floor(dayOrNight / 2)]);
    console.log(`Creating new night grid box`);
    let newNightGridBox = document.createElement("div");
    try {
        setNightInteractionGrid(participant, participantCount, newNightGridBox, Math.floor(dayOrNight / 2) + 1);
        if (currNight) {
            currNight.appendChild(newNightGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set night interacton grid: ${e}`);
    }
}
// self-explanatory.
function determineIfInteractionIsAtDayOrNightAndSetUp(dayOrNight, participant, participantCount) {
    if (dayOrNight % 2 == 0) { // day
        setUpDayInteraction(participant, participantCount, dayOrNight);
    }
    else { // night
        setUpNightInteraction(participant, participantCount, dayOrNight);
    }
}
// Determines interatcing users then runs
// a regulax expression on the corresponding
// interacting users arrays
function generateInteractionMessage(participant, participantCount) {
    let interactString;
    switch (participantCount) {
        case 4:
            // 4 participant interaction
            interactString = getRandomElementFromArray(FOUR_PARTICIPANTS_INTERACTIONS)
                .replace(/\${participant1}/g, participant[0].name)
                .replace(/\${participant2}/g, participant[1].name)
                .replace(/\${participant3}/g, participant[2].name)
                .replace(/\${participant4}/g, participant[3].name);
            break;
        case 3:
            // 3 participant interaction
            interactString = getRandomElementFromArray(THREE_PARTICIPANTS_INTERACTIONS)
                .replace(/\${participant1}/g, participant[0].name)
                .replace(/\${participant2}/g, participant[1].name)
                .replace(/\${participant3}/g, participant[2].name);
            break;
        case 2:
            // 2 participant interaction
            interactString = getRandomElementFromArray(TWO_PARTICIPANTS_INTERACTIONS)
                .replace(/\${participant1}/g, participant[0].name)
                .replace(/\${participant2}/g, participant[1].name);
            break;
        case 1:
            // 1 participant interaction
            interactString = getRandomElementFromArray(ONE_PARTICIPANT_INTERACTIONS)
                .replace(/\${participant1}/g, participant[0].name);
            break;
    }
    // return the randomly generated interaction message
    // it shouldn't ever return undefined but in the case where it does, it's easily trackable
    return interactString != undefined ? interactString : "Element \"InteractString\"in function generateInteractionMessage() is undefined";
}
// true = kill, false = die
// This is the rng on whether you die on your own or kill someone else
function determineIfKillingSomeoneOrDying() {
    let killOrDie;
    const CHANCE_TO_DIE = 3;
    const CHANCE_TO_KILL = 4;
    let result = Math.random();
    if (result > CHANCE_TO_DIE / CHANCE_TO_KILL) {
        return killOrDie = true;
    }
    else {
        return killOrDie = false;
    }
}
// function to generate the dying message:
// const WAYS_TO_DIE_TEMPLATES: string[]
// by using regular expressions
function generateWayToDieMessage(personDying) {
    // generate the way to die and regex replace it
    let dieString = getRandomElementFromArray(WAYS_TO_DIE_TEMPLATES)
        .replace(/\${personDying}/g, personDying.name);
    return dieString;
}
// function to generate the killing message:
// const KILL_MESSAGE_TEMPLATES: string[]
// by using regular expressions
function generateRandomKillMessage(personDying, killer, killedCount) {
    let killString = "";
    if (killedCount === 1) {
        killString = getRandomElementFromArray(KILL_MESSAGE_TEMPLATES)
            .replace(/\${killer}/g, killer.name)
            .replace(/\${personDying}/g, personDying[1].name);
        return killString;
    }
    if (killedCount === 2) {
        killString = getRandomElementFromArray(TWO_KILL_MESSAGE_TEMPLATES)
            .replace(/\${killer}/g, killer.name)
            .replace(/\${personDying1}/g, personDying[1].name)
            .replace(/\${personDying2}/g, personDying[2].name);
        return killString;
    }
    if (killedCount === 3) {
        killString = getRandomElementFromArray(THREE_KILL_MESSAGE_TEMPLATES)
            .replace(/\${killer}/g, killer.name)
            .replace(/\${personDying1}/g, personDying[1].name)
            .replace(/\${personDying2}/g, personDying[2].name)
            .replace(/\${personDying3}/g, personDying[3].name);
        return killString;
    }
    if (killedCount === 4) {
        killString = getRandomElementFromArray(FOUR_KILL_MESSAGE_TEMPLATES)
            .replace(/\${killer}/g, killer.name)
            .replace(/\${personDying1}/g, personDying[1].name)
            .replace(/\${personDying2}/g, personDying[2].name)
            .replace(/\${personDying3}/g, personDying[3].name)
            .replace(/\${personDying4}/g, personDying[4].name);
        return killString;
    }
    return killString;
}
// Function to set up the avatar of the killer and dead participant
// as well as the text box from the data section
// KILL_MESSAGE_TEMPLATES: string[]
function generateDeadParticipantAvatarAndText(miniAvatar, participantName, deadParticipant) {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;
    participantName.className = "verticalCenter";
    participantName.textContent = generateWayToDieMessage(deadParticipant);
}
// Function to set up the avatar of the killer and dead participant
// as well as the text box from the data section
// KILL_MESSAGE_TEMPLATES: string[]
function generateKillerAndDeadParticipantAvatarAndText(miniAvatar, secondAvatar, participantName, deadParticipant, killer) {
    miniAvatar.src = deadParticipant[0].image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant[0].id;
    secondAvatar.src = killer.image;
    secondAvatar.className = "miniAvatarKiller";
    secondAvatar.id = killer.id;
    participantName.className = "verticalCenter";
    participantName.textContent = generateRandomKillMessage(deadParticipant, killer, 1);
}
// Function to set up the grid style in the day !!!where there's kiling!!!
function setDayGridStyleWithKiller(element, dayNumber, deadParticipant, killer) {
    element.innerHTML = dayParagraphTextContent(dayNumber);
    element.className = "dayGridBox";
    element.id = `day${dayNumber}GridBox`;
    let miniAvatar = document.createElement("img");
    let secondAvatar = document.createElement("img");
    let participantName = document.createElement("a");
    if (killer === deadParticipant[0]) {
        generateDeadParticipantAvatarAndText(miniAvatar, participantName, deadParticipant[0]);
    }
    else {
        generateKillerAndDeadParticipantAvatarAndText(miniAvatar, secondAvatar, participantName, deadParticipant, killer);
    }
    const participantContainer = document.createElement("div");
    if (secondAvatar) {
        participantContainer.appendChild(secondAvatar);
    }
    participantContainer.appendChild(miniAvatar);
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
function setDeadParticipantMiniAvatar(miniAvatar, deadParticipant) {
    miniAvatar.src = deadParticipant.image;
    miniAvatar.className = "miniAvatar";
    miniAvatar.id = deadParticipant.id;
}
// Function to set up the grid style in the night !!!where there's kiling!!!
function setNightStyleWithKiller(element, nightNumber, deadParticipant, killer) {
    setNightContainer(element, nightNumber);
    let miniAvatar = document.createElement("img");
    let participantName = document.createElement("a");
    let participantContainer = document.createElement("div");
    if (killer === deadParticipant[0]) {
        setDeadParticipantMiniAvatar(miniAvatar, deadParticipant[0]);
        participantName.className = "verticalCenter";
        participantName.textContent = generateWayToDieMessage(deadParticipant[0]);
    }
    else {
        setDeadParticipantMiniAvatar(miniAvatar, deadParticipant[0]);
        let secondAvatar = document.createElement("img");
        secondAvatar.src = killer.image;
        secondAvatar.className = "miniAvatarKiller";
        secondAvatar.id = killer.id;
        if (secondAvatar) {
            participantContainer.appendChild(secondAvatar);
        }
        participantName.className = "verticalCenter";
        participantName.textContent = generateRandomKillMessage(deadParticipant, killer, 1);
    }
    participantContainer.appendChild(miniAvatar);
    participantContainer.appendChild(participantName);
    element.appendChild(participantContainer);
}
// Function to process a day iteration !!!where there's kiling!!!
function processDayInteractionWithKiller(dayNumber, randomDeadParticipant, killer) {
    killer = randomDeadParticipant[0];
    console.log(`Processing day ${dayNumber}`);
    const currDay = document.getElementById(daysIDs[dayNumber - 1]);
    console.log(`Creating new day grid box`);
    const newDayGridBox = document.createElement("div");
    try {
        setDayGridStyleWithKiller(newDayGridBox, dayNumber, randomDeadParticipant, killer);
        if (currDay) {
            currDay.appendChild(newDayGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set day grid style with killer: ${e}`);
    }
}
// Function to process a night iteration !!!where there's kiling!!!
function processNightInteractionWithKiller(nightNumber, randomDeadParticipant, killer) {
    killer = randomDeadParticipant[0];
    console.log(`Processing night ${nightNumber}`);
    const currNight = document.getElementById(nightsIDs[nightNumber - 1]);
    console.log(`Creating new night grid box`);
    const newNightGridBox = document.createElement("div");
    try {
        setNightStyleWithKiller(newNightGridBox, nightNumber, randomDeadParticipant, killer);
        if (currNight) {
            currNight.appendChild(newNightGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set night grid style with killer: ${e}`);
    }
}
// Just like the day/night but with slightly different content
// and also different CSS style via the different classes.
function generateWinnerStyle(participant) {
    const winner = document.getElementById("winner");
    console.log(`Creating new winner grid box`);
    const winnerGridBox = document.createElement("div");
    winnerGridBox.innerHTML = `<p class="winnerParagraph">Winner</p>`;
    winnerGridBox.className = "winnerGridBox";
    winnerGridBox.id = `winnerGridBox`;
    const miniAvatar = document.createElement("img");
    miniAvatar.src = participant.image;
    miniAvatar.className = "miniAvatarWinner";
    miniAvatar.id = participant.id;
    const participantName = document.createElement("a");
    participantName.className = "verticalCenter";
    participantName.textContent = `Congratulations ${participant.name} you won!`;
    const participantContainer = document.createElement("div");
    participantContainer.appendChild(miniAvatar);
    participantContainer.appendChild(participantName);
    winnerGridBox.appendChild(participantContainer);
    winner === null || winner === void 0 ? void 0 : winner.appendChild(winnerGridBox);
}
function processDayWithMultipleKilled(dayCount, randomDeadParticipant, killer, killedCount) {
    killer = randomDeadParticipant[0];
    console.log(`Processing day ${dayCount}`);
    let currDay = document.getElementById(daysIDs[dayCount - 1]);
    console.log(`Creating new multiple killed day grid box`);
    let newDayGridBox = document.createElement("div");
    try {
        setDayKillGrid(randomDeadParticipant, killedCount, newDayGridBox, dayCount);
        if (currDay) {
            currDay.appendChild(newDayGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set day kill grid: ${e}`);
    }
}
function processNightWithMultipleKilled(nightCount, randomDeadParticipant, killer, killedCount) {
    killer = randomDeadParticipant[0];
    console.log(`Processing night ${nightCount}`);
    let currNight = document.getElementById(nightsIDs[nightCount - 1]);
    console.log(`Creating new multiple killed night grid box`);
    let newNightGridBox = document.createElement("div");
    try {
        setNightKillGrid(randomDeadParticipant, killedCount, newNightGridBox, nightCount);
        if (currNight) {
            currNight.appendChild(newNightGridBox);
        }
    }
    catch (e) {
        console.log(`Couldn't set night kill grid: ${e}`);
    }
}
// Have to define them globally for this to work
let haveYouPlayedThis = 0;
// !!! Function to perform the main game logic !!!
function runGameCycle() {
    let participantsRemaining = PARTICIPANTS.filter(participant => participant.name);
    const gameButton = document.getElementById("StartGame");
    gameButton != undefined ? gameButton.innerText = "Replay" : console.log("gameButton is undefined");
    if (haveYouPlayedThis >= 1) {
        location.reload();
    }
    for (let i = 0; i < nightsIDs.length + daysIDs.length; i++) {
        console.log(`Entering iteration ${i}`);
        const killOrInteraction = getRandomNumberFromOneToArgumentIncluded(5); // 1-3 = interaction (2,3,4) | the rest = kill
        let interactionParticipant; // since it can be Participant[] or just Participant
        console.log(killOrInteraction);
        console.log(participantsRemaining.length);
        // You know whats the worst about this change in the condition: && participantsRemaining.length > 4
        // I DONT HAVE A CLUE WHY IT BUGS AT THE END IF ITS LESS THAN OR EQUAL TO FOUR!
        // FOR SOME GODDAMN REASON IT DOESN'T WORK PROPERLY IF ITS NOT LIKE THAT!!
        if ((killOrInteraction >= 1 && killOrInteraction <= 4) && participantsRemaining.length > 4) {
            switch (true) { // when i try to do switch(killOrInteraction >= 1 && killOrInteraction <= 4) it doesn't work as intended
                case killOrInteraction === 4:
                    interactionParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 4);
                    determineIfInteractionIsAtDayOrNightAndSetUp(i, interactionParticipant, 4);
                    break;
                case killOrInteraction === 3:
                    interactionParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 3);
                    determineIfInteractionIsAtDayOrNightAndSetUp(i, interactionParticipant, 3);
                    break;
                case killOrInteraction === 2:
                    interactionParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 2);
                    determineIfInteractionIsAtDayOrNightAndSetUp(i, interactionParticipant, 2);
                    break;
                case killOrInteraction === 1:
                    interactionParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 1);
                    determineIfInteractionIsAtDayOrNightAndSetUp(i, interactionParticipant, 1);
                    break;
            }
        }
        else {
            let randomDeadParticipant = [];
            let howManyKilled = getRandomNumberFromOneToArgumentIncluded(20);
            let killer = randomDeadParticipant[0];
            if (howManyKilled >= 1 && howManyKilled <= 10 || participantsRemaining.length === 1) {
                randomDeadParticipant[0] = getRandomElementFromArray(participantsRemaining);
                let killOrBeKilled = determineIfKillingSomeoneOrDying();
                if (killOrBeKilled) {
                    killer = getRandomElementFromArray(participantsRemaining);
                }
                participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant[0]);
                if (i % 2 === 0) {
                    processDayInteractionWithKiller(Math.floor(i / 2) + 1, randomDeadParticipant, killer);
                }
                else {
                    processNightInteractionWithKiller(Math.floor(i / 2) + 1, randomDeadParticipant, killer);
                }
            }
            else if (howManyKilled >= 11 && howManyKilled <= 14 && participantsRemaining.length > 2) {
                randomDeadParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 2);
                for (let i = 1; i <= randomDeadParticipant.length; i++) {
                    participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant[i]);
                }
                if (i % 2 === 0) {
                    processDayWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 2);
                }
                else {
                    processNightWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 2);
                }
            }
            else if (howManyKilled >= 15 && howManyKilled <= 18 && participantsRemaining.length > 3) {
                randomDeadParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 3);
                for (let i = 1; i <= randomDeadParticipant.length; i++) {
                    participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant[i]);
                }
                if (i % 2 === 0) {
                    processDayWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 3);
                }
                else {
                    processNightWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 3);
                }
            }
            else if (howManyKilled === 19 && participantsRemaining.length > 4) {
                randomDeadParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 4);
                for (let i = 1; i <= randomDeadParticipant.length; i++) {
                    participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant[i]);
                }
                if (i % 2 === 0) {
                    processDayWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 4);
                }
                else {
                    processNightWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 4);
                }
            }
            else if (howManyKilled === 20 && participantsRemaining.length > 5) {
                randomDeadParticipant = getUniqueRandomElementsFromArray(participantsRemaining, 5);
                for (let i = 1; i <= randomDeadParticipant.length; i++) {
                    participantsRemaining = participantsRemaining.filter(participant => participant !== randomDeadParticipant[i]);
                }
                if (i % 2 === 0) {
                    processDayWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 5);
                }
                else {
                    processNightWithMultipleKilled(Math.floor(i / 2) + 1, randomDeadParticipant, killer, 5);
                }
            }
            else {
                console.log("didn't process well.");
                --i;
                continue;
            }
            if (participantsRemaining.length === 1) {
                ++haveYouPlayedThis;
                generateWinnerStyle(participantsRemaining[0]);
                console.log('All participants are dead. Exiting loop.');
                console.log(`The winner is: ${participantsRemaining[0].name}, congratulations!`);
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
 * Date: 1/1/2024 (DD/MM/YYYY)
 *
 *
 *
 *
 *
 *
 */
// !!! Function to output the main game logic !!! (functions like a main function of a program)
function startGame() {
    runGameCycle();
    console.log(`Game iterated`);
}
