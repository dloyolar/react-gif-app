import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} loading='lazy' />
      <p>{title.toUpperCase()}</p>
    </div>
  );
};
