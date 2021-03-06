import React from 'react';

import BookItem from './BookItem';
import Loading from '../../layout/Loading';

const BookList = ({ books, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='row'>
        {books == null ? (
          <p>No books to show</p>
        ) : (
          books.map((book) => (
            <BookItem book={book} key={book.primary_isbn10} />
          ))
        )}
      </div>
    );
  }
};

export default BookList;
