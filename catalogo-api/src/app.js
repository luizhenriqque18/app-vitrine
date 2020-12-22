import express from 'express';
import routes from './routes';
import cors from 'cors';
import { MongoClient } from 'mongodb';

export default class App {
    /*constructor(){
        this.server = express();
        this.middlewares()
        this.routes();
        this.database();
    }*/

    static async init(){
        this.app = express();
        this.server = this.app;
    }

    static async startDependencies() {
        const db = await this.database();
        this.server.use((req, res, next) => {
            req.db = db;
            next();
        });
        this.routes();
        this.middlewares();
    }

    static async startServer() {
        try{
            this.server.listen(3000);
            console.log("running on port 3000")
        }catch(error) {
            console.log('Error init server', error);
        }
    }

    static routes(){
        this.app.use(routes)
    }

    static middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    /*routes(){
        this.server.use(routes)
    }

    middlewares(){
        this.server.use(cors())
        this.server.use(express.json())
    }*/

    static async database() {
        
        const uri = "mongodb://localhost:27017";
        let data; 
        try {
            data = await MongoClient.connect(uri, {
                useUnifiedTopology: true 
            });
            console.log("running mongodb")
        }catch(error) {
            console.error(error);
            process.exit(1);
        }
        
        return data.db('linx');
        /*.then(client => {
            console.log('Connected to Database');
            db = client.db('linx');
            
            const catalogCollection = db.collection('catalog');
            catalogCollection.find()
            .toArray().then(e => {
                console.log(e);
            });
            console.log(data);
        })
        .catch(error => console.error(error)) */
    }
}