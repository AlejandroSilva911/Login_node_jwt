const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//Router para las vistas

router.get('/', (req, res)=>{
    
    res.render('index')
})

router.get('/login', (req, res)=>{
    res.render('login', {alert:false})
})

router.get('/register', (req, res)=>{
    res.render('register')
})

router.get('/upLoad',(req, res)=>{
    res.render('upLoad')
} )

//Router para los cotroller
router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/upLoad', authController.login)

module.exports = router

