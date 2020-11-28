import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className='col s4'>
      <div className='card'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' alt={book.title} src={book.book_image} />
        </div>
        <div className='card-content'>
          <span
            className='card-title activator grey-text text-darken-4'
            style={{ fontSize: '12px' }}
          >
            {book.title}
            <i className='material-icons right'>more_vert</i>
          </span>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            By {book.author}
            <i className='material-icons right'>close</i>
          </span>
          <p>{book.description}</p>

          <a
            href={book.amazon_product_url}
            target='_blank'
            rel='noreferrer'
            className='waves-effect waves-light btn-small'
          >
            Purchase
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
