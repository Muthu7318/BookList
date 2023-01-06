import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
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
