//Express y Router
const express = require('express');
const router = express.Router();
//Mongo
const {MongoClient} = require ('mongodb');
const dbName = 'computadoras'
const coleccion = 'prueba';
const url = 'mongodb://localhost:27017/' + dbName
const client = new MongoClient(url, { useUnifiedTopology: true});
//funciones
async function conectar() {
    await client.connect(function(err){
      if(err){
        console.log('err')
        return
      }
      console.log('Conectado a mongo')
    })
}
//Auto ejecuto la funcion conectar
conectar();

//Ruta de vista por defecto del navegador
router.get('/', async (req, res) => {
    res.render('../index');
  });
  let lista = {
    usuarios: [],
  };
  
router.post('/guardarViaje', (req, res) => {
    let db = client.db(dbName)
    let collection = db.collection(coleccion); 
    collection.insertOne(req.body, function(resultado){
        console.log(resultado)
    })
    
    var miJson = JSON.stringify(req.body)
    //res.send(miJson);
   
    lista.usuarios(miJson);
    res.render("../mirar", usuarios);

  })

  router.get('/delete/:id', async (req, res) => {
    let db = client.db(dbName)
    let collection = db.collection(coleccion); 
    collection.deleteOne(req.body, function(resultado){
      console.log(resultado)
     })
    res.redirect('/');
  });

  module.exports = router;