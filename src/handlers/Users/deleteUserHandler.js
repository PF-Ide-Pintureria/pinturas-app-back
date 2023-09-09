const { UsersControllers } = require('../../controllers');
const { deleteUser } = UsersControllers;

const deleteUserHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUser(id);
        console.log(result);
        return res.status(200).json({ usuario: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = deleteUserHandler;
