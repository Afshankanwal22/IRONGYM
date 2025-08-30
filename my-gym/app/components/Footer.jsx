export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 flex flex-col items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold mb-6 text-center">
          <span className="text-white">IRON</span>
          <span className="text-red-600">GYM</span>
        </div>

       {/* Navigation Links */}
<ul className="flex flex-wrap justify-center gap-8 font-medium text-white mb-6">
  {["Home", "Service", "Trainers", "Testimonial", "Contact Us"].map((link, i) => (
    <li
      key={i}
      className={`cursor-pointer transition-colors duration-300 ${
        link === "Home" ? "text-red-600" : "hover:text-red-600"
      }`}
    >
      {link}
    </li>
  ))}
</ul>

      </div>

     {/* Bottom Section */}
<div className="border-t border-gray-700 py-6">
  <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
    <span className="mb-2 md:mb-0">Privacy | Terms and Conditions</span>
    <span>© 2025 All rights reserved. IronGym Company</span>
  </div>
</div>

    </footer>
  );
}
