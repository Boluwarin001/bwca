'use client'


import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="flex flex-col space-y-4 justify-center">
            <Link href="/" className="flex justify-center items-center space-x-2 mb-4">
              <Image src="/logo-full-green.png" alt="BWCA logo" width={200} height={200} />
            </Link>

            <div className="flex space-x-4 pt-2 justify-center">
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="about"  className="hover:text-green-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/search?term=a" className="hover:text-green-500 transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/my-courses" className="hover:text-green-500 transition-colors text-sm">
                  My Courses
                </Link>
              </li>
              <li>
                <Link href="faqs" className="hover:text-green-500 transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="contact-us" className="hover:text-green-500 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="privacy-policy"  className="hover:text-green-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="terms" 
                  className="hover:text-green-500 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="refund-policy"  className="hover:text-green-500 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" onClick={(e) => e.preventDefault()} className="hover:text-green-500 transition-colors text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-green-500 mr-2 mt-0.5" />
                <span className="text-sm">support@bwc.academy</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-green-500 mr-2 mt-0.5" />
                <span className="text-sm">+44 (0797) 000-8900</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-green-500 mr-2 mt-0.5" />
                <span className="text-sm">
                  123 Trading Street, Financial District
                  <br />
                  Manchester M3 4DR, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Blessed Wealth Creators Academy. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-green-500 transition-colors text-sm">
                Sitemap
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-green-500 transition-colors text-sm">
                Accessibility
              </Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-gray-500 hover:text-green-500 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

