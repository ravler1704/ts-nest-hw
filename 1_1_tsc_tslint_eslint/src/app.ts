interface Book {
  name: string;
  isbn: string;
}

const book: Book = {
  name: 'Название книги',
  isbn: '123123123'
}

const name: string = "Ivan"

const container = document.getElementById('content');

if (container) {
  container.textContent = `Название книги: ${book.name}, ISBN: ${book.isbn}`
}

