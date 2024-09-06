import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setContent(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Error fetching data");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Introduction Section */}
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Welcome to Ecomrace</h1>
        <p className="text-lg text-gray-700">Discover our exclusive range of products. From makeup essentials to stylish furniture and gourmet food, we have everything you need.</p>
      </section>
      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={product.thumbnail || 'https://via.placeholder.com/150'} 
                alt={product.title} 
                className="w-full h-50 object-cover mb-4 rounded" 
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link 
                to={`/product/${product.id}`} 
                className="mt-4 inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg mb-4">Have questions or need assistance? Reach out to us anytime!</p>
          <p className="text-lg mb-4">Email: <a href="mailto:support@ecomrace.com" className="underline">support@ecomrace.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+1234567890" className="underline">+1 (234) 567-890</a></p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
