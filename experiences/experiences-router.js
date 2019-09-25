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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Experiences.update(changes, id)
    .then(updatedExperience => {
      if (updatedExperience) {
        res.json({
          message: `Successly updated experience with id of ${id}`,
          updatedExperience
        });
      } else {
        res.status(404).json({
          message: 'Could not find experience with given id'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to update experience'
      });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Experiences.remove(id)
    .then(removedExperience => {
  
      if (removedExperience) {
        res.json({
          message: `Successfully removed experience with id of ${id}`,
          removedExperience
        });
      } else {
        res.status(404).json({
          message: 'Could not find experience with given id'
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to delete experience'
      });
    });
});





module.exports = router;