import React, { useState } from 'react';
import { Button } from './Button';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend service
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-[#181C1F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
            CONTACT
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a story idea or need a tech writer for your publication? Let's
            discuss how I can help bring your content vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">GET IN TOUCH</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new writing opportunities, creative
              content ideas, or potential collaborations for your tech
              publication or platform.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#FF6900] mt-1">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">davidmerritt962@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#FF6900] mt-1">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">503-703-0923</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#FF6900] mt-1">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">Portland, OR</p>
                </div>
              </div>
            </div>
            {/* <div className="mt-10">
              <h4 className="font-bold mb-4">CONNECT WITH ME</h4>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#FF6900] transition-colors">
                  <LinkedinIcon size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6900] transition-colors">
                  <GithubIcon size={24} />
                </a>
                <a href="#" className="text-white hover:text-[#FF6900] transition-colors">
                  <TwitterIcon size={24} />
                </a>
              </div>
            </div> */}
          </div>
          <div>
            <form onSubmit={handleSubmit} className="bg-[#0F1112] p-6 rounded-lg border border-[#22272B]">
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-2">
                  Full Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-[#22272B] rounded-lg focus:outline-none focus:border-[#FF6900] text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-[#22272B] rounded-lg focus:outline-none focus:border-[#FF6900] text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block font-medium mb-2">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[#22272B] border border-[#22272B] rounded-lg focus:outline-none focus:border-[#FF6900] text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-[#22272B] border border-[#22272B] rounded-lg focus:outline-none focus:border-[#FF6900] text-white resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
}