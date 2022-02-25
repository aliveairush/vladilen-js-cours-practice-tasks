export default class CookieConsent {

  #cookieConsent
  #cookieConsentBtn

  constructor() {
    this.#cookieConsent = document.createElement('div');
    this.#cookieConsent.className = 'cookie-consent';
    this.#cookieConsent.innerHTML = '<p class="cookie-consent__text">Мы используем файлы cookie для наилучшего представления нашего сайта</p>'

    this.#cookieConsentBtn = document.createElement('button');
    this.#cookieConsentBtn.className = 'cookie-consent__button';
    this.#cookieConsentBtn.innerText = 'Прекрасно';

    this.#cookieConsent.append(this.#cookieConsentBtn);
    this.#cookieConsentBtn.addEventListener('click', this.handleConsentEvent.bind(this));
  }

  handleConsentEvent() {
    console.log(`CLICK ${Date.now()}`)
    localStorage.setItem("cookies_accepted", true);
    this.#cookieConsent.remove();
  }


  render(container) {
    container.append(this.#cookieConsent);
  }
}