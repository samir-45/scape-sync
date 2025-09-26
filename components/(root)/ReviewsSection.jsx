// components/TestimonialsSection.tsx
import Image from "next/image";

const reviews = [
  {
    name: "Farzana H.",
    role: "Owner, CleanPro Services",
    image: "/testimonials/user1.png", // put images inside /public/testimonials/
    text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
  },
  {
    name: "Ahmed R.",
    role: "Technician",
    image: "/testimonials/user2.png",
    text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
  },
  {
    name: "Farzana H.",
    role: "Rafiq M., Homeowner",
    image: "/testimonials/user3.png",
    text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our Users Are Saying
        </h2>
        <p className="mt-4 text-gray-600">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl p-6 relative"
          >
            {/* Quote Mark (faded) */}
            <span className="absolute top-6 left-6 text-6xl text-gray-100 font-serif">
              “
            </span>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed relative z-10">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
