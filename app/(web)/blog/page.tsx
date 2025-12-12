import BlogCard from "./_components/BlogCard"




const blogPosts = [
  {
    id: 1,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 2,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 3,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 4,
     image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 5,
     image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 6,
   image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 7,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
  {
    id: 8,
    image: "/assets/blogimage.png",
    title: "Lorem ipsum dolor sit consectetur elit",
    date: "January 06,2025",
  },
]

export default function BlogsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 pt-[140px] md:pt-[200px]">
      <div className=" container mx-auto">
        <div className="flex items-start justify-between mb-12">
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Blogs</h1>
            <p className="text-[#616161] max-w-[690px] mx-auto text-sm  md:text-base ">
              From everyday essentials to the street trends, we bring you a seamless shopping experience with unbeatable
              deals, delivery, discover convenience, quality, and style all in one place.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} image={post.image} title={post.title} date={post.date} />
          ))}
        </div>
      </div>
    </section>
  )
}
