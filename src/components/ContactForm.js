'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F] mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#F5F5F7] border-0 focus:ring-2 focus:ring-[#0071E3] transition-shadow"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F] mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-[#F5F5F7] border-0 focus:ring-2 focus:ring-[#0071E3] transition-shadow"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="w-full px-4 py-3 rounded-lg bg-[#F5F5F7] border-0 focus:ring-2 focus:ring-[#0071E3] transition-shadow"
          placeholder="Tell me about your project..."
          required
        ></textarea>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="bg-[#0071E3] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0077ED] transition-colors duration-300">
          Send Message
        </button>
      </div>
    </form>
  );
}
