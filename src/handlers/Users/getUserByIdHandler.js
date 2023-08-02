const { UsersControllers } = require('../../controllers');
const { getUserById } = UsersControllers;

const getUserByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getUserById(id);
        return res.status(200).json({ usuario: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = getUserByIdHandler;
