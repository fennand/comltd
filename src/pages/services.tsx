import React from "react";
import Image from "next/image";

const Services = () => {
  const openPdf = (pdfPath: string): void => {
    window.open(pdfPath, "_blank");
  };

  return (
    <div className="text-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Services / Products</h1>
      <p className="font-bold text-xl mb-2">
        Please click on an image below to view and download information on our
        services
      </p>

      <div className="flex justify-center space-x-4">
        <div
          className="max-w-xs rounded overflow-hidden shadow-lg mb-4 cursor-pointer"
          onClick={() => openPdf("/camelbattery.pdf")}
        >
          <Image
            className="w-full"
            src="/camelbatt.jpg"
            alt="Card 1"
            width={400}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Camel Batteries</div>
            <p className="text-gray-700 text-base">
              Description for Card 1. This is a sample paragraph.
            </p>
          </div>
        </div>

        <div
          className="max-w-xs rounded overflow-hidden shadow-lg mb-4 cursor-pointer"
          onClick={() => openPdf("/ardent.pdf")}
        >
          <Image
            className="w-full"
            src="/ardent.jpg"
            alt="Card 2"
            width={400}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Ardent Tyres</div>
            <p className="text-gray-700 text-base">
              Description for Card 2. This is another sample paragraph.
            </p>
          </div>
        </div>

        <div
          className="max-w-xs rounded overflow-hidden shadow-lg mb-4 cursor-pointer"
          onClick={() => openPdf("/path/to/coming_soon.pdf")}
        >
          <Image
            className="w-full"
            src="/TBC.jpg"
            alt="Card 3"
            width={400}
            height={400}
          />
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
