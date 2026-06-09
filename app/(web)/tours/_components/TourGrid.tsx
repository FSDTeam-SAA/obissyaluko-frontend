import TourCard from "../TourCard";


const tours = [
  {
    image: "/assets/boat.png",
    title: "Magical Thai Experience",
    country: "Thailand",
    duration: "5 Days",
    maxPeople: 20,
    price: "$400",
    tags: [
      "Pattaya Beach",
      "Thai shopping malls",
      "Thai Food Adventure",
    ],
  },
  {
    image: "/assets/boat.png",
    title: "Magical Thai Experience",
    country: "Thailand",
    duration: "5 Days",
    maxPeople: 20,
    price: "$400",
    tags: [
      "Pattaya Beach",
      "Thai shopping malls",
      "Thai Food Adventure",
    ],
  },
  {
    image: "/assets/boat.png",
    title: "Magical Thai Experience",
    country: "Thailand",
    duration: "5 Days",
    maxPeople: 20,
    price: "$400",
    tags: [
      "Pattaya Beach",
      "Thai shopping malls",
      "Thai Food Adventure",
    ],
  },
];

export default function TourGrid() {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Country..."
          className="mb-10 h-12 w-full rounded-md border border-gray-200 bg-white px-4 outline-none"
        />

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              image={tour.image}
              title={tour.title}
              country={tour.country}
              duration={tour.duration}
              maxPeople={tour.maxPeople}
              price={tour.price}
              tags={tour.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}