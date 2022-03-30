var User = require("../models/User");
module.exports.controller = (app) => {
    // get users page
    app.get('/users', (req, res) => {
        res.render('users', { title: 'Users', description: 'This is the description of all the users' });
        var User = require("../models/User");

    })
}
module.exports.controller = (app) => {
    // get all users
    app.get('/users', (req, res) => {
        User.find({}, 'name email', function(error, users) {
            if (error) { console.log(error); }
            res.send(users);
        })
    })
}