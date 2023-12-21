import React from "react";

const Services = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-8 mb-4">Services / Products</h1>
      <p className="font-bold text-xl mb-2">
        Please click on a image below to download information on our services
      </p>

      <div className="flex justify-center space-x-4">
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="../camelbatt.jpg" alt="Card 1" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Camel Batteries</div>
            <p className="text-gray-700 text-base">
              Description for Card 1. This is a sample paragraph.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="../ardent.jpg" alt="Card 2" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ardent Tyres</div>
            <p className="text-gray-700 text-base">
              Description for Card 2. This is another sample paragraph.
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded overflow-hidden shadow-lg">
          <img className="w-full" src="../TBC.jpg" alt="Card 3" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Coming Soon</div>
            <p className="text-gray-700 text-base">
              Description for Card 3. Yet another sample paragraph.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
