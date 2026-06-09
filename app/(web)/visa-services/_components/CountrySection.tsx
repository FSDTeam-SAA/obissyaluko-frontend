import CountryCard from "./CountryCard";

const countries = [
  {
   image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
   image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
     image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
    image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
   image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
   image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
     image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
  {
    image: '/assets/tour.png',
    country: "United Kingdom",
    code: "AU",
    description:
      "One of the most popular destinations for education and tourism, known for prestigious universities and rich culture.",
    categories: ["Student", "Tourists", "Student"],
    visas: [
      { title: "Australia Student Visa (Subclass 500)" },
      { title: "Australia Tourist Visa (Subclass 600)" },
      { title: "Australia Student Visa (Subclass 500)" },
    ],
  },
];

export default function CountrySection() {
  return (
    <section className=" py-12">
      <div className="mx-auto container px-4">
        {/* Search */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search Country..."
            className="h-12 w-full rounded-lg border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country, index) => (
            <CountryCard
              key={index}
              {...country}
            />
          ))}
        </div>
      </div>
    </section>
  );
}