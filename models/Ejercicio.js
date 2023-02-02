let {Schema,model} = require("mongoose")

let EjerSchema = new Schema ({
    id_ejer: Number,
    nombre_ejer: String,
    musc_ejer: String,
    equipo: String,
    min_img_url: String,
    anim_img_url: String,
    stat_img_url: String,

})

module.exports = model('Ejercicio',EjerSchema)