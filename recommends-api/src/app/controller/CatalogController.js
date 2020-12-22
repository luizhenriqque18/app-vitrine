import axios from "axios";

class CatalogController {

    async getCatalog(data = []) {
        let request = data.map(({recommendedProduct}) => axios.get(`http://localhost:3000/find/?id=${recommendedProduct.id}`));         
        let result = [];

        result = await Promise.allSettled(request).then(values => {
            return values
            .filter(({status})=> status !== 'rejected')
            .map(({status, value}) => value.data );            
        });

        return result;
    }
}

export default new CatalogController();