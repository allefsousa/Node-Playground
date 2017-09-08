console.log("Ola, Node Js"); // mensagem de console

// pegando Http para tratar eventos
var http = require('http');


// função para criar o server 
var server = http.createServer(function(req,res){
    var pagina = req.url;// pegando a url recebida 
    console.log(pagina); // mostrando no log a requisição recebida na Url

    // exibindo uma pagina conforme a requisição na Url do navegador
    if(pagina == '/contato'){
        res.end(`
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

    }else if(pagina == "/home" || pagina == "/index"){
         // Criando uma pagina 
        res.end(`
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
    }else{
        res.end(`
   <!DOCTYPE html>
    <html>
        <head>
            <title>Pagina Qualquer</title>
        </head>

        <body>
           <h1>Erro 404 Not Found </h1>
        </body>

    </html>
    
    `)
    }





});


//iniciando o server na porta 8000
// para o server ctrl + c
console.log("localHost: 8000");
server.listen(8000);
