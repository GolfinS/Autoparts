const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

// Connection MongoDB
mongoose.connect('mongodb+srv://admin:1234@cluster0.dt6pba8.mongodb.net/?retryWrites=true&w=majority')

global.loggedIn = null

// Controllers
const homeController = require('./controllers/homeController')
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const logoutController = require('./controllers/logoutController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')

// Middleware
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use(expressSession({
    secret: "node secret",
    resave: false,
    saveUninitialized: false
}))

// Middleware to set global.loggedIn
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})

app.set('view engine', 'ejs')

// Routes
app.get('/', indexController)
app.get('/home', authMiddleware, homeController)
app.get('/login', redirectIfAuth, loginController)
app.get('/logout', redirectIfAuth, logoutController)
app.get('/register', redirectIfAuth, registerController)

app.post('/user/login', loginUserController)
app.post('/user/register', storeUserController)

app.listen(4000, () => {
    console.log("App listening on port 4000")
})
