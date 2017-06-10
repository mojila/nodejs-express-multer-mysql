/**
 * Created by raven on 10/06/17.
 */
var mysql = require('mysql')

var conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'departemen'
})

module.exports = conn