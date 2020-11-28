import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import getBooks from './api/GetBooks';

import Navbar from './layout/Navbar';
import Loading from './layout/Loading';
import BookList from './components/books/BookList';

const App = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooksFromAPI();
  }, []);

  const getBooksFromAPI = async () => {
    const data = await getBooks();
    setBooks(data);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          {books == null ? (
            <p>No Books to show</p>
          ) : (
            books.map((b) => <p>{b.title}</p>)
          )}
        </div>
      </div>
    );
  }
};

export default App;
