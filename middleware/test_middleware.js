const { Users_Schema } = require("../models/Users_Model")

const test_middleware = async (req, res, next) => {


    try {
        const user_id = req.params.id

        const find_user = await Users_Schema.findById(user_id)

        if (find_user === null) {
            return res.json({ success: false, message: 'Invalid user id!' })
        }

        req.user = find_user
       return  next()

    } catch (err) {

    }


}


module.exports = { test_middleware }