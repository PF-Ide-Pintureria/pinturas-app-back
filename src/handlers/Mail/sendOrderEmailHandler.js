const { MailControllers } = require('../../controllers');
const { sendOrderEmail } = MailControllers;

const sendOrderEmailHandler = async (req, res) => {

    const { email, message } = req.body;

    if (!email || !message) return res.status(400).json({
        message: "Missing required fields"
    });

    try {

        const { message: messageSent } = await
            sendOrderEmail({ email, message });
        return res.status(200).json({ message: messageSent });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

};

module.exports = sendOrderEmailHandler;
