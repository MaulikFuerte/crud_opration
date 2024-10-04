const Email = require('../Models/email');

const createEmailData = async (req, res) => {
    const { email, password } = req.body;

    try {
        const email = new Email({ email, password });
        await email.save();
        


    } catch (e) {

    }
};

