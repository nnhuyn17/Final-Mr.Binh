// const { Model } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     static associate() {
//       // Define associations here if needed.
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     password: DataTypes.STRING, // You should handle password encryption here
//     role: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
// const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const UsersModel = sequelize.define("account", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATE
    },
    position: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user'
    }
  });

  return UsersModel;
};
