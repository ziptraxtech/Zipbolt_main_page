import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-[#1f2428] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo_3.png"
                alt="ZIPBOLT"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
              <Link href="/about" className="hover:text-white transition-colors">
                About us
              </Link>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
            </nav>
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#1f2428] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Terms &amp; Conditions</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-lg">
              These terms outline the rules and guidelines for using the Zipbolt Innovations website and services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                By accessing or using our website, you agree to be bound by these Terms &amp; Conditions and all applicable
                laws and regulations. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">2. Use of Services</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                You agree to use the website and its content for lawful purposes only. You must not misuse, disrupt, or
                interfere with the functionality or security of the site or attempt to gain unauthorized access to any
                systems or data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">3. Intellectual Property</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                All content, trademarks, logos, and materials on this website are the property of Zipbolt Innovations or
                their respective owners. You may not reproduce, distribute, or create derivative works without prior
                written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">4. Limitation of Liability</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We strive to keep the information on this site accurate and up to date, but we do not warrant that the
                content is error-free or complete. Zipbolt Innovations is not liable for any damages arising from your use
                of the website or reliance on its content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">5. Changes to Terms</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We may update these Terms &amp; Conditions from time to time. Continued use of the website after changes are
                posted constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 lg:py-16 text-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/services" className="hover:text-gray-900 transition-colors">Services</Link></li>
                <li><Link href="/about" className="hover:text-gray-900 transition-colors">About us</Link></li>
                <li><Link href="/#portfolio" className="hover:text-gray-900 transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Social Media</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="https://www.facebook.com/share/1BdtdNCaf2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/zipbolt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy and Cookies Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900 transition-colors">Terms &amp; Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
            <p>© 2026 Zipbolt Innovations Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
