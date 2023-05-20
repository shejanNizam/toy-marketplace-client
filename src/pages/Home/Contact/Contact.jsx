import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 w-3/4">
        <h2 className="text-3xl text-gray-800 font-bold mb-6">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-8">
          Have any questions or inquiries? Feel free to get in touch with us!
        </p>
        <form>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="name"
                className="block text-gray-800 text-lg font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                htmlFor="email"
                className="block text-gray-800 text-lg font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-800 text-lg font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-800 h-32 resize-none focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
