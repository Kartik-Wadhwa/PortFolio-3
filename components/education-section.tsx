"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function EducationSection() {
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

  const education = [
    {
      icon: GraduationCap,
      degree: "Bachelor of Technology in Information Technology",
      school: "Noida Institute of Engineering and Technology",
      period: "2019 - 2023",
      description: "Focus on Software Architecture and Web Development",
      achievements: ["CGPA: 8.58/10.0", "Student Ambassador of Virtusa", "Coding Society Lead"],
    },
        {
      icon: GraduationCap,
      degree: "Senior Secondary Education (12th Grade)",
      school: "DL DAV Public School, New Delhi",
      period: "2018 - 2019",
      description: "Student in Non Medical Stream with a focus on Computer Science",
      achievements: ["CGPA: 8.55/10.0"],
    },
  ]

  const certifications = [
    {
      icon: Award,
      title: "Dynamics 365 Fundamentals (CRM)",
      issuer: "Microsoft",
      year: "2024",
    },
    {
      icon: Award,
      title: "Power Bi Data Analyst Associate",
      issuer: "Microsoft",
      year: "2024",
    },
    {
      icon: BookOpen,
      title: "Business English Certificate (BEC)",
      issuer: "Cambridge University",
      year: "2020",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building a strong foundation through continuous learning and academic excellence
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {/* Formal Education */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Formal Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.degree} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <edu.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h4>
                            <p className="text-lg text-primary font-medium">{edu.school}</p>
                          </div>
                          <Badge variant="secondary" className="mt-2 md:mt-0">
                            {edu.period}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">{edu.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge key={achievement} variant="outline">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className={`hover:shadow-lg transition-all duration-300 hover:scale-105 animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <cert.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="secondary">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
