import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit
        onSubmit={(id, title) => {
          setShowEdit(false);
          onUpdate(id, title);
        }}
        book={book}
      ></BookEdit>
    );
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="img"></img>
      <div>{content}</div>
      <div className="actions">
        <button
          className="edit"
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={() => {
            onDelete(book.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
