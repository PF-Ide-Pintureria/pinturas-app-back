const { createProductController } = require('../controllers');

const createProductHandler = async (req, res) => {
    try {
        const [product] = await createProductController(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = createProductHandler;
