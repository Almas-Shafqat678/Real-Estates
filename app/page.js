"use client";
import { useState } from "react";
import {
  Search,
  ChevronDown,
  Phone,
  MessageSquare,
  Video,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ FAQ Data
  const faqs = [
    {
      id: 1,
      icon: "🛡",
      question: "Best interest rates on the market",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 2,
      icon: "❌",
      question: "Prevent unstable prices",
      answer:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 3,
      icon: "📊",
      question: "Transparency in transactions",
      answer:
        "We ensure full transparency in every transaction, giving you peace of mind and complete clarity about your investment decisions.",
    },
  ];

  // ✅ Residencies Data
  const residencies = [
    {
      id: 1,
      price: "$47,043",
      title: "Aliva Priva Jardin",
      desc: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      img: "/images/Modern-Appartment.jpg",
    },
    {
      id: 2,
      price: "$66,353",
      title: "Asatti Garden City",
      desc: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      img: "/images/Family-Appartment.webp",
    },
    {
      id: 3,
      price: "$35,853",
      title: "Citralan Puri Serang",
      desc: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      img: "/images/miami.png",
    },
    {
      id: 4,
      price: "$52,000",
      title: "Grand Wisata Bekasi",
      desc: "Jl. Boulevard Grand Wisata, Tambun Selatan, Bekasi, Jawa Barat",
      img: "/images/Subarban-Neighbouhood.webp",
    },
    {
      id: 5,
      price: "$72,500",
      title: "Palm Hills Estate",
      desc: "Jl. Palm Raya No.45, Pondok Indah, South Jakarta",
      img: "/images/Luxury-Villa.jpg",
    },
    {
      id: 6,
      price: "$41,200",
      title: "Oceanview Apartments",
      desc: "Jl. Pantai Indah Kapuk, North Jakarta",
      img: "/images/Beach-site.jpg",
    },
    {
      id: 7,
      price: "$88,900",
      title: "Sunrise Villas",
      desc: "Jl. Raya Uluwatu No.10, Bali",
      img: "/images/City-Centre.webp",
    },
  ];

  return (
    <div className="scroll-smooth">
      {/* ========== Hero Section ========== */}
      <section
  id="get-started"
  className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between overflow-hidden"
>
  {/* Decorative Circles */}
  <div className="absolute top-32 left-[-100px] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-bounce"></div>
  <div className="absolute top-40 right-40 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-spin-slow"></div>

  {/* Left Content */}
  <motion.div
    className="max-w-lg md:ml-[3cm] z-10 text-center md:text-left"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
      <div className="relative inline-block">
        Discover
        <span className="absolute top-0 right-[-14px] w-4 h-4 bg-blue-500 rounded-full animate-ping"></span>
      </div>
      <br />
      Most Suitable <br />
      <span className="text-blue-400">Property</span>
    </h1>
    <p className="text-gray-300 mt-4 text-lg leading-relaxed">
      Find a variety of properties that suit you very easily. Forget all
      difficulties in finding a residence for you.
    </p>

    {/* Search Bar */}
    <div className="mt-6 flex bg-white rounded-xl shadow-2xl overflow-hidden max-w-md border border-gray-300">
      <div className="flex items-center justify-center px-3 text-blue-500">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search location..."
        className="flex-1 px-4 py-3 text-black outline-none text-sm"
      />
      <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-white text-sm font-semibold">
        Search
      </button>
    </div>

    {/* Stats */}
    <div className="flex gap-12 mt-10 justify-center md:justify-start">
      <div className="text-center">
        <p className="text-3xl font-extrabold text-blue-400">9,000+</p>
        <p className="text-gray-400 text-sm">Premium Products</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-extrabold text-purple-400">2,000+</p>
        <p className="text-gray-400 text-sm">Happy Customers</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-extrabold text-pink-400">28+</p>
        <p className="text-gray-400 text-sm">Awards Winning</p>
      </div>
    </div>
  </motion.div>

  {/* Right Image */}
  <motion.div
    className="mt-12 md:mt-0 md:w-1/2 flex justify-center z-10"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="rounded-t-full overflow-hidden border-4 border-blue-500/40 shadow-2xl w-96 h-[500px] hover:scale-105 transition-transform duration-500">
      <Image
        src="/images/hero-property.png"
        alt="Property"
        width={400}
        height={500}
        className="object-cover w-full h-full"
      />
    </div>
  </motion.div>
</section>



      {/* ✅ Full-width Banner Image */}
      <section className="w-full bg-white py-8 px-[2cm]">
        <Image
          src="/images/banner-wide.png"
          alt="Luxury Banner"
          width={1920}
          height={400}
          className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-contain"
          priority
        />
      </section>

      {/* ========== Residencies Section (Updated with Swiper) ========== */}
      <section id="residencies" className="bg-white py-20 px-6 md:px-20">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-orange-500">Best Choices</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Popular Residencies
            </h2>
          </div>
        </div>

        {/* Modern Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {residencies.map((house) => (
            <SwiperSlide key={house.id}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ========== Our Value Section ========== */}
      <section id="our-value" className="w-full bg-white py-16 px-[5cm]">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-t-full overflow-hidden border shadow-lg">
              <Image
                src="/images/modern-home.png"
                alt="Our Value"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="flex-1">
            <h3 className="text-orange-500 font-semibold text-lg">Our Value</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
              Value We Give to You
            </h2>
            <p className="text-gray-600 mt-4">
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better.
            </p>

            {/* Accordion */}
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="p-4 rounded-lg shadow-md bg-white border cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-500 text-sm">{faq.icon}</span>
                      <h4 className="font-bold text-lg text-gray-900">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openIndex === index && (
                    <p className="text-gray-600 text-sm mt-3">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Contact Section ========== */}
      <section id="contact" className="bg-white py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="flex-1 ml-[5cm]">
            <h3 className="text-orange-500 font-semibold text-lg">
              Our Contact Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
              Easy to contact us
            </h2>
            <p className="text-gray-600 mt-4">
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better.
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* Call */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg">
                <Phone className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-md mt-2">Call</h4>
                <p className="text-gray-500 text-xs">021 123 145 14</p>
                <button className="mt-3 w-full py-1.5 rounded-md bg-blue-100 text-blue-600 text-sm font-medium">
                  Call now
                </button>
              </div>

              {/* Chat */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-md mt-2">Chat</h4>
                <p className="text-gray-500 text-xs">021 123 145 14</p>
                <button className="mt-3 w-full py-1.5 rounded-md bg-blue-100 text-blue-600 text-sm font-medium">
                  Chat now
                </button>
              </div>

              {/* Video Call */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg">
                <Video className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-md mt-2">Video Call</h4>
                <p className="text-gray-500 text-xs">021 123 145 14</p>
                <button className="mt-3 w-full py-1.5 rounded-md bg-blue-100 text-blue-600 text-sm font-medium">
                  Video Call now
                </button>
              </div>

              {/* Message */}
              <div className="border p-4 rounded-lg shadow hover:shadow-lg">
                <Mail className="w-5 h-5 text-blue-500" />
                <h4 className="font-bold text-md mt-2">Message</h4>
                <p className="text-gray-500 text-xs">021 123 145 14</p>
                <button className="mt-3 w-full py-1.5 rounded-md bg-blue-100 text-blue-600 text-sm font-medium">
                  Message now
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-t-full overflow-hidden border shadow-lg w-[350px] h-[400px]">
              <Image
                src="/images/contact-house.png"
                alt="Contact House"
                width={350}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Get Started Section ========== */}
      <section className="w-full bg-white py-10">
        <div className="mx-[5cm] bg-blue-600 text-white rounded-lg shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get started with Homyz
          </h2>
          <p className="mb-6">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </p>
          <button className="px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* ========== Footer Section ========== */}
      <footer className="bg-white border-t py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-900">Homyz</h3>
            <p className="text-gray-600 mt-2 max-w-sm">
              Our vision is to make all people the best place to live for them.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold text-blue-900">Information</h4>
              <p className="text-gray-600 text-sm">145 New York, FL 5467, USA</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900">Links</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Property</li>
                <li>Services</li>
                <li>Product</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
