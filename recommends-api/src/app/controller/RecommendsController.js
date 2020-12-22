import axios from 'axios';
import { validationResult } from 'express-validator'
import CatalogController from './CatalogController';

class RecommendsController {

    async getItem(req, res) {
        let { maxProducts = 10, page = 1 } = req.query;  
        let errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        maxProducts = maxProducts < 10 ? 10 : Number(maxProducts);
        page = Number(page);
        let start = (page * maxProducts) - maxProducts;
        let end = start + maxProducts;
        let urls = {
            mostpopular : 'https://wishlist.neemu.com/onsite/impulse-core/ranking/mostpopular.json',
            pricereduction: 'https://wishlist.neemu.com/onsite/impulse-core/ranking/pricereduction.json',
        };
        let slimMostpopular;
        let slimPricereduction; 

        let {data: mostpopular} = await axios.get(urls.mostpopular);
        let {data: pricereduction} = await axios.get(urls.pricereduction);

        slimMostpopular = await CatalogController.getCatalog(mostpopular.slice(start, end));
        slimPricereduction = await CatalogController.getCatalog(pricereduction.slice(start, end))

        let result = { 
            mostpopular: {
                data: slimMostpopular,
                sizePage: slimMostpopular.length, 
                totalPages: Math.round(mostpopular.length / maxProducts), 
                pageNumber: page,
                length: mostpopular.length
            }, 
            pricereduction: {
                data: slimPricereduction,
                sizePage: slimPricereduction.length, 
                totalPages: Math.round(pricereduction.length / maxProducts), 
                pageNumber: page,
                length: pricereduction.length
            }, 
        };

        return res.status(200).json(result);
    }
}

export default new RecommendsController();