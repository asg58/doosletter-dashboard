import React from 'react';

const QuoteRequest = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Vraag een Offerte Aan</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Naam</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Voer uw naam in"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Voer uw e-mailadres in"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefoonnummer</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Voer uw telefoonnummer in"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="projectDetails">Projectdetails</label>
          <textarea
            className="form-control"
            id="projectDetails"
            rows="4"
            placeholder="Beschrijf uw project..."
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="deadline">Deadline</label>
          <input type="date" className="form-control" id="deadline" required />
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget (optioneel)</label>
          <input
            type="number"
            className="form-control"
            id="budget"
            placeholder="Voer uw budget in"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Verstuur Offerteaanvraag
        </button>
      </form>
    </div>
  );
};

export default QuoteRequest;
