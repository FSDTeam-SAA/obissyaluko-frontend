import BlogCard from "./_components/BlogCard"




const blogPosts = [
  {
    id: 1,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 2,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 3,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 4,
     image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 5,
     image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 6,
   image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 7,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
  {
    id: 8,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    category: "Business",
  },
]

export default function BlogsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Blogs</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              From everyday essentials to the street trends, we bring you a seamless shopping experience with unbeatable
              deals, delivery, discover convenience, quality, and style all in one place.
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} image={post.image} title={post.title} category={post.category} />
          ))}
        </div>
      </div>
    </section>
  )
}
