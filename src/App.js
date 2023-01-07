import { useState, useEffect } from "react";
import axios from "axios";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    console.log(response.data);
    setBooks(response.data);
  };

  // Creating a book
  const CreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };

  // updating a book
  const updatedBook = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBook = books.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...response.data,
        };
      }
      return item;
    });

    setBooks(updatedBook);
  };

  // deleting a book
  const DeleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((item) => item.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={DeleteBookById}
        onUpdate={updatedBook}
      ></BookList>
      <BookCreate onCreate={CreateBook}></BookCreate>
    </div>
  );
}

export default App;
