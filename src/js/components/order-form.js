const AS_HANDWRITTEN = "handwritten";
const AS_DIGITAL = "digital";
const FOR_ME = "me";
const FOR_THEM = "them";
const CUSTOM_MESSAGES = [
  "Courage is a vitamin best swallowed with Whisky.",
  "'Wow, I had too much Whisky' — No One",
  "The beauty of these fine spirits cannot match the beauty and depth of the love I feel for you. Let's drink to that!",
  "Courage is a vitamin best swallowed with Whisky.",
];

export default class OrderForm {
  constructor() {
    this.orderFormRadioButton = document.querySelectorAll('input[type="radio"]');
    this.dataFormBlock2  = document.querySelector('[data-form-block="2"]');
    this.dataFormOption1 = document.querySelectorAll('[data-form-option="1"]');
    this.dataFormOption2 = document.querySelectorAll('[data-form-option="2"]');
    this.dataFormOption3 = document.querySelectorAll('[data-form-option="3"]');
    this.dataFormOption4 = document.querySelectorAll('[data-form-option="4"]');
    this.dataFormOption5 = document.querySelectorAll('[data-form-option="5"]')
    this.generateMessageButton = document.querySelector('.generate-message');
    this.customMessageTextarea = document.querySelector('textarea#message');

    if(!this.orderFormRadioButton.length) {
      return;
    }
    this.onRadioButtonClick();
    this.onRadioButtonChange(this.checkedRadioValues());
    this.onGenerateMessage();
  }

  onGenerateMessage() {
    let _this = this;
    this.generateMessageButton.addEventListener('click', (ev) => {
      _this.customMessageTextarea.innerHTML = CUSTOM_MESSAGES[Math.floor(Math.random() * (CUSTOM_MESSAGES.length))];
    }, false);
    
  }

  onRadioButtonClick() {
    var _this = this;
    this.orderFormRadioButton.forEach(radioButton => radioButton.addEventListener('change', function() {
      _this.onRadioButtonChange(_this.checkedRadioValues());
    }));
    
  }

  /**
   * check radio buttons. 
   * @returns {object} 
   */
  checkedRadioValues() {
    let checkedRadioValues = {};
      this.orderFormRadioButton.forEach((node) => {
          checkedRadioValues[node.value] = node.checked ? true : false;
      });
      return checkedRadioValues;
  }

  /**
   * 
   * @param {object} values | object of all radio values.
   */
  onRadioButtonChange(values) {
    if(values.them && values.digital) {
      this.dataFormBlock2.setAttribute('style', 'display:block;');
      this.setInputElements(this.dataFormOption2, true);
      this.setInputElements(this.dataFormOption3, false);
      this.setInputElements(this.dataFormOption1, false);
      this.setInputElements(this.dataFormOption4, true);
      this.setInputElements(this.dataFormOption5, false);
    } else if(values.them && values.handwritten ) {
      this.dataFormBlock2.setAttribute('style', 'display:block;');
      this.setInputElements(this.dataFormOption2, true);
      this.setInputElements(this.dataFormOption3, true);
      this.setInputElements(this.dataFormOption1, false);
      this.setInputElements(this.dataFormOption4, false);
      this.setInputElements(this.dataFormOption5, true);
    } else {
      this.dataFormBlock2.setAttribute('style', 'display:none;');
      this.setInputElements(this.dataFormOption1, true);
      this.setInputElements(this.dataFormOption2, false);
      this.setInputElements(this.dataFormOption3, false);
    }
  }
  /**
   * 
   * @param {*} elements | dom elements
   * @param {*} value | true or false
   */
  setInputElements(elements, value) {
    //value =  "undefined" ==  typeof value ? true : value;
    if(value) {
      elements.forEach(element => {
        element.setAttribute('required', 'required');
        element.classList.remove('hide');
      });
    } else {
      elements.forEach(element => {
        element.removeAttribute('required');
        element.classList.add('hide');
      });
    }
  }

}