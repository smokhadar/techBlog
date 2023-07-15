const { User } = require('../models');

const userData = [
    {
        username: 'jollygym',
        email: 'test1@gmail.com',
        password: 'password1'
    },
    {
        username: 'raves',
        email: 'test2@gmail.com',
        password: 'password1'
    },
    {
        username: 'rollsON',
        email: 'test3@gmail.com',
        password: 'password1'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;