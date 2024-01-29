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
            type:DataTypes.DECIMAL(11,10),
            allowNull:false
        },
        requestDeadline:{
            type:DataTypes.DATE
        }
    })
    return Request
}