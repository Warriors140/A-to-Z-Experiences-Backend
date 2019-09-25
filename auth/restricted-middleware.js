const Users = require('../users/users-model')

module.exports = (req, res, next) => {
    const user = req.body;

        if (!user.username) {
            res.status(400).json({message: 'Please add username'})
            return 
        } else if (!user.password) {
            res.status(400).json({message: 'Password required'})
            return
        } else if (!user.name) {
            res.status(400).json({message: 'Please add first and last name'})
            return
        } else if (!user.email) {
            res.status(400).json({message: 'Email required'})
            return
        } else {
            next();
        }

}    
