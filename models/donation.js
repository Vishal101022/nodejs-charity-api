const { DataTypes } = require("sequelize");
const sequelize = require("../util/db");
const user = require("./user");

const Donation = sequelize.define(
  "donation",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: "id",
      },
      onDelete: "CASCADE",
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

user.hasMany(Donation, { foreignKey: "userId", onDelete: "CASCADE" });
Donation.belongsTo(user, { foreignKey: "userId", onDelete: "CASCADE" });

module.exports = Donation;
