module.exports=(sequelize,DataTypes)=>{
    const measures = sequelize.define("measures",
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
            type: DataTypes.DECIMAL(11,10),
            allowNull: false
        }   
    })
    return measures

}