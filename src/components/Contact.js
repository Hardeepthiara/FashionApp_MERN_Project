import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using 'formData'
    console.log(formData); // For example, you can log the form data
    // You may use fetch or Axios to send the form data to your backend
    // Replace this console.log statement with your actual API call to send form data
  };

  return (
    <div>
      <Navbar />
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
                            <input type="text" name="name" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">* Email:</label>
                            <input type="email" name="email" className="form-control" id="mail" value={formData.email} onChange={handleChange} required />
                          </div>
                          <div className="form-group">
                            <label htmlFor="message">* Message:</label>
                            <textarea className="form-control" name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
                          </div>
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
      <Footer />
    </div>
  );
};

export default ContactForm;
