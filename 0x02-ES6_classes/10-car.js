const cloneCarSymbol = Symbol('cloneCarSymbol');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol]() {
    const { _brand, _motor, _color } = this;
    const clonedCar = new Car(_brand, _motor, _color);
    return clonedCar;
  }

  cloneCar() {
    return this[cloneCarSymbol]();
  }
}
