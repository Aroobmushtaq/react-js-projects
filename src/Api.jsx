import React, { useState, useEffect } from 'react';

function Api({ category }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setContent(data.products);
      } catch (error) {
        alert("Error");
      }
    }
    fetchData();
  }, []);

  const filteredContent = content.filter(product => product.category === category);

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-gray-100'>
      {filteredContent.map((data, index) => (
        <div key={index}  className="border rounded-lg overflow-hidden shadow-lg p-3 gap-1 bg-white">
          <h1 className="text-xl font-semibold mb-2">{data.title}</h1>
          <img src={data.thumbnail} alt={data.title}  className="w-full  object-cover mb-4"/>
          <p className="text-gray-600">{data.price}</p>
          <button className='border-none rounded-lg bg-gray-900 text-white p-1'>Shop Now</button>
        </div>
      ))}
    </div>
  );
}

export default Api;
