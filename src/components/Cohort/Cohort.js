import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
const Cohort = ({ staff }) => {
  const personCards = staff.map((staffMember) => {
    return <Person key={staffMember.id} staffMember={staffMember} />;
  });

  return <main>{personCards}</main>;
};

export default Cohort;
