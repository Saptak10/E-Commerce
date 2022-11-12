const mongoose = require('mongoose')

const dbConnection = () => {
    
    const DB_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/ebuyworld';

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error".red.bold));
    db.once("open", () => {
        console.log(`MongoDB connected at ${db.host}`.magenta.bold);
    });
}

module.exports = dbConnection