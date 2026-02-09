import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

function MovieList() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-blue-600 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Movie Booking App</h1>
        <p className="mt-2">Select a movie to book your tickets</p>
      </header>

      <main className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="border rounded-lg shadow-md p-4">
              <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-full h-64 object-cover rounded-md"
              />
              
              <div className="mt-4 text-center">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-gray-600">{movie.genre}</p>
                <p className="text-yellow-600 font-semibold">Rating: {movie.rating}</p>
                
                <Link to={`/movie/${movie.id}`}>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
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