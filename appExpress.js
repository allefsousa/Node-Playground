
/**
 * mesmo conteudo feito no arquivo app.js pore
 * agora utlizando Node Js + Express 
 */
// adicionando o express
var express = require('express');

var app = express();


/**
 * Respondendo Requições com express e node Js
 * 
 */
app.get('/',function(req,res){
    res.send(`
   <!DOCTYPE html>
    <html>
        <head>
            <title>Index | Home</title>
        </head>

        <body>
           <h1>Pagina Homeee!! </h1>
        </body>

    </html>
    
    `);
});

app.get('/contato',function(req,res){
    res.send(`
   <!DOCTYPE html>
    <html>
        <head>
            <title>Contato</title>
        </head>

        <body>
           <h1>Pagina Contato !! </h1>
        </body>

    </html>
`);
});

//  Informando a porta que o servidor local vai rodar e uma função de callback

app.listen(8000,function(){
    console.log("localHost: 8000");
})



