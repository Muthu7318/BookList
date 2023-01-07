import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(book.id, title);
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
