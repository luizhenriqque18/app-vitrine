import {Router} from 'express';
import { query } from 'express-validator'
import RecommendsController from './app/controller/RecommendsController';

const routes = Router();

const validations = [
    query('page').optional().not().isEmpty().withMessage("The page is empty, fill in a value or remove the option"),
];

 
routes.get('/', validations, RecommendsController.getItem);


export default routes;