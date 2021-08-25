import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
const Person = ({ person }) => {
  const { id, name, quote, superlative, photo } = person;
  return (
    <article>
      <img src={photo} alt={`Photo of ${name}`}></img>
      <h3>{name}</h3>
      <p>{quote && `"${quote}"`}</p>
      <p>{superlative}</p>
    </article>
  );
};

export default Person;
