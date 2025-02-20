import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    title: "Product One",
    description: "Description of product one. This could include features and benefits.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/products/product-one",
  },
  {
    title: "Product Two",
    description: "Description of product two. This could include features and benefits.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/products/product-two",
  },
  {
    title: "Product Three",
    description: "Description of product three. This could include features and benefits.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/products/product-three",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-[2000px] mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={index} href={product.link} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-medium mb-2">{product.title}</h2>
                    <p className="text-white/80">{product.description}</p>
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

