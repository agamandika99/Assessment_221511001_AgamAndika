const express = require('express');
const routes = express();

routes.use('/mahasiswa', require('./mahasiswaRoutes'));
routes.use('/dosen', require('./dosenRoutes'));
routes.use('/matkul', require('./matkulRoutes'));
routes.use('/jadwalmatkul', require('./jadwalMatkulRoutes'));
routes.use('/kontrak', require('./kontrakMhsRoutes'));
routes.get('/', function(req, res){
    res.send({
        message: "Welcome"
    });
    console.log('Homepage '+'\u001b[' + 32 + 'm' + '(re)loaded' + '\u001b[0m'+' successfully');
});

module.exports = routes;
