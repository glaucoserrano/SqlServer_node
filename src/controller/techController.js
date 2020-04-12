const Tech = require('../model/Tech');
const User = require('../model/User');
const User_Tech = require('../model/Users_Tech');

module.exports = {
    async index(req,res){
        const {user_id} = req.params;
        const user = await User.findByPk(user_id,{
            include: { association:'techs' }
            });

        return res.json(user.techs);
    },

    async store(req,res) {
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: "User not found"});
        }

        const [ tech ] = await Tech.findOrCreate({
            where : { name }
        });

        await user.addTechs(tech);

        return res.json(tech);
    },
    async delete(req,res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: "User not found"});
        }
        const tech = await Tech.findOne({
            where : { name }
        });

        await user.removeTechs(tech);

        return res.json();
    }
};