"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Bonjour, je suis{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Christiane
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Développeuse Web Full-Stack passionnée, je crée des expériences digitales modernes et performantes qui
            transforment vos idées en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              <a href="#projets">Voir mes projets</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
            >
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-purple-600" size={24} />
        </div>
      </div>
    </section>
  )
}
