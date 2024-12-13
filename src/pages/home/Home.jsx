import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-orange-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to Recipe Finder</h1>
          <p className="text-lg mb-6">
            Discover, Cook, and Enjoy Delicious Recipes from Around the World.
          </p>
          <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all">
            Explore Recipes
          </button>
        </div>
      </div>

      {/* Feature Section */}
      <div className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Why Choose Recipe Finder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Quick & Easy</h3>
            <p className="text-gray-700">
              Find recipes that are easy to follow and quick to prepare, perfect
              for your busy lifestyle.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Wide Variety</h3>
            <p className="text-gray-700">
              Explore recipes for all cuisines, dietary preferences, and skill levels.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold text-orange-500 mb-4">Community Favorites</h3>
            <p className="text-gray-700">
              Discover recipes loved and shared by our vibrant community of food enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Recipe 1"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Recipe 1</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Recipe 2"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Recipe 2</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Recipe 3"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Recipe 3</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/300"
                alt="Recipe 4"
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">Recipe 4</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
