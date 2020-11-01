/**
 *
 */
import { tns } from "tiny-slider/src/tiny-slider";
export default class TinySlider {

  addClassName(slider, sel, info) {
      var sel1= '.tns-item:nth-child(' + (info.index + 1) + ')';
      var sel2 = sel + " " + sel1;
      var sel3 = sel + " " + '.tns-item';
      try {
        document.querySelectorAll(sel3).forEach(el => {
          el.classList.remove('tns-s-active');
        });
        document.querySelector(sel2).classList.add('tns-s-active');
      } catch(err) {

      }
      
  }

  setActiveElementConnectedList(slider, index) {
      var listItems;
      if(!(this.connectedMenu && (listItems = document.querySelectorAll(this.connectedMenu + '>*')))) {
        return false;
      }
      
      listItems.forEach((item, ind) => {
          item.classList.remove('active');
          if(index == ind) {
            item.classList.add('active');
          } 
      });
  }

  buttonOnClick(slider) {
    var listItems;
    if(!(this.connectedMenu && (listItems = document.querySelectorAll(this.connectedMenu + '>*')))) {
      return false;
    }
   
    listItems.forEach((item, ind) => {
      item.addEventListener('click', (ev) => {
        slider.goTo(ind);
      });
    });
  }

  constructor() {
      document.querySelectorAll(".tns-slider").forEach(el => {
      
      var sliders= typeof(el.id) == "undefined" ? ".tns-slider" : "#" + el.id; 
      var sel= typeof(el.id) == "undefined" ? ".tns-slider" : "#" + el.id; 
      var sliderId = typeof(el.id) == "undefined" ? "" :  el.id; 
      var tnsSpeed = el.hasAttribute('data-tns-speed') ? +el.dataset.sliderSpeed : 300;
      var tnsItems = el.dataset.tnsItems ? el.dataset.tnsItems * 1 : 1;
      var tnsAutoplay = el.hasAttribute('data-tns-autoplay') ? true : false;
      var tnsLoop = el.hasAttribute('data-tns-loop') ? true : false;
      var tnsAutowidth = el.hasAttribute('data-tns-autowidth') ? true : false;
      var tnsHasControls = el.hasAttribute('data-tns-controls') ? true : false;
      var tnsMouseDrag = el.hasAttribute('data-tns-mouse-drag') ? true : false;
      var tnsPrevButton = el.dataset.tnsPrevButton ? document.querySelector(el.dataset.tnsPrevButton) : document.querySelector(sel + " .tns-prev-button");
      var tnsNextButton = el.dataset.tnsNextButton ? document.querySelector(el.dataset.tnsNextButton) : document.querySelector(sel + " .tns-next-button");
      var tnsAngle = el.hasAttribute('data-tns-angle') ? el.dataset.tnsAngle*1 : false;
      var tnsDisableTouch = el.hasAttribute('data-tns-disable-touch') ? false : true;
      this.connectedMenu = el.dataset.tnsConnectedMenu ? el.dataset.tnsConnectedMenu : "";
      var tnsMode = el.hasAttribute('data-tns-gallery') ? "gallery" : "carousel";
      var options = {
        container: sel,
        mode : tnsMode,
        autoplay: tnsAutoplay,
        autoWidth: tnsAutowidth,
        swipeAngle : tnsAngle,
        lazyload: true,
        mouseDrag: tnsMouseDrag,
        controls: tnsHasControls,
        autoplayButton: true,
        prevButton : tnsPrevButton,
        nextButton: tnsNextButton,
        touch: tnsDisableTouch,
        nav: false,
        loop: tnsLoop,
        speed: tnsSpeed,
        onInit : (info) => {
          this.addClassName(this, sel, info);
          this.setActiveElementConnectedList(temp, info.displayIndex - 1);
        },
      }

      if(tnsItems) {
        options = { ...options, items : tnsItems };
      }
      
      var temp = tns(options);
      temp.events.on("indexChanged", (info, eventName) => {
        this.addClassName(temp, sel, info);
        this.setActiveElementConnectedList(temp, info.displayIndex - 1);
      });

      window.temp = temp;
      this.buttonOnClick(temp);
      
      
      
    if(typeof(el.id) != "undefined") {
        el.tnsSlider = temp;
    }


    });
  }
}
