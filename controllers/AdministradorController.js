'use strict';
const uuidv4 = require('uuid/v4');
var bCrypt = require('bcrypt-node');
class AdministradorController {
    signup(req, res) {
        res.render('home', {login: false});
    }
    signin(req, res) {
        res.render('login',{login: false});
    }
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/registro');
    }
    
    logout(req, res) {
        req.session.destroy(function (err) {
            res.redirect('/registro');
        });
    }
}
module.exports = AdministradorController;