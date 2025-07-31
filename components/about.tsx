import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionnée par le développement web depuis plusieurs années, je combine créativité et expertise technique
            pour créer des solutions digitales exceptionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Développeuse web full-stack avec une solide expérience dans la création d'applications web modernes et
              performantes. Je maîtrise les dernières technologies et frameworks pour offrir des solutions sur mesure à
              mes clients.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mon approche combine une compréhension approfondie des besoins métier avec une expertise technique
              pointue, garantissant des projets réussis et des clients satisfaits.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">1+</div>
                <div className="text-gray-600">Années d'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <Code className="text-purple-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Développement Full-Stack</h4>
              <p className="text-gray-600">
                Maîtrise complète des technologies front-end et back-end pour des solutions complètes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <Palette className="text-blue-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Design & UX</h4>
              <p className="text-gray-600">
                Création d'interfaces utilisateur intuitives et esthétiques pour une expérience optimale.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <Zap className="text-green-600 mb-4" size={32} />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Performance</h4>
              <p className="text-gray-600">Optimisation des performances pour des applications rapides et efficaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
