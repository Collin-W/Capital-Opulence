const sequelize = require('../config/connection');
const { User, Expense_Form } = require('../models');

const userdata = [
    {
        first_name: 'Brenda',
        last_name: 'Spenda',
        email: 'brenda.spenda@gmail.com',
        password: 'sPend@llc4$h'
    },
    {
        first_name: 'Griff',
        last_name: 'Thrift',
        email: 'big_griff@gmail.com',
        password: 'p3nNyP1NcHeR$'
    },
    {
        first_name: 'Jane',
        last_name: 'Plain',
        email: 'janeplan@gmail.com',
        password: '$spendsomesavesom3'
    },
    {
        first_name: 'Test',
        last_name: 'One',
        email: 'test@test.test',
        password: 'pw123'
    },
    {
        first_name: 'User',
        last_name: 'Acceptance',
        email: 'uat@countirplane.org',
        password: 'pw123'
    },
    {
        first_name: 'System',
        last_name: 'Integration-Testing',
        email: 'sit@maximuzatiun.org',
        password: 'pw123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
