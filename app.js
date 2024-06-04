const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();

//seteamos el motor de plantillas
app.set('view engine', 'ejs')

//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))
//para procesar datos enviados desde formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//seteamos las varibles de entorno
dotenv.config({path:'./env/.env'})

//para setear las cookies
//app.use(cookieParser)

app.use('/', require('./routes/route'))



app.listen(3000, () => {
    console.log('Hola Mundo');
});


