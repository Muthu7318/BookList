import BookShow from "./BookShow";
import useBooksContext from "../Hooks/use-books-context";

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((item, index) => (
    <BookShow key={item.id} book={item}></BookShow>
  ));
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
