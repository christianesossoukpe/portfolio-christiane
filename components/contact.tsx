"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = encodeURIComponent(
      `Bonjour Christiane,%0A%0A` +
        `Nom : ${formData.name}%0A` +
        `Email : ${formData.email}%0A` +
        `Sujet : ${formData.subject}%0A%0A` +
        `Message : ${formData.message}`
    )

    // Numéro WhatsApp : +229 01 96 21 23 10 -> 2290196212310
    window.open(`https://wa.me/2290196212310?text=${text}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">Contactez-moi</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je serais ravie de vous
            accompagner dans sa réalisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h3 className="text-2xl font-bold text-neutral-100 mb-8">Restons en contact</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-full mr-4">
                  <Mail className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-100">Email</h4>
                  <p className="text-neutral-300">christdebo68@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-full mr-4">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-100">Téléphone</h4>
                  <p className="text-neutral-300">+229 01 96 21 23 10</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-full mr-4">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-100">Localisation</h4>
                  <p className="text-neutral-300">Cotonou, Bénin</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-neutral-100 mb-4">Pourquoi me choisir ?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-neutral-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Réponse rapide sous 24h
                </li>
                <li className="flex items-center text-neutral-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Devis gratuit et détaillé
                </li>
                <li className="flex items-center text-neutral-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Accompagnement personnalisé
                </li>
                <li className="flex items-center text-neutral-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Livraison dans les délais
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <Card className="bg-neutral-950/40 border border-neutral-800 shadow-xl shadow-black/40">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-800 bg-neutral-950/40 text-neutral-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-800 bg-neutral-950/40 text-neutral-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-800 bg-neutral-950/40 text-neutral-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors outline-none"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-800 bg-neutral-950/40 text-neutral-100 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none outline-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-neutral-950 flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 font-semibold"
                >
                  <Send size={20} />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-neutral-300">© 2026 Christiane - Développeuse Web Full-Stack. Tous droits réservés.</p>
            <p className="text-neutral-500 mt-2">Créé avec Next.js</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
