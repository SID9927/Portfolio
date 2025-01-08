import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_99sid", // Replace with your EmailJS service ID
          "template_cxoahzh", // Replace with your EmailJS template ID
          {
            ...formData,
            subject: formData.subject,
          },
          "64t-Yu62Af0AXAF-s" // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "", subject: "" });
          setErrors({});
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        });
    }
  };
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        {/* Contact Details */}
        <div className="row mb-4">
          <div className="col text-center neumorphism-card">
            <FaPhone size={30} className="mb-2 icon" />
            <div className="contact-label">Mobile</div>
            <div className="contact-detail">(+91) 9927666062</div>
          </div>
          <div className="col text-center neumorphism-card">
            <FaEnvelope size={30} className="mb-2 icon" />
            <div className="contact-label">Email</div>
            <div className="contact-detail">5065sid@gmail.com</div>
          </div>
          <div className="col text-center neumorphism-card">
            <FaMapMarkerAlt size={30} className="mb-2 icon" />
            <div className="contact-label">Location</div>
            <div className="contact-detail">Noida, India</div>
          </div>
        </div>
        {/* Contact Email Service */}
        <div className="row">
          <div className="col-md-6 ">
            <form onSubmit={handleSubmit} className="information-row">
              <div className="mb-3">
                <input
                  type="text"
                  className={`contact form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className={`contact form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`contact form-control ${
                    errors.subject ? "is-invalid" : ""
                  }`}
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && (
                  <div className="invalid-feedback">{errors.subject}</div>
                )}
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <textarea
                className={`contact contact-textarea form-control ${
                  errors.message ? "is-invalid" : ""
                }`}
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="btn btn-neumorphism"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
