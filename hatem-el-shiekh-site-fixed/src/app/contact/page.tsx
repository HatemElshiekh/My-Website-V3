'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        window.location.href = '/thank-you';
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (err) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="container py-16 max-w-2xl">
      <h1 className="font-serif text-4xl">Contact</h1>
      <p className="mt-3 text-black/70">Tell me what you need. I\'ll reply soon.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            rows={5}
            className="w-full rounded-md border border-black/10 bg-white px-3 py-2 text-base text-black/80 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}
