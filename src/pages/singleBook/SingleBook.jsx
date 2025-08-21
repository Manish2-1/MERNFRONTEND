import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const fetchBook = async () => {
    const response = await axios.get(`http://localhost:3000/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-center px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-center items-center">
            <img
              className="w-full h-[400px] object-cover rounded-xl shadow-md"
              src={
                book.imageUrl
                  ? book.imageUrl
                  : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              }
              alt={book.bookName || "Book"}
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {book.bookName}
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Price:</span> Rs. {book.bookPrice}
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">Publication:</span>{" "}
              {book.publication}
            </p>

            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
