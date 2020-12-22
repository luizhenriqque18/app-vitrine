import VitrineService from '../domain/Vitrine/VitrineService';

class Carousel {
    constructor() {
        this._service = new VitrineService();
        this.getGG();
    }

    async getGG() {
       let data = await this._service.getVitrine();
       this.renderHTML(data);
    }

    async renderHTML(data) {
        let {mostpopular, pricereduction} =  data;   

        let anexo = document.querySelector('#imagGH');

        let img = document.createElement('img');
        img.setAttribute('src', mostpopular.data[0].images.default);
        img.setAttribute('width', 200);
        img.setAttribute('height', 200);

        anexo.appendChild(img);
    }
}

export default Carousel;