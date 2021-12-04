const User = require('./User')
const Expense_Form = require('./Expense_Form')

//users can have many expense forms 
User.hasMany(Expense_Form, {
  foreignKey: 'user_id'
})

//expense forms can only have one user
Expense_Form.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Expense_Form }