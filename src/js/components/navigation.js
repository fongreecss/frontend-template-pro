export default class Navigation {
  constructor() {

    //this.container = document.querySelector('.navigation');
    //this.items = document.getElementById('navigationItems');

    //this.btnToggle = document.getElementById('navigationToggle');
    //this.openClass = 'navigation--open';
    //this.overflowClass = 'overflow-hidden';

    //this.btnToggle.addEventListener('click', this.toggleNavigation.bind(this));

    this.header = document.querySelector('.n-navigation');
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
  toggleNavigation() {
    this.container.classList.toggle(this.openClass);
    document.querySelector('body').classList.toggle(this.overflowClass);
  }
}
