import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import "./components/style.css";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <>
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    </>
  );
}

export default App;
