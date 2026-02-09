'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link href="/#services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#portfolio" className="hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" className="hover:text-white transition-colors">
                Contact us
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">About us</h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-lg">
              Learn more about Zipbolt and our commitment to excellence, innovation, and sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Innovation.
                <br />
                Guiding our journey from the start.
              </h2>
              <p className="text-sm text-gray-400">Zipbolt Innovations 2026</p>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  Innovation is not just a principle at Zipbolt Innovations — it is the foundation on which our entire
                  company stands. From the very beginning, we recognized that the future of electric mobility would be
                  shaped not only by vehicles and charging networks, but by the intelligence that connects them.
                </p>
                <p>
                  At Zipbolt, we build the deep-tech layer that powers India&apos;s transition to safe, reliable and
                  sustainable EV ecosystems. Our work spans real-time diagnostics, advanced battery intelligence, AI-driven
                  analytics, and circular-economy solutions — all designed to make electric mobility smarter, cleaner, and
                  future-ready.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
                alt="Team analyzing performance data"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&q=80"
              alt="Earth and mountains illustration"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-2xl mx-auto text-center mt-10 space-y-5 text-sm text-gray-300 leading-relaxed">
            <p>
              This commitment to pushing technological boundaries has inspired our team to constantly explore new ideas,
              refine our platforms, and engineer solutions that solve real-world challenges in the EV lifecycle. Whether
              it&apos;s instant battery diagnostics at charging stations, predictive insights for fleets, or responsible
              battery recycling, our focus remains the same: enable trust, transparency, and safety at scale.
            </p>
            <p>
              From our earliest prototypes to the multi-layer ecosystem we operate today, innovation has never been an
              afterthought — it is our DNA. We foster a culture that welcomes experimentation, values collaboration, and
              thrives on solving complex problems.
            </p>
            <p>
              As we continue to grow, our promise remains unchanged: to lead with excellence, think boldly, and stay at
              the forefront of battery intelligence and EV technology. At Zipbolt Innovations, we are not just adapting
              to the future; we are defining it.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-sm">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/#services" className="hover:text-gray-900 transition-colors">Services</Link></li>
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
                <li>
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Privacy and Cookies Policy
                  </Link>
                </li>
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
