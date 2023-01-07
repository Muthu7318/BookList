import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import { useEffect } from "react";
import useBooksContext from "./Hooks/use-books-context";

function App() {
  const { stableFetchBooks } = useBooksContext();

  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList></BookList>
      <BookCreate></BookCreate>
    </div>
  );
}

export default App;
