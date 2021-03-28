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
    console.log("Constructing empty Target")
    this.location = null;
    this.text = 'Nothing';
  }

  async init() {
    try {
      console.log('Starting target.init()');
      const useRemote = true; //change this as needed
      const source = useRemote? 'remote' : 'local';
      console.log(`In target.init() getting ${source} random location`);
      this.location = useRemote? await this.getRandomLocationRemote() :await this.getRandomLocationLocal();
      this.text = 'Ready - start searching!';
    } catch (err) {
      this.location = null;
      this.text = 'Error - see developer.';
    }
    console.log('Ending target.init()');
  }

  async getRandomLocationLocal() {
    const i = getRandomInt(0, locationsArray.length);
    const localLocation = locationsArray[i];
    return localLocation;
  }

  async getRandomLocationRemote() {
    console.log('Starting remote fetch');
    const url = 'https://findit-nest.herokuapp.com/locations/random';
    const sampleLocation = {
      id: 19,
      createdAt: '2021-03-27T21:36:32.740Z',
      updatedAt: '2021-03-27T21:36:32.740Z',
      name: 'Badami Office, Excellent Smithers',
      north: 40.351187,
      west: -94.883172,
      south: 40.350864,
      east: -94.882831,
      isActive: true,
    };

    let locationRemote = null;
    try {
     response = await fetch(url);
     locationRemote = await response.json;
    }
    catch (error){
      locationRemote = sampleLocation;
       console.log("Error calling for remote random location. Using sample location instead.")
    }
    console.log(`random location:$ {locationRemote}`);
    return locationRemote;
  }
}
