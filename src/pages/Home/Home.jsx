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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10 px-4">
        {books.length > 0 &&
          books.map((book) => <Card key={book._id} book={book} />)}
      </div>
    </>
  );
};

export default Home;
