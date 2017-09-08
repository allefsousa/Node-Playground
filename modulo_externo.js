
/**
 * para essa variavel poder ser acessada de um outro arquivo Js 
 * é necessario seguir os padroes do CommonJs 
 */

 // tudo que for exportar para outro script deve ser exportado para que ele receba .
 module.exports = function(){
    var teste = "meu modulo Externo";
    return teste;

 }