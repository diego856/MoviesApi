const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
        const genres = await db.Genre.findAll()
            res.json({
                status: 200,
                total: genres.length,
                url: "api/genres",
                data: genres
            })
    },
    'detail': async (req, res) => {
        genreId = req.params.id;
        const genre = await db.Genre.findByPk(genreId)
        res.json({
            status: 200,
            url: "api/genres/detail/" + genreId,
            data: genre
        });
    }

}

module.exports = genresController;