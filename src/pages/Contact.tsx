import React, { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isSupabaseConfigured()) {
      toast.error('Database configuration is incomplete. Please check your environment variables.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            submission_date: new Date().toISOString(),
          },
        ]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-xl text-gray-400 mb-12 text-center">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
              <Mail className="h-6 w-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400">support@pumpprotocol.com</p>
            </div>

            <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
              <MessageSquare className="h-6 w-6 mb-4" />
              <h3 className="text-xl font-bold mb-2">Discord Community</h3>
              <p className="text-gray-400">Join our Discord for real-time support</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/30 rounded-xl p-8 border border-gray-800">
            <div className="space-y-6">
              <Input
                id="name"
                type="text"
                label="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
              />

              <Input
                id="email"
                type="email"
                label="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  placeholder="Your message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;