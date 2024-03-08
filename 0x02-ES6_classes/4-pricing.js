import Currency from "./3-currency";

const currency = new Currency();

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amt) {
    this._amount = amt;
  }

  set currency(cur) {
    this._currency = cur;
  }

  displayFulPrice() {
    return `${this._amount} ${this._currency}_${currency._name} ${this._currency}_${currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
