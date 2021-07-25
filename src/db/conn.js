const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection is Successful');
}).catch(() => {
    console.log('No Connection');
});

