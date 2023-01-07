import { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const { updatedBook } = useBooksContext();
  const [title, setTitle] = useState(book.title);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
          updatedBook(book.id, title);
        }}
      >
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button className="button is-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
