import Gallery from "../models/gallery";

class GalleryController {

    // Get all
    async getAll(req, res) {
        try {
            const docs = await Gallery.find({}).sort({"created":-1});
            return res.status(200).json(docs);
        }
        catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
    // Insert
    async create(req, res) {
        try {
            const image = new Gallery({
                image:'http://localhost:3000/uploads/' + req.file.filename,
               // imageurl: req.body.imageurl,
               imagetitle:req.body.imagetitle,
               imagedesc:req.body.imagedesc
            })
            const obj = await Gallery(image).save();
            return res.json(obj);
        } catch (err) {
            return res.status(400).json({success: false, msg: 'image already use'});
        }
    }
    // Get by id
    async get(req, res) {
        try {
            const obj = await Gallery.findById({ _id: req.params.id });
            if (obj)
                return res.status(200).json(obj);
            else { return res.status(404).json({ error: 'image not found' }) };
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
    // Update by id
    async put(req, res) {
        try {
            const image = await Gallery.findById(req.params.id).exec();
            image.set(req.body);
            const result = await image.save();
            return res.json({ success: true, msg: ' Image is Update successfully.' });
        }
        catch (err) {
            return res.status(404).json({ success: false, msg: 'Image does not exist!' });
        }
    }
    // Delete by id
    async delete(req, res) {
        try {
            await Gallery.deleteOne({ _id: req.params.id }).exec();
            return res.json({ success: true, msg: ' Image is Deleted successfully.' });
        }
        catch (err) {
            return res.status(400).json({ success: false, msg: 'Image does not exist!' });
        }
    }
}

export default new GalleryController; 