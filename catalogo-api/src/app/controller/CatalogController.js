import { validationResult } from 'express-validator'

class CatalogController {

    async getItemCatalog(req, res) {
        let { id, format } = req.query;
        let errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let catalogCollection =  req.db.collection('catalog');
        let projection = {};

        if(format === 'compact') {
            projection = {name:1, price:1, status:1, categories:1}
        }

        let data = await catalogCollection.findOne({id}, {projection});

        if (data === null) {
            return res.status(404).json({ errors: 'item not in catalog'});
        }

        return res.json(data);
    }
}

export default new CatalogController();