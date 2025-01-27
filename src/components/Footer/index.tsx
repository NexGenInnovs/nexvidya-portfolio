'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200 pt-16 lg:pt-24 border-t-2 border-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side columns container */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div className="w-full">
              <div className="mb-12 lg:mb-16">
                <h4 className="mb-8 text-lg font-semibold text-black">Product</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-body-color hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-body-color hover:text-primary">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/request-demo" className="text-body-color hover:text-primary">
                      Request a Demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-body-color hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/event" className="text-body-color hover:text-primary">
                      Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/connect" className="text-body-color hover:text-primary">
                      Connect
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Help Column */}
            <div className="w-full">
              <div className="mb-12 lg:mb-16">
                <h4 className="mb-8 text-lg font-semibold text-black">Help?</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/faq" className="text-body-color hover:text-primary">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-body-color hover:text-primary">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/help-center" className="text-body-color hover:text-primary">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-body-color hover:text-primary">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-body-color hover:text-primary">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-body-color hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Column */}
            <div className="w-full">
              <div className="mb-12 lg:mb-16">
                <h4 className="mb-8 text-lg font-semibold text-black">Company</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:info@nexgeninnovs.com" className="text-body-color hover:text-primary">
                      info@nexgeninnovs.com
                    </a>
                  </li>
                  <li>
                    <h5 className="text-base font-medium text-black">For Sales:</h5>
                    <div className="mt-2 space-y-1">
                      <p className="text-body-color">+977-9741717545</p>
                      <p className="text-body-color">+977-9863454227</p>
                      <p className="text-body-color">+977-9868000277</p>
                    </div>
                  </li>
                  <li>
                    <h5 className="text-base font-medium text-black">For Support:</h5>
                    <div className="mt-2 space-y-1">
                      <p className="text-body-color">+977-9741717545</p>
                      <p className="text-body-color">(9 A.M - 5 P.M) (SUN - FRI)</p>
                      <p className="text-body-color">Lalitpur, Nepal</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Map Column - Now on right side */}
          <div className="lg:col-span-4">
            <div className="mb-12 lg:mb-16">
              <h4 className="mb-8 text-lg font-semibold text-black">Find Us</h4>
              <div className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0305646475118!2d85.31816937536394!3d27.67761247619401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c5d22c9c11%3A0x98a947b0d9a50e32!2sNexGen%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1706410195983!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-6">
                <a
                  href="https://goo.gl/maps/YQ8YEo6R7YZL6QXXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <span>View Larger Map</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t-2 border-gray-300 pt-8">
          <div className="mb-8">
            <p className="text-center text-base text-body-color">
              Copyright 2025 NexGen. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/nexgeninnovs"
                className="text-body-color hover:text-primary"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/nexgen-innovations-pvt-ltd/"
                className="text-body-color hover:text-primary"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nexgeninnovs/"
                className="text-body-color hover:text-primary"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;