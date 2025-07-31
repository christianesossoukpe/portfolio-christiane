import { Code, Smartphone, Globe, Zap, Shield, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Globe className="text-purple-600" size={32} />,
      title: "Développement Web",
      description: "Sites web modernes et responsives avec les dernières technologies.",
      features: ["React/Next.js", "Vue.js/Nuxt.js", "Laravel/PHP", "Design responsive"],
    },
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Applications Web",
      description: "Applications web complexes et performantes sur mesure.",
      features: ["SPA/PWA", "API REST", "Base de données", "Authentification"],
    },
    {
      icon: <Smartphone className="text-green-600" size={32} />,
      title: "Mobile-First",
      description: "Expériences optimisées pour tous les appareils mobiles.",
      features: ["Design adaptatif", "Performance mobile", "Touch-friendly", "PWA"],
    },
    {
      icon: <Zap className="text-yellow-600" size={32} />,
      title: "Optimisation",
      description: "Amélioration des performances et du référencement.",
      features: ["SEO technique", "Vitesse de chargement", "Core Web Vitals", "Analytics"],
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "Sécurité",
      description: "Sécurisation complète de vos applications web.",
      features: ["HTTPS/SSL", "Authentification", "Protection CSRF", "Audit sécurité"],
    },
    {
      icon: <Headphones className="text-indigo-600" size={32} />,
      title: "Support & Maintenance",
      description: "Accompagnement continu et maintenance de vos projets.",
      features: ["Support technique", "Mises à jour", "Monitoring", "Formation"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour tous vos besoins de développement web, de la conception à la mise en ligne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Discutons de vos besoins et créons ensemble quelque chose d'exceptionnel.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
