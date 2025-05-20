import Footer from "@/components/Footer";
import type { Metadata } from "next";
import React from "react"; // Import React, good practice though Next.js might handle it implicitly

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently Asked Questions",
};

// Renamed to FaqsPage for convention, but FaqsLayout is also fine.
export default function FaqsPage() {
  return (
    <div>
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg">Find answers to the most common questions about BWCA Forex Training Academy</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-lg shadow-lg p-4 flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search h-5 w-5 text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <input // Corrected input tag
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 w-full"
              placeholder="Search for answers..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section: About BWCA Forex Academy */}
          <div>
            <h2 className="text-2xl font-bold mb-6">About BWCA Forex Academy</h2>
            <div className="space-y-4" data-orientation="vertical">
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button type="button" aria-controls="radix-«r1»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r0»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4" data-radix-collection-item="">
                    What is BWCA Forex Training Academy?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed" id="radix-«r1»" role="region" aria-labelledby="radix-«r0»" data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={{ // Corrected style attribute
                    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                  } as React.CSSProperties}
                >
                  {/* Actual answer content would go here */}
                    <p className="py-4">BWCA Forex Training Academy is a premier online platform dedicated to providing comprehensive forex trading education and resources. Our mission is to empower individuals with the knowledge and skills needed to succeed in the forex market.</p>
                </div>
              </div>
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button type="button" aria-controls="radix-«r3»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r2»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4" data-radix-collection-item="">
                    How is BWCA different from other forex training programs?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>support@bwc.academy
                <div
                  data-state="closed" id="radix-«r3»" role="region" aria-labelledby="radix-«r2»" data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={{
                    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                  } as React.CSSProperties}
                ></div>
              </div>
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button type="button" aria-controls="radix-«r5»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r4»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4" data-radix-collection-item="">
                    Do I need prior trading experience to join BWCA?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed" id="radix-«r5»" role="region" aria-labelledby="radix-«r4»" data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={{
                    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                  } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>

          {/* Section: Courses & Training */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Courses & Training</h2>
            <div className="space-y-4" data-orientation="vertical">
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button type="button" aria-controls="radix-«r7»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r6»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4" data-radix-collection-item="">
                    What courses does BWCA offer?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed" id="radix-«r7»" role="region" aria-labelledby="radix-«r6»" data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={{
                    "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                    "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                  } as React.CSSProperties}
                ></div>
              </div>
              {/* Repeat structure for other questions in this section, applying style and SVG fixes */}
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«r9»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«r8»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                    data-radix-collection-item="">How long does it take to complete a course?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«r9»"  role="region" aria-labelledby="radix-«r8»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
              </div>
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                  <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rb»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«ra»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                          data-radix-collection-item="">Are the courses online or in-person?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                  <div
                      data-state="closed" id="radix-«rb»"  role="region" aria-labelledby="radix-«ra»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                      style={{
                          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                      } as React.CSSProperties}></div>
              </div>
              <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                  <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rd»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rc»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                          data-radix-collection-item="">Do I get a certificate after completing a course?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                  <div
                      data-state="closed" id="radix-«rd»"  role="region" aria-labelledby="radix-«rc»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                      style={{
                          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                      } as React.CSSProperties}></div>
              </div>
            </div>
          </div>

          {/* Section: Payment & Enrollment */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment & Enrollment</h2>
            <div className="space-y-4" data-orientation="vertical">
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rf»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«re»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">How much do the courses cost?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rf»"  role="region" aria-labelledby="radix-«re»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rh»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rg»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">Do you offer payment plans?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rh»"  role="region" aria-labelledby="radix-«rg»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rj»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«ri»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">What is your refund policy?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rj»"  role="region" aria-labelledby="radix-«ri»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rl»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rk»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">What payment methods do you accept?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rl»"  role="region" aria-labelledby="radix-«rk»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            </div>
          </div>

          {/* Section: Trading & Support */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Trading & Support</h2>
            <div className="space-y-4" data-orientation="vertical">
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rn»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rm»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">Do you provide trading signals or recommendations?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rn»"  role="region" aria-labelledby="radix-«rm»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rp»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«ro»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">What kind of support do students receive?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rp»"  role="region" aria-labelledby="radix-«ro»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rr»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rq»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">Do you recommend specific brokers?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rr»"  role="region" aria-labelledby="radix-«rq»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            <div data-state="closed" data-orientation="vertical" className="border rounded-lg px-4">
                <h3 data-orientation="vertical" data-state="closed" className="flex"><button type="button" aria-controls="radix-«rt»" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-«rs»" className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-medium py-4"
                        data-radix-collection-item="">How much money do I need to start trading forex?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg></button></h3>
                <div
                    data-state="closed" id="radix-«rt»"  role="region" aria-labelledby="radix-«rs»" data-orientation="vertical" className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" 
                    style={{
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                    } as React.CSSProperties}></div>
            </div>
            </div>
          </div>
        </div> {/* Closes space-y-12 */}

        <div className="mt-16 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help you with any questions you might have about our forex training programs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1">Contact Us</a>
            <a href="tel:+1234567890" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1">Call: (123) 456-7890</a>
          </div>
        </div>
      </div> {/* Closes max-w-4xl mx-auto py-12 ... */}
    </div>

    <Footer /> {/* Assuming Footer is a component that handles the footer section */}
    </div> // Closes the main div
  );
}