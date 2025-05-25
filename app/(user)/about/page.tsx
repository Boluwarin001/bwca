import Footer from "@/components/Footer"
import Link from "next/link"


export default function AboutPage() {
  return (
    <div className="min-h-screen ">
     

      {/* Hero Section */}
    <section className="relative py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10">
              <div className="w-96 h-96 rounded-full bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <h1 className="relative text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              About <span className="text-emerald-600 dark:text-emerald-400">BWC Academy</span>
            </h1>
            <p className="relative text-xl text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-semibold">
              Pluck up and break down poor mindsets. Destroy and overthrow poverty. Build and plant wealth.
            </p>
            <p className="relative text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Empowering Kingdom-minded traders to achieve financial independence through comprehensive Forex education
              and biblical principles
            </p>
            <div className="relative flex justify-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-2"></span>
                Founded in 2025
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-2"></span>
                Kingdom-minded approach
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-2"></span>
                Forex specialists
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        {/* Vision Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold text-emerald-700 mb-6 text-center">Our Vision</h2>
            <div className="space-y-6 ">
              <p className="leading-relaxed">
                At BWC Academy, our vision is to empower individuals to transcend the limitations of generational
                poverty through comprehensive trading education. We recognize that poverty often runs deep across
                generations, and our goal is to disrupt these cycles by equipping people with the knowledge and skills
                to achieve financial independence.
              </p>
              <p className="leading-relaxed">
                Through our training programs, we offer a lifetime skill—trading—that unlocks new opportunities beyond
                traditional employment. This skill empowers individuals to break free from their past limitations and
                build a legacy of prosperity for future generations. By embracing trading as a powerful tool for
                wealth-building, our participants can break long-standing patterns of poverty that have affected
                families for years.
              </p>
              <p className="leading-relaxed">
                Our approach goes beyond financial literacy; we nurture a Kingdom mindset rooted in Matthew 6:33,
                prioritizing the Kingdom of God and His righteousness. We believe that financial freedom is not just for
                personal gain but as a means of service and stewardship. Our training integrates biblical principles
                with practical trading knowledge, guiding participants to succeed in the markets while deepening their
                spiritual growth and cultivating a heart for God.
              </p>
              <p className="leading-relaxed">
                At BWC Academy, we aim to inspire a movement of empowered, faith-driven traders committed to building
                enduring legacies and breaking free from the chains of poverty.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Commitment</h3>
              <p className="leading-relaxed">
                We are dedicated to the success of our students, offering not just training but ongoing mentorship and
                support to ensure each individual reaches their full potential.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Discipline & Resilience</h3>
              <p className="leading-relaxed">
                Success in Forex trading requires discipline and emotional resilience. We teach our students to stay
                committed to their strategies and bounce back from setbacks.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Excellence</h3>
              <p className="leading-relaxed">
                Excellence is at the heart of everything we do. We hold ourselves and our students to the highest
                standards, constantly striving for improvement.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Respect</h3>
              <p className=" leading-relaxed">
                We believe respect is foundational to creating a positive, collaborative environment where every learner
                feels valued and encouraged.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Love</h3>
              <p className="leading-relaxed">
                Love is the driving force behind our mission. We genuinely care about helping individuals transform
                their lives through education.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Teachable Spirit</h3>
              <p className="leading-relaxed">
                A teachable spirit is key to continuous growth. We encourage our students to approach their trading
                journey with openness and humility.
              </p>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Integrity</h3>
              <p className=" leading-relaxed">
                Integrity is the cornerstone of all our operations. We uphold honesty, transparency, and fairness in
                every interaction.
              </p>
            </div>
          </div>
        </div>

        {/* Training Process */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-emerald-700 mb-12 text-center">Our Training Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Pre-Academy Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Presentations</h4>
                    <p className=" text-sm">
                      Two monthly presentations covering our training structure, values, and trading opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Bootcamp</h4>
                    <p className=" text-sm">
                      Cohort A or B bootcamp covering trading techniques and our mission of financial empowerment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Interview/Bridge</h4>
                    <p className=" text-sm">
                      Assessment to ensure commitment and alignment with our values and training approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Internal Academy Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monthly Bootcamp</h4>
                    <p className=" text-sm">
                      One-week intensive covering Forex trading fundamentals and advanced strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Lessons</h4>
                    <p className="text-sm">
                      Unrecorded, timetabled sessions for real-time discussions and interactive learning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Module Access</h4>
                    <p className=" text-sm">
                      Comprehensive modules covering advanced Forex strategies with structured timetables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to Excellence</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-emerald-100">Commitment to Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-emerald-100">Community Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-emerald-100">Core Values</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">2025</div>
                <div className="text-emerald-100">Launch Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold mb-4">Ready to Break Free from Generational Poverty?</h2>
            <p className="mb-8 leading-relaxed">
              Join BWC Academy and learn the lifetime skill of Forex trading. Build wealth, break cycles, and create a
              legacy that honors the Kingdom of God.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-teal-600 transition-all"
              >
                View Our Training Programs
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>

   <Footer />
    </div>
  )
}
