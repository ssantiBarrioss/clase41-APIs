const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list':async (req, res) => {
    try {
      const genres = await db.Genre.findAll()
        
            res.status(200).json({
                meta:{
                    status:200,
                    total: genres.length,
                    url: "api/genres"
                },
                data: genres
           
           })
    } catch (error) {
        res.status(400).send(error.messasge)
    }
        
    },
    'detail': async(req, res) => {
        const id = parseInt(req.params.id)
        const genre = await db.Genre.findByPk(id)
        res.status(200).json({
            meta:{
                status:200,
                total: genre.length,
                url:"api/genres/detail/:id"
            },
            data: genre
        })
    }

}

module.exports = genresController;