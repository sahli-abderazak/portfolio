import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Database, Globe, MessageSquare } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: Code,
      skills: ["JavaScript", "Python", "PHP", "Java", "C", "Dart"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Technologies",
      icon: Globe,
      skills: ["Next.js", "React.js", "Laravel", "Node.js", "Angular", "Flutter"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Bases de Données",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Langues",
      icon: MessageSquare,
      skills: ["Arabe (Natif)", "Français (Avancé)", "Anglais (Intermédiaire)", "Allemand (Débutant)"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="competences" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-lg text-gray-600">
            Mes compétences acquises à travers mes formations et expériences professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className={`bg-gradient-to-r ${category.color} text-white relative`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-colors duration-200 border border-gray-200 hover:border-gray-300"
                    >
                      {skill}
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
