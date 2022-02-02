const db = require('../../database/models');
const sequelize = db.sequelize;

const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const actorsController = {
    'list': async (req, res) => {
        const actors = await Actors.findAll()
            res.json({
                status: 200,
                total: actors.length,
                url: "api/actors",
                data: actors
            })
    },
    'detail': async (req, res) => {
        actorId = req.params.id;
        const actor = await Actors.findByPk(actorId)
        res.json({
            status: 200,
            url: "api/actor/detail/" + actorId,
            data: actor
        });
    }

}

module.exports = actorsController;