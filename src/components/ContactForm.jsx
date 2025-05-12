import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    "Enterprise Software",
    "Design Tools",
    "Development Tools",
    "Cloud Services",
    "Security Software",
    "Business Applications",
    "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Get a Free Valuation
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Fill out the form below and our team will get back to you with a valuation for your software licenses.
            </p>
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">Thank you!</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Your information has been received. Our team will contact you shortly with your license valuation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full py-3 px-4 border ${
                        errors.name ? 'border-red-300 dark:border-red-700' : 'border-gray-300 dark:border-gray-600'
                      } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full py-3 px-4 border ${
                        errors.email ? 'border-red-300 dark:border-red-700' : 'border-gray-300 dark:border-gray-600'
                      } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Company *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`block w-full py-3 px-4 border ${
                        errors.company ? 'border-red-300 dark:border-red-700' : 'border-gray-300 dark:border-gray-600'
                      } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    License Type *
                  </label>
                  <div className="mt-1">
                    <select
                      name="licenseType"
                      id="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`block w-full py-3 px-4 border ${
                        errors.licenseType ? 'border-red-300 dark:border-red-700' : 'border-gray-300 dark:border-gray-600'
                      } rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white`}
                    >
                      <option value="">Select a license type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.licenseType && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.licenseType}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Tell us about your licenses or any specific questions"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;