module.exports = (sequelize, DataTypes) => {
  const BigWork = sequelize.define("BigWork", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return BigWork;
};
