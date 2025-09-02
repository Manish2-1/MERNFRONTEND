import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(
      "https://mern-basicnode.onrender.com/book"
    );
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly my-10">
        {books.length > 0 &&
          books.map((book) => {
            return <Card key={book._id} book={book} />;
          })}
      </div>
    </>
  );
};

export default Home;
