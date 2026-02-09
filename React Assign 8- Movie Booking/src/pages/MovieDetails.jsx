import React from "react";
import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Movie not found!</h2>
        <Link to="/" className="text-blue-500 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <header className="bg-white p-4 shadow-sm mb-6">
        <Link to="/" className="text-blue-600 font-semibold">
          ← Back to All Movies
        </Link>
      </header>

      <main className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-1/3">
            <img 
              src={movie.image} 
              alt={movie.title} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="md:w-2/3 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{movie.title}</h1>
            
            <div className="flex gap-3 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
                {movie.genre}
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                {movie.duration}
              </span>
            </div>

            <p className="text-yellow-600 font-bold text-xl mb-4">
              Rating: ★ {movie.rating}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {movie.description}
            </p>

            <p className="text-2xl font-bold mb-6">Price: ₹{movie.price}</p>

            <Link to={`/book/${movie.id}`}>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
                Book Ticket Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;