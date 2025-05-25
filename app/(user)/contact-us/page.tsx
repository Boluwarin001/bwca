import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Link from "next/link"; // Import Link for internal navigation
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - BWCA Forex Training Academy",
  description: "Get in touch with BWCA Forex Training Academy. We&#39;re here to help with your questions about our forex training programs, enrollment, and more.",
};

export default function ContactPage() {
  return (
    <div>
    <div className="min-h-screen">

      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Get in Touch Intro */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch with us</h2>
          <p className=" max-w-3xl mx-auto">
            Our team is ready to answer your questions about BWCA Forex Training Academy courses, enrollment, and more.
            Choose your preferred method of contact below.
          </p>
        </div>

        {/* Phone and Email Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Phone Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-md"> {/* Assuming bg-card and text-card-foreground are defined in your Tailwind config/globals.css */}
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone h-8 w-8 text-teal-600 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <p className=" mt-2">Our support team is available during business hours.</p>
                  <div className="mt-4 space-y-2">
                    <p className="font-medium">Main Office:</p>
                    <p className="">+1 (234) 567-8900</p>
                    <p className="font-medium mt-2">Student Support:</p>
                    <p className="">+1 (234) 567-8901</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-md">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail h-8 w-8 text-teal-600 mt-0.5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className=" mt-2">Send us an email and we&#39;ll respond within 24 hours.</p>
                  <div className="mt-4 space-y-2">
                    <p className="font-medium">General Inquiries:</p>
                    <p className="">info@bwcaforex.com</p>
                    <p className="font-medium mt-2">Support:</p>
                    <p className="">support@bwc.academy</p>
                    <p className="font-medium mt-2">Partnerships:</p>
                    <p className="">partners@bwc.academy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* New York Location */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-md">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-8 w-8 text-teal-600 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl">New York (Headquarters)</h3>
                    <div className="mt-4 space-y-1">
                      <p className="">123 Trading Street, Suite 400</p>
                      <p className="">New York, NY 10001</p>
                      <p className="">United States</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="https://maps.google.com/?q=123+Trading+Street,New+York,NY" // Example: Replace with actual Google Maps link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
                      >
                        View on Google Maps
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* London Location */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-md">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-8 w-8 text-teal-600 mt-0.5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-xl">London</h3>
                    <div className="mt-4 space-y-1">
                      <p className="">456 Forex Avenue</p>
                      <p className="">London, EC2A 4NE</p>
                      <p className="">United Kingdom</p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="https://maps.google.com/?q=456+Forex+Avenue,London" // Example: Replace with actual Google Maps link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
                      >
                        View on Google Maps
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right ml-1 h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-md mb-12">
          <div className="p-6">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock h-8 w-8 text-teal-600 mt-0.5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <h3 className="font-semibold text-xl">Office Hours</h3>
                <p className="mt-2">Our offices are open during the following hours:</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">New York Office:</p>
                    <ul className="mt-2 space-y-1 ">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                      <li>Saturday: 10:00 AM - 2:00 PM EST</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">London Office:</p>
                    <ul className="mt-2 space-y-1">
                      <li>Monday - Friday: 9:00 AM - 6:00 PM GMT</li>
                      <li>Saturday: 10:00 AM - 2:00 PM GMT</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Follow us on social media for the latest updates, trading tips, and educational content.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com" // Replace with your actual Facebook link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors"
              aria-label="BWCA Forex Training Academy on Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook h-8 w-8 text-gray-700"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com" // Replace with your actual Twitter link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors"
              aria-label="BWCA Forex Training Academy on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter h-8 w-8 text-gray-700"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com" // Replace with your actual Instagram link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors"
              aria-label="BWCA Forex Training Academy on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram h-8 w-8 text-gray-700"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://linkedin.com" // Replace with your actual LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 p-4 rounded-full transition-colors"
              aria-label="BWCA Forex Training Academy on LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin h-8 w-8 text-gray-700"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className=" mb-6 max-w-2xl mx-auto">
            Before contacting us, you might find answers to your questions in our frequently asked questions section.
          </p>
          <Link
            href="/faqs" // Assuming your FAQs page is at /faqs
            className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 inline-flex items-center"
          >
            Visit our FAQ Page
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right ml-2 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}