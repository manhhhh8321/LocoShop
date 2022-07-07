const mongoose = require('mongoose');

const conn = async () => {
        mongoose.connect('mongodb://localhost:27017/locoshop', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true ,
    });
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
}

module.exports = conn;