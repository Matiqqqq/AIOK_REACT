import React from 'react';
import Name from './Name';
import Index from './Index';
import Birthdate from './Birthdate';
import Address from './Address';
import Group from './Group';
import Scholarship from './Scholarship';
import Grades from './Grades';

const Students = () => {
  const students = [
    {
      id: 1,
      name: 'Jan Kowalski',
      index: '12345',
      birthdate: '2000-11-15',
      address: 'ul. Polna 12, Białystok',
      group: 'PS1',
      scholarship: 'Tak',
      grades: [5, 4.5, 4, 5, 2],
    },
    {
      id: 2,
      name: 'Anna Nowak',
      index: '54321',
      birthdate: '2004-11-02',
      address: 'ul. Wiejska 5, Białystok',
      group: 'PS2',
      scholarship: 'Nie',
      grades: [4, 3.5, 4, 4.5, 3],
    },
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <Name name={student.name} />
          <Index index={student.index} />
          <Birthdate birthdate={student.birthdate} />
          <Address address={student.address} />
          <Group group={student.group} />
          <Scholarship scholarship={student.scholarship} />
          <Grades grades={student.grades} />
          <hr />
        </div>
      ))}
    </div>
  );
  
};

export default Students;
