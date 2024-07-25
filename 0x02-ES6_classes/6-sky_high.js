import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    //  call the parent constructor with super
    super(sqft);
    this._floors = floors;
  }

  //   getter for floors
  get floors() {
    return this._floors;
  }

  //   getter for sqft
  get sqft() {
    return this._sqft;
  }

  //   setter for floors
  set floors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  //   method that returns the evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
