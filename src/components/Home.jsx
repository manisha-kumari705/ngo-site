import React from 'react'
import '../style.css'
import { assets } from '../assets/assets';



function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className=" text-white py-20 h-[450px]" id='bg-img' >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Helping Hands NGO
          </h1>
          <p className="text-lg md:text-[25px] lg:text-[20px] mb-6 ">
            Together we can make a difference in the lives of those who need it the most.
          </p>
          <button className="w-[150px] lg:text-[18px] md:text-[22px] bg-[rgb(233,102,14)] text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition">
            Join Us
          </button>
        </div>
      </section>

     

      {/* Mission Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="lg:text-3xl text-4xl font-bold mb-8 font-serif">Our Mission</h2>
          <p className="text-gray-700 max-w-2xl mx-auto lg:text-[18px] text-[22px]">
            Our NGO is dedicated to providing education, healthcare, and shelter to underprivileged communities. 
            We believe in empowering individuals and creating a brighter future for everyone.
          </p>
        </div>
      </section>

      {/* Features Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="lg:text-3xl text-4xl font-bold text-center mb-12 font-serif">What We Do</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className=" font-serif lg:text-[27px] text-[30px] font-bold mb-4 text-[rgb(233,102,14)]">Education</h3>
        <img className='rounded-lg mb-4' src={assets.education} alt="" />
        <p className="text-gray-600 lg:text-[16px] text-[20px]">We run schools and provide study materials to underprivileged children.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="font-serif lg:text-[27px] text-[30px] font-bold mb-4 text-[rgb(233,102,14)]">Healthcare</h3>
         <img className='rounded-lg mb-4' src={assets.healthCare} alt="" />
        <p className="text-gray-600 lg:text-[16px] text-[20px]">We organize free medical camps and provide essential medicines.</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h3 className="font-serif lg:text-[27px] text-[30px] font-bold mb-4 text-[rgb(233,102,14)]">Shelter</h3>
        <img className='rounded-lg mb-4' src={assets.shelter} alt="" />
        <p className="text-gray-600 lg:text-[16px] text-[20px]">We provide shelter homes for homeless and abandoned individuals.</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
