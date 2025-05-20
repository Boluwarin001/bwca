import { Award, BookOpen, Clock, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-6 pb-10 ">
      <div className="container mx-auto px-4">
        

        {/* Hero Section */}
        <div className="mb-8 py-8 rounded-3xl flex flex-wrap lg:items-center max-w-7xl mx-auto">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-lg">
              <span className="inline-block mb-3 text-sm text-green-800 font-bold uppercase tracking-widest">
                Blessed Wealth Creators Academy
              </span>
              <h1 className="text-5xl font-bold text-white-900 leading-tight">
                Learn How to Trade <span className="text-green-800">Profitably</span>
              </h1>
              <p className="mt-4 text-lg text-white-600">
                Get step-by-step mentorship from experienced traders. Master market analysis, risk management, and profitable trading strategies.
              </p>
              <div className="mt-6 flex space-x-4">
                <a className="px-6 py-3 text-sm font-bold text-white bg-green-500 rounded-full hover:bg-green-600" href="/my-courses">
                  Get Started
                </a>
                <a className="px-6 py-3 text-sm font-bold text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200" href="/my-courses">
                  My Courses
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 p-8 flex justify-center">
            <Image className="w-full max-w-md rounded-3xl" src="/work.png" width={448} height={576} alt="Forex Trading Academy" />
          </div>
        </div>

        {/* Why Trust Us Section */}

        <div className="max-w-7xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Trust Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Seasoned Coaches */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6">
                <Award className="w-16 h-16 text-green-800" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seasoned Coaches</h3>
              <p className="text-gray-400">
                Our instructors have 10+ years of trading experience in various market conditions and are committed to your
                success.
              </p>
            </div>

            {/* Commitment */}
            <div className=" p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6">
                <Clock className="w-16 h-16 text-green-800" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Commitment</h3>
              <p className="text-gray-400">
                We are dedicated to your journey with ongoing support, mentorship, and resources long after you complete our
                courses.
              </p>
            </div>

            {/* Elite Teaching */}
            <div className=" p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6">
                <BookOpen className="w-16 h-16 text-green-800" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Elite Teaching</h3>
              <p className="text-gray-400">
                Our curriculum combines theory with practical application, designed to transform beginners into confident
                traders.
              </p>
            </div>

            {/* Great Reviews */}
            <div className=" p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="mb-6">
                <Star className="w-16 h-16 text-green-800" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Great Reviews</h3>
              <p className="text-gray-400">
                Join hundreds of successful students who have transformed their trading careers with our proven methods.
              </p>
            </div>

        </div>
        </div>


        {/* Trusted By Section */}
        {/* <div className="px-8 py-11 rounded-3xl">
          <h3 className="text-center text-lg font-semibold text-gray-700">Trusted by 100s of traders worldwide</h3>
        </div> */}


      </div>
    </section>
  );
}
