/**
 * The `Contact` component provides a contact form that allows users to send an email message to the website owner.
 *
 * The component uses the `emailjs-com` library to send the email message. It includes form fields for the user's name, email, and message, and performs client-side validation to ensure that all required fields are filled out correctly.
 *
 * When the user submits the form, the `handleSubmit` function is called, which first validates the form data using the `validateForm` function. If the form is valid, it sends the email using the `emailjs.send` method, and displays a success message to the user. If there is an error sending the email, an error message is displayed instead.
 *
 * The component also includes some basic styling using Bootstrap classes.
 */
import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
          formData,
          "64t-Yu62Af0AXAF-s" // Replace with your EmailJS user ID
        )
        .then((response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
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
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
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
                <label htmlFor="email" className="form-label">
                  Email
                </label>
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
                <label htmlFor="message" className="form-label">
                  Message
                </label>
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
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
