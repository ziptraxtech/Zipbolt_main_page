'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const mapsUrl = 'https://maps.app.goo.gl/8sDwD7wMJ5pAXnxt9?g_st=aw'
const contactEmail = 'hello@zipbolt.com'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent('Zipbolt Contact Request')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#3f4448] text-white">
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

      <section className="bg-[#3f4448] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Contact us</h1>
            <p className="text-sm sm:text-base text-gray-200 max-w-lg">
              Our team is here to assist you on your journey towards a sustainable and efficient energy future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Location</h2>
                <p className="text-sm text-gray-400">
                  ZIPBOLT INNOVATIONS PRIVATE LIMITED GSTIN : 06AABCZ8004D1ZM
                  <br />
                  UG-006, Ground Floor
                  <br />
                  MGF Metropolis Mall, Mehrauli – Gurgaon Road
                  <br />
                  Gurugram, Haryana 122002, India.
                  <br />
                  Email : info@zip-bolt.com
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Open hours</h2>
                <p className="text-sm text-gray-400">
                  Monday to Saturday -10:00am to 5:00pm
                  <br />
                  Sunday - Closed
                </p>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold">Form</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="bg-black border border-teal-500/60 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
                  className="bg-black border border-teal-500/60 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="bg-black border border-teal-500/60 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="bg-black border border-teal-500/60 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-full bg-black border border-teal-500/60 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <label className="flex items-center gap-3 text-xs text-gray-400">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-teal-500/60 bg-black text-teal-500 focus:ring-teal-400"
                  required
                />
                I consent to Zipbolt Innovations Pvt Ltd processing my data for contact purposes.
              </label>
              <Button
                type="submit"
                className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-black text-white pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80"
                alt="Satellite map preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-12 w-12">
                  <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-md" />
                  <div className="absolute left-1/2 top-0 h-10 w-10 -translate-x-1/2 rounded-full bg-teal-500 flex items-center justify-center shadow-lg">
                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                  <div className="absolute left-1/2 top-6 h-6 w-6 -translate-x-1/2 rotate-45 bg-teal-500" />
                </div>
              </div>
            </a>
            <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Zipbolt facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-12 lg:py-16">
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
