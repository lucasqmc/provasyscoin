var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    if(req.query.user == '"syscoin"' && req.query.password == '"meEscolhe"'){
        res.json({mensagem: "Meu nome é Lucas Leite Macedo Maduro. Eu quero essa vaga!"})
    }
    else{
        res.json({mensagem: "Credenciais inválidas"});
    }  
  
});

module.exports = router;