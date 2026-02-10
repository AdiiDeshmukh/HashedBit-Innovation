import React from "react";
import { useLocation, Link } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return (
      <div className="error-container">
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper-gray flex-center padding-y">
      <div className="ticket-container">
        
        <div className="success-banner">
          <div className="success-icon">✓</div>
          <h1 className="success-title">Booking Confirmed!</h1>
          <p className="success-subtitle">Your ticket is ready for the show.</p>
        </div>

        <div className="ticket-card">
          <div className="ticket-header">
            {/* <h2 className="ticket-header-text">Movie Ticket</h2> */}
          </div>

          <div className="ticket-body">
            <div className="ticket-id-section">
              <p className="ticket-label-center">Booking ID</p>
              <p className="ticket-id-value">{booking.bookingId}</p>
            </div>

            <div className="ticket-main-info">
              <p className="ticket-label">Movie</p>
              <h3 className="ticket-movie-name">{booking.movieTitle}</h3>
            </div>

            <div className="ticket-grid">
              <div className="ticket-item">
                <p className="ticket-label">Name</p>
                <p className="ticket-value">{booking.customerName}</p>
              </div>
              <div className="ticket-item">
                <p className="ticket-label">Email</p>
                <p className="ticket-value">{booking.customerEmail}</p>
              </div>
              <div className="ticket-item">
                <p className="ticket-label">Phone</p>
                <p className="ticket-value">{booking.customerPhone}</p>
              </div>
            </div>

            <div className="ticket-footer-price">
              <p className="ticket-label">Total Paid</p>
              <p className="ticket-price-value">₹{booking.price}</p>
            </div>
          </div>

          <div className="ticket-bottom-border">
            <p className="ticket-note">Please present this ticket at the cinema counter.</p>
          </div>
        </div>

        <Link to="/" className="btn-dark-full mt-20">Back to Home</Link>
      </div>
    </div>
  );
}

export default BookingConfirmation;