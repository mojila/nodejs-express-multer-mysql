var express = require('express')
var router = express.Router()
var multer = require('multer')
var path = require('path')
var upload = require('../models/upload')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/images')
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

var uploads = multer({ storage: storage }).single('image')

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Upload with multer and store filename into mysql' });
})

router.post('/', function (req, res, next) {
    uploads(req, res, function (err) {
        if(err){
            return res.end('Error Upload file')
        }

        upload.insertImage(req.file.filename, function (err, rows) {
            if(err){
                res.end(err)
            } else {
                res.json(rows)
            }
        })
    })
})

module.exports = router