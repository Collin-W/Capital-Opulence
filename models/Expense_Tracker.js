const {Model , DataTypes} = require('sequelize')

const sequelize = require('../config/connection')

class Expense_Tracker extends Model {}

Expense_Tracker.init(
  {

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'expense_tracker'
  }
)