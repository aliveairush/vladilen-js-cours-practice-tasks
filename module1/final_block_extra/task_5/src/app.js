import DonateForm from "./components/DonateForm";
import DonatesContainer from "./components/DonatesContainer";


const initialData = [
  {
    date: new Date(2021, 6, 6, 10, 28, 49),
    donate: 4,
  },
  {
    date: new Date(2021, 6, 6, 10, 28, 49),
    donate: 20,
  },
  {
    date: new Date(2021, 6, 6, 10, 28, 49),
    donate: 3,
  },
  {
    date: new Date(2021, 6, 6, 10, 28, 49),
    donate: 1,
  },
]

class App {
  #donateForm;
  #donatesContainer;

  constructor(data) {
    this.#donateForm = new DonateForm(this.#handleDonateBtnClick.bind(this));
    this.#donatesContainer = new DonatesContainer(data, this.#updateDonateListCallback.bind(this));
  }

  #handleDonateBtnClick(input) {
    this.#donatesContainer.appendDonateItem({
      date: new Date(),
      donate: input.value
    });
    input.value = '';
  }

  #updateDonateListCallback(donate) {
    this.#donateForm.updateTotalDonates(donate);
  }

  render(container) {
    this.#donateForm.render(container);
    this.#donatesContainer.render(container);
  }
}

function initApp() {
  new App(initialData).render(document.body);
}

export default initApp;
