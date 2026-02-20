"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-sm border border-neutral-800 shadow-xl shadow-black/40"
          : "bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#accueil"
            className="text-2xl font-bold tracking-tight text-orange-500 hover:text-orange-400 transition-colors"
          >
            Christiane
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-300 hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-neutral-950 font-semibold px-6"
              asChild
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-200 hover:text-orange-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-neutral-950 border-t border-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-neutral-200 hover:text-orange-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-neutral-950 font-semibold"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
