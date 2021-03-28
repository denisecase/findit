/**
 * Main code - provides interaction with web page DOM.
 * @module main
 *
 * @requires module:game.js
 *
 * @author Denise Case
 */
import  Game  from './game.js';
let game = null;

// define helper functions................

async function speak(text) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  window.speechSynthesis.speak(utterance);
}


// define event handlers .........................................................

/**
 * Start (or restart) the game by selecting
 * a location for the user to find.
 * This location is NOT displayed during the game
 * (but may be displayed during development).
 */
async function targetHandler() {
  game = await new Game();
  const ans = await game.start();
  const targetLocation = game.target.location;
  const targetText = game.target.text;
  document.querySelector('#one').innerHTML = targetText;
  speak(targetText);
  console.log(`Target location: ${JSON.stringify(targetLocation)}`)
}

/**
 * Play the game by checking device location, comparing it to target,
 * and providing feedback/guidance to the player.
 */
async function deviceHandler() {
  if (game === null) {
    const deviceText = 'Please start a game to begin.';
    speak(deviceText);
  } else {
    await game.updateProgress();
    speak( document.querySelector('#two').innerHTML)
  }
}

/**
 * Logic to execute each time the app loads.
 */
function main() {
  // assign display elements .............................................
  const targetElement = document.querySelector('#one');
  const deviceElement = document.querySelector('#two');

  // configure event listeners .............................................
  targetElement.addEventListener('click', targetHandler);
  targetElement.addEventListener('touch', targetHandler);
  deviceElement.addEventListener('click', deviceHandler);
  deviceElement.addEventListener('touch', deviceHandler);
}


// once the window has loaded, call the main method
// this allows us to add elements dynamically (with code)
// add still assign event handlers
window.addEventListener('load', main);
