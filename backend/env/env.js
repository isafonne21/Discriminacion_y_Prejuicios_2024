const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'b93tris7fcfsiboxkjqw-mysql.services.clever-cloud.com',
    user: 'umvg3jl4lurzpzwp',
    password: '4U1jDub0EjC2KVZt0wyg',
    database: 'b93tris7fcfsiboxkjqw',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;