import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Privacy and Cookies Policy</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-lg">
              This privacy is designed to inform you about how we collect, use, and protect your personal information
              when you interact with our website.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">1. Information we collect</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We gather various types of information to enhance and optimize our services. This includes personal
                information such as your name, email address, phone number, and mailing address, collected when you
                register for an account, contact us, or use our services. We also gather usage information, which
                encompasses details about your interactions with our website and services, including your IP address,
                browser type, device information, pages visited, and actions taken.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">2. How we use your information</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                Our utilization of the information we collect serves multiple purposes. We use your personal data to
                furnish requested services, such as responding to inquiries, processing orders, and delivering
                newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain
                insights into how our website and services are used, which informs our continuous improvement efforts,
                content customization, and enhancements to user experiences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">3. Communication</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We may employ your contact information to communicate with you concerning our services, provide updates,
                and convey important notices. You have the option to opt out of marketing communications at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">4. Cookies and Tracking Technologies</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                To better understand your browsing behavior and improve your website experience, we utilize cookies and
                similar tracking technologies. Cookies are small data files stored on your device that facilitate our
                comprehension of your preferences. By utilizing our website, you implicitly consent to our use of
                cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences
                through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">5. Security</h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                We prioritize data security and employ reasonable measures to safeguard your information from
                unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your
                data, it&apos;s important to acknowledge that no method of transmission over the internet or electronic
                storage is entirely secure. Consequently, we cannot provide absolute security guarantees.
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
                <li>
                  <Link
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
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
