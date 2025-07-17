
import { Calendar, MapPin, GraduationCap, Badge } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function EducationSection() {
  const education = [
    {
      degree: "Licence en développement des système d'information",
      institution: "Institut Supérieur des Études Technologiques de Nabeul",
      location: "Nabeul, NB, Tunisia",
      period: "Juin 2022 - Juin 2025",
      type: "Diplôme",
    },
    {
      degree: "Baccalauréat en sciences expérimentales",
      institution: "Lycée Mohamed Boudhina",
      location: "Hammamet, NB, Tunisia",
      period: "Septembre 2020 - Juillet 2021",
      type: "Diplôme",
    },
  ]

  const formations = [
    {
      title: "Formation Power BI",
      organizer: "Orange Tech Club",
      description: "Formation spécialisée en analyse de données avec Power BI",
    },
    {
      title: "How To Became a Full-Stack Javascript Developer",
      organizer: "GOMYCODE",
      description: "Formation intensive de 5 mois couvrant HTML/CSS/JavaScript/Git/ReactJS/Express/MongoDB/NodeJS",
    },
  ]

  return (
    <section id="formation" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Formation & Éducation</h2>
          <p className="text-lg text-gray-600">Mon parcours académique et mes formations professionnelles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Diplômes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
              Diplômes
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{edu.degree}</CardTitle>
                    <h4 className="text-gray-900 font-semibold">{edu.institution}</h4>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {edu.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Formations Professionnelles</h3>
            <div className="space-y-6">
              {formations.map((formation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{formation.title}</CardTitle>
                    <h4 className="text-gray-900 font-semibold">{formation.organizer}</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{formation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Expérience associative */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Expérience Associative</h4>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">Event Manager</CardTitle>
                  <h4 className="text-gray-900 font-semibold">Orange Tech Club ISETN</h4>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Depuis Février 2024</span>
                  </div>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Nabeul, Tunisie</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
