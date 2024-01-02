import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-white">
      {/* Logo and Title */}
      <div className="text-center mb-8">
        <Image
          src="/logo_image.png"
          alt="Logo image"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">
          Welcome to Commoditology Ltd
        </h1>
      </div>

      {/* Laptop Image and First Paragraph */}
      <div className="flex flex-row items-center mb-8">
        <Image
          src="/laptop.jpg"
          alt="laptop image"
          width={400}
          height={400}
          className="mr-4"
        />
        <p className="max-w-md text-xl">
          Commoditology Limited specializes in trading commodities in the global
          marketplace. We have a professional and experienced team who have been
          in the business for many years and are dedicated to providing the best
          customer service.
        </p>
      </div>

      {/* Second Paragraph and Buildings Image */}
      <div className="flex flex-row items-center mb-4">
        <p className="max-w-md text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          varius nibh dui, at dignissim purus gravida vel. Vivamus vestibulum
          vel mauris consectetur eleifend. Maecenas quis velit eu nisi auctor
          eleifend. Nam sed nisl sed massa lacinia bibendum. Nam fermentum ac.
        </p>
        <Image
          src="/buildings.jpg"
          alt="buildings image"
          width={400}
          height={400}
          className="ml-4"
        />
      </div>
    </main>
  );
};

export default Page;
