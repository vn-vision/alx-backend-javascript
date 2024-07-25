// symbols: the symbols are used to create private properties in classes
const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    // get the constructor of the object,
    // and create a new object with the same private properties
    const ClonedCar = Object.getPrototypeOf(this).constructor;
    return new ClonedCar(this._brand, this._motor, this._color);
  }
}
