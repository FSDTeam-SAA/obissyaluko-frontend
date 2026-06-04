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
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: 'Visa Services',
    description:
      'Expert visa processing for 150+ countries with guaranteed results and hassle-free experience',
  },
  {
    id: 2,
    icon: <BookOpen className="w-12 h-12 text-blue-600" />,
    title: 'Study Abroad',
    description:
      'University admissions, scholarship guidance and complete student support throughout your journey',
  },
  {
    id: 3,
    icon: <MapPin className="w-12 h-12 text-blue-600" />,
    title: 'Tour Packages',
    description:
      'Curated travel experiences with comprehensive itineraries and unforgettable destinations',
  },
]

export default function OurServices() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#11204C] mb-2">
            Our Services
          </h2>
          <p className="text-[#616161] w-[497px] mx-auto text-base">
            Comprehensive solutions for all your international travel and education needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Icon */}
              <div className="mb-4 inline-block flex justify-center">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <button className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-500 transition-colors duration-300 text-sm">
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
