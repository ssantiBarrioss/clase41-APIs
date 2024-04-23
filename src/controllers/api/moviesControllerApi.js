const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const {validationResult} = require('express-validator')

const moviesController = {
    create: async (req,res) =>{
        const errors = validationResult(req)

        try {
            if(errors.isEmpty()){

            const movie= await db.Movie.create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            res.status(200).json({
                meta:{
                    status:200,
                    total: movie.length,
                    url: "api/movies/create"
                },
                data: movie
            })
        }else{
            const errorsMapped = errors.mapped()
            const errorsJson = JSON.stringify(errorsMapped)
            throw new Error (errorsJson)
        }
        } catch (error) {
            res.status(400).send(error.message)
        }
        
                
        
    },

    destroy: async (req,res) =>{
        try {
            let movieId = req.params.id;
            const movie = await db.Movie.destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
           res.status(200).json({
                meta:{
                    status:200,
                    total: movie.length,
                    url: "/api/movies/delete/:id"
                },
                data:{
                    movie: movieId,
                    delete: 'Ok'
                }
            })
        } catch (error) {
            res.status(400).send(error.message)
        }
        
    }
}
module.exports = moviesController;