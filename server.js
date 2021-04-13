const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// connect to mongoose when starting the app
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza/pizza-hunt', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Use this to log mongo queries being executed

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
