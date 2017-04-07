const router = require('express').Router()
const db = require('../db')
const Student = db.model('student')
const Campus = db.model('campus')

module.exports = router

router.get('/', (req, res, next) => {
  Student.findAll({
    include: [Campus]
  })
    .then(students => res.json(students))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

router.param('studentId', (req, res, next) => {
  Student.findById(req.params.studentId, {
    include: [Campus]
  })
    .then(student => {
      req.body.student = student
      next()
    })
    .catch(next)
})

router.get('/:studentId', (req, res, next) => {
  if (!req.body.student) res.sendStatus(404)
  res.json(req.body.student)
})

router.put('/:studentId', (req, res, next) => {
  if (!req.body.student) res.sendStatus(404)
  req.body.student.update(req.body)
    .then(student => res.json(student))
    .catch(next)
})

router.delete('/:studentId', (req, res, next) => {
  if (!req.body.student) res.sendStatus(404)
  req.body.student.destroy()
    .then(() => res.sendStatus(204))
    .catch(next)
})
