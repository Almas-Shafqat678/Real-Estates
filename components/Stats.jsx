// components/Stats.jsx
export default function Stats() {
  const stats = [
    { label: "Properties Listed", value: "500+" },
    { label: "Happy Clients", value: "300+" },
    { label: "Cities Covered", value: "25+" },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
        {stats.map((item, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">{item.value}</h3>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
