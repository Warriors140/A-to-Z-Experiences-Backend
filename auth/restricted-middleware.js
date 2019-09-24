const Users = require('../users/users-model')

module.exports = (req, res, next) => {
    
    const user = req.body;

        if(!user.username) {
            res.status(400).json({message: 'Please add username'})
            return 
        }

        if(!user.password) {
            res.status(400).json({message: 'Password required'})
            return
        }

        if(!user.firstname) {
            res.status(400).json({message: 'Please add first name'})
            return
        }

        if(!user.lastname) {
            res.status(400).json({message: 'Please add last name'})
            return
        }

        if(!user.email) {
            res.status(400).json({message: 'Email required'})
            return
        }
}    
