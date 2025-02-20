import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">Get in Touch</h1>

        <div className="max-w-2xl space-y-12">
          <p className="text-xl text-gray-600">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of
            the following channels.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <div>
                <h2 className="text-lg font-medium">Email</h2>
                <a
                  href="mailto:sam.shahsavani@example.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  sam.shahsavani@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <div>
                <h2 className="text-lg font-medium">Phone</h2>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6" />
              <div>
                <h2 className="text-lg font-medium">Location</h2>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Button
              asChild
              className="rounded-full bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 h-auto text-base"
            >
              <a href="mailto:sam.shahsavani@example.com">Send me an email</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

