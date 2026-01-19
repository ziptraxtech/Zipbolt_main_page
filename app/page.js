'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solutions = [
    {
      name: 'Zeflash',
      icon: '⚡',
      title: 'Zeflash — Instant Battery Diagnostics at Charging Stations',
      image: 'https://images.unsplash.com/photo-1567409378873-888d6fa7debc?w=800&q=80'
    },
    {
      name: 'ZipSure AI',
      icon: '🤖',
      title: 'ZipSure AI — Intelligent Battery Analytics & Fleet Intelligence',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80'
    },
    {
      name: 'EV Champ',
      icon: '📱',
      title: 'EV Champ — The All-in-One EV Owner App',
      image: 'https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg?w=800&q=80'
    },
    {
      name: 'ZipTrax',
      icon: '🔄',
      title: 'ZipTrax CleanTech Blockchain/CycloChain for battery circular economy & ERG compliance',
      image: 'https://images.pexels.com/photos/9799757/pexels-photo-9799757.jpeg?w=800&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo_3.png"
                alt="ZIPBOLT"
                width={140}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                About us
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                Portfolio
              </Link>
              <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-6 py-2 rounded-full">
                Contact us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <Link href="#about" className="text-gray-700 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                  About us
                </Link>
                <Link href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                  Services
                </Link>
                <Link href="#portfolio" className="text-gray-700 hover:text-blue-500 transition-colors font-medium px-4 py-2">
                  Portfolio
                </Link>
                <Button className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white mx-4 rounded-full">
                  Contact us
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Powering India's EV Future with Intelligence
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                <span className="font-semibold text-gray-800">ZipBolt is the intelligence layer—</span> the invisible backbone that makes electric mobility smarter, safer and sustainable.
              </p>
              <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Explore Our Solutions
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80"
                alt="EV Charging App"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section id="portfolio" className="py-16 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Solutions</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
              Whether for small or large-scale projects, we are committed to delivering cutting-edge results, contributing to a more sustainable future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <span className="text-2xl">{solution.icon}</span>
                    <span className="font-bold text-gray-900">{solution.name}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 text-sm leading-relaxed">{solution.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision/Mission Section */}
      <section className="py-0">
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8">
              <Image
                src="/logos/logo_3.png"
                alt="ZIPBOLT"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 p-8 sm:p-12 lg:p-16 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Our Vision / Mission
              </h2>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                At ZipBolt, we believe that the future of EV mobility isn't just in changing the vehicles — it's in reimagining safety and sustainability. We envision a world where every EV battery is intelligent, every charge is optimized, and every vehicle is supported by cutting-edge, data-driven intelligence in the backdrop that ensures electric mobility remains clean, efficient, reliable, and Earth-friendly.
              </p>
              <Button className="bg-white text-cyan-500 hover:bg-gray-100 px-8 py-6 text-base lg:text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get in touch with us</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base lg:text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Pages */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-gray-600 hover:text-blue-500 transition-colors">Services</Link></li>
                <li><Link href="#about" className="text-gray-600 hover:text-blue-500 transition-colors">About us</Link></li>
                <li><Link href="#portfolio" className="text-gray-600 hover:text-blue-500 transition-colors">Portfolio</Link></li>
                <li><Link href="#contact" className="text-gray-600 hover:text-blue-500 transition-colors">Contact us</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Social Media</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Facebook</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">LinkedIn</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy and Cookies Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>© Zipbolt. Energy Consulting ©</p>
          </div>
        </div>
      </footer>
    </div>
  )
}