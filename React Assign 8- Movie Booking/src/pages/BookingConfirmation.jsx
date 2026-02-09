import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  const bookingData = location.state;

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">No booking found!</h2>
          <Link to="/" className="bg-red-600 px-6 py-2 rounded-lg">Go to Movies</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-10">
      <header className="bg-gray-800 py-4 shadow-lg mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-yellow-400 text-center">Booking Confirmed! 🎉</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-green-400">Booking Successful!</h1>
          </div>

          <div className="bg-white text-black rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300">
            <div className="bg-yellow-400 p-6 text-center border-b-2 border-dashed border-gray-400">
              <h2 className="text-2xl font-bold">🎬 Movie Ticket</h2>
              <p className="text-sm font-semibold">CINEMA WORLD</p>
            </div>

            <div className="p-8">
              <div className="bg-gray-100 rounded-xl p-4 mb-6 text-center border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">Booking ID</p>
                <p className="text-2xl font-mono font-bold text-blue-600 tracking-wider">
                  {bookingData.bookingId}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-500 text-sm">Movie Name</p>
                <h3 className="text-2xl font-bold text-gray-800">{bookingData.movieTitle}</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-sm">Customer Name</p>
                  <p className="text-lg font-semibold">{bookingData.customerName}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">Phone Number</p>
                  <p className="text-lg font-semibold">{bookingData.customerPhone}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-500 text-sm">Email Address</p>
                <p className="text-lg font-semibold">{bookingData.customerEmail}</p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-gray-500 text-sm">Total Paid</p>
                <p className="text-2xl font-bold text-green-600">₹{bookingData.price}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 text-center">
              <p className="text-xs text-gray-500">
                Show this ticket at the cinema entrance. Enjoy your movie!
              </p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Link to="/" className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl text-center shadow-lg hover:bg-blue-700">
              ← Back to Home
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}

export default BookingConfirmation;