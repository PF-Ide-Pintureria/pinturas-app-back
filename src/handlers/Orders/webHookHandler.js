


const webHookHandler = async (req, res) => {

    const query = req.query;

    console.log('query', query);

    return res.status(200).json({});

};


module.exports = webHookHandler;
