const { DataTypes } = require("sequelize");
const sequelize = require("../util/db");

const Charity = sequelize.define("charity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mission: {
    type: DataTypes.TEXT,
  },
  goals: {
    type: DataTypes.TEXT,
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Charity;
