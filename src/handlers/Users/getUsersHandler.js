const { UsersControllers } = require('../../controllers');
const { getUsers } = UsersControllers;


const getUsersHandler = async (req, res) => {

    try {

        const users = await getUsers();

        return res.status(200).json({

            status: "success",
            users

        });

    } catch (error) {

        console.error(error.errors[0].message);
        return res.status(500).json({ error: error.message });

    }

};

module.exports = getUsersHandler;
