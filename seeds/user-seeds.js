const sequelize = require('../config/connection');
const { User, Expense_Form } = require('../models');

const userdata = [
    {
        user_first_name: 'Brenda',
        user_last_name: 'Spenda',
        user_email: 'brenda.spenda@gmail.com',
        password: 'sPend@llc4$h'
    },
    {
        user_first_name: 'Griff',
        user_last_name: 'Thrift',
        user_email: 'big_griff@gmail.com',
        password: 'p3nNyP1NcHeR$'
    },
    {
        user_first_name: 'Jane',
        user_last_name: 'Plain',
        user_email: 'janeplan@gmail.com',
        password: '$spendsomesavesom3'
    },
    {
        user_first_name: 'Test',
        user_last_name: 'One',
        user_email: 'test@test.test',
        password: 'pw123'
    },
    {
        user_first_name: 'User',
        user_last_name: 'Acceptance',
        user_email: 'uat@countirplane.org',
        password: 'pw123'
    },
    {
        user_first_name: 'System',
        user_last_name: 'Integration-Testing',
        user_email: 'sit@maximuzatiun.org',
        password: 'pw123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
