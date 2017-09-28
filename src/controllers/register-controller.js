var connection = require('../../config');
var bcrypt = require('bcrypt');

module.exports.register = function(req, res){
    var today = new Date();

    bcrypt.hash(req.body.password, 10, function(err, hash){
        if(!err){
            var users={
                "u_name"        : req.body.name,
                "u_fullname"    : req.body.fullname,
                "u_email"       : req.body.email,
                "u_password"    : hash,
                "u_preference"  : req.body.preference,
                "u_created_at"  : today
            }

            connection.query('INSERT INTO cr_user SET ?', users, function(error, results, field){
                if (error) {
                    res.json({
                        status:false,
                        message:'there are some error in query'
                    })
                }else{
                    res.json({
                        status:true,
                        data:results,
                        message:'user registered successfully'
                    })
                }
            });
        }else{
            console.log(err)
        }
    });
}