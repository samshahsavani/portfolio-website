"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <div className="max-w-[2000px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 py-3">
        <Link
          href="/"
          className={`text-lg font-medium transition-colors whitespace-nowrap leading-none ${
            scrolled ? "hover:text-white/80" : "hover:text-gray-700"
          }`}
        >
          Sam Shahsavani
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-12">
          <NavLink href="/projects" scrolled={scrolled}>
            PROJECTS
          </NavLink>
          <NavLink href="/products" scrolled={scrolled}>
            PRODUCTS
          </NavLink>
          <NavLink href="/cv" scrolled={scrolled}>
            CV
          </NavLink>
        </div>

        <div className="hidden md:flex">
          <Button
            asChild
            variant="outline"
            className={`rounded-full text-xs px-4 py-1.5 h-auto transition-colors -mt-0.5 ${
              scrolled
                ? "border-white bg-black text-white hover:bg-white/20"
                : "border-black bg-black text-white hover:bg-black/80"
            }`}
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`p-1 ${scrolled ? "text-white hover:text-white/80" : "text-gray-900 hover:text-gray-700"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-full sm:w-80 ${scrolled ? "bg-black text-white" : "bg-white text-gray-900"}`}
            >
              <div className="flex flex-col gap-8 mt-8">
                <Link
                  href="/projects"
                  className={`text-lg font-medium transition-colors ${
                    scrolled ? "hover:text-white/80" : "hover:text-gray-700"
                  }`}
                >
                  PROJECTS
                </Link>
                <Link
                  href="/products"
                  className={`text-lg font-medium transition-colors ${
                    scrolled ? "hover:text-white/80" : "hover:text-gray-700"
                  }`}
                >
                  PRODUCTS
                </Link>
                <Link
                  href="/cv"
                  className={`text-lg font-medium transition-colors ${
                    scrolled ? "hover:text-white/80" : "hover:text-gray-700"
                  }`}
                >
                  CV
                </Link>
                <Button
                  asChild
                  variant="outline"
                  className={`rounded-full text-sm px-4 py-2 h-auto w-fit transition-colors ${
                    scrolled
                      ? "border-white bg-black text-white hover:bg-white/20"
                      : "border-black bg-black text-white hover:bg-black/80"
                  }`}
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`text-xs font-medium tracking-wide transition-colors relative group ${
        scrolled ? "text-white/90 hover:text-white" : "text-gray-900/90 hover:text-gray-900"
      }`}
    >
      {children}
      <span
        className={`absolute left-0 right-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left ${
          scrolled ? "bg-white" : "bg-gray-900"
        }`}
      />
    </Link>
  )
}

