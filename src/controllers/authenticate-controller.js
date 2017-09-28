var connection = require('../../config');
var bcrypt = require('bcrypt');

module.exports.authenticate=function(req, res){
    var email=req.body.email;
    var password=req.body.password;

    connection.query('SELECT * FROM cr_user WHERE u_email = ?',[email], function (error, results, fields){
        if(error){
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length > 0){
                bcrypt.compare(password, results[0].u_password, function(err, ress){
                    if(!ress){
                        res.json({
                            status:false,
                            message:"Email and password does not match"
                        })
                    }else{
                        res.json({
                            status:true,
                            message:"Successfully Login"
                        })
                    }
                });
            }
            else{
                res.json({
                    status:false,
                    message:"Email does not exists"
                });
            }
        }
    });
}