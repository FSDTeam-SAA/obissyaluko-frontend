import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface Tour {
  id: number
  title: string
  location: string
  duration: string
  flightType: string
  days: string
  price: string
  image: string
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
    image: '/assets/tour.png',
  },
  {
    id: 2,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
     image: '/assets/tour.png',
  },
  {
    id: 3,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
    image: '/assets/tour.png',
  },
  {
    id: 4,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
     image: '/assets/tour.png',
  },
  {
    id: 5,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
      image: '/assets/tour.png',
  },
  {
    id: 6,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
     image: '/assets/tour.png',
  },
  {
    id: 7,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
    image: '/assets/tour.png',
  },
  {
    id: 8,
    title: 'Switzerland',
    location: '0h 50m, Direct',
    duration: 'Sun 4/1, Sun 1/1',
    flightType: 'Direct',
    days: 'Sun 4/1, Sun 1/1',
    price: '$2000',
     image: '/assets/tour.png',
  },
]

export function FeaturedTours() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16">
          <h2 className="mb-3 text-2xl font-bold text-neutral-900 sm:text-3xl md:text-4xl">
            Featured Tours
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600 sm:text-base">
            Explore visa options for your dream destination
          </p>
        </div>

        {/* Tours Grid */}
        <div className="mb-8 grid gap-4 sm:gap-6 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl bg-[#FFFBF4] shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-neutral-100"
            >
              {/* Image Container */}
              <div className="relative  w-full overflow-hidden p-3">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[228px] object-cover transition-transform hover:scale-105"
                  
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="font-semibold text-[#282828] text-base sm:text-2xl mb-1">
                  {tour.title}
                </h3>

                <div className="space-y-1 mb-2 text-xs sm:text-base text-[#282828]">
                  <p>{tour.location}</p>
                  <p className="text-[#282828]">{tour.days}</p>
                </div>

                <div className="">
                  <p className="text-base sm:text-lg font-bold text-[#282828]">
                    Starts from {tour.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center">
          <Link href="/tours">
          <Button
            variant="outline"
            className="border-[#CD9B46] h-12 rounded-[8px] text-[#CD9B46] hover:text-[#CD9B46] hover:scale-105 transition-transform duration-300 font-medium"
          >
            Explore More{' '}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
