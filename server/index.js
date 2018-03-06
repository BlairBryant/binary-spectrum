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
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(bodyParser.json());
app.use(cors())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
    db.findUser([profile.id]).then(user => {
        if(!user[0]) {
            db.createUser([profile.displayName, profile.id])
            .then(userCreated => {
                done(null, userCreated[0].user_id)
            })
        } else {
            done(null, user[0].user_id)
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null, id)
})
passport.deserializeUser((id, done) => {
    app.get('db').findSessionUser([id]).then(user => {
        done(null, user[0])
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `http://192.168.1.81:3000/#/QA`
}))
app.get('/auth/me', (req, res) => {
    if(req.user) {
        res.status(200).send(req.user)
    } else {
        res.status(401).send('You are unauthorized. Log in.')
    }
})

app.get('/QA/usercheck', ctrl.userCheck)
app.get('/QA', ctrl.getQuestion)
app.put('/QA/A', ctrl.aVote)
app.put('/QA/B', ctrl.bVote)
// app.get('/Result/question/:id', ctrl.resultGetQuestion)
// app.get('/Result/percent/:id', ctrl.getPercent)
// app.get('/Result/comments/:id', ctrl.getComments)
// app.post('/Result/postComment/:id', ctrl.addComment)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))