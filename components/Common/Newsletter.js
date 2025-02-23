import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = ({ inputStyle }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        'https://puntacana4life.ipzmarketing.com/api/v1/groups',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Wg1HtF6miyqVxehEMrDxXuWsttGYAZMSzATzrh_v',
          },
        }
      );
      setSuccess('Thank you for subscribing!');
    } catch (err) {
      setError('There was an error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container px-0 bg-heath newsletter">
      <div className={`newsletter-wrap ${inputStyle}`}>
        <div className="dot-shape sm-none">
          <img src="/images/dot-shape.svg" alt="Image" />
        </div>

        <div className="curve-shape sm-none">
          <img src="/images/curve.png" alt="Image" />
        </div>

        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5 col-md-5">
            <div className="newsletter-img">
              <img src="/images/newsletter-img-1.png" alt="Image" />
            </div>
          </div>

          <div className="col-xl-5 offset-xl-1 col-lg-7 offset-lg-0 col-md-7">
            <div className="newsletter-form style1">
              <h3>
                <span>Get Subscribe </span>
                <br />
                Our Newsletter
              </h3>
              <p>take puntacana4life with you, subscribe to our newsletter and find out everything (events, promotions, news and more).</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group mb-20">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn v5" disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe Now'} <i className="ri-logout-circle-r-line"></i>
                  </button>
                </div>
              </form>

              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
