import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, text: 'kasunlakshitha998.com', href: 'mailto:kasunlakshitha998.com' },
    { icon: Phone, text: '0766418699', href: 'tel:+94766418699' },
    { icon: MapPin, text: 'Malabe, Sri Lanka', href: 'https://maps.google.com/?q=Malabe,Sri+Lanka' }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="relative mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
            Get in Touch
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently looking for internship opportunities. Feel free to reach out
                if you have any questions or would like to discuss potential opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            {['name', 'email', 'message'].map((field) => (
              <div key={field} className="relative">
                <label
                  htmlFor={field}
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    focusedField === field
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    rows={4}
                    value={formState[field]}
                    onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    value={formState[field]}
                    onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                )}
                <div className="absolute right-3 top-9 transform scale-0 transition-transform duration-200">
                  {formState[field] && <CheckCircle className="w-5 h-5 text-green-500" />}
                </div>
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`
                w-full px-6 py-3 rounded-lg text-white font-medium
                transition-all duration-300 transform
                ${isSuccess
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                }
                flex items-center justify-center gap-2
                disabled:opacity-75 disabled:cursor-not-allowed
              `}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Sent Successfully!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}