import CookieNotice from "./components/cookie-notice";
import Navigation from "./components/navigation";
import Parallax from "./components/parallax";
import InViewport from './components/inviewport';
//import Pikaday from "pikaday";
import OrderForm from "./components/order-form";
import TinySlider from "./components/tiny-slider";
import Modal from './components/modal';
import VhShill from "./vh-shill";
import GraphInvest from './components/graph-invest';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').classList.add('dom-ready');
  document.querySelector('html').classList.remove('no-js');
  //new CookieNotice();
  new VhShill();
  new Navigation();
  new TinySlider();
  new Parallax();
  new OrderForm();
  new InViewport();
  new Modal();
  new GraphInvest();

  document.querySelectorAll('input[type="range"]').forEach( (el) => {
    var startValue = el.value;
    
  });

  document.querySelectorAll('a[href="#"]').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        document.querySelector('html').setAttribute('data-modal-prevent-scrolling', '');
        document.querySelector('html').setAttribute('data-modal-active', '#oder-advisor-form-1');
      });
  });
}, false);