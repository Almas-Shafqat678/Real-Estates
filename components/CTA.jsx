"use client";
import Image from "next/image";

export default function Residencies() {
  const residencies = [
    {
      id: 1,
      price: "$47,043",
      title: "Aliva Priva Jardin",
      desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      img: "/house1.jpg",
    },
    {
      id: 2,
      price: "$66,353",
      title: "Asatti Garden City",
      desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      img: "/house2.jpg",
    },
    {
      id: 3,
      price: "$35,853",
      title: "Citralan Puri Serang",
      desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      img: "/house3.jpg",
    },
    {
      id: 4,
      price: "$52,000",
      title: "Grand Wisata Bekasi",
      desc: "Jl. Boulevard Grand Wisata, Tambun Selatan, Bekasi, Jawa Barat",
      img: "/house4.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-orange-500">Best Choices</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Popular Residencies
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {residencies.map((house) => (
          <div
            key={house.id}
            className="min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <Image
              src={house.img}
              alt={house.title}
              width={400}
              height={250}
              className="object-cover w-full h-56"
            />
            <div className="p-4">
              <p className="text-orange-500 font-bold text-lg">{house.price}</p>
              <h3 className="font-bold text-xl text-blue-900">{house.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{house.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
