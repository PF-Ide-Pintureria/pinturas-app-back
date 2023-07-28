const { MailControllers } = require("../../controllers");
const { sendContactEmail } = MailControllers;


const sendContactEmailHandler = async (req, res) => {

    const { name, message, replyTo } = req.body;
    if (!name || !message || !replyTo) return res.status(400).json({
        message: "Missing required fields"
    });

    try {

        const { message: messageSent } = await
            sendContactEmail({ name, message, replyTo });
        return res.status(200).json({ message: messageSent });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

};


module.exports = sendContactEmailHandler;
