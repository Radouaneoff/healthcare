const connect = require("../connection/connect")

class Mehtods{
    constructor(){

    }
    auth(req, res){
        const {email ,password} = req.body;
        console.log(email);
        res.send({auth:true});
        
    }

}
module.exports = new Mehtods();