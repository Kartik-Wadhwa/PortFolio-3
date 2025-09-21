"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-cyan-500/5" />

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-float shadow-2xl">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 text-balance">
              Hi, I'm <span className="gradient-text">Kartik Wadhwa</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
              MS Dynamics CRM Developer passionate about creating innovative solutions and building exceptional user
              experiences with modern technologies
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="text-lg px-10 py-4 group bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 cursor-pointer"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Kartik-Wadhwa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform border border-slate-200 hover:border-blue-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kartik-wadhwa-5a2030231/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform border border-slate-200 hover:border-blue-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:kartik.wadhwa0712@gmail.com"
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 transform border border-slate-200 hover:border-blue-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-float shadow-xl"
        style={{ animationDelay: "0s", animationDuration: "6s" }}
      />
      <div
        className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-sky-400/20 to-blue-400/20 rounded-full animate-float shadow-xl"
        style={{ animationDelay: "2s", animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-sky-400/20 rounded-full animate-float shadow-xl"
        style={{ animationDelay: "4s", animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full animate-float shadow-xl"
        style={{ animationDelay: "1s", animationDuration: "5s" }}
      />
    </section>
  )
}
