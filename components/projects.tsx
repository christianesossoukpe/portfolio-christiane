import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plateforme e-commerce complète avec gestion des commandes et paiements.",
      image: "/projects/meilleur-site-ecommerce.jpg",
      technologies: ["Java"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/e-commerce",
    },
    {
      title: "Application React 3D",
      description:
        "Ce projet est une application web permettant aux utilisateurs de **passer des commandes sur des articles** donnés. L’application offre une navigation fluide entre plusieurs sections, une gestion multilingue (Français / Anglais) et une intégration visuelle moderne avec animations 3D grâce à `react-fiber`.",
      image: "/projects/image3d.png",
      technologies: ["React",
"react-router-dom",
"react-i18next",
"React Context API",
"Tailwind CSS"],
      liveUrl: "https://reat3d-site-de-commande.vercel.app/",
      githubUrl: "https://github.com/christianesossoukpe/reat3d",
    },
    {
      title: "Application Mobile Flutter & Spring Boot de Musique",
      description: "Site de musique pour un artiste.",
      image: "/projects/note-de-musique.jpg",
      technologies: ["Flutter", "Spring Boot", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/christianesossoukpe/appmusic_flutter_spring",
    },
    {
      title: "Application de vente de succettes",
      description: "Application de vente de succettes avec gestion des commandes et des utilisateurs.",
      image: "/projects/istockphoto-841984628-612x612.jpg",
      technologies: ["Typescipt", "Angular", "MySQL", "CSS"],
      liveUrl: "https://chrissaveurs-site-sucettes.vercel.app/accueil",
      githubUrl: "https://github.com/christianesossoukpe/christSaveurs",
    },
    {
      title: "Luxe Bijoux",
      description:
        "Site vitrine de bijouterie haut de gamme avec présentation de collections, filtrage par catégories et mise en avant des avantages clients.",
      image: "/projects/imagebijoux.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://chris-jewelry.vercel.app/",
      githubUrl: "",
    },
    {
      title: "Mon Portfolio",
      description: "Portfolio personnel pour présenter mes compétences et projets.",
      image: "/projects/portof.png",
      technologies: ["Next.js 14",
"TypeScript",
"Tailwind CSS",
"Lucide React"],
      liveUrl: "https://portfolio-christiane.vercel.app/",
      githubUrl: "https://github.com/christianesossoukpe/portfolio-christiane",
    },
  ]

  return (
    <section id="projets" className="py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">Mes projets</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes qui démontrent mon expertise et ma créativité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 overflow-hidden bg-neutral-950/40 border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-100 mb-3">{project.title}</h3>
                <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-orange-500/10 text-orange-300 rounded-full text-sm font-medium border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 bg-transparent border-neutral-700 text-neutral-200 hover:bg-neutral-900"
                  >
                    <ExternalLink size={16} />
                    <a href={project.liveUrl}>Voir le site</a>
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
            className="border-orange-500 text-orange-300 hover:bg-orange-500/10 bg-transparent"
          >
            Voir tous mes projets
          </Button>
        </div>
      </div>
    </section>
  )
}
