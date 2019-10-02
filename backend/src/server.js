const express = require("express");
const routes = require('/routes');

const app = express();

mongoose.connect('mongodb+srv://<teste>:<teste123>@cluster0-hbgnf.mongodb.net/test?retryWrites=true&w=majority'{
    useNewUrlParser: true,
    userUnifiedTopology: true,
})

// visualização da minha aplicação funcionando

/*
Métodos
req.query = acessar query params(para filtros)
req.params = acessar route params(para edição,delete)
req.body = acessar corpo da requisição(para criação, edição)
*/

app.use(express.json());
app.use(routes);

app.listen(3333);