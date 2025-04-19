const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saurabhofficial8840:saurabh@saurabh.my4iaqo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Database connection failed: ', err);
});
