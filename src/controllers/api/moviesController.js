const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    create: async function (req,res) {
        try{
            const movie = await Movies.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            })
            
            return res.status(200).json({
                status: 200,
                created: "ok",
                url: "/api/movies",
                data: movie
            })
        } catch (error) {
            error => res.json(error);
        } 
    },
    destroy: async function (req,res) {
        let movieId = req.params.id;
        try{
            await Movies.destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        
            return res.status(200).json({
                status: 200,
                url: "/api/delete/" + movieId,
                deleted: "ok",
                data: "Deleted Movie ID" + movieId
            })
        }catch (error) {
            error => res.json(error);
        } 
    }
}

module.exports = moviesController;