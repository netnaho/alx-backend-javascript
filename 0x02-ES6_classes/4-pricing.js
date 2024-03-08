import Currency from './3-currency';

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
    return `${this._amount} ${this._currency}_${this._currency.name} ${this._currency}_${this._currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
