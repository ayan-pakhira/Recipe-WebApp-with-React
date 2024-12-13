import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Recipe Finder
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="text-orange-500 font-semibold">Recipe Finder</span>, your ultimate destination for discovering and sharing amazing recipes! Our platform is designed to bring food lovers together, offering a vast collection of recipes that cater to every taste and skill level.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Whether you're a professional chef or just starting your culinary journey, Recipe Finder provides an easy way to explore new dishes, learn cooking techniques, and share your creations with others. Our mission is to inspire creativity in the kitchen and make cooking an enjoyable experience for everyone.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Join our community today and embark on a flavorful adventure. Discover the joy of cooking with <span className="text-orange-500 font-semibold">Recipe Finder</span> and make every meal a masterpiece!
        </p>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all">
            Explore Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
