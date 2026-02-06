import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import MovieList from "./pages/MovieList";
import MovieDetails from "./pages/MovieDetails";
import BookingForm from "./pages/BookingForm";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <Routes>
        {/* Page 1: Movie List (Home) */}
        <Route path="/" element={<MovieList />} />
        
        {/* Page 2: Movie Details */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        
        {/* Page 3: Booking Form */}
        <Route path="/book" element={<BookingForm />} />
        
        {/* Page 4: Booking Confirmation */}
        <Route path="/confirmation" element={<BookingConfirmation />} />
        
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;