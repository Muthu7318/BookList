import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const stableFetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

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

  const valueToShare = {
    books,
    CreateBook,
    updatedBook,
    DeleteBookById,
    stableFetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
