import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Project One",
    description: "Description of project one. This could be a brief overview of what the project entails.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/project-one",
  },
  {
    title: "Project Two",
    description: "Description of project two. This could be a brief overview of what the project entails.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "Description of project three. This could be a brief overview of what the project entails.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/project-three",
  },
  {
    title: "Project Four",
    description: "Description of project four. This could be a brief overview of what the project entails.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/project-four",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
                    <p className="text-white/80">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 transform transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

