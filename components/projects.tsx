import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plateforme e-commerce complète avec gestion des commandes et paiements.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/e-commerce",
    },
    {
      title: "Application React 3D",
      description:
        "Ce projet est une application web permettant aux utilisateurs de **passer des commandes sur des articles** donnés. L’application offre une navigation fluide entre plusieurs sections, une gestion multilingue (Français / Anglais) et une intégration visuelle moderne avec animations 3D grâce à `react-fiber`.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React",
"react-router-dom",
"react-i18next",
"React Context API",
"LocalStorage",
"React Fiber / drei",
"Hooks personnalisés",
"Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/reat3d",
    },
    {
      title: "Application Mobile Flutter & Spring Boot de Musique",
      description: "Site de musique pour un artiste.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Flutter", "Spring Boot", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/appmusic_flutter_spring",
    },
    {
      title: "Application de vente de succettes",
      description: "Application de vente de succettes avec gestion des commandes et des utilisateurs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Typescipt", "Htlm", "MySQL", "CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/christSaveurs",
    },
  ]

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes projets</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes qui démontrent mon expertise et ma créativité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <ExternalLink size={16} />
                    <a href={project.liveUrl}>Voir le site</a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Github size={16} />
                    <a href={project.githubUrl}>Code source</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
          >
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  )
}
