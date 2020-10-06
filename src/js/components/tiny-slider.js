/**
 *
 */
import { tns } from "tiny-slider/src/tiny-slider";
export default class TinySlider {
  constructor() {
    document.querySelectorAll(".tns-slider").forEach(el => {
      var slides = el.dataset.tnsSlides ? el.dataset.tnsSlides * 1 : 1;
      var autoplaySlides = el.hasAttribute('data-autoplay') ? true : false;
      var loopSlides = el.hasAttribute('data-loop') ? true : false;
      var autoWidthSlide = el.hasAttribute('data-auto-width') ? true : false;
      console.log(slides);
      tns({
        container: ".tns-slider",
        autoplay: autoplaySlides,
        autoWidth: autoWidthSlide,
        items: slides,
        lazyload: true,
        controls: false,
        autoplayButton: false,
        nav: false,
        loop: loopSlides,
      });
    });
  }
}
