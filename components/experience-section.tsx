"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      company: "Tata Consultancy Services",
      position: "Microsoft Dynamics CRM Developer",
      period: "2023 - Present",
      location: "Gurugram, India",
      description:
        "Working as a Microsoft Dynamics CRM Developer for a leading global airline, customizing applications and developing plugins, workflows, and integrations to meet complex business requirements.",
      achievements: [
        "Led a development team, making key technical decisions",
        "Implemented Canvas Apps into Dynamics CRM Online to enhance user experience.",
        "Implemented automated access management for Dynamics CRM through Power Automate.",
        "Implemented a Model-Driven Power App integrated with Power Automate for automated case routing.",
        "Catering to an unsupported Dynamics CRM On-Premise application by maintaining functionality and improving existing issues to ensure business continuity.",
      ],
      technologies: ["Microsoft Dynamics CRM", "Power Apps", "Power Automate","Azure Blob Storage", "Service Now", "Csharp", "JavaScript"],
    },
    {
      company: "Virtusa",
      position: "Intern - Full-Stack Developer",
      period: "2022 - 2023",
      location: "Remote",
      description:
        "Built the entire web platform from scratch using modern technologies. Collaborated closely with design and product teams. I had the privilege of serving as a Student Ambassador, where I promoted Virtusa's technical activities.",
      achievements: [
        "Developed Web Application for Services like UrbanClap",
        "Collaborated with cross-functional teams",
        "Responsible for the entire Documentation of the project",
      ],
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "Heroku","GitHub"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building innovative solutions and driving success through technology and teamwork.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`transition-all duration-1000 ${
                isVisible ? `animate-fade-in-up opacity-100 animate-delay-${(index + 1) * 200}` : "opacity-0"
              }`}
            >
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">{exp.position}</h3>
                          <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
