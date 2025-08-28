// components/Listings.jsx
export default function Listings() {
  const listings = [
    { image: "/house1.jpg", title: "Modern Villa", price: "$500,000" },
    { image: "/house2.jpg", title: "City Apartment", price: "$250,000" },
    { image: "/house3.jpg", title: "Luxury Mansion", price: "$1,000,000" },
  ];

  return (
    <section id="listings" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {listings.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
