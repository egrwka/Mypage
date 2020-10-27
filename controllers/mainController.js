const Person = require('../models/person');

exports.fetchPersonData = (req, res) => {
    res.render('index.ejs');
}