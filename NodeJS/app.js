//Express //Morgan //Path
const express = require('express');
var path = require('path');
const app = express(), port = 4000;
const indexRoutes = require('./routes/routs');
app.use(express.urlencoded({extended: false}))

app.use(express.static('css'));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, './vista/index'));
app.set('views', path.join(__dirname, './vista/mirar'));
app.use('/', indexRoutes);

//Puerto de escucha
app.listen(port, () => {
    console.log(`Mi app corriendo en el puerto ${port}`)
  })

