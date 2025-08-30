"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white px-10 py-20">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-extrabold">
          WHY <span className="text-red-600">CHOOSE US</span>
        </h2>
        <p className="mt-4 text-white">
          Gym workouts offer a versatile and customisable experience, allowing 
          everyone to set specific fitness goals.
        </p>
      </div>

      {/* 4 Feature Boxes */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="border border-red-600 p-6 hover:bg-red-600/10 transition">
          <h3 className="text-gray-400 text-xl font-bold">01</h3>
          <h4 className="text-red-600 text-lg font-semibold mt-2">PERSONAL TRAINING</h4>
          <p className="text-sm mt-2 text-gray-300">
            Our gyms offer personalized training sessions with certified personal trainers 
            who create customized workout plans based on individual goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-red-600 p-6 hover:bg-red-600/10 transition">
          <h3 className="text-gray-400 text-xl font-bold">02</h3>
          <h4 className="text-red-600 text-lg font-semibold mt-2">EQUIPMENT AND FACILITIES</h4>
          <p className="text-sm mt-2 text-gray-300">
            Our gyms offer personalized training sessions with certified personal trainers 
            who create customized workout plans based on individual goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-red-600 p-6 hover:bg-red-600/10 transition">
          <h3 className="text-gray-400 text-xl font-bold">03</h3>
          <h4 className="text-red-600 text-lg font-semibold mt-2">NUTRITION COUNSELING</h4>
          <p className="text-sm mt-2 text-gray-300">
            Our gyms offer personalized training sessions with certified personal trainers 
            who create customized workout plans based on individual goals.
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-red-600 p-6 hover:bg-red-600/10 transition">
          <h3 className="text-gray-400 text-xl font-bold">04</h3>
          <h4 className="text-red-600 text-lg font-semibold mt-2">SPECIALITY PROGRAMS</h4>
          <p className="text-sm mt-2 text-gray-300">
            Our gyms offer personalized training sessions with certified personal trainers 
            who create customized workout plans based on individual goals.
          </p>
        </div>
      </div>
    </section>
  );
}
