const mongoose = require ('mongoose');
const URL = "mongodb+srv://admin:geo12345@cluster0.z7y85.mongodb.net/test";

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Conexion Exitosa a BD'))
.catch(err => console.log('Tienes un error: ' + err));

module.exports = mongoose;
