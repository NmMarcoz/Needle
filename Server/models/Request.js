const Costumer = require('./Costumer')

module.exports = (sequelize, DataTypes) =>{
    const Request = sequelize.define("Request", {
        requestName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        requestDescription:{
            type:DataTypes.STRING,
            allowNull:true
        },
        requestValue:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:true,
            defaultValue: 0
        },
        requestDeadline:{
            type:DataTypes.DATE
        }
    }) 
    Request.associate = (models) =>{
        Request.belongsTo(models.Costumer,{
            foreignKey: "costumerId",
            constraint: true
        })
        models.Costumer.hasMany(Request,{
            foreignKey: "costumerId",
            constraint: true
        })

    }

    return Request
}