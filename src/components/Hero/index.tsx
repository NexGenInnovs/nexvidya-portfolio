import Link from "next/link";
import Image from "next/image";

const features = [
  { id: 1, text: "Student Management" },
  { id: 2, text: "Staff Management" },
  { id: 3, text: "Attendance Tracking" },
  { id: 4, text: "Fee Management" },
  { id: 5, text: "Exam Management" },
  { id: 6, text: "Library Management" },
  { id: 7, text: "Transport Management" },
  { id: 8, text: "Parent Portal" },
];

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[150px] pb-16 md:pt-[180px] md:pb-[120px] xl:pt-[210px] xl:pb-[160px] 2xl:pt-[240px] 2xl:pb-[180px] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-200 px-6 py-16 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Content */}
            <div className="max-w-2xl">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Complete School & College
                <span className="block text-blue-600">Management System</span>
              </h1>
              
              <p className="mb-8 text-lg text-gray-600">
                Streamline your educational institution with our comprehensive management solution.
                From attendance to finances, We have got everything covered.
              </p>

              {/* Features Grid */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href="/request-demo"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Request Free Demo →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
                >
                  Contact Sales
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </Link>
              </div>

              {/* Support Email */}
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:support@schoolsystem.com"
                  className="hover:text-blue-600"
                >
                  support@schoolsystem.com
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:ml-4">
              <Image
                src="/images/hero/hero-image.png"
                alt="School Management System App"
                width={600}
                height={800}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
