"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Coffee, Lightbulb, Users, Star, Leaf, Network } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  const highlights = [
    {
      icon: Network,
      title: "Leadership",
      description: "Leading, mentoring, and guiding team to achieve project goals.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-sky-50/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty leading-relaxed">
              Passionate about crafting digital experiences that make a difference in people's lives
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-left opacity-100" : "opacity-0"}`}
          >
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-20" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100">
                  <img
                    src="/ktk.jpg"
                    alt="Alex Johnson - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-float shadow-xl flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-sky-400 to-blue-400 rounded-full animate-float shadow-xl"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-right opacity-100" : "opacity-0"}`}
          >
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  With over <span className="font-semibold text-blue-600">2 years of experience</span> as a Microsoft Dynamics CRM Developer, I specialize in designing and implementing solutions that streamline business processes and enhance user experiences. My journey began during my B.Tech in Information Technology, where I discovered a passion for web development and problem-solving, which eventually led me to pursue a career in software development.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed">
                  I thrive in collaborative environments, working closely with cross-functional teams to deliver high-quality software solutions. I am proficient in customizing Dynamics 365 applications, developing plugins, workflows, and integrations that meet unique business requirements. Beyond work, I practice coding problems on platforms like LeetCode and stay updated with emerging trends in technology.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {highlights.map((highlight, index) => (
                  <Card
                    key={highlight.title}
                    className={`transition-all duration-500 hover:shadow-xl hover:scale-105 bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200 animate-delay-${(index + 1) * 100} group`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <highlight.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-2 text-lg">{highlight.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
