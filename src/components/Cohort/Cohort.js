import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({ people }) => {
  const personCards = people.map((person) => {
    return <Person key={person.id} person={person} />;
  });

  return <main>{personCards}</main>;
};

export default Cohort;
