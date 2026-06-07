'use client'

import { Globe, BookOpen, MapPin, ArrowRight } from 'lucide-react'

interface Service {
  id: number
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    id: 1,
    icon: <Globe className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    title: 'Visa Services',
    description:
      'Expert visa processing for 150+ countries with guaranteed results and hassle-free experience',
  },
  {
    id: 2,
    icon: <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    title: 'Study Abroad',
    description:
      'University admissions, scholarship guidance and complete student support throughout your journey',
  },
  {
    id: 3,
    icon: <MapPin className="w-10 h-10 md:w-12 md:h-12 text-blue-600" />,
    title: 'Tour Packages',
    description:
      'Curated travel experiences with comprehensive itineraries and unforgettable destinations',
  },
]

export default function OurServices() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11204C] mb-3">
            Our Services
          </h2>

          <p className="text-[#616161] text-base leading-relaxed max-w-[497px] mx-auto">
            Comprehensive solutions for all your international travel and
            education needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Learn More */}
              <button className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-500 transition-colors duration-300 text-sm md:text-base">
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}