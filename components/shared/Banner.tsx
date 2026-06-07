interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
  overlayColor?: string;
}
export default function Banner({
   title,
   description,
   imageUrl,
   overlayColor
}: BannerProps) {

  return (
    <section
      className="relative w-full h-80 sm:h-96 md:h-[500px] lg:h-[506px] bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      {/* Dark overlay on left side */}
    <div
  className={`absolute inset-0 ${
    overlayColor ?? ""
  }`}
  style={
    !overlayColor
      ? {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(197,197,197,0.6) 100%)",
        }
      : undefined
  }
/>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-12 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-7xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}
