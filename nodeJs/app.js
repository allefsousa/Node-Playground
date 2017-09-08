console.log("Ola, Node Js"); // mensagem de console

// pegando Http para tratar eventos
var http = require('http');






// função para criar o server 
var server = http.createServer(function(req,res){
    var pagina = req.url;// pegando a url recebida 
});
//iniciando o server na porta 8000
server.listen(8000);
console.log("localHost: 8000");
