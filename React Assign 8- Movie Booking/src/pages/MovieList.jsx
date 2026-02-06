import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

const MovieList = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-yellow-400">
            🎥 Movie Booking System
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Choose your favorite movie and book your seat now!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-lg font-bold text-sm">
                  ★ {movie.rating}
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold mb-1 truncate">{movie.title}</h2>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{movie.genre}</span>
                  <span>{movie.duration}</span>
                </div>
                <button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 Movie Booking System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MovieList;