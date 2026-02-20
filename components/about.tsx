import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="apropos" className="py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">À propos de moi</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Passionnée par le développement web depuis plusieurs années, je combine créativité et expertise technique
            pour créer des solutions digitales exceptionnelles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-100 mb-6">Mon parcours</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Développeuse web full-stack avec une solide expérience dans la création d'applications web modernes et
              performantes. Je maîtrise les dernières technologies et frameworks pour offrir des solutions sur mesure à
              mes clients.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Mon approche combine une compréhension approfondie des besoins métier avec une expertise technique
              pointue, garantissant des projets réussis et des clients satisfaits.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-neutral-950/40 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/30 transition-all duration-300">
              <Code className="text-orange-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold text-neutral-100 mb-2">Développement Full-Stack</h4>
              <p className="text-neutral-300">
                Maîtrise complète des technologies front-end et back-end pour des solutions complètes.
              </p>
            </div>
            <div className="bg-neutral-950/40 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/30 transition-all duration-300">
              <Zap className="text-orange-500 mb-4" size={32} />
              <h4 className="text-xl font-semibold text-neutral-100 mb-2">Performance</h4>
              <p className="text-neutral-300">Optimisation des performances pour des applications rapides et efficaces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
