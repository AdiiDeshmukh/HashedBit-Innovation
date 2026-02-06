import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const bookingData = JSON.parse(sessionStorage.getItem("bookingData") || "null");

  useEffect(() => {
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  const handleNewBooking = () => {
    sessionStorage.removeItem("selectedMovie");
    sessionStorage.removeItem("bookingData");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-yellow-400">Booking Confirmed! 🎉</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-4 animate-bounce">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-400 mb-2">Booking Successful!</h1>
            <p className="text-gray-400">Your tickets have been booked successfully</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden shadow-2xl border border-gray-600">
            <div className="bg-yellow-400 text-black p-6 text-center">
              <h2 className="text-2xl font-bold">🎬 Movie Ticket</h2>
              <p className="text-sm font-semibold mt-1">CINEMA WORLD</p>
            </div>

            <div className="p-8">
              <div className="bg-black rounded-xl p-4 mb-6 text-center border-2 border-dashed border-gray-600">
                <p className="text-gray-400 text-sm mb-1">Booking ID</p>
                <p className="text-2xl font-mono font-bold text-yellow-400 tracking-wider">
                  {bookingData.bookingId}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-600">
                <p className="text-gray-400 text-sm mb-1">Movie</p>
                <h3 className="text-2xl font-bold text-white">{bookingData.movieTitle}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-400 text-sm">Name</p>
                    <p className="text-lg font-semibold">{bookingData.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Mobile</p>
                    <p className="text-lg font-semibold">{bookingData.mobile}</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-lg font-semibold">{bookingData.email}</p>
                </div>

                <div className="pt-4 border-t border-gray-600">
                  <p className="text-gray-400 text-sm">Booking Time</p>
                  <p className="text-md font-semibold text-yellow-400">{bookingData.bookingTime}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 text-center border-t border-gray-600">
              <p className="text-sm text-gray-400">
                Please save this ticket. Show it at the cinema entrance.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleNewBooking}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              🎬 Book Another Movie
            </button>
            <Link
              to="/"
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg text-center"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;