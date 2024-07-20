const { Users_Schema } = require("../models/Users_Model")

const response_controller = async (req, res) => {

    try {
        
        
            
            
            const user = req.user

      return  res.json({success:true, data:user})
        
    } catch (error) {
        
    }

    
}


module.exports = {response_controller}