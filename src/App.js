import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import getBooks from './api/GetBooks';

import Navbar from './layout/Navbar';

const App = () => {
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <h1>Test</h1>
      </div>
    </div>
  );
};

export default App;
