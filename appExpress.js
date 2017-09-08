
/**
 * mesmo conteudo feito no arquivo app.js pore
 * agora utlizando Node Js + Express 
 */
// adicionando o express
var express = require('express');

var app = express();

// configurando ao template engine EJS
app.set('view-engine','ejs');


/**
 * Respondendo Requições com express e node Js
 * 
 */
app.get('/',function(req,res){
    // renderizando os templates Engine Ejs que 
    // estao na pasta View -> site -> home
    res.render('site/home.ejs');
});

app.get('/contato',function(req,res){
    // renderizando os templates Engine Ejs que 
    // estao na pasta View -> site -> contato
    res.render('site/contato.ejs');
});

//  Informando a porta que o servidor local vai rodar e uma função de callback

app.listen(8000,function(){
    console.log("localHost: 8000");
})



