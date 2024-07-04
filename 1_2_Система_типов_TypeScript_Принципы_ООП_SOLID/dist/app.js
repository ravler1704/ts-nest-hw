System.register("index", ["express", "uuid"], function (exports_1, context_1) {
    "use strict";
    var express_1, uuid_1, BooksRepository, Book, books, app, PORT;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1_1) {
                express_1 = express_1_1;
            },
            function (uuid_1_1) {
                uuid_1 = uuid_1_1;
            }
        ],
        execute: function () {
            BooksRepository = class BooksRepository {
            };
            Book = class Book {
                constructor(title = '', description = '', authors = '', favorite = '', fileCover = '', fileName = '', id = uuid_1.v4()) {
                    this.title = title;
                    this.description = description;
                    this.authors = authors;
                    this.favorite = favorite;
                    this.fileCover = fileCover;
                    this.fileName = fileName;
                    this.id = id;
                }
            };
            books = {
                book: [
                    new Book('Преступление и наказание', 'История о Раскольникове, который переживает внутреннюю борьбу.', 'Федор Михайлович Достоевский'),
                    new Book('Маленький принц', 'История, которая заставляет по-другому посмотреть на привычные вещи.', 'Антуан де Сент-Экзюпери'),
                    new Book('Собачье сердце', ' История об эксперименте, который доказал, что из животного можно сделать человека, а вот вывести «животное» из человека нельзя.', 'Михаил Булгаков'),
                ],
            };
            app = express_1.default();
            app.use(express_1.default.json());
            app.get('/api/books', (req, res) => {
                const { book } = books;
                res.json(book);
            });
            app.get('/api/books/:id', (req, res) => {
                const { book } = books;
                const { id } = req.params;
                const idx = book.findIndex(el => el.id === id);
                if (idx !== -1) {
                    res.json(book[idx]);
                }
                else {
                    res.status(404);
                    res.json('404 | страница не найдена');
                }
            });
            app.post('/api/books/', (req, res) => {
                const { book } = books;
                const { title, description, authors, favorite, fileCover, fileName } = req.body;
                const newBook = new Book(title, description, authors, favorite, fileCover, fileName);
                book.push(newBook);
                res.status(201);
                res.json(newBook);
            });
            app.put('/api/books/:id', (req, res) => {
                const { book } = books;
                const { title, description, authors, favorite, fileCover, fileName } = req.body;
                const { id } = req.params;
                const idx = book.findIndex(el => el.id === id);
                if (idx !== -1) {
                    book[idx] = Object.assign(Object.assign({}, book[idx]), { title,
                        description,
                        authors,
                        favorite,
                        fileCover,
                        fileName });
                    res.json(book[idx]);
                }
                else {
                    res.status(404);
                    res.json('404 | страница не найдена');
                }
            });
            app.delete('/api/books/:id', (req, res) => {
                const { book } = books;
                const { id } = req.params;
                const idx = book.findIndex(el => el.id === id);
                if (idx !== -1) {
                    book.splice(idx, 1);
                    res.json(true);
                }
                else {
                    res.status(404);
                    res.json('404 | страница не найдена');
                }
            });
            app.post('/api/user/login', (req, res) => {
                res.status(201);
                res.json({ id: 1, mail: "test@test.ru" });
            });
            PORT = process.env.PORT || 3000;
            app.listen(PORT);
        }
    };
});
