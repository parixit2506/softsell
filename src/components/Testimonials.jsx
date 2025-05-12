import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "SoftSell helped us recover over $50,000 from unused enterprise software licenses. Their valuation was spot on and payment was processed within 24 hours. Absolutely impressive!",
      author: "Sarah Johnson",
      role: "IT Director",
      company: "Quantum Innovations"
    },
    {
      content: "As a startup scaling down certain operations, we had several premium licenses sitting idle. SoftSell's platform was intuitive, secure, and their team provided excellent support throughout the process.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "NextGen Solutions"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Don't just take our word for it. Here's what companies using SoftSell have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-300 font-medium">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;