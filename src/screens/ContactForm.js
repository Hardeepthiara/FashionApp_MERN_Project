import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";


const ContactForm = () => {
    const [submissionStatus, setSubmissionStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation errors when user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        try {
          const response = await fetch('http://localhost:4000/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSubmissionStatus('success');
            // Optionally, you can reset the form fields after successful submission
            setFormData({ name: '', email: '', message: '' });
          } else {
            console.error('Failed to submit form');
            setSubmissionStatus('error');
          }
        } catch (error) {
          console.error('Error during form submission', error);
          setSubmissionStatus('error');
        }
      } else {
        console.log('Form validation failed');
        setSubmissionStatus('error');
      }
  };

  return (
    <div>
      <Navbar/>
      <section className="contact spad">
        <div className="section-title text-center">
          <h4 style={{ fontSize: '35px' }}>Contact Us</h4>
        </div>
        <div className="container border rounded p-4 shadow-lg mb-5">
          <div className="row">
            <div className="col-md-6">
              <div style={{ padding: '80px' }}>
                <h2 className="mb-4" style={{ textAlign: 'left', color: '#f68487', fontWeight: 600 }}>
                  Have a Question?
                </h2>
                <p style={{ textAlign: 'left', fontSize: '20px', fontFamily: 'emoji', color: 'black' }}>
                  Complete the form and we will get back to you with an answer or the contact information for
                  someone who can assist you.
                </p>
              
                <div className="custom-image-container">
                  <picture className="d-inline-block mt-4 mt-md-0">
                    <img
                      loading="lazy"
                      className="img-fluid"
                      src="/img/banner/disc.jpeg"
                      title="fashioninsta"
                      style={{height:'370px'}}
                      alt="We want to shop from this website"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact__content">
                <div className="contact__address" style={{padding:'50px'}}>
                  <div className="card mx-auto" style={{ maxWidth: '600px', border: '1px solid #e1e1e1', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                      <div className="contact__form">
                        <h5 className="text-center">Submit A Question</h5>
                        <p><strong>* Indicates a required field</strong></p>

                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">* Name:</label>
                            <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange={handleChange}  />
                            <span className="text-danger">{errors.name}</span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">* Email:</label>
                            <input type="email" name="email" className="form-control" id="mail" value={formData.email} onChange={handleChange}  />
                            <span className="text-danger">{errors.email}</span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">* Message:</label>
                            <textarea className="form-control" name="message" id="message" value={formData.message} onChange={handleChange} ></textarea>
                            <span className="text-danger">{errors.message}</span>
                          </div>
                          {submissionStatus === 'success' && (
                          <div className="text-success mt-3">Form submitted successfully!</div>
                        )}
                        {submissionStatus === 'error' && (
                          <div className="text-danger mt-3">Failed to submit form. Please try again later.</div>
                        )}
                          <button type="submit" className="btn btn-primary custom-pink-btn" style={{background: '#f68487'}}>Send Message</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <div>
      <Footer/>
      </div>
    </div>
  );
};

export default ContactForm;