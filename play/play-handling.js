var gameContainer = document.getElementById('playLineOne');

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
]

function getRandomElementFromArray(array){
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];

  return randomElement;
}

function displayText() {
  var loremString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem veritatis atque odio amet, distinctio perferendis excepturi dignissimos, saepe quia, vitae placeat magni velit maiores fugit neque facere culpa qui dolores.";
  try{ // possibly null
    const obtainedRandomElement = getRandomElementFromArray(randomizedElements);
    document.getElementById("playLineOne").innerHTML = obtainedRandomElement;
    console.log(obtainedRandomElement);
  } catch(e) {
    console.log(e);
  }
}