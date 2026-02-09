'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const services = [
  {
    name: 'Zeflash',
    logo: '/logos/zeflash-logo.png',
    description: 'Zeflash - Instant Battery Diagnostics at Charging Stations',
    bullets: [
      'Rapid, on-site battery health scans - get a detailed EV battery health report instantly.',
      'Multi-signal scanning, digital-twin benchmarking, and instant safety and performance evaluation.',
      'Ideal for EV fleets, swapping stations, charging hubs, and solo riders.',
      'Available now at selected charging-station partners; expanding fast across metros and satellite cities.',
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80',
  },
  {
    name: 'ZipSure AI',
    logo: '/logos/zipsure-logo.png',
    description: 'ZipSure AI - Intelligent Battery Analytics and Fleet Intelligence',
    bullets: [
      'Cloud-based AI + IoT platform that tracks battery behavior, degradation, thermal safety, and lifecycle data.',
      'Predictive alerts for anomalies, early warnings for maintenance, and real-time health dashboards.',
      'Built for fleets, OEMs, and large-scale charging or battery-swap operators.',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
  },
  {
    name: 'EV Champ',
    logo: '/logos/evchamp-logo.png',
    description: 'EV Champ - The All-in-One EV Owner App',
    bullets: [
      'Consumer-facing mobile app bringing battery intelligence, diagnostics, and services to EV users.',
      'Book diagnostics, locate compatible charging/swap stations, buy or sell used EVs or batteries, and track performance.',
      'Transparency, convenience, and peace-of-mind - everything an EV owner needs, in one place.',
    ],
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400&q=80',
  },
  {
    name: 'Ziptrax Cleantech',
    logo: '/logos/logo_4.png',
    description: 'Ziptrax Cleantech - Circular Economy and Traceability',
    bullets: [
      'End-to-end tracking for batteries across their lifecycle with secure digital identity.',
      'Compliance-ready reporting for recycling, reuse, and responsible disposal programs.',
      'Built for regulators, recyclers, OEMs, and energy enterprises.',
    ],
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1400&q=80',
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0].name)

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white">
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
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
              <Link href="/about" className="hover:text-gray-900 transition-colors">
                About us
              </Link>
              <Link href="/services" className="text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/#portfolio" className="hover:text-gray-900 transition-colors">
                Portfolio
              </Link>
            </nav>
            <div className="hidden md:block">
              <Link href="/contact">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6">
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">Services</h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
              At Zipbolt Innovations, we engineer the intelligence layer that powers the entire electric mobility ecosystem.
              Our services are designed to bring accuracy, transparency, and predictive capabilities to every stage of an EV
              battery&apos;s life - from first use to final recovery. With deeptech, data, and sustainability at the core, we
              deliver end-to-end solutions for OEMs, fleets, charging networks, and energy enterprises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service) => {
              const isActive = service.name === activeService
              return (
                <div key={service.name}>
                  <button
                    className="w-full flex items-center justify-between border-t border-white/20 py-6 text-left text-2xl sm:text-3xl font-medium hover:text-gray-200 transition-colors"
                    type="button"
                    onClick={() =>
                      setActiveService((current) =>
                        current === service.name ? '' : service.name
                      )
                    }
                    aria-expanded={isActive}
                  >
                    <span>{service.name}</span>
                    <span className="text-gray-400">v</span>
                  </button>

                  {isActive && (
                    <div className="pb-10 lg:pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
                      <div className="space-y-5">
                        <div className="flex items-center">
                          <div className="rounded-xl bg-white/5 px-4 py-3">
                            <Image
                              src={service.logo}
                              alt={service.name}
                              width={140}
                              height={48}
                              className="h-8 w-auto"
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{service.description}</p>
                        <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
                          {service.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={service.image}
                          alt={`${service.name} product preview`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
            <div className="border-t border-white/20" />
          </div>
        </div>
      </section>

      <section className="bg-black text-white pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold">Powering the Future of Electric Mobility</h2>
              <p className="text-sm text-gray-400">
                Explore our portfolio of remarkable projects where innovation and sustainability converge.
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  As India accelerates towards an electric future, Zipbolt Innovations stands at the intersection of intelligence
                  and infrastructure - ensuring that every battery, every charger, and every fleet is supported by real-time data,
                  dependable insights, and sustainable solutions.
                </p>
                <p>
                  At Zipbolt, we don&apos;t just serve the EV ecosystem - we strengthen it.
                </p>
              </div>
              <Link href="/#portfolio" className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition-colors">
                View our Portfolio -
              </Link>
            </div>
            <div className="space-y-3">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1400&q=80"
                  alt="Field team at EV charging station"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 text-center">Zipbolt energy consulting, 2026</p>
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
