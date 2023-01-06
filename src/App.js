import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };

  const DeleteBookById = (id) => {
    const updatedBooks = books.filter((item) => item.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={DeleteBookById}></BookList>
      <BookCreate onCreate={CreateBook}></BookCreate>
    </div>
  );
}

export default App;
