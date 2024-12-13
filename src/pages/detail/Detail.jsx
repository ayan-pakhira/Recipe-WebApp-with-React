import React from 'react';

const Detail = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* <h1 className="text-4xl font-bold text-gray-800 mb-6">{recipe.name}</h1> */}
        {/* <p className="text-lg text-gray-700 leading-relaxed mb-4">
          <span className="text-orange-500 font-semibold">Description: </span>
          {recipe.description}
        </p> */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
          {/* <ul className="list-disc list-inside text-lg text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul> */}
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            {recipe.instructions}
          </p> */}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 shadow-md transition-all">
            Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
