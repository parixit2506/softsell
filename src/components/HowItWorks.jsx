import { Upload, DollarSign, ThumbsUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-blue-500" />,
      title: 'Upload Your License',
      description: 'Simply upload your software license details through our secure portal.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-green-500" />,
      title: 'Get Instant Valuation',
      description: 'Our AI-powered system provides a competitive market valuation in minutes.'
    },
    {
      icon: <DollarSign className="h-10 w-10 text-purple-500" />,
      title: 'Get Paid Quickly',
      description: 'Accept the offer and receive payment through your preferred method within 48 hours.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Turn your unused software licenses into cash in just three simple steps.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mx-auto">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white text-center">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400 text-center">
                  {step.description}
                </p>
                
                {/* Arrow connecting steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="h-8 w-8 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;