const { MailControllers } = require("../../controllers");
const { sendRegisterEmail } = MailControllers;


const sendRegisterEmailHandler = async (req, res) => {

    const { id } = req.params;

    const { message } = req.body;

    if (!id || !message) return res.status(400).json({
        message: "Missing required fields"
    });

    try {

        const { message: messageSent } = await
            sendRegisterEmail({ id, message });
        return res.status(200).json({ message: messageSent });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

};


module.exports = sendRegisterEmailHandler;
