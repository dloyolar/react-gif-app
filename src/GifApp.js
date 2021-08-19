import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({ defaultCategories = ['Haikyuu'] }) => {
  // const [categories, setCategories] = useState(['Kimetsu no Yaiba']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
