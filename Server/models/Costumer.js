module.exports = (sequelize, DataTypes)=>{
    const Costumer = sequelize.define("costumer",{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type: DataTypes.STRING,
            allowNull:false
        },
    })

    return Costumer
}