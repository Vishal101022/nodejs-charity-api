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
    order_id: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    },
    payment_id: {
      type: DataTypes.STRING,
    },
    projectId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
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
