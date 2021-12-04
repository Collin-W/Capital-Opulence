const {Model , DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

// create expfrom model
class Expense_Form extends Model {}

Expense_Form.init(
  {
    // define expform id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    // define date
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    // define gain/loss
    gain_loss: {
      type: DataTypes.STRING(),
      allowNull: false,
      defaultValue: '',
    },
    // define description
    description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    // define amount
    amount: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    // define relation to user model
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