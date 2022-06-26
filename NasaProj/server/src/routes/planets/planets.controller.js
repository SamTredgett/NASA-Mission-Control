const planets = require('../../models/planets.model');
// import {planets} from '../../models/planets.model';
function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets
}