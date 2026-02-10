import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

function MovieList() {
  return (
    <div className="page-wrapper">
      {/*<header className="home-header">
        <h1 className="brand-name">MovieBooking</h1>
        <p className="brand-tagline">Book your favorite movies in seconds</p>
      </header>*/}

      <main className="main-content">
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="card-image-box">
                <img src={movie.image} alt={movie.title} className="card-img" />
                <div className="card-rating">★ {movie.rating}</div>
              </div>
              
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p className="card-genre">{movie.genre}</p>
                <Link to={`/movie/${movie.id}`} className="btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MovieList;