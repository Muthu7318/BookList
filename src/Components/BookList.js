import BookShow from "./BookShow";

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((item, index) => (
    <BookShow onDelete={onDelete} book={item} key={item.id}></BookShow>
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
