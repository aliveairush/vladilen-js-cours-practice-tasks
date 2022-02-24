import {getRandomColor} from './utils/getRandomColor';

function initApp() {
  console.log('Hello world');

  const buttonElem = document.createElement('button');
  buttonElem.classList.add("button");
  buttonElem.innerText = "Изменить цвет страницы";

  document.body.append(buttonElem);

  buttonElem.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  })
}

export default initApp;
