const chalk = require('chalk');
const debug = require('debug')('app:scripts:books');
const users = require('../json/users');
const MongoLib = require('../../lib/mongo');

async function createUser(mongoDB, user) {
    const { userName, name, password, avatar, isAdmin } = user;

    const userId = await mongoDB.create('users', {
        userName,
        name,
        password,
        avatar,
        isAdmin: Boolean(isAdmin),
    });

    return userId;
}

const seedUsers = async () => {
    try {
        const mongoDB = new MongoLib();

        const promises = users.map(async (user) => {
            const userID = await createUser(mongoDB, user);
            debug(chalk.green('User created ID: ', userID));
        });

        await Promise.all(promises);
        return process.exit(0);
    } catch (err) {
        debug(chalk.red(err));
        return process.exit(1);
    }
};

seedUsers();