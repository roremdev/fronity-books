const chalk = require('chalk');
const debug = require('debug')('app:scripts:books');
const books = require('../json/books');
const users = require('../json/users');
const MongoLib = require('../../lib/mongo');

const createBook = async (mongoDB, book) => {
    const { name, author, website, description, price } = book;
    const bookID = await mongoDB.create('books', {
        name,
        author,
        website,
        description,
        price,
    });
    return bookID;
};

const seedBooks = async () => {
    try {
        const mongoDB = new MongoLib();

        const promises = books.map(async (book) => {
            const bookID = await createBook(mongoDB, book);
            debug(chalk.green('Book created ID: ', bookID));
        });

        await Promise.all(promises);
        return process.exit(0);
    } catch (err) {
        debug(chalk.red(err));
        return process.exit(1);
    }
};

seedBooks();
