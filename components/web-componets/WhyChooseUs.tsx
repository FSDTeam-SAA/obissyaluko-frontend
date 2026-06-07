import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-28 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#131313] leading-tight mb-4 md:mb-6">
              Why Choose Us?
            </h2>

            <p className="text-base md:text-lg text-[#131313] leading-relaxed max-w-[621px]">
              We make the visa process simple, transparent, and stress-free.
              With expert-reviewed applications, country-specific guidance,
              and a fast, guided online system, you always know exactly what
              to do and what comes next. Your documents stay secure, your
              progress is visible in real time, and our team handles the
              submission with care—so you can apply with confidence from
              start to finish.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[624px]">
              <Image
                src="/assets/whaychoseus.png"
                alt="Why Choose Us"
                width={624}
                height={624}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}