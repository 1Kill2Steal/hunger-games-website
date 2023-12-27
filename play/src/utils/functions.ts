// Author: 1Kill2Steal
// Date: 27/12/2023 (DD/MM/YYYY)

// rand number between 1 and range (included)
function getRandomNumber(range: number) {
  const randomNumber = Math.floor(Math.random() * range) + 1;
  return randomNumber;
}

function getRandomElementFromArray(array: string[]){
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

function setDayParagraphStyle(element: HTMLParagraphElement): void {
  element.textContent = "Day paragraph content";
  element.style.color = "blue";
  element.style.fontSize = "16px";
  element.style.fontFamily = "Arial, sans-serif";
}

function setNightParagraphStyle(element: HTMLParagraphElement): void {
  element.textContent = "Night paragraph content";
  element.style.color = "red";
  element.style.fontSize = "18px";
  element.style.fontFamily = "Arial, sans-serif";
}

export {
  getRandomNumber,
  getRandomElementFromArray,
  determineIfKillingSomeoneOrDying,
  setDayParagraphStyle,
  setNightParagraphStyle,
}