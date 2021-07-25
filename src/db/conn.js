const mongoose = require('mongoose');
const url = `mongodb+srv://rahul:rahul@cluster0.decvt.mongodb.net/students?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection is Successful');
}).catch(() => {
    console.log('No Connection');
});

