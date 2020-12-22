import { HttpService } from '../../util/HttpService';

class VitrineService {
    
    constructor() {

        this._http = new HttpService();
    }

    getVitrine() {
        return this._http
            .get(`${SERVICE_URL}/?maxProducts=16&page=1`)
            .then(dados => dados,
                err => { 
                    throw new 'Sem Itens';
            });
    }
}

export default VitrineService;