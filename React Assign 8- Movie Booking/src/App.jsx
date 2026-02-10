import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4 text-white shadow-md">
        </nav>

        <Routes>
          <Route path="/" element={<MovieList />} />
          
          <Route path="/movie/:id" element={<MovieDetails />} />
          
          <Route path="/book/:id" element={<BookingForm />} />
          
          <Route path="/confirmation" element={<BookingConfirmation />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;