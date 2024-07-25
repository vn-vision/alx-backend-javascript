export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  //   getter for code
  get code() {
    return this._code;
  }

  //   getter for name
  get name() {
    return this._name;
  }

  //   setter for code
  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  //   setter for name
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
