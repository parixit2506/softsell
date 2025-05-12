import { ShieldCheck, Zap, DollarSign, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-500" />,
      title: 'Secure Transactions',
      description: 'Bank-level encryption and secure payment processing protect your data and financial information.'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-500" />,
      title: 'Fast Processing',
      description: 'Get valuations within minutes and receive payment in as little as 48 hours after approval.'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-500" />,
      title: 'Best Market Rates',
      description: 'Our AI-powered market analysis ensures you get top dollar for your software licenses.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Expert Support',
      description: 'Our team of software licensing experts is available to help throughout the entire process.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose SoftSell
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            We provide the most secure, efficient, and profitable way to resell your software licenses.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;