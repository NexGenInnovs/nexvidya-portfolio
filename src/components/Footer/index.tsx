'use client';

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200 pt-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Product Column */}
          <div>
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

          {/* Help Column */}
          <div>
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

          {/* Company Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="mb-8 text-lg font-semibold text-black">Company</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:mail@Nexgen.com" className="text-body-color hover:text-primary">
                  mail@Nexgen.com
                </a>
              </li>
              <li>
                <h5 className="text-base font-medium text-black">For Sales:</h5>
                <div className="mt-2 space-y-1">
                  <p className="text-body-color">+977-980000000</p>
                  <p className="text-body-color">+977-980000000</p>
                </div>
              </li>
              <li>
                <h5 className="text-base font-medium text-black">For Support:</h5>
                <div className="mt-2 space-y-1">
                  <p className="text-body-color">01-5971473</p>
                  <p className="text-body-color">(9 A.M - 5 P.M) (SUN - FRI)</p>
                  <p className="text-body-color">Lalitpur, Nepal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-body-color/20 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-base text-body-color">
              Copyright 2025 NexGen. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-body-color hover:text-primary"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-body-color hover:text-primary"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-body-color hover:text-primary"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-body-color hover:text-primary"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-body-color hover:text-primary"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
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
