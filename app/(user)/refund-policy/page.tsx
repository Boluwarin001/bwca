import Link from "next/link"
import { ArrowLeft, Heart, Shield, Clock } from "lucide-react"
import Footer from "@/components/Footer"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen  ">
     

      {/* Hero Section */}
      <section className="bg-emerald-50 dark:bg-emerald-900/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <Heart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Our Refund Policy
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              At BWC Academy, we&apos;re committed to your success and satisfaction. We understand that sometimes
              circumstances change, and we want to make our refund process as clear and fair as possible.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-700 dark:text-emerald-300">
              <Shield className="w-4 h-4 mr-2" />
              Your investment is protected
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-10">
          {/* Our Commitment */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center">
              <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mr-3" />
              Our Commitment to You
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              We believe in the transformative power of our Forex trading education and our mission to help you break
              free from generational poverty. Our refund policy reflects our commitment to fairness while protecting the
              integrity of our comprehensive training programs.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              We want every student to succeed, and we&apos;re here to support you throughout your journey to financial
              independence through Kingdom-minded trading principles.
            </p>
          </section>

          {/* Subscription Plans Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              Understanding Your Subscription
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3">Premium Plan</h3>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">$124.99/month</div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• 25% off public events</li>
                  <li>• Access to general resources</li>
                  <li>• Monthly bootcamp access</li>
                  <li>• Live lesson participation</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 border border-emerald-200 dark:border-emerald-700">
                <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3">Elite Plan</h3>
                <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">$199.99/month</div>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li>• Weekly one-on-one sessions</li>
                  <li>• Private calendar access</li>
                  <li>• Specialized strategy modules</li>
                  <li>• Free access to all events</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Eligibility */}
          <section className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              When You&apos;re Eligible for a Refund
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">✅ 7-Day Money-Back Guarantee</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  If you&apos;re not completely satisfied within the first 7 days of your subscription, we&apos;ll provide a full
                  refund. This gives you time to experience our bootcamp and initial training materials.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">✅ Technical Issues</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  If technical problems on our end prevent you from accessing your paid content for more than 48 hours,
                  you may be eligible for a prorated refund.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">✅ Billing Errors</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  If you&apos;ve been charged incorrectly due to a system error, we&apos;ll promptly investigate and refund any
                  erroneous charges.
                </p>
              </div>
            </div>
          </section>

          {/* When Refunds Are Not Available */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
              When Refunds Are Not Available
            </h2>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
              <p className="text-amber-800 dark:text-amber-200 mb-4">
                <strong>Please note:</strong> To maintain the integrity of our educational programs and protect our
                intellectual property, refunds are not available in the following situations:
              </p>
              <ul className="space-y-3 text-amber-700 dark:text-amber-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mr-3 mt-2"></span>
                  <span>After the 7-day money-back guarantee period has expired</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mr-3 mt-2"></span>
                  <span>
                    If you&apos;ve violated our terms of service (unauthorized recording, content distribution, etc.)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mr-3 mt-2"></span>
                  <span>
                    For trading losses or unsuccessful trading outcomes (our education doesn&apos;t guarantee profits)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mr-3 mt-2"></span>
                  <span>If you&apos;ve been removed from the program due to inappropriate conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mr-3 mt-2"></span>
                  <span>For partial months or unused portions of your subscription</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How to Request a Refund */}
          <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">How to Request a Refund</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              We&apos;ve made the refund process simple and straightforward. Here&apos;s how to request a refund:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Contact Our Support Team</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Email us at <strong>support@bwcacademy.com</strong> with <q>Refund Request</q> in the subject line
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    Provide Required Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Include your full name, email address, subscription plan, and reason for the refund request
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">We&apos;ll Review Your Request</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Our team will review your request within 2-3 business days and respond with next steps
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Refund Processing</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Approved refunds are processed through Paystack and typically appear in your account within 5-7
                    business days
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Cancellation vs Refund */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Cancellation vs. Refund</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  Subscription Cancellation
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  You can cancel your subscription at any time to prevent future charges. You&apos;ll continue to have access
                  until the end of your current billing period.
                </p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  ✓ No refund for current period, but no future charges
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Refund Request</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  A refund returns money for charges already made, subject to our refund policy terms and eligibility
                  requirements.
                </p>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  ✓ Money back for eligible situations within policy terms
                </p>
              </div>
            </div>
          </section>

          {/* Special Circumstances */}
          <section className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Special Circumstances</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              We understand that life can present unexpected challenges. If you&apos;re facing special circumstances such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400 mb-4">
              <li>Serious medical emergencies</li>
              <li>Unexpected financial hardship</li>
              <li>Military deployment</li>
              <li>Other extraordinary situations</li>
            </ul>
            <p className="text-purple-700 dark:text-purple-300">
              Please reach out to us directly. While we can&apos;t guarantee a refund outside our standard policy, we&apos;re
              committed to working with you to find a solution that honors both your situation and our community&apos;s
              needs.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Questions About Refunds?</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Our friendly support team is here to help! We&apos;re committed to making your experience with BWC Academy as
              positive as possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Contact Information</h3>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Email:</strong> support@bwcacademy.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 24 hours
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Office Hours</h3>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <p>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST
                  </p>
                  <p>
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM EST
                  </p>
                  <p>
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Message */}
          <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Our Promise to You</h2>
            <p className="text-emerald-100 leading-relaxed max-w-2xl mx-auto">
              At BWC Academy, we&apos;re not just teaching trading—we&apos;re building a community of Kingdom-minded wealth
              creators. Your success is our success, and we&apos;re committed to supporting you every step of the way on your
              journey to financial independence and breaking generational poverty.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
              >
                Get in Touch
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
    <Footer />
    </div>
  )
}
