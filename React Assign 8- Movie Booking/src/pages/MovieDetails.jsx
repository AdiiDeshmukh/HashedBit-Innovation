import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="error-container">
        <h2>Movie not found!</h2>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper-gray">
      <nav className="simple-nav">
        <Link to="/" className="nav-back-link">← Back to All Movies</Link>
      </nav>

      <main className="details-container">
        <div className="details-card">
          <div className="details-image-section">
            <img src={movie.image} alt={movie.title} className="details-img" />
          </div>

          <div className="details-info-section">
            <h1 className="details-title">{movie.title}</h1>
            
            <div className="details-meta">
              <span className="badge-indigo">{movie.genre}</span>
              <span className="badge-gray">{movie.duration}</span>
            </div>

            <p className="details-rating">Rating: ★ {movie.rating}</p>
            <p className="details-desc">{movie.description}</p>
            <p className="details-price">Price: ₹{movie.price}</p>

            <Link to={`/book/${movie.id}`} className="btn-success">
              Book Ticket Now
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;