const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Experiences = require('../experiences/experiences-model');

router.get('/', (req, res) => {
  Experiences
    .find()
    .then(experiences => {
      res.json({
        message: "Successful request",
        experiences
      });
    })
    .catch(err => {
      console.log('errr', err)
      res.status(500).json({
        message: 'Failed to get experiences'
      });
    });
});

router.post('/', (req, res) => {
  const experience = req.body;

  Experiences
    .add(experience)
    .then(addedExperience => {
      res.status(201).json({
        message: "Successfully added experience",
        addedExperience
      });
    })
    .catch(err => {
      console.log('err', err)
      res.status(500).json({
        message: 'Failed to create new experience'
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Experiences.findById(id)
    .then(experience => {
      if (experience) {
        res.json({
          message: `Successfully retrieved experience with id of ${id}`,
          experience
        });
      } else {
        res.status(404).json({
          message: 'Could not find experience with given id.'
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to get experience'
      });
    });
});

router.put('/:id',  validateExperienceId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Experiences.update(id, changes)
        .then(experience => {
            res.json({message: `experience ${id} succesfully updated`})
        })
        .catch(err => {
            req.status(500).json({error: 'server error, did not update experience'})
        })
});

router.delete('/:id',  validateExperienceId, (req, res) => {
    const id = req.params.id;
    Experiences.remove(id)
        .then(experience => {
            res.json({message: `successfully deleted experience ${id}`})
        })
        .catch(err => {
            res.status(500).json({error: 'server error, did not delete experience'})
        })
});

//custom middleware

function validateExperienceId(req, res, next) {
    const id = req.params.id;
    Experiences.findById(id)
        .then(experience => {
            if (experience) {
                req.experience = experience;
                next();
            }
            else {
                res.status(400).json({message: 'invalid id'});
            }
        })
        .catch (err => {
            res.status(500).json({error: 'There was an error accessing that experience from the database.'})
        })
};


module.exports = router;