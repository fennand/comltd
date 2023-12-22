import React from "react";

const Contact = () => {
  return (
    <main className="text-center bg-white">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>Address: 9 Clarkston Road, Glasgow, G44 4EH UK</p>
      <p>Email: saima@commoditylimited.com</p>
      <p>Phone: +44 7821 117802</p>
      <form className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.596767034334!2d-4.2618139!3d55.8176005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846fd6192a597%3A0x6ddbf70a22ee8b01!2s9%20Clarkston%20Rd%2C%20Cathcart%2C%20Glasgow%20G44%204EF!5e0!3m2!1sen!2suk!4v1703267365319!5m2!1sen!2suk"
        width="600"
        height="450"
        className="mx-auto mt-8 mb-4"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
};

export default Contact;
