/* ***SERVER ESTÁTICO CON EXPRESS (Módulo Externo)*** */
const express = require(`express`)
const override = require('method-override')
const rutas = require('./src/routes/mainRoutesProducto.js')
const path = require('path')
//const rutasAdmin = require('./src/routes/adminRoutes.js')
const app = express()
const fs = require('fs');
const port = 8080 || process.env.PORT || 3000
const variedades = require('./utilidades/variedades');
app.locals.variedades = variedades;
app.set('view engine', 'ejs')// Motor de vistas que vamos a utilizar
app.set('views', (__dirname + '/src/views'))//donde esta la carpeta quee vamos a utilizar

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended: true}))
app.use(override('_metodo'))

app.use('/', rutas)
//app.use('/admin', rutasAdmin)

app.use((req, res, next) =>{
  res.status(404).send('<script>window.location.href = "error404.html";</script>');
})

app.listen(port, () => console.log(`Hola, estoy arriba en el puerto: ${port}`))
