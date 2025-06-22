import React from 'react'

export const Header = () => {
  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h4 className="text-primary mb-3">
            <i className="bi bi-code-slash me-2"></i>
            Hey MRites,Welcome to Edu-Notes!
          </h4>
          <h2 className="display-4 fw-bold mb-4">Welcome to our product</h2>
          <p className="lead text-muted">
            Access and share educational resources seamlessly - where teachers upload and students learn
          </p>
          <hr className="my-4" />
          <button className="btn btn-outline-dark rounded-pill px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}