import React, { useState } from 'react';
import Greeting from './Pages/Task1';
import Counter from './Pages/Task2';
import NameList from './Pages/Task3';

const tasks = [
  {
    id: 'greeting',
    name: 'Greeting',
    component: Greeting,
    code: `import React from 'react';

const Greeting = ({ name }) => {
  return <h1 className="text-2xl font-bold">Hello, {name}!</h1>;
};

export default Greeting;`,
  },
  {
    id: 'counter',
    name: 'Counter',
    component: Counter,
    code: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4">Count: {count}</h2>
      <div className="space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;`,
  },
  {
    id: 'namelist',
    name: 'Name List',
    component: NameList,
    code: `import React from 'react';

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

export default NameList;`,
  },
];

const TaskSelector = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showCode, setShowCode] = useState(false);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setShowCode(false);
  };

  return (
    <div className="place-content-center">
      <h1 className="text-3xl font-bold mb-6">React Tasks</h1>
      <div className="flex mb-6">
        {tasks.map((task) => (
          <button
            key={task.id}
            className={`mr-4 px-4 py-2 rounded ${selectedTask?.id === task.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            onClick={() => handleTaskSelect(task)}
          >
            {task.name}
          </button>
        ))}
      </div>
      {selectedTask && (
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold mb-4">{selectedTask.name}</h2>
          <div className="mb-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
            {showCode && (
              <pre className="bg-gray-100 p-4 rounded mt-4 overflow-x-auto">
                <code>{selectedTask.code}</code>
              </pre>
            )}
          </div>
          <div className="border-t pt-4">
            <h3 className="text-xl font-bold mb-4">Component Output:</h3>
            <div className="bg-gray-100 p-4 rounded">
              {selectedTask.id === 'greeting' ? (
                <selectedTask.component name="World" />
              ) : (
                <selectedTask.component />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskSelector;