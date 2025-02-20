export default function CVPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">Curriculum Vitae</h1>

        <div className="max-w-3xl space-y-16">
          {/* Experience Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium">Senior Designer</h3>
                <p className="text-gray-600">Company Name • 2020 - Present</p>
                <p className="mt-2">
                  Led design initiatives for major client projects, focusing on user experience and interface design.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Design Lead</h3>
                <p className="text-gray-600">Previous Company • 2018 - 2020</p>
                <p className="mt-2">
                  Managed a team of designers and developed design systems for various digital products.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Education</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium">Master of Design</h3>
                <p className="text-gray-600">University Name • 2016 - 2018</p>
                <p className="mt-2">Specialized in Interactive Design and Emerging Technologies</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Bachelor of Arts</h3>
                <p className="text-gray-600">University Name • 2012 - 2016</p>
                <p className="mt-2">Major in Visual Communication Design</p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl md:text-3xl font-light mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>User Interface Design</li>
                  <li>User Experience Design</li>
                  <li>Interaction Design</li>
                  <li>Design Systems</li>
                  <li>Visual Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Technical</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

