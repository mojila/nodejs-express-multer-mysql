/**
 * Created by raven on 10/06/17.
 */
var db = require('../dbconnection')

var upload = {
    insertImage:function (data, callback) {
        return db.query("INSERT INTO gambar (lokasi) VALUES (?)", [data], callback)
    }
}

module.exports = upload