const express = require('express');
const app = express();

app.listen(3000, function() {
        console.log(`Servidor rodando na porta 3000`);

});

app.post('/upload',function(req, res) {
    alert('foi');
    var image = res;
    console.log(image);
    var request = req;
    console.log(request);

    return res.status(200);
});