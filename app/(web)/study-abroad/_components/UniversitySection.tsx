import { Search } from "lucide-react";
import UniversityCard from "./UniversityCard";

const universities = [
  {
    image:
      "/assets/program.jpg",
    university: "University of Oxford",
    country: "United Kingdom",
    description:
      "One of the world's oldest and most trusted prestigious academic excellence.",
    programs: [
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
    ],
  },
  {
    image:
      "/assets/program.jpg",
    university: "University of Oxford",
    country: "United Kingdom",
    description:
      "One of the world's oldest and most trusted prestigious academic excellence.",
    programs: [
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
      {
        title: "Business Management",
        duration: "2 Years",
        scholarship: "Scholarship",
        price: "$40000 / Year",
      },
    ],
  },
  {
    image:
      "/assets/program.jpg",
    university: "University of Oxford",
    country: "United Kingdom",
    description:
      "One of the world's oldest and most trusted prestigious academic excellence.",
    programs: [
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
    ],
  },
  {
    image:
      "/assets/program.jpg",
    university: "University of Oxford",
    country: "United Kingdom",
    description:
      "One of the world's oldest and most trusted prestigious academic excellence.",
    programs: [
      {
        title: "Computer Science",
        duration: "1 Year",
        scholarship: "Scholarship",
        price: "$35000 / Year",
      },
      {
        title: "Business Management",
        duration: "2 Years",
        scholarship: "Scholarship",
        price: "$40000 / Year",
      },
    ],
  },
];

export default function UniversitySection() {
  return (
    <section className=" py-10">
      <div className="mx-auto container px-4">
        {/* Search */}
        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Country..."
            className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-4 outline-none"
          />
        </div>

        {/* University Cards */}
        <div className="space-y-6">
          {universities.map((item, index) => (
            <UniversityCard
              key={index}
              image={item.image}
              university={item.university}
              country={item.country}
              description={item.description}
              programs={item.programs}
            />
          ))}
        </div>
      </div>
    </section>
  );
}