"use client"

import { Code2, Server, Database } from "lucide-react"

export default function Skills() {
  const technologies = {
    frontend: {
      title: "Frontend",
      icon: <Code2 className="text-orange-500" size={32} />,
      skills: [
        { name: "Vue.js" },
        { name: "React" },
        { name: "Next.js" },
      ],
    },
    backend: {
      title: "Backend",
      icon: <Server className="text-orange-500" size={32} />,
      skills: [
        { name: "Node.js" },
        { name: "PHP" },
        { name: "Laravel" },
      ],
    },
    database: {
      title: "Base de données",
      icon: <Database className="text-orange-500" size={32} />,
      skills: [
        { name: "MongoDB" },
        { name: "MySQL" },
      ],
    },
  }

  return (
    <section id="competences" className="py-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">Mes compétences</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Technologies que je maîtrise pour créer des solutions web modernes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.entries(technologies).map(([key, category]) => (
            <div
              key={key}
              className="bg-neutral-950/40 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-100">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center p-4 rounded-xl border border-neutral-800 bg-neutral-950/40 hover:border-neutral-700 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-lg font-semibold text-neutral-200">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
