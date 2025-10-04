const Router = require('express').Router();
const { getAllUsers } = require('../controllers/UserController');

Router.get('/getAllUsers', getAllUsers);

module.exports = Router;