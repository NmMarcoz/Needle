const Request = require ('./Request')
module.exports=(sequelize,DataTypes)=>{
    const Measures = sequelize.define("Measures",
    {
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        typeofMeasure:{
            type: DataTypes.STRING,
            allowNull:false
        },
        measure:{
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        }   
    })
    Measures.associate = (models) =>{
        Measures.belongsTo(models.Request,{
            foreignKey: "requestId",
            constraint:true
        })
        models.Request.hasOne(Measures,{
            foreignKey: "requestId",
            constraint:true
        })
    }
    return Measures

}