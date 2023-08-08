const { UsersControllers } = require('../../controllers');
const { putUser } = UsersControllers;

const putUserHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await putUser(id, req.body);
        return res.status(200).json({ usuario: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = putUserHandler;
