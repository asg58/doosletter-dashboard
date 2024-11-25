import React from 'react';

const QuoteRequest = () => {
  return (
    <div>
      <h1>Vraag een offerte aan</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Naam</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Verstuur
        </button>
      </form>
    </div>
  );
};

export default QuoteRequest;
