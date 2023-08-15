const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = db