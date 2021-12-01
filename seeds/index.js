const seedUsers = require('./user-seeds');
const seedLogs = require('./log-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedLogs();
    process.exit(0);
};

seedAll();