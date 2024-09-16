import React, { useState } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            'service_99sid', // Replace with your EmailJS service ID
            'template_cxoahzh', // Replace with your EmailJS template ID
            formData,
            '64t-Yu62Af0AXAF-s' // Replace with your EmailJS user ID
        )
        .then((response) => {
            console.log('Email sent successfully:', response);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send message. Please try again.');
        });
    };
    
      return (
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Contact
