import React from 'react';

const NameList = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div>
      <h2 className="text-xl mb-4">Name List</h2>
      <ul className="list-disc list-inside">
        {names.map((name, index) => (
          <li key={index} className="mb-2">{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;