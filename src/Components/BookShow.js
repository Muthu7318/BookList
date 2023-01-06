function BookShow({ book, onDelete }) {
  return (
    <div className="book-show">
      <div>{book.title}</div>
      <button
        onClick={() => {
          onDelete(book.id);
        }}
      >
        delete it
      </button>
    </div>
  );
}

export default BookShow;
