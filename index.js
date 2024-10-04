const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 2000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://apathyxdsxd:fgos22819@cluster0.ruxep.mongodb.net/todos', {
        });
        console.log('Mongoose is connected');
        app.listen(PORT, () => {
            console.log('listening on port 2000');
        });
    } catch (e) {
        console.log(e);
    }
}

start();