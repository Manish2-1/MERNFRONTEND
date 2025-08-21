import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  // const navigate = useNavigate();

  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-100"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-gray-700 text-base">Rs.{book.bookPrice}</p>
          <p className="text-gray-700 text-base">{book.authorName}</p>
        </div>
        <div className="px-6 py-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={() => navigate("/book")}
          >
            <Link to={`/book/${book._id}`}>See More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
