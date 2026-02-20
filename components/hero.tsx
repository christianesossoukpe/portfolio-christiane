"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left */}
          <div className="animate-fade-in-up text-left">
            <p className="text-neutral-400 mb-3">Hi, je suis</p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-100 mb-4">
              Christiane{" "}
              <span className="text-orange-500">
                Sossoukpe
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-200 mb-6">
              Développeuse Web <span className="text-orange-500">Full‑Stack</span>
            </h2>
            <p className="text-lg text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Je conçois des interfaces modernes et des applications web performantes, avec une attention particulière
              à l’UX, la qualité du code et la rapidité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-neutral-950 px-8 py-3 font-semibold"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-neutral-700 text-neutral-200 hover:bg-neutral-900 px-8 py-3 bg-transparent"
                asChild
              >
                <a href="#projets">Voir mes projets</a>
              </Button>
            </div>

            <div className="flex items-center gap-5">
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-80 w-80 md:h-96 md:w-96 rounded-full bg-neutral-900/60 border border-neutral-800" />
              </div>
              <div className="h-80 w-72 md:h-96 md:w-80 rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/60 overflow-hidden">
                <img
                  src="/projects/imageprofil.png"
                  alt="Christiane"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-orange-500" size={24} />
        </div>
      </div>
    </section>
  )
}
