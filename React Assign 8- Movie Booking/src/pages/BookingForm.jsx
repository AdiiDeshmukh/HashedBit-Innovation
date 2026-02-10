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

  if (!movie) return <div className="error-container">Movie not found.</div>;

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
    <div className="page-wrapper-gray flex-center">
      <div className="form-card">
        <Link to={`/movie/${id}`} className="form-back-link">← Back to Details</Link>
        
        <h1 className="form-header-title">Book Tickets for:</h1>
        <p className="form-movie-selection">{movie.title}</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-primary-large">
            Confirm & Pay ₹{movie.price}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingForm;