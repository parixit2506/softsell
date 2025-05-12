import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-100 dark:bg-green-900/20 rounded-full filter blur-3xl opacity-70 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
              <span className="block">Maximize the Value of</span>
              <span className="block text-blue-600 dark:text-blue-400">Your Unused Software</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
              Turn your dormant software licenses into cash. Our secure platform helps you sell unused licenses quickly and at the best market rates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 transition duration-150 ease-in-out"
              >
                Sell My Licenses
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-8 transition duration-150 ease-in-out"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-end">
            <div className="relative mx-auto w-full max-w-md">
              <div className="shadow-xl rounded-2xl overflow-hidden transform transition-all">
                <img
                  src=".\image\Data_security_05.jpg"
                  alt="Software License Management"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
