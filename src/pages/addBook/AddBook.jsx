import React from "react";
import Navbar from "../component/Navbar";

const AddBook = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📚 Add New Book
          </h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="bookName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Name
              </label>
              <input
                type="text"
                id="bookName"
                name="bookName"
                placeholder="Enter book name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="bookPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                bookPrice
              </label>
              <input
                type="number"
                id="bookPrice"
                name="bookPrice"
                placeholder="Enter price"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="isbnNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                isbnNumber
              </label>
              <input
                type="number"
                id="isbnNumber"
                name="isbnNumber"
                placeholder="Enter ISBN number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="authorName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                authorName
              </label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                placeholder="Enter author name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="publication"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                publication
              </label>
              <input
                type="number"
                id="publication"
                name="publication"
                placeholder="e.g. 2024"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="publishedAt"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                publishedAt
              </label>
              <input
                type="date"
                id="publishedAt"
                name="publishedAt"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="bookImage"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Book Image
              </label>
              <input
                type="file"
                id="bookImage"
                name="image"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              ➕ Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
