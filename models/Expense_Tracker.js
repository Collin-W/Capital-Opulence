const {Model , DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

class Expense_Tracker extends Model {}

Expense_Tracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('exspense', 'income', ''),
      allowNull: false,
      defaultValue: '',
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    from_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'expense_tracker'
  }
)

module.exports = Expense_Tracker