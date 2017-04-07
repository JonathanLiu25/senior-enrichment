const router = require('express').Router()
const db = require('../db')
const Campus = db.model('campus')
const Student = db.model('student')

module.exports = router

router.get('/', (req, res, next) => {
  Campus.findAll({
    include: [Student]
  })
    .then(allCampus => res.json(allCampus))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

router.param('campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, {
    include: [Student]
  })
    .then(campus => {
      req.body.campus = campus
      next()
    })
    .catch(next)
})

router.get('/:campusId', (req, res, next) => {
  if (!req.body.campus) res.sendStatus(404)
  res.json(req.body.campus)
})

router.put('/:campusId', (req, res, next) => {
  if (!req.body.campus) res.sendStatus(404)
  req.body.campus.update(req.body)
    .then(campus => res.json(campus))
    .catch(next)
})

router.delete('/:campusId', (req, res, next) => {
  if (!req.body.campus) res.sendStatus(404)
  req.body.campus.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
