# EncurtadorURL  
Sistema básico para a partir de uma url grande gerar uma url curta, para facilitar o uso.

O sistema foi feito usando o nodejs no back-end, mysql como banco de dados, e html,css e javascript no fron-end. Foi usado o Linux Mint para desevolvimento da aplicação. A pasta base do projeto e shortUrl.

1º Antes de tudo o nodejs deve ser instalado na máquina.
- sudo apt-get install nodejs npm => para instalar no Debian e derivados

2ª Crie um novo projeto nodejs, com o comando abaixo. na pasta base do projeto.
- npm init
         
3ª Os seguintes pacotes adicionais para o nodejs foram usados, express, sequelize e o handlebars
- express => para facilitar e simplificar a criação de um servidor web
- sequelize => para acesso ao banco de dados e realização de consultas
- handlebars => para criação de templates para o html
- Para instalar os pacotes rode o comandos abaixo, dentro da pasta aonde o projeto está
- npm install express
- npm install sequelize
- npm install express-handlebars

4ª Instalando a dependencia do mysql para o nodejs.
- npm install mysql2

5ª Rode o comando abaixo, para iniciar o servidor no localhost na porta 3030.
- nodejs app.js

6ª Acesse o endereço abaixo no seu navegador.
- http://localhost:3030/login
