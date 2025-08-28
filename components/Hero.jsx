"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover <br /> Most Suitable <br /> Property
        </h1>
        <p className="text-gray-300 text-base md:text-lg">
          Find a variety of properties that suit you very easily. <br />
          Forget all difficulties in finding a residence for you
        </p>

        {/* Search Input */}
        <div className="flex mt-4">
          <div className="flex items-center bg-white rounded-l-lg px-3 py-2 text-gray-700 w-full">
            <MapPin className="w-5 h-5 text-blue-500 mr-2" />
            <input
              type="text"
              placeholder="Search location"
              className="w-full bg-transparent focus:outline-none text-gray-900"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 rounded-r-lg transition">
            Search
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-yellow-400">9,000 +</span>
            <span className="text-gray-400 text-sm">Premium Product</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-yellow-400">2,000 +</span>
            <span className="text-gray-400 text-sm">Happy Customer</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-yellow-400">28 +</span>
            <span className="text-gray-400 text-sm">Awards Winning</span>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="rounded-tl-[50%] rounded-tr-[50%] overflow-hidden w-full max-w-md">
          <Image
            src="/hero-property.png" // Add your uploaded image in public folder
            alt="Property"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
