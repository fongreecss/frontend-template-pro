import CookieNotice from "./components/cookie-notice";
import Navigation from "./components/navigation";
import Parallax from "./components/parallax";
import InViewport from './components/inviewport';
import Pikaday from "pikaday";
import OrderForm from "./components/order-form";

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').classList.add('dom-ready');
  document.querySelector('html').classList.remove('no-js');
  //new CookieNotice();
  //new Navigation();
  new Parallax();
  new OrderForm();
  var picker = new Pikaday({ 
    field: document.getElementById('pikaday'),
    format: 'MMM / DD / YYYY',
  });
}, false);