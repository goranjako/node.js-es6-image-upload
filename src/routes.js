
import express from 'express';
import upload from './controllers/upload.controler';
import galleryController from './controllers/gallery.controller';

   //  Allow form-data parsing
   
    

export default function setRoutes(app) {
    const router = express.Router();
    
    router.route('/gallery').post(upload.single('image'),galleryController.create);
    router.route('/gallery').get(galleryController.getAll);
    router.route('/gallery/:id').get(galleryController.get);
    router.route('/gallery/:id').put(galleryController.put);
    router.route('/gallery/:id').delete(galleryController.delete);

app.use('/', router);
}