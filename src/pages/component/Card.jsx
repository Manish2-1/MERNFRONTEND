import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg bg-white m-4">
      {/* Image */}
      <img
        className="w-full h-72 object-cover"
        src={
          book.imageUrl
            ? book.imageUrl
            : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        }
        alt={book.bookName}
      />

      {/* Content */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.bookName}</div>
        <p className="text-gray-700 text-base">Rs.{book.bookPrice}</p>
        <p className="text-gray-700 text-base">{book.authorName}</p>
      </div>

      {/* Button */}
      <div className="px-6 py-4">
        <Link
          to={`/book/${book._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Card;
