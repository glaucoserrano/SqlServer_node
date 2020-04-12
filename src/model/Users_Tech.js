const { Model,DataTypes } = require("sequelize");

class User_Tech extends Model{
    static init (sequelize){
        super.init({
            id_users: DataTypes.INTEGER,
            id_techs: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

}


module.exports = User_Tech;