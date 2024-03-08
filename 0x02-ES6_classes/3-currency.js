export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(nam) {
    this._name = nam;
  }

  set code(cod) {
    this._code = cod;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
