import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        console.log('Attempting to send email...'); // Debug log
        const result = await emailjs.sendForm(
          'service_t7cpnd2',
          'template_296h4xg', // Replace with the actual template ID from your dashboard
          form.current,
          'zj9YeyNEBOtwb9gUj'
        );
        console.log('Email sent successfully:', result); // Debug log

        setFormData({ user_name: '', user_email: '', message: '' });
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Detailed error:', error); // More detailed error logging
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-heading">
        <span className="number">04.</span>
        <h2>Get In Touch</h2>
        <div className="line"></div>
      </div>

      <div className="contact__content">
        <div className="contact__text">
          <h3 className="gradient-text">Let's Talk!</h3>
          <p>
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact__links">
            <a href="mailto:srikanthganji31@gmail.com" className="contact__link">
              <i className="fas fa-envelope"></i>
              <span>srikanthganji31@gmail.com</span>
            </a>
            <a href="https://github.com/srikanth-31" className="contact__link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/srikanth-ganji" className="contact__link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <form ref={form} className="contact__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="user_name"
              placeholder="Your Name" 
              required 
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="user_email"
              placeholder="Your Email" 
              required 
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={6} 
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 