export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      throw new TypeError('Size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      throw new TypeError('Location must be a string');
    }
  }

  //   return the size and location of the class in the following format:
  //   [CLASS_SIZE] [CLASS_LOCATION]
  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
