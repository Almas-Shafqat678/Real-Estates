// components/Services.jsx
export default function Services() {
  const services = [
    { title: "Property Buying", desc: "Get expert help to buy the right property at the right price." },
    { title: "Property Selling", desc: "Sell your property faster with better visibility." },
    { title: "Rental Management", desc: "Manage your rentals with ease and efficiency." },
  ];

  return (
    <section id="services" className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
