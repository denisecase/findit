/**
 * Game code - provides location-based game functions
 * @module main
 *
 * @requires module:device.js
 * @requires module:target.js
 *
 * @author Denise Case
 */

import Target from './target.js';

/**
 * Create a game.
 *
 * @class Game
 * @author Denise Case
 */
export default class {
  /**
   * Game constructor ..............................
   */
  constructor() {
    console.log("Constructing new game")
    this.target = new Target();
  }

  async start() {
    console.log("Starting game.start()")
    const response = await this.target.init();
    console.log(`Ending game.start() with new game: ${JSON.stringify(this.target)}`);
  }

  // class methods.........................

  /**
   * updateProgress() checks device location and offers guidance.
   */
  async updateProgress() {
    console.log('Start game.updateProgress()');
    const checkTarget = this.target;
    var result = {
      progressText: 'I dunno',
      deviceLocation: null,
    };

    function successFunction(position) {
      function isInside(device, bounds) {
        console.log(`Start isInside device: ${JSON.stringify(device)}`);
        console.log(`Start isInside bounds: ${JSON.stringify(bounds)}`);
        const ans =
          device.latitude > bounds.South &&
          device.latitude < bounds.North &&
          device.longitude > bounds.West &&
          device.longitude < bounds.East;
        return ans;
      }

      result.deviceLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      console.log(result.deviceLocation.latitude);
      console.log(result.deviceLocation.longitude);
      result.progressText = isInside(result.deviceLocation, checkTarget)
        ? 'Congratulations - you found this location!'
        : 'Keep looking!';
      console.log(
        `Result:${result.progressText}  for ${JSON.stringify(
          result.deviceLocation,
        )}`,
      );
      document.querySelector('#two').innerHTML = result.progressText;
    }

    function errorFunction(err) {
      const s = `ERROR(${err.code}): ${err.message}`;
      console.warn(s);
      result.progressText = err.message;
      console.log(result.progressText);
      document.querySelector('#two').innerHTML = result.progressText;
    }

    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    console.log('Call browser getCurrentPosition()');
    navigator.geolocation.getCurrentPosition(
      successFunction,
      errorFunction,
      geolocationOptions,
    );

    return await result;
  }
}
