const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const ctrl = require('./controller');
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const checkForSession = require('./middleware/checkForSession')
require('dotenv').config()

var currentDay=1

const {
    SERVER_PORT,
    SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession)

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    done(null, profile)
}))

passport.serializeUser(function (profile, done) {
    done(null, profile)
})
passport.deserializeUser(function (profile, done) {
    done(null, profile)
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `http://192.168.1.81:3000/#/QA/${currentDay}`
}))


app.get('/QA/:id', ctrl.getQuestion)
app.put('/QA/A', ctrl.aVote)
app.put('/QA/B', ctrl.bVote)
app.get('/Result/question/:id', ctrl.resultGetQuestion)
app.get('/Result/percent/:id', ctrl.getPercent)
app.get('/Result/comments/:id', ctrl.getComments)
app.post('/Result/postComment/:id', ctrl.addComment)


const port = SERVER_PORT

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})