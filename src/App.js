import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import getBooks from './api/GetBooks';

import Navbar from './layout/Navbar';
import BookList from './components/books/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooksFromAPI();
  }, []);

  const getBooksFromAPI = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        {books.map((b) => (
          <p>{b.title}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
