import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!movie) {
    return <div className="p-10 text-center text-xl">Movie not found.</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      alert("Please fill in all fields!");
      return;
    }

    const bookingId = "BOOK-" + Math.floor(Math.random() * 100000);

   
    navigate("/confirmation", {
      state: {
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        movieTitle: movie.title,
        bookingId: bookingId,
        price: movie.price
      }
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8">
        <Link to={`/movie/${id}`} className="text-blue-500 text-sm">← Back to Details</Link>
        
        <h1 className="text-2xl font-bold mt-4 mb-2">Book Tickets for:</h1>
        <p className="text-xl text-blue-600 font-semibold mb-6">{movie.title}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border p-3 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border p-3 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full border p-3 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="10-digit number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700"
          >
            Confirm & Pay ₹{movie.price}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;