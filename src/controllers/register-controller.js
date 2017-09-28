var connection = require('../../config');

module.exports.register = function(req, res){
    var today = new Date();
    var users={
        "u_name"        : req.body.name,
        "u_fullname"    : req.body.fullname,
        "u_email"       : req.body.email,
        "u_password"    : req.body.password,
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
}