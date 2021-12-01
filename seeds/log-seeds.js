const sequelize = require('../config/connection');
const { User, Expense_Form } = require('../models');

const logdata = [
    {
        date: '2021-11-11',
        type: 'expense',
        description: 'dinner for four',
        amount: '341.45',
        user_id: '1'       
    },
    {
        date: '2021-11-12',
        type: 'expense',
        description: 'dog grooming',
        amount: '201.85',
        user_id: '1'        
    },
    {
        date: '2021-11-13',
        type: 'income',
        description: 'paycheck',
        amount: '612.32',
        user_id: '1'        
    },
    {
        date: '2021-11-14',
        type: 'expense',
        description: 'gas',
        amount: '40.00',
        user_id: '1'        
    },
    {
        date: '2021-11-11',
        type: 'income',
        description: 'found money on sidewalk',
        amount: '20.00',
        user_id: '2'        
    },
    {
        date: '2021-11-12',
        type: 'income',
        description: 'payments from renters',
        amount: '2000.00',
        user_id: '2'        
    },
    {
        date: '2021-11-13',
        type: 'income',
        description: 'paycheck',
        amount: '812.45',
        user_id: '2'        
    },
    {
        date: '2021-11-14',
        type: 'expense',
        description: 'dinner',
        amount: '12.44',
        user_id: '2'        
    },
    {
        date: '2021-11-11',
        type: 'expense',
        description: 'dinner',
        amount: '25.00',
        user_id: '3'        
    },
    {
        date: '2021-11-12',
        type: 'expense',
        description: 'electric bill',
        amount: '104.44',
        user_id: '3'        
    },
    {
        date: '2021-11-13',
        type: 'income',
        description: 'paycheck',
        amount: '740.48',
        user_id: '3'        
    },
    {
        date: '2021-11-14',
        type: 'income',
        description: 'dividend payment',
        amount: '56.21',
        user_id: '3'        
    }
];

const seedLogs = () => Expense_Form.bulkCreate(logdata);

module.exports = seedLogs;