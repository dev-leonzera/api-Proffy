import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';
import ClassController from './controllers/ClassController';
import ConnectionsController from "./controllers/ConnectionsController";

const classController = new ClassController();
const connectionsController = new ConnectionsController();
const routes = express.Router();



routes.get('', (req, res) => {
    return res.json({message: 'Bem vindo ao Proffy'});
})

routes.post('/classes', classController.create)
routes.get('/classes', classController.index)
//
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)

export default routes;