import Footer from "@/components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Important Information</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re committed to transparency and want you to have all the information you need for your trading education
            journey with bwca
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 md:p-12 transition-colors duration-300">
          <div className="space-y-10">
            {/* Welcome Message */}
            <section className="text-center py-6 px-3 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Welcome to Your Trading Education Journey! 🌟
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl  mx-auto leading-relaxed">
                At bwca, we&apos;re here to support your growth and success. The information below helps ensure you have a
                clear understanding of trading education and the exciting opportunities ahead.
              </p>
            </section>

            {/* Trading Education & Opportunities */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Trading Education Journey</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Great news!</span> You&apos;re about
                  to embark on an exciting journey of financial education. Trading foreign exchange (Forex) and other
                  financial instruments offers tremendous opportunities for growth and learning.
                </p>
                <p>
                  We want you to know that like any skill worth mastering, trading involves learning curves and risks.
                  The leverage available in trading can amplify both gains and losses, which is why our comprehensive
                  education program is designed to help you understand and manage these aspects effectively.
                </p>
                <p>
                  Before you begin, we encourage you to honestly assess your financial situation, learning goals, and
                  comfort level with risk. Never invest money you can&apos;t afford to lose, and remember that our team is
                  here to support your educational journey every step of the way.
                </p>
              </div>
            </section>

            {/* Our Educational Approach */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Educational Philosophy</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  bwca is passionate about providing world-class trading education. Our courses, webinars, articles, and
                  training materials are carefully crafted to share knowledge, strategies, and insights from experienced
                  traders and educators.
                </p>
                <p>
                  While we&apos;re excited to share proven strategies and techniques, we want you to understand that all
                  educational content represents learning opportunities rather than guaranteed trading formulas. Every
                  trader&apos;s journey is unique, and success comes from applying knowledge, practicing discipline, and
                  continuous learning.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    💡 Remember: Our goal is to equip you with knowledge and skills that can serve you for a lifetime!
                  </p>
                </div>
              </div>
            </section>

            {/* Your Success Journey */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Path to Success</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  We&apos;re committed to supporting your success, and we want to set realistic expectations for your
                  journey. Trading success varies among individuals and depends on many exciting factors:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Your dedication to learning and practice</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Market conditions and opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Your available trading capital</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Risk management skills you&apos;ll develop</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Emotional discipline and mindset</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>Consistency in applying what you learn</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal & Compliance */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-amber-600 dark:text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Keeping Everything Above Board</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  As an educational institution, bwca focuses on teaching and empowering rather than managing
                  investments or executing trades. We&apos;re here to educate, inspire, and support your learning journey.
                </p>
                <p>
                  We encourage you to stay informed about regulations in your area and consult with qualified financial
                  professionals when making investment decisions. This ensures you&apos;re always operating within the
                  guidelines that apply to your situation.
                </p>
              </div>
            </section>

            {/* Our Commitment to You */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-rose-600 dark:text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Commitment to You</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  While we work hard to provide excellent educational content and support, we want to be transparent
                  about our role. We&apos;re educators and mentors, not financial advisors, and we can&apos;t guarantee specific
                  trading outcomes.
                </p>
                <p>
                  What we can promise is our dedication to your educational experience, the quality of our content, and
                  our commitment to treating your personal information with the utmost care and respect.
                </p>
              </div>
            </section>

            {/* Your Content & Privacy */}
            <section>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Protecting What Matters</h2>
              </div>
              <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Your privacy and the security of your personal information are incredibly important to us. We collect
                  and use your information responsibly, in accordance with privacy laws and our detailed Privacy Policy.
                </p>
                <p>
                  All our educational materials, including courses, videos, and resources, are created with care and are
                  protected by intellectual property laws. When you join bwca, you get personal access to these
                  materials for your educational journey.
                </p>
              </div>
            </section>

            {/* Get in Touch */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Questions? We&apos;re Here to Help!
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  If you have any questions about this information or our services, please don&apos;t hesitate to reach out.
                  We&apos;re always happy to help clarify anything for our students.
                </p>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
    <Footer />
      </div>
    </div>
  )
}
