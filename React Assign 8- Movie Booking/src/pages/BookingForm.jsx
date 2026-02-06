import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  
  // We remove 'as Movie' because this is standard JavaScript now
  const selectedMovie = JSON.parse(sessionStorage.getItem("selectedMovie") || "null");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  // If no movie is selected, redirect to home
  if (!selectedMovie) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Movie Selected</h1>
          <p className="mb-4 text-gray-400">Please select a movie first.</p>
          <Link to="/" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-bold">
            Browse Movies
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", mobile: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    const mobileRegex = /^\d{10}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const bookingId = "BK" + Math.random().toString(36).substr(2, 9).toUpperCase();
      
      const bookingData = {
        movieId: selectedMovie.id,
        movieTitle: selectedMovie.title,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        bookingId: bookingId,
        bookingTime: new Date().toLocaleString()
      };
      
      sessionStorage.setItem("bookingData", JSON.stringify(bookingData));
      navigate("/confirmation");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <Link 
            to={`/movie/${selectedMovie.id}`} 
            className="text-yellow-400 hover:underline flex items-center gap-2"
          >
            ← Back to Movie Details
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 mb-6 flex items-center gap-4">
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-yellow-400">{selectedMovie.title}</h2>
              <p className="text-gray-400 text-sm">{selectedMovie.genre} • {selectedMovie.duration}</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <h1 className="text-2xl font-bold mb-6 text-center">📝 Enter Your Details</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 focus:outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-gray-600 focus:border-yellow-400"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-600 focus:border-yellow-400"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-700 border-2 focus:outline-none transition-colors ${
                    errors.mobile ? "border-red-500" : "border-gray-600 focus:border-yellow-400"
                  }`}
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
              >
                ✅ Submit Booking
              </button>
            </form>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">* All fields are required</p>
        </div>
      </main>
    </div>
  );
};

export default BookingForm;