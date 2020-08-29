const MongoLib = require('../lib/mongo');

class Books {
    constructor() {
        this.collection = 'books';
        this.mongoDB = new MongoLib();
    }
    async getBooks({ tags }) {
        const query = tags && { tags: { $in: tags } };
        const books = await this.mongoDB.getAll(this.collection, query);
        return books || [];
    }

    async getBook(bookID) {
        const book = await this.mongoDB.get(this.collection, bookID);
        return book || [];
    }
    async createBook(book) {
        const createBook = await this.mongoDB.create(this.collection, book);
        return await this.getBook(createBook) || [];
    }
    async updateBook(bookID, book) {
        const updateBook = await this.mongoDB.updadte(this.collection, bookID, book)
        return await this.getBook(updateBook) || [];
    }
    async deleteBook(bookID){
        console.log(bookID);
        const deleteBook = await this.mongoDB.delete(this.collection, bookID);
        return deleteBook || [];
    }
}

module.exports = Books;
