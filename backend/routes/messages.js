const { Router } = require('express'); // solo requiero el metodo Router, no todo express
const router = Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

router.post('/', async (req, res) => {
    const { name, surname, email, phone, query } = req.body; // extraigo los elementos del request body (solo texto)
    const newMessage = new Message({ name, surname, email, phone, query });
    await newMessage.save();
    res.json({ message: 'message Saved' });
});

// aca le paso /:id (del message que quiero borrar) en la url
router.delete('/:id', async (req, res) => {
    const message = await Message.findByIdAndDelete(req.params.id);
    res.json({ message: 'message Deleted' });
});

module.exports = router;