export default class DonateForm {
  #formElem;
  #totalDonates;
  #totalDonatesElem;
  #inputDonateAmount;

  constructor(handleBtnClick) {
    this.#formElem = document.createElement('form');
    this.#formElem.className = 'donate-form';

    this.#totalDonates = 0.00;
    this.#totalDonatesElem = document.createElement('h1');
    this.#totalDonatesElem.innerText = `${this.#totalDonates}$`
    this.#totalDonatesElem.className = 'total-amount';

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.innerHTML = 'Введите сумму в $ <input required class="donate-form__donate-input" step="0.01" name="amount" type="number" max="100" min="1" />'
    this.#inputDonateAmount = label.querySelector('input');

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button';
    button.type = 'submit';
    button.innerText = 'Задонатить';


    this.#formElem.append(this.#totalDonatesElem);
    this.#formElem.append(label);
    this.#formElem.append(button);

    this.#formElem.addEventListener('submit', (event) => {
      event.preventDefault();
      handleBtnClick( this.#inputDonateAmount);
    });
  }

  updateTotalDonates(donate) {
    this.#totalDonates = this.#totalDonates + Number.parseFloat(donate);

    this.#totalDonatesElem.innerText = `${this.#totalDonates.toFixed(2)}$`
  }


  render(container) {
    container.append(this.#formElem);
  }
}