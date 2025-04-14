const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/conecta_mongo')
//Se quiser usar o atlas(mongo online),instalar dependencia abaixo
//npm install mongoose dotenv
//Usar a seguinte conexão
//MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});