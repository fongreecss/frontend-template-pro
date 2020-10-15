/**
 *
 */
import { tns } from "tiny-slider/src/tiny-slider";
export default class TinySlider {

  addClassName(slider, sel, info) {
     var sel1= '[id*="-item' + info.index + '"]';
      var sel2 = sel + " " + sel1;
      var sel3 = sel + " " + '[id*="-item"]';
      document.querySelectorAll(sel3).forEach(el => {
        el.classList.remove('tns-s-active');
      });
      document.querySelector(sel2).classList.add('tns-s-active');
  }

  constructor() {
    window.tnsSliders = [];
    document.querySelectorAll(".tns-slider").forEach(el => {
      
      var sel= typeof(el.id) == "undefined" ? ".tns-slider" : "#" + el.id; 
      var sliderId = typeof(el.id) == "undefined" ? "" :  el.id; 
      var tnsSpeed = el.hasAttribute('data-tns-speed') ? +el.dataset.sliderSpeed : 300;
      var slides = el.dataset.tnsSlides ? el.dataset.tnsSlides * 1 : 1;
      var tnsAutoplay = el.hasAttribute('data-tns-autoplay') ? true : false;
      var tnsLoop = el.hasAttribute('data-tns-loop') ? true : false;
      var tnsAutowidth = el.hasAttribute('data-tns-autowidth') ? true : false;
      var tnsHasControls = el.hasAttribute('data-tns-controls') ? true : false;
      var tnsMouseDrag = el.hasAttribute('data-tns-mouse-drag') ? true : false;
      var tnsPrevButton = el.dataset.tnsPrevButton ? document.querySelector(el.dataset.tnsPrevButton) : document.querySelector(sel + " .tns-prev-button");
      var tnsNextButton = el.dataset.tnsNextButton ? document.querySelector(el.dataset.tnsNextButton) : document.querySelector(sel + " .tns-next-button");
      
      var options = {
        container: sel,
        autoplay: tnsAutoplay,
        autoWidth: tnsAutowidth,
        swipeAngle : false,
        lazyload: true,
        mouseDrag: tnsMouseDrag,
        controls: tnsHasControls,
        autoplayButton: true,
        prevButton : tnsPrevButton,
        nextButton: tnsNextButton,
        nav: false,
        loop: tnsLoop,
        speed: tnsSpeed,
        onInit : (info) => {
          this.addClassName(this, sel, info);
        },
      }
      var temp = tns(options);
      temp.events.on("indexChanged", (info, eventName) => {
        this.addClassName(temp, sel, info);
      });
      
      
      
    if(sliderId) {
        window.tnsSliders[sliderId] = temp;
      }
    });
  }
}
