import React from 'react';

const Grades = ({ grades }) => {
  return (
    <div>
      <strong>Oceny:</strong> {grades.join(', ')}
    </div>
  );
};

export default Grades;
