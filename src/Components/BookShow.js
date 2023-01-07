import { useState } from "react";
import useBooksContext from "../Hooks/use-books-context";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { DeleteBookById } = useBooksContext();

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = (
      <BookEdit book={book} onSubmit={() => setShowEdit(false)}></BookEdit>
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
            DeleteBookById(book.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
