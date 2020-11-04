export default class GraphInvest {

    constructor() {
        this.header = document.querySelector('#graph-invest');
        if(!this.header) {
            return 0;
        }
        this.itemNr = this.header.dataset.investCarouselItems;
        this.carouselItems = this.header.querySelectorAll('.carousel-item');
        this.startIndex = 2;

        window.setInterval(() => {
            this.showSlide();
        }, 3000);
        
    }

    showSlide(){
        if(this.startIndex > this.itemNr) {
            this.startIndex = 1;
        } 
        //console.log(this.startIndex + ":" + this.itemNr);
        this.carouselItems.forEach( (el) => {
            el.classList.remove('active');
        });
        this.header.querySelector('.carousel-item-' + (this.startIndex++)).classList.add('active');
    }

}