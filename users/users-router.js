const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const authenticated = require('../auth/restricted-middleware')


router.post('/register', authenticated, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;
  Users.add(user)
    .then(saved => {
    const token = generateToken(saved)
    console.log("saved", saved)
      res.status(201).json({
        user,
        token
      });
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
          token,
          user
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
    subjust: user.id, // subject in payload
    username: user.username,
    name: user.name,
    // lastname: user.lastname,
    email: user.email
  };

  const options = {
    expiresIn: '1d'
  };
  const secret = process.env.SECRET || "this is a secret";
  return jwt.sign(payload, secret, options);
}

module.exports = router;