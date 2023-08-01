const express = require("express");
const cors = require("cors");
const dataService = require("./data-service.js");
const userService = require("./user-service.js");
const app = express();
const jwt = require('jsonwebtoken')
const passport = require("passport");
const passportJWT = require("passport-jwt")
// jwt.sign({
//     username: 'bob'
// }, 'secret', { expiresIn: 60 * 60 })


// JSON Web Token Setup
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

// Configure its options
let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: '5aX80$y&$BeOx*LPwhFy2dh68XWY^Li#aovJSrJi2V',
};

// IMPORTANT - this secret should be a long, unguessable string
// (ideally stored in a "protected storage" area on the web server).
// We suggest that you generate a random 50-character string
// using the following online tool:
// https://lastpass.com/generatepassword.php

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);

    if (jwt_payload) {
        // The following will ensure that all routes using
        // passport.authenticate have a req.user._id, req.user.userName, req.user.fullName & req.user.role values
        // that matches the request payload data
        next(null, {
            _id: jwt_payload._id,
            userName: jwt_payload.userName,
            fullName: jwt_payload.fullName,
            role: jwt_payload.role,
        });
    } else {
        next(null, false);
    }
});

app.use(cors());
app.use(express.json())
// tell passport to use our "strategy"
passport.use(strategy);

// add passport as application-level middleware
app.use(passport.initialize());

const HTTP_PORT = process.env.PORT || 8080;

app.get("/api/vehicles", passport.authenticate('jwt', { session: false }) , (req, res) => {
    dataService.getAllVehicles().then((data) => {
        res.json(data);
    }).catch(() => {
        res.status(500).end();
    });
});

app.post('/api/register', (req, res) => {
    userService.registerUser(req.body).then(data => {
        res.status(200).json({ data: data })
    }).catch(err => {
        res.json({ message: 'error' })
    })
})

app.post('/api/login', (req, res) => {
   

    userService.checkUser(req.body).then((user) => {
        let payload = {
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            role: user.role,
        };
        if (!user) {
            return Promise.reject('Invalid credentials')
        }
        else {

            let token = jwt.sign(payload, jwtOptions.secretOrKey);
            res.status(200).json({user: user, token: token })
        }
    }).catch(err => {
        res.status(401).send({ 'Error': err })
    })
})

app.use((req, res) => {
    res.status(404).end();
});

userService.connect().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log("App listening on: " + HTTP_PORT);
    });
}).catch(err => {
    console.error(err)
    process.exit()
})