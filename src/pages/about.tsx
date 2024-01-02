import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main className="text-center bg-white">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4 w-3/5 mx-auto text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        eleifend feugiat sem, eget placerat orci. In vitae felis auctor nulla
        mollis posuere. Curabitur pharetra venenatis odio, et porta massa
        pulvinar ac. Etiam venenatis viverra faucibus. Nulla vestibulum dapibus
        risus nec posuere.
      </p>
      <p className="mb-8 w-3/5 mx-auto text-xl">
        Praesent vitae elit laoreet, cursus leo eu, ullamcorper dui. Nam ornare
        ullamcorper justo id dictum. Nulla volutpat sed metus vel facilisis.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc a
        nunc accumsan, pharetra dui quis, faucibus.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="flex flex-col items-center justify-center">
        {/* Row 1 */}
        <div className="flex justify-between w-2/3 mb-8">
          {/* Card 1 */}
          <div className="max-w-md mx-24 p-4 border border-gray-300 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Team Member 1 Name</h3>
            <p className="text-gray-500 mb-4">Job Title</p>
            <Image
              src="/about1.jpg"
              alt="Team Member 1"
              className="w-full h-120 object-cover mb-4"
              width={400}
              height={400}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              felis metus, interdum egestas libero a, vestibulum iaculis sem.
              Curabitur bibendum mi eget odio euismod, vitae gravida urna
              porttitor. Sed a magna ex. Mauris interdum tellus lorem, ut
              condimentum est vestibulum in. Duis auctor, erat sit amet
              tincidunt vulputate, ante ipsum varius sapien, eu sagittis dolor
              odio nec urna. Proin tortor velit, pretium mollis convallis a,
              rutrum id lorem. Phasellus faucibus posuere tortor id
              pellentesque.
            </p>
            <p>
              Fusce sed mauris ac lorem tincidunt scelerisque a quis urna.
              Pellentesque porttitor dolor vitae lorem mattis vestibulum et at
              risus. Sed tincidunt vel enim non mollis. Aenean rhoncus velit non
              ex congue molestie. Suspendisse potenti. Donec finibus
              sollicitudin ornare. Pellentesque condimentum nibh ac diam
              iaculis, id consectetur ante ultricies. Aenean et cursus sapien.
              Vestibulum vitae justo tempus, sollicitudin nulla eget, suscipit
              arcu.
            </p>
            <p>
              Nullam venenatis varius consequat. Pellentesque nibh elit,
              fermentum at vehicula non, volutpat nec libero. Pellentesque sed
              tortor nec diam sodales vehicula. Donec ut nulla.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-md mx-24 p-4 border border-gray-300 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Team Member 2 Name</h3>
            <p className="text-gray-500 mb-4">Job Title</p>
            <Image
              src="/about2.jpg"
              alt="Team Member 2"
              className="w-full h-120 object-cover mb-4"
              width={400}
              height={400}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              felis metus, interdum egestas libero a, vestibulum iaculis sem.
              Curabitur bibendum mi eget odio euismod, vitae gravida urna
              porttitor. Sed a magna ex. Mauris interdum tellus lorem, ut
              condimentum est vestibulum in. Duis auctor, erat sit amet
              tincidunt vulputate, ante ipsum varius sapien, eu sagittis dolor
              odio nec urna. Proin tortor velit, pretium mollis convallis a,
              rutrum id lorem. Phasellus faucibus posuere tortor id
              pellentesque.
            </p>
            <p>
              Fusce sed mauris ac lorem tincidunt scelerisque a quis urna.
              Pellentesque porttitor dolor vitae lorem mattis vestibulum et at
              risus. Sed tincidunt vel enim non mollis. Aenean rhoncus velit non
              ex congue molestie. Suspendisse potenti. Donec finibus
              sollicitudin ornare. Pellentesque condimentum nibh ac diam
              iaculis, id consectetur ante ultricies. Aenean et cursus sapien.
              Vestibulum vitae justo tempus, sollicitudin nulla eget, suscipit
              arcu.
            </p>
            <p>
              Nullam venenatis varius consequat. Pellentesque nibh elit,
              fermentum at vehicula non, volutpat nec libero. Pellentesque sed
              tortor nec diam sodales vehicula. Donec ut nulla.
            </p>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex justify-between w-2/3 mb-8">
          {/* Card 3 */}
          <div className="max-w-md mx-24 mb-4 p-4 border border-gray-300 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Team Member 3 Name</h3>
            <p className="text-gray-500 mb-4">Job Title</p>
            <Image
              src="/about3.jpg"
              alt="Team Member 3"
              className="w-full h-120 object-cover mb-4"
              width={400}
              height={400}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              felis metus, interdum egestas libero a, vestibulum iaculis sem.
              Curabitur bibendum mi eget odio euismod, vitae gravida urna
              porttitor. Sed a magna ex. Mauris interdum tellus lorem, ut
              condimentum est vestibulum in. Duis auctor, erat sit amet
              tincidunt vulputate, ante ipsum varius sapien, eu sagittis dolor
              odio nec urna. Proin tortor velit, pretium mollis convallis a,
              rutrum id lorem. Phasellus faucibus posuere tortor id
              pellentesque.
            </p>
            <p>
              Fusce sed mauris ac lorem tincidunt scelerisque a quis urna.
              Pellentesque porttitor dolor vitae lorem mattis vestibulum et at
              risus. Sed tincidunt vel enim non mollis. Aenean rhoncus velit non
              ex congue molestie. Suspendisse potenti. Donec finibus
              sollicitudin ornare. Pellentesque condimentum nibh ac diam
              iaculis, id consectetur ante ultricies. Aenean et cursus sapien.
              Vestibulum vitae justo tempus, sollicitudin nulla eget, suscipit
              arcu.
            </p>
            <p>
              Nullam venenatis varius consequat. Pellentesque nibh elit,
              fermentum at vehicula non, volutpat nec libero. Pellentesque sed
              tortor nec diam sodales vehicula. Donec ut nulla.
            </p>
          </div>

          {/* Card 4 */}
          <div className="max-w-md mx-24 mb-4 p-4 border border-gray-300 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Team Member 4 Name</h3>
            <p className="text-gray-500 mb-4">Job Title</p>
            <Image
              src="/about4.jpg"
              alt="Team Member 4"
              className="w-full h-120 object-cover mb-4"
              width={400}
              height={400}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              felis metus, interdum egestas libero a, vestibulum iaculis sem.
              Curabitur bibendum mi eget odio euismod, vitae gravida urna
              porttitor. Sed a magna ex. Mauris interdum tellus lorem, ut
              condimentum est vestibulum in. Duis auctor, erat sit amet
              tincidunt vulputate, ante ipsum varius sapien, eu sagittis dolor
              odio nec urna. Proin tortor velit, pretium mollis convallis a,
              rutrum id lorem. Phasellus faucibus posuere tortor id
              pellentesque.
            </p>
            <p>
              Fusce sed mauris ac lorem tincidunt scelerisque a quis urna.
              Pellentesque porttitor dolor vitae lorem mattis vestibulum et at
              risus. Sed tincidunt vel enim non mollis. Aenean rhoncus velit non
              ex congue molestie. Suspendisse potenti. Donec finibus
              sollicitudin ornare. Pellentesque condimentum nibh ac diam
              iaculis, id consectetur ante ultricies. Aenean et cursus sapien.
              Vestibulum vitae justo tempus, sollicitudin nulla eget, suscipit
              arcu.
            </p>
            <p>
              Nullam venenatis varius consequat. Pellentesque nibh elit,
              fermentum at vehicula non, volutpat nec libero. Pellentesque sed
              tortor nec diam sodales vehicula. Donec ut nulla.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
