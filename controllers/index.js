//leer todos los modelos creados (users, ..posts, products)
const models = require("../database/models");

//crear operación POST para un usuario nuevo
const createUser = async (req, res) => {
	try{
        //genera una sentencia SQL tipo insert into
        const user = await models.User.create(req.body);
        //código 201 = insertado correctamente
	    return res.status(201).json({user});
	}catch(error){
        //código 500 = error del lado del server
	    return res.status(500).json({error: error.message});
	}
};

//metodo GET (todos) para usuarios
const getAllUsers = async (req, res) => {
    console.log('getting users');
	try{
	    const users = await models.User.findAll({
		    include: [
		    ]
        });
        //código 200 = ejecutado con éxito
	    return res.status(200).json({users});
	}catch(error){
	    return res.status(500).json({error: error.message});
	}
};

module.exports = {
    createUser,
    getAllUsers
};