import { Router } from 'express';
import { query } from 'express-validator';
import CatalogController from './app/controller/CatalogController';

const routes = Router();

const validations = [
    query('id').not().isEmpty().withMessage("The field cannot be empty"),
    query('format').custom((value, {req}) => {
        let status = false;
        if(value === '' || value === 'compact' || value === 'complete' || value === undefined) status = true;
        
        return status;
    }).withMessage("options format is compact, complete or remove option, for option complete default.")
];

routes.get('/find', validations, CatalogController.getItemCatalog);

export default routes;