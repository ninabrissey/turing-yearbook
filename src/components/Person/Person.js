import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE
const Person = ({ staffMember }) => {
  const { id, name, quote, superlative, photo } = staffMember;
  return (
    <article>
      <img src={photo} alt={`Photo of ${name}`}></img>
      <h3>{name}</h3>
      <p>{quote}</p>
      <p>{superlative}</p>
    </article>
  );
};

export default Person;
