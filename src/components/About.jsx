import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { assets } from '../assets/assets';
import '../style.css'



export default function About() {
  return (
    <>
    <section className=" text-white py-16 text-center h-[400px]" id='about-sec' >
      
  <h1 className="md:text-7xl text-5xl font-bold mb-4 font-serif">About Hopens</h1>
  <p className="max-w-2xl mx-auto text-lg md:text-3xl lg:text-xl">
    At Hopens, we believe that every person deserves a safe place to call home, 
    a warm meal to eat, and a chance to dream again.
  </p>
</section>


{/* Section 2 – Who We Are */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl lg:text-4xl font-serif font-bold text-center mb-8 text-orange-600">
      Who We Are
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Text */}
      <div className='text-center lg:text-left'>
        <p className="md:text-2xl lg:text-lg text-xl mb-4">
          Hopens is a non-profit organization dedicated to restoring dignity 
          and providing opportunities for those in need. We work closely with 
          communities to ensure shelter, food, education, and emotional support 
          are accessible to everyone.
        </p>
        <p className="md:text-2xl lg:text-lg text-xl">
          Our vision is a world where no one is left behind, and every individual 
          gets a fair chance to rebuild their life.Over the years, we have initiated various programs that focus on empowering individuals through skill development, awareness campaigns, and sustainable livelihood opportunities. We believe in creating long-term change by addressing the root causes of poverty and inequality, not just the symptoms.


        </p>
      </div>

      {/* Image Slider */}
      <div className='z-10'>
        <Swiper modules={[Navigation,Pagination,Autoplay]} spaceBetween={20} slidesPerView={1} loop={true} navigation pagination={{clickable:true}}
        autoplay={{delay:1000,disableOnInteraction:false,}} >
          <SwiperSlide>
            <img
              src={assets.whoWeAre}
              alt="Helping hands"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.ngoTeam}
              alt="Volunteers"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.helpingHands}
              alt="Donations"
              className="rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</section>




{/* Section 3 – Our Mission & Vision */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl lg:text-4xl md:text-5xl font-serif font-bold text-center mb-8 text-orange-600">
      Our Mission & Vision
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Mission Card */}
      <div className=" text-center md:text-left bg-orange-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.missionImg}
          alt="Mission"
          className="rounded-lg mb-4"
        />
        <h3 className="text-3xl font-serif font-semibold mb-2 text-orange-700">Our Mission</h3>
        <p className="text-xl lg:text-xl md:text-2xl">
          To create lasting change by empowering individuals and communities 
          with resources, education, and opportunities to live with dignity 
          and hope.
        </p>
      </div>

      {/* Vision Card */}
      <div className=" text-center md:text-left bg-orange-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.visionImg}
          alt="Vision"
          className="rounded-lg mb-4"
        />
        <h3 className="text-3xl font-serif font-semibold mb-2 text-orange-700">Our Vision</h3>
        <p className="text-xl lg:text-xl md:text-2xl ">
          A compassionate world where every person has access to basic needs 
          and the opportunity to achieve their fullest potential without 
          discrimination.
        </p>
      </div>

    </div>
  </div>
</section>




{/* Section 4 – Our Impact */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl lg:text-4xl md:text-5xl font-serif font-bold text-orange-600 mb-8">
      Our Impact So Far
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Impact Item 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.volunteerImg}
          alt="Volunteers"
          className="mx-auto mb-4 w-[100px] h-[100px]"
        />
        <h3 className="text-4xl font-bold text-orange-700">250+</h3>
        <p className="text-2xl lg:text-xl font-semibold">Active Volunteers</p>
      </div>

      {/* Impact Item 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.helpedImg}
          alt="Beneficiaries"
          className="mx-auto mb-4 w-[100px] h-[100px]"
        />
        <h3 className="text-4xl font-bold text-orange-700">5,000+</h3>
        <p className="text-2xl lg:text-xl font-semibold">People Helped</p>
      </div>

      {/* Impact Item 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.fundImg}
          alt="Donations"
          className="mx-auto mb-4 w-[100px] h-[100px]"
        />
        <h3 className="text-4xl font-bold text-orange-700">$100K+</h3>
        <p className="text-2xl lg:text-xl font-semibold">Funds Raised</p>
      </div>

      {/* Impact Item 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <img
          src={assets.projectImg}
          alt="Projects"
          className="mx-auto mb-4 w-[100px] h-[100px]"
        />
        <h3 className="text-4xl font-bold text-orange-700">50+</h3>
        <p className="text-2xl lg:text-xl font-semibold">Projects Completed</p>
      </div>

    </div>
  </div>
</section>




{/* Section 5 – Join Us CTA */}
<section className="py-16 bg-orange-200 text-orange-900 text-center">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold mb-4">
      Be the Change You Wish to See in the World 🌍
    </h2>
    <p className="text-xl md:text-2xl lg:text-xl mb-6">
      Join hands with us to bring hope, happiness, and opportunities to those who need it most.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/volunteer"
        className="bg-orange-500 text-white text-xl px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Become a Volunteer
      </a>
      <a
        href="/donate"
        className="bg-orange-700 text-xl px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
      >
        Donate Now
      </a>
    </div>
  </div>
</section>
    </>
  )
}




