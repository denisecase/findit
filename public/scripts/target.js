/**
 * Target gets a target location
 * @module target
 *
 * @author Denise Case
 */
import locationsArray from './init-locations.js';

// helper functions................................

/**
 * Get random inti - the maximum is exclusive and the minimum is inclusive
 * @param {*} min
 * @param {*} max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// class..............................................

/**
 * Get a random target for the user to find
 * includes a target location and target text.
 * @class Target
 * @author Denise Case
 */
export default class {
  constructor() {
    try {
      const i = getRandomInt(0, locationsArray.length);
      this.location = locationsArray[i];
      this.text = 'Ready - start searching!';
    } catch (err) {
      this.location = [];
      this.text = 'Error - see developer.';
    }
  }
}
