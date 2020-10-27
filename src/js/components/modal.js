export default class Modal {
  constructor() {
    this.modalTriggerAttributeName = 'data-modal-trigger';
    this.trigger = document.querySelectorAll('[' + this.modalTriggerAttributeName + ']').forEach((el) => {
      this.modalActiveAttributeName = 'data-modal-active';
      this.modalPreventScrollingAttributeName = 'data-modal-prevent-scrolling';

      el.addEventListener('click', (event) => {
        var modal = document.querySelector(el.dataset.modalTrigger);
        this.toggleModal(el, el.dataset.modalTrigger);
      });

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


  closeModal() {
    document.querySelector('html').removeAttribute(this.modalActiveAttributeName);
    document.querySelector('html').removeAttribute(this.modalPreventScrollingAttributeName);
  }

  openModal(triggerButton, sel) {
    document.querySelector('html').setAttribute(this.modalActiveAttributeName, sel);
    if(triggerButton.hasAttribute(this.modalPreventScrollingAttributeName)) {
      document.querySelector('html').setAttribute(this.modalPreventScrollingAttributeName, sel);
    }
    
  }

  toggleModal(triggerButton, sel) {
    var isModalOpened = document.querySelector('html').hasAttribute('data-modal-active');
    if (isModalOpened) {
      var openedModal = document.querySelector('html').dataset.modalActive;
      var openedModalElement = document.querySelector(openedModal);
      var openedModalTrigger = document.querySelector('[data-modal-trigger="' + openedModal + '"]');
      //close modal if the same modal is already opened
      if (sel == openedModal) {
        this.closeModal();
      } else {
        this.openModal(triggerButton, sel);
      }
    } else {
      this.openModal(triggerButton, sel);
    }
  }
}
