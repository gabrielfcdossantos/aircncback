const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors'); 
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://gabriel:gaeldoxx030993@aircnc-d2aha.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PUT, DELETE

// req.query = Acessar query params(Para filtros)
// req.params = Acessar route params(Para edição, delete)
// req.body = Acessar corpo de requisição (para criação, edição)
app.use(cors())
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);


app.listen(3333);