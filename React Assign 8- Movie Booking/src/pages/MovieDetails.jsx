import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the movie by its ID
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie Not Found</h1>
          <Link to="/" className="text-yellow-400 hover:underline">
            ← Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  const handleBookSeat = () => {
    // Store selected movie in session storage
    sessionStorage.setItem("selectedMovie", JSON.stringify(movie));
    navigate("/book");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-yellow-400 hover:underline flex items-center gap-2">
            ← Back to Movies
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-96 md:h-auto">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4 text-yellow-400">
                {movie.title}
              </h1>
              
              <div className="flex gap-4 mb-6 text-sm">
                <span className="bg-gray-700 px-3 py-1 rounded-full">{movie.genre}</span>
                <span className="bg-gray-700 px-3 py-1 rounded-full">{movie.duration}</span>
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                  ★ {movie.rating}
                </span>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {movie.description}
              </p>

              <button
                onClick={handleBookSeat}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                🎟️ Book Your Seat Now
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-3xl mb-2">🎬</div>
            <h3 className="font-bold text-yellow-400">Genre</h3>
            <p className="text-gray-400">{movie.genre}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-3xl mb-2">⏱️</div>
            <h3 className="font-bold text-yellow-400">Duration</h3>
            <p className="text-gray-400">{movie.duration}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-bold text-yellow-400">Rating</h3>
            <p className="text-gray-400">{movie.rating}/10</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetails;