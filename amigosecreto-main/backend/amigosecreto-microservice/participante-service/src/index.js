const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes')

const app = express();

app.use(express.json());

app.use(routes);

mongoose.connect('',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*app.get('/:nome', (request, response) => {
    return response.send("Olá Mundo " + `${request.params.nome}`);
});

app.post('/participante',(request , response) =>{
    console.log(request.body);
    const { nome } = request.body;
    return response.json({"mensagem":`Olá mundo $ {nome}`});
});
*/
app.listen(3333);