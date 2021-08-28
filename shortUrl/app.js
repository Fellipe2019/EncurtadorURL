const express = require('express');
const app = express();
const handlebars = require('express-handlebars'); //usando o handlebars como template-egine
//conectando ao banco com o sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('birthdays', 'fellipe', '2021', {
    host: 'localhost',
    dialect: 'mysql'
});
//checando se foi feito com sucesso a conexão
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Falha ao se conectar" + error);
});

//Config
  //Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//rota principal
app.get('/login', function (req, res){
  res.render('login.handlebars');
});

app.post('/menu', function(req, res){
  res.render('menu.handlebars');
})

app.listen(3030);// sempre deve ser a ultima linha do codigo

