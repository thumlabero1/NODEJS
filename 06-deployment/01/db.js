mongoose.connect(

    process.env.MONGO_URI || 'mongodb://localhost:27017/printshop', { useNewUrlParser: true, useCreateIndex: true }
)
