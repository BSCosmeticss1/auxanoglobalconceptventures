"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  // Navigation links
  const aboutLinks = [
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Our History", href: "/about/history" },
    { name: "Our Certifications", href: "/about/certifications" },
  ];

  const contactLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Request Quote", href: "/contact/quote" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navLinks = [
    { key: "home", name: "Home", href: "/" },
    { key: "about", name: "About", href: "/about", dropdown: aboutLinks },
    { key: "services", name: "Services", href: "/services" },
    { key: "solutions", name: "Solutions", href: "/solutions" },
    { key: "team", name: "Team", href: "/team" },
    { key: "contact", name: "Contact", href: "/contact", dropdown: contactLinks },
  ]

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search navigation or logic here
      setSearchQuery("");
    }
  }

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  return (
    <nav className={`fixed left-0 right-0 top-0 w-full z-50 ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar */}
      <div className={`hidden bg-teal text-white transition-all duration-300 overflow-hidden ${isScrolled ? "h-0" : "h-10"}`}>
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 text-green-200">🌐</span>
              <span className="text-xs font-medium text-white">English</span>
            </div>

            <div className="hidden md:flex items-center space-x-1.5">
              <span className="h-3.5 w-3.5 text-green-200">📞</span>
              <span className="text-sm hover:text-orange-100 transition-colors">+234 (0) 123 456 7890</span>
              <span className="mx-2 text-green-200">|</span>
              <span className="h-3.5 w-3.5 text-green-200">📞</span>
              <span className="text-sm hover:text-orange-100 transition-colors">+234 (0) 987 654 3210</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1.5">
              <span className="h-3.5 w-3.5 text-green-200">✉️</span>
              <span className="text-sm hover:text-orange-100 transition-colors">info@auxano.com</span>
            </div>

            <Link
              href="/contact"
              className="flex items-center space-x-1.5 group"
            >
              <span className="h-3.5 w-3.5 text-green-200 group-hover:text-white transition-colors">📞</span>
              <span className="text-sm group-hover:text-white transition-colors">Get Started</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`bg-teal transition-all duration-300 border-b border-accent ${isScrolled ? "py-1 shadow-md" : "py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.jpeg"
              alt="Auxano Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-10" : "h-12"} rounded-sm bg-white`}
            />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-accent font-medium">Home</Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-accent font-medium">About</Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-accent font-medium">Careers</Link>
              <Link href="#" onClick={(e) => e.preventDefault()} className="text-white hover:text-accent font-medium">Contact</Link>
            </div>
            <form
              onSubmit={handleSearch}
              className={`hidden`}
            >
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pl-3 pr-2 text-sm focus:outline-none w-48 text-gray-700 bg-white placeholder-gray-400"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 px-3 bg-green-800 text-white hover:bg-orange-700 transition-colors"
              >
                <span>🔍</span>
              </Button>
            </form>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white">
              <span className="h-5 w-5">🔧</span>
              <span className="text-sm font-medium">Under Maintenance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Navigation */}
      <div className={`hidden`}>
        <div className="w-full">
          <div className="hidden md:flex items-center justify-center h-20 md:h-14">
            <div className="flex items-center w-full max-w-7xl mx-auto px-4">
              {navLinks.map((link) => (
                <div
                  key={link.key}
                  className="relative flex-1 text-center"
                  ref={dropdownRef}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.key)}
                        className={`flex items-center justify-center w-full h-14 space-x-1 px-2 font-medium transition-all duration-200
                          ${activeDropdown === link.key || ((link.key === "about" && aboutLinks.some(l => pathname === l.href)) || (link.key === "contact" && contactLinks.some(l => pathname === l.href)))
                            ? "bg-green-800 text-white"
                            : "hover:bg-green-800 text-white"
                          } relative group`}
                      >
                        <span>{link.name}</span>
                        <span className={`transition-transform duration-200 ${
                          activeDropdown === link.key ? "rotate-180" : ""
                        }`}>▼</span>
                        {/* Hover underline effect */}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                          activeDropdown === link.key ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}></span>
                      </button>

                      <div
                        className={`absolute left-0 right-0 mt-0 bg-white shadow-xl py-2 px-2 border border-gray-100 z-10 rounded-b-lg transition-all duration-200 ${
                          activeDropdown === link.key ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          {link.dropdown.map((l) => (
                            <Link
                              key={l.name}
                              href={l.href}
                              className={`block w-full py-2.5 text-sm whitespace-nowrap transition-colors rounded text-center ${
                                pathname === l.href
                                  ? "bg-green-800 text-white"
                                  : "hover:bg-green-800 hover:text-white text-gray-700"
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center justify-center w-full h-14 px-2 font-medium transition-colors duration-200 relative group ${
                        pathname === link.href
                          ? "bg-orange-900 text-white"
                          : "hover:bg-orange-700 text-white"
                      }`}
                    >
                      {link.name}
                      {/* Hover underline effect */}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                        pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}

              <div className="flex-1 text-center">
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium text-green-800 bg-white rounded-lg hover:bg-orange-50 transition-colors shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden" ref={mobileMenuRef}>
        <div className="px-4 py-3">
          <form onSubmit={handleSearch} className="flex items-center mb-4">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-10 pl-3 pr-2 text-sm border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <Button
              type="submit"
              size="icon"
              className="h-10 px-3 bg-green-800 text-white rounded-r-lg"
            >
              <span>🔍</span>
            </Button>
          </form>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.key} className="border-b border-gray-100 last:border-0">
                {link.dropdown ? (
                  <div className="py-2">
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-left font-medium rounded-lg ${
                        (link.key === "about" && aboutLinks.some(l => pathname === l.href)) ||
                        (link.key === "contact" && contactLinks.some(l => pathname === l.href))
                          ? "bg-green-800 text-white"
                          : "text-gray-700 hover:bg-orange-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className={`transition-transform duration-200 ${
                        activeDropdown === link.key ? "rotate-180" : ""
                      }`}>▼</span>
                    </button>

                    <div
                      className={`pl-4 overflow-hidden transition-all duration-200 ${
                        activeDropdown === link.key ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="py-2 space-y-1">
                        {link.dropdown.map((l) => (
                          <Link
                            key={l.name}
                            href={l.href}
                            className={`block px-3 py-2 text-sm rounded-md ${
                              pathname === l.href
                                ? "bg-green-800 text-white"
                                : "text-gray-700 hover:bg-orange-50"
                            }`}
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 font-medium rounded-lg ${
                      pathname === link.href
                        ? "bg-green-800 text-white"
                        : "text-gray-700 hover:bg-orange-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/about/who-we-are"
              className="block mt-2 px-4 py-2 text-center text-sm font-medium text-green-800 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
