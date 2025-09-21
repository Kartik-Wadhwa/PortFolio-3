"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Folder, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProjectsSection() {
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

  const projects = [
    {
      title: "E-Commerce Price Tracker",
      description:
        "A full-stack web application that tracks product prices across multiple e-commerce platforms, providing users with real-time alerts and historical price data to make informed purchasing decisions.",
      image: "/PriceTrack.png",
      technologies: ["Next.js", "Puppeteer", "Cheerio", "Cron Jobs", "Node.js", "Vercel"],
      features: ["Real-time Product Pricing", "Alert for Product over email", "Past Prices and Average Price of Product", "Mobile responsive"],
      github: "https://github.com/Kartik-Wadhwa",
      demo: "#",
      status: "In Progress",
    },
    {
      title: "End to End Access Management for Dynamics CRM (Project for Client)",
      description:
        "A comprehensive solution for managing user access and permissions for Dynamics CRM, saves manual efforts. Used to receive request in service now for the access provisioning in CRM. Use Power Automate Flow to add or remove user from the Azure AD groups(Assigned with Dynamics CRM License). Once user added to AD group, License got assinged and required access given in CRM. Similar process happen for removing access or License.",
      image: "access_crm.webp",
      technologies: ["Microsoft Dynamics CRM", "Power Automate", "Service Now", "Azure AD"],
      features: ["Automated Service Now Ticket Closure", "Email Notifications", "Saving Manual Efforts"],
      status: "Completed",
    },
    {
      title: "Sales Analytics Dashboard",
      description:
        "Developed a Sales Analytics Dashboard to track and visualize key sales metrics, monitor trends, and generate actionable insights, enabling data-driven decision-making and performance optimization.",
      image: "/weather-analytics-dashboard-with-charts-and-graphs.jpg",
      technologies: ["Power BI"],
      features: ["Data visualization", "Interactive charts", "Custom reports", "Real-time data"],
      github: "https://github.com/Kartik-Wadhwa",
      demo: "#",
      status: "In Progress",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                <Folder className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 ${
                isVisible ? `animate-fade-in-up opacity-100 animate-delay-${(index + 1) * 200}` : "opacity-0"
              }`}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={
                        project.status === "Completed"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                      <Zap className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed text-base">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-blue-100">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
            asChild
          >
            <a href="https://github.com/Kartik-Wadhwa" target="_blank" rel="noopener noreferrer">
              <Eye className="h-5 w-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
