import { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { CreateBook } = useBooksContext();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    CreateBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <form onSubmit={handleFormSubmit}>
        <label>Enter your book name:</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
