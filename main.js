// COIN FLIP SIMULATOR

// html variables
let outputE1 = document.getElementById("output");
let headsE1 = document.getElementById("heads-out");
let tailsE1 = document.getElementById("tails-out");
let diceE1 = document.getElementById("di-out");
let diceE2 = document.getElementById("di-out2");
let diceE3 = document.getElementById("di-out3");
let diceE4 = document.getElementById("di-out4");
let diceE5 = document.getElementById("di-out5");
let diceE6 = document.getElementById("di-out6");
//  Count variables
let numHeads = 0;
let numTails = 0;
let numDice1 = 0;
let numDice2 = 0;
let numDice3 = 0;
let numDice4 = 0;
let numDice5 = 0;
let numDice6 = 0;
// Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", diceRoll);
function btnClicked() {
  //  Generate random Number
  let randNum = Math.random();
  console.log(randNum);

  //     Simulate the coin fli
  if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src= 'img/heads.png'/>";
    numHeads++;
    headsE1.innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML = "<img src='img/tails.png'/>";
    numTails++;
    tailsE1.innerHTML = numTails;
  }
}

//show you understanding
function diceRoll() {
  let ranNum2 = Math.floor(Math.random() * 6) + 1;
  console.log(ranNum2);

  if (ranNum2 == 1) {
    document.getElementById("ou2");
    numDice1++;
    diceE1.innerHTML = numDice1;
  } else if (ranNum2 == 2) {
    document.getElementById("ou2");
    numDice2++;
    diceE2.innerHTML = numDice2;
  } else if (ranNum2 == 3) {
    document.getElementById("ou2");
    numDice3++;
    diceE3.innerHTML = numDice3;
  } else if (ranNum2 == 4) {
    document.getElementById("ou2");
    numDice4++;
    diceE4.innerHTML = numDice4;
  } else if (ranNum2 == 5) {
    document.getElementById("ou2");
    numDice5++;
    diceE5.innerHTML = numDice5;
  } else if (ranNum2 == 6) {
    document.getElementById("ou2");
    numDice6++;
    diceE6.innerHTML = numDice6;
  } else {
    console.log("fix your code");
  }
}
