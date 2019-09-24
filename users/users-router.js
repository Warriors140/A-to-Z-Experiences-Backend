const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const restricted = require('../auth/restricted-middleware')


router.post('/register', restricted, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
console.log(user)
  Users.add(user)
    .then(saved => {
    //  const token = generateToken(user)
    console.log(saved)
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json({message: 'could not post new user'});
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // subject in payload
    username: user.username
  };

  const options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;