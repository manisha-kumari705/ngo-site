
import React, { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    days: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6 ">
      <h2 className=" md:text-5xl text-3xl font-bold text-orange-600 mb-6 lg:ml-90 md:ml-30 ml-7 font-serif ">Volunteer With Us</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg lg:ml-85 md:ml-25 "
      >
        {/* Name */}
        <label className="block mb-2 font-semibold text-[18px]">Full Name</label>
        <input
          type="text"
          placeholder=" Enter your name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        {/* Email */}
        <label className="block mb-2 font-semibold text-[18px]">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        {/* Phone */}
        <label className="block mb-2 font-semibold text-[18px]">Phone</label>
        <input
          type="tel"
          placeholder=" Enter your phone no."
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        />

        {/* Reason */}
        <label className="block mb-2 font-semibold text-[18px]">Why do you want to volunteer?</label>
        <textarea
          name="reason"
          placeholder="Give reason"
          required
          value={formData.reason}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        ></textarea>

        {/* Available Days */}
        <label className="block mb-2 font-semibold text-[18px]">Available Days</label>
        <select
          name="days"
          value={formData.days}
          onChange={handleChange}
          className="border w-full p-2 mb-4 rounded"
        >
          <option value="">Select</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
          <option value="Anytime">Anytime</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition md:ml-47 ml-25 text-[18px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
