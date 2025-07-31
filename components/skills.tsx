"use client"

import { useState } from "react"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend")

  const skillCategories = {
    frontend: {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript ES6+", level: 95 },
      ],
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Laravel", level: 90 },
        { name: "PHP", level: 88 },
        { name: "Python", level: 80 },
        { name: "API REST", level: 92 },
      ],
    },
    database: {
      title: "Base de données",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 35 },
        { name: "MongoDB", level: 80 },
        // { name: "Redis", level: 15 },
      ],
    },
    tools: {
      title: "Outils",
      skills: [
        { name: "Git/GitHub", level: 95 },
        // { name: "Docker", level: 80 },
        // { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
      ],
    },
  }

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes compétences</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise technique complète pour répondre à tous vos besoins de développement web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>
          <div className="grid gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className="text-purple-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
