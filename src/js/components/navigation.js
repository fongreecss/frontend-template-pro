export default class Navigation {
  constructor() {

    this.header = document.querySelector('.n-navigation-sticky');
    if(!this.header) {
      return;
    }
    this.sticky = this.header.offsetTop;
  
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add("sticky");
      } else {
        this.header.classList.remove("sticky");
      }
    });

    // On resize, close the navigation if open
    /*window.addEventListener('resize', () => {
      if (this.container.classList.contains(this.openClass)) {
        this.toggleNavigation();
      }
    }, {
      passive: true
    });*/
  }

  /**
   * Show navigation on mobile
   */

}
