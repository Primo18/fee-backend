import CustomRouter from './CustomRouter.js';
import * as rutinaController from '../controllers/rutinaController.js';

class rutinaRouter extends CustomRouter {
    init() {
        this.post('/', ['PUBLIC'], rutinaController.createRutina);
        this.put('/', ['PUBLIC'], rutinaController.editRutina);
        this.get('/', ['PUBLIC'], rutinaController.getData)
    }
}

export default new rutinaRouter().getRouter();