


const webHookHandler = async (req, res) => {

    const query = req.query;

    console.log('query', query);

    console.log('body', req.body);

    return res.status(200).json({});

};


module.exports = webHookHandler;
