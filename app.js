//Importar variable mongoose
let mongoose = require("mongoose")

//Conectarse con la DB
mongoose.connect('mongodb://127.0.0.1:27017/Proyecto-web-eq4')
    .then(console.log('db connected'))
    .catch(err => console.log(err))

let Ejercicio = require ("./models/Ejercicio")
