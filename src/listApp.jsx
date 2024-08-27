import React, { useState } from 'react';

function ListApp() {
  const [input, setInput] = useState('');
  const [store, setStore] = useState([]);

  const display = (e) => {
    setInput(e.target.value);
  };

  const arr = () => {
    if (input.trim() !== '') {
      setStore([...store, input]);
      setInput('');
    }
  };

  const deleteItem = (index) => {
    const updatedStore = store.filter((_, i) => i !== index);
    setStore(updatedStore);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">To Do List</h1>

        <div className="mb-4">
          <input
            type="text"
            value={input}
            onChange={display}
            placeholder="Enter your task"
            className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          onClick={arr}
          className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Add to list
        </button>

        <ul className="mt-6 list-disc list-inside">
          {store.map((data, index) => (
            <li
              className="py-2 px-4 bg-gray-200 rounded-md mb-2 text-gray-700 flex justify-between items-center"
              key={index}
            >
              <span className="mr-4">{data}</span>
              <button
                onClick={() => deleteItem(index)}
                className="bg-indigo-600 text-white rounded-md px-2 py-1 hover:bg-indigo-700 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListApp;
