import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Kimetsu no Yaiba',
    'Nagatoro',
  ]);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((catergory) => {
          return <li key={catergory}>{catergory}</li>;
        })}
      </ol>
    </>
  );
};
