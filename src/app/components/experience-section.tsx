import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Stage de Fin d'Études – Développeur Full Stack",
      company: "Maison du web",
      location: "Nabeul, NB, Tunisia",
      period: "Février 2025 - Mai 2025",
      description:
        "Développement d'une application web de présélection des candidats avec tests de personnalité basés sur l'IA. Utilisation de Laravel, Next.js et l'API OpenAI pour analyser les CV et générer des questions personnalisées.",
      technologies: ["Laravel", "Next.js", "OpenAI API", "IA"],
    },
    {
      title: "Stage En Service Contrôle",
      company: "Hotel Nesrine",
      location: "Hammamet",
      period: "Juin 2024 - Septembre 2024",
      description:
        'Contrôle des revenus, gestion des stocks, contrôle de quantité et de qualité, manipulation des systèmes informatiques "3S" et "HOTIX3".',
      technologies: ["3S", "HOTIX3", "Gestion"],
    },
    {
      title: "Stage De Perfectionnement",
      company: "IconConcept",
      location: "Hammamet, Tunisie",
      period: "Janvier 2024 - Février 2024",
      description:
        "Création d'un site web dédié aux agences de location de voitures avec partie client et administrateur. Apprentissage et utilisation de Laravel.",
      technologies: ["Laravel", "PHP", "MySQL"],
    },
    {
      title: "Stage d'initiation",
      company: "TEKNOISLAND",
      location: "Hammamet",
      period: "Janvier 2023 - Février 2023",
      description: "Création d'un site vitrine dédié aux agences immobilières utilisant ReactJS et Firebase.",
      technologies: ["React.js", "Firebase"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expérience Professionnelle</h2>
          <p className="text-lg text-gray-600">
            {"Mon parcours professionnel et les projets sur lesquels j'ai travaillé"}
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-blue-600 mb-2">{exp.title}</CardTitle>
                    <h3 className="text-lg font-semibold text-gray-900">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
