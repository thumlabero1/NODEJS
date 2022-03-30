const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
const User = mongoose.model("User", UserSchema);

const user_resource = new User({
    name: 'John Doe',
    email: 'john@doe.com'
})
user_resource.save((error) => {
    if (error)
        console.log(error);
    res.send({
        success: true,
        code: 200,
        msg: "User added!"
    })
})
User.find({}, 'name email', function(error, users) {
    if (error) { console.error(error); }
    res.send({
        users: users
    })
})
User.findById(1, 'name email', function(error, user) {
    if (error) { console.error(error); }
    res.send(user)
})
User.findById(1, 'name email', function(error, user) {
    if (error) { console.error(error); }
    user.name = 'Peter'
    user.email = 'peter@gmail.com'
    user.save(function(error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true
        })
    })
})
User.findOneAndUpdate({ name: 'Peter' }, { $set: { name: "Sara" } },
    function(err) {
        if (err) {
            console.log(err);
        }
    });
User.findOneAndUpdate({ name: 'Peter' }, { $set: { name: "Sara" } },
    function(err, user) {
        if (err) {
            console.log(err);
        }
        res.send(user);
    });
User.findByIdAndUpdate(1, { $set: { name: "Sara" } }, function(err) {
    if (err) {
        console.log(err);
    }
});
User.remove({
    _id: 1
}, function(err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})
User.findOneAndRemove({
    _id: 1
}, function(err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})
User.findOneAndRemove({
    _id: 1
}, function(err, user) {
    if (err)
        res.send(err)
    res.send({
        success: true,
        user: user
    })
})
User.findByIdAndRemove(1, function(err) {
    if (err)
        res.send(err)
    res.send({
        success: true
    })
})
module.exports = User