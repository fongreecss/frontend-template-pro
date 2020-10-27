import CookieNotice from "./components/cookie-notice";
import Navigation from "./components/navigation";
import Parallax from "./components/parallax";
import InViewport from './components/inviewport';
import Pikaday from "pikaday";
import OrderForm from "./components/order-form";
import TinySlider from "./components/tiny-slider";
import Modal from './components/modal';
import Odometer from "odometer";
import VhShill from "./vh-shill";

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
  var picker = new Pikaday({ 
    field: document.getElementById('pikaday'),
    format: 'MMM / DD / YYYY',
  });

  window.odometerOptions = {
    auto: false, // Don't automatically initialize everything with class 'odometer'
    selector: '.js-odometer', // Change the selector used to automatically find things to be animated
    duration: 3000, // Change how long the javascript expects the CSS animation to take
    animation: 'count' // Count is a simpler animation method which just increments the value,
  };

  document.querySelectorAll('.js-odometer').forEach( (element)=> {
    new Odometer({
      el : element
    });
  });

  

  document.querySelectorAll('a[href="#"]').forEach((el) => {
      el.addEventListener('click', (event) => {
        alert("comming soon");
        event.stopPropagation();
        event.preventDefault();
        
        
      });
  });
}, false);