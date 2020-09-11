const express = require('express');
const app = express();

app.listen(3000, function() {
        console.log(`Servidor rodando na porta 3000`);

});

app.post('/upload',function(req, res) {
    console.log(res);
    return res.status(200);
});