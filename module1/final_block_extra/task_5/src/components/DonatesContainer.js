import moment from "moment";

const noop = () => {
}

export default class DonatesContainer {
  #container
  #donateList
  #appendDonateCallback

  constructor(data, callbackOnDonateListUpdate = noop) {
    this.#container = document.createElement('div');
    this.#container.className = 'donates-container';

    const h2 = document.createElement('h2');
    h2.className = 'donates-container__title';
    h2.innerText = 'Список донатов';

    this.#donateList = document.createElement('div');
    this.#donateList.className = 'donates-container__donates';

    this.#appendDonateCallback = callbackOnDonateListUpdate;
    data.forEach(item => this.appendDonateItem(item));

    this.#container.append(h2);
    this.#container.append(this.#donateList);
  }

  appendDonateItem(donateItem) {
    const date = moment(donateItem.date).format('MMMM Do YYYY, h:mm:ss a');

    this.#donateList.insertAdjacentHTML('afterbegin', `<div class="donate-item">${date} - <b>${donateItem.donate}</b></div>`)
    this.#appendDonateCallback(donateItem.donate);
  }

  render(container) {
    container.append(this.#container);
  }
}