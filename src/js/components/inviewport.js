/**
 * Observes elements with attribute "data-inviewport". As they come into viewport it appends "activeClass" to them and when they are outside of
 * viewport removes it.
 * Default activeClass is set to be .inviewport. You can change it through constructor
 * 
 */
export default class InViewport {
    constructor(activeClass) {
        window.inviewportTriggers = [];
        this.activeClass = ( "string" == typeof activeClass ) ? activeClass : 'js-inviewport';
        
        this.activeElements = document.querySelectorAll("[data-inviewport]");
        window.addEventListener("scroll", this.scrollHandler.bind(this), {
            passive: true
        });
    }

    onlyOnce(ele) {
        return ele.dataset.inviewport == 'once' ? true : false;
    }

    isVisible(ele) {
        const { top, bottom } = ele.getBoundingClientRect();
        const vHeight = (window.innerHeight || document.documentElement.clientHeight);
        const offsetY = ("undefined" !== typeof ele.dataset.inviewportOffsety) ? (parseInt(ele.dataset.inviewportOffsety)/100*vHeight) : 0;

        return (
            (top > 0 || bottom > 0) &&
            (top + offsetY) < vHeight
        );
    }

    scrollHandler() {
        
        this.activeElements.forEach(function(el){
            if(this.isVisible(el)) {
                el.classList.add(this.activeClass);
                if(el.hasAttribute('data-inviewport-trigger') && el.id && ("undefined" == typeof window.inviewportTriggers[el.id])) {
                    window.inviewportTriggers[el.id] = true;
                    window[el.dataset.inviewportTrigger]();
                }
            } else if( !this.onlyOnce(el) ){
                el.classList.remove(this.activeClass);
            }
        }, this);
    }
}
