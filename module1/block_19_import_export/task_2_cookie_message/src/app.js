import CookieConsent from './components/CookieConsent'

function initApp() {
  // Adding <h1> to index page
  const h1Elem = document.createElement('h1');
  h1Elem.innerText = 'Hello World!';
  document.body.append(h1Elem);

  // Checking if cookies are accepted, if not render CookieConsent block;
  const cookiesAccepted = localStorage.getItem("cookies_accepted") || false;
  if (!cookiesAccepted) {
    new CookieConsent().render(document.body);
  }
}

export default initApp;
