const mongoose = require('mongoose')

mongoose.connect(

    process.env.MONGO_URI || 'mongodb+srv://linhlabero:<password>@cluster0.lqbgz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }
)
module.exports = mongoose