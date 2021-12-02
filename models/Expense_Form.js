const {Model , DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

class Expense_Form extends Model {}

Expense_Form.init(
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
    gain_loss: {
      type: DataTypes.STRING(),
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
    user_id: {
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

module.exports = Expense_Form