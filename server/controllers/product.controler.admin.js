var db =require('../database_mysql')
const bcrypt = require("bcrypt")

var getALL=function(req,res){
    db.query("SELECT * FROM restaurant ",(err,result)=>{
    err?res.status(500).send(err):res.status(200).send(result)
    })
}

var signUp = function(req,res){
    db.query(`SELECT * From restaurent where name = "${req.body.name}" `,(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else if(result.length === 0) {
            if(req.body.password.length>8 &&req.body.password.length<25 && req.body.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/)){
                const salt =   bcrypt.genSaltSync()
                const hashedPaswword =  bcrypt.hashSync(req.body.password, salt)
                db.query(`INSERT INTO restaurent (name,password,picture) Values ("${req.body.name}","${req.body.password},"${req.body.picture}"")`,(err,result)=>{
                    if(err){
                        throw err
                    }else{
                        res.send("1 user inserted")
                    }
                })
            }else{
                alert("please enter a strong password")
            }
        }
    }
)}


var login =(req,res)=>{
    db.query(`SELECT * FROM user WHERE name = '${req.body.loginName}';`,(err,result)=>{
        if(err){
            throw err
        }else{
            var pass = result[0]
            if(bcrypt.compareSync(req.body.loginPassword,pass.password)){
                res.send(result)
            }else{
                res.send('incorrect')
            }
        }
    })
}


module.exports={getALL,signUp,login}
