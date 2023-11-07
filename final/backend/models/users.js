const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      // Define associations here if needed.
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING, // You should handle password encryption here
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
