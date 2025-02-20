import Image from "next/image"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Container with adjusted padding */}
      <div className="px-4 pt-12 pb-4 md:px-8 md:pt-14 md:pb-6 lg:px-12">
        <div className="max-w-[2000px] mx-auto h-[calc(100vh-5rem)]">
          {/* Hero Section with increased rounded corners */}
          <section className="relative overflow-hidden rounded-3xl h-full">
            {/* Video Container */}
            <div className="h-full relative overflow-hidden">
              <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/your-project-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-black/10" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 pb-16 md:p-16 md:pb-24 lg:p-20 lg:pb-32">
                <div className="space-y-6 md:space-y-6">
                  <div className="space-y-1">
                    <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gray-900 leading-[0.9]">
                      Multidisciplinary
                    </h1>
                    <h2 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-gray-900 leading-[0.9]">
                      Designer
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
                      I'm a multidisciplinary designer exploring with design and tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid gap-20 md:gap-32">
            {/* Journey Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">My Journey</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a multidisciplinary designer, I've always been fascinated by the intersection of design and
                  technology. My journey began with traditional design principles, but quickly evolved into exploring
                  the endless possibilities that emerging technologies offer to creative expression.
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Design process visualization"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Approach Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="space-y-6 md:order-2">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">My Approach</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe in creating experiences that seamlessly blend form and function. Every project is an
                  opportunity to push boundaries and explore new possibilities. By combining design thinking with
                  technical expertise, I craft solutions that not only look beautiful but solve real problems.
                </p>
              </div>
              <div className="relative aspect-square md:order-1">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Design approach visualization"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Skills Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">My Toolkit</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My diverse skill set spans across multiple disciplines, from UI/UX design to creative coding. I'm
                  proficient in industry-standard design tools and modern development frameworks, allowing me to bring
                  ideas to life from concept to implementation.
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Skills and tools visualization"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Vision Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
              <div className="space-y-6 md:order-2">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900">My Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm passionate about creating work that makes a lasting impact. Whether it's through innovative
                  interfaces, immersive experiences, or creative applications of technology, my goal is to push the
                  boundaries of what's possible in digital design.
                </p>
              </div>
              <div className="relative aspect-square md:order-1">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Future vision visualization"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

