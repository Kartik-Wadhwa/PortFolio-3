"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette, Wrench, Users, Code2Icon, Codesandbox, CodesandboxIcon, CloudCog } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars for both skill arrays
          setTimeout(() => {
            const progressValues: Record<string, number> = {}
            // Add technical skills
            technicalSkills.forEach((skill) => {
              progressValues[skill.name] = skill.level
            })
            // Add additional skills
            additionalSkills.forEach((skill) => {
              progressValues[skill.name] = skill.level
            })
            setAnimatedProgress(progressValues)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const technicalSkills = [
    { name: "Microsoft Dynamics CRM", level: 90, category: "Application" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "Csharp", level: 85, category: "Programming" },
    { name: "Power Apps", level: 80, category: "Application" },
    { name: "Power Automate", level: 85, category: "Application" },
    { name: "Service Now", level: 75, category: "Application" },
  ]

    const additionalSkills = [
    { name: "Java", level: 75, category: "Programming" },
    { name: "C/C++", level: 60, category: "Programming" },
    { name: "React.js", level: 65, category: "Frontend" },
    { name: "Power BI", level: 70, category: "Application" },
  ]

  const skillCategories = [
    {
      icon: Code2Icon,
      title: "Development",
      skills: ["React", "Tailwind CSS", "Node.js","Express.js"],
    },
    {
      icon: Codesandbox,
      title: "Microsoft Dynamics CRM",
      skills: ["Customer Service", "Sales"],
    },
    {
      icon: CloudCog,
      title: "Microsoft Power Platform",
      skills: ["Power Automate", "Power Apps", "Power BI", "Dataverse"],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      skills: ["Git", "VS Code", "Visual Studio", "Service Now", "Plugin Registration Tool", "XRM Toolbox","Azure Portal"],
    },
    {
      icon: Code,
      title: "Core Competencies",
      skills: ["Java","C/C++", "RDBMS", "System Design", "Operating Systems"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Mentoring", "Communication", "Problem Solving", "Agile"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Technical Proficiency */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Primary Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={`hover:shadow-lg transition-all duration-300 animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <Badge variant="outline">{skill.category}</Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={animatedProgress[skill.name] || 0} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Secondary Proficiency</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className={`hover:shadow-lg transition-all duration-300 animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <Badge variant="outline">{skill.category}</Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={animatedProgress[skill.name] || 0} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Skill Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card
                  key={category.title}
                  className={`hover:shadow-lg transition-all duration-300 hover:scale-105 animate-delay-${(index + 1) * 100}`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
