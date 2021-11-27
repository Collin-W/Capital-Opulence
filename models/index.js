const User = require('./User')
const Expense_Tracker = require('./Expense_Form')

//you can have many expense forms 
User.hasMany(Expense_Tracker, {
  foreignKey: 'from_user'
})

//expense forms can only have on user
Expense_Tracker.belongsTo(User, {
  foreignKey: 'from_user'
})

module.exports = { User, Expense_Tracker }