const { Op }  = require('sequelize');
const User = require('../model/User');

module.exports = {
    async Show(req,res){
        //encontrar usuarios que tenha email =@gmail.com;
        //encotrar q morem na rua Joao Dal Medico;
        //Mostrar tecnologias c#;

        const users = await User.findAll({
            attributes :['name','email'],
            where:{
                email:{
                    [Op.like]: '%@gmail.com'
                }
            },
            include:[
                { association: 'addresses', where:{street:'Rua Joao dal Medico' } },
                {
                    association: 'techs',
                    required:false,
                    where:{
                        name:{[Op.like]: '%#'}
                    }
                },
            ]
        });

        return res.json(users);
    }
};