import React, { useState } from "react";

function Contect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://ikrarportfolio-backend.onrender.com/send-email", { // backend ka URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      setStatus("❌ Error sending message");
    }
  };

  return (
    <section id="contect" className=" w-full mt-10 flex items-center justify-center bg-gray-200 dark:text-black dark:bg-blue-950 p-10 ">
      <div className="  w-[90%] ">
        <h6 className=" text-center text-3xl uppercase font-semibold text-yellow-500">
          Contect Me
        </h6>

        <form
          className="flex items-center justify-center mt-10 gap-6 flex-col "
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="relative w-[80%]">
            <input
              type="text"
              name="name"
              id="your-name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              className="peer w-full p-3 rounded-lg border cursor-text outline-none "
              required
            />
            <label
              htmlFor="your-name"
              className="absolute left-3 text-gray-400 text-sm transition-all 
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 peer-focus:top-[-20px] peer-focus:text-red-500 peer-focus:text-sm  cursor-text "
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative w-[80%]">
            <input
              type="email"
              name="email"
              id="your-email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              className="peer w-full p-3 rounded-lg border cursor-text outline-none "
              required
            />
            <label
              htmlFor="your-email"
              className="absolute left-3 text-gray-400 text-sm transition-all 
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 peer-focus:top-[-20px] peer-focus:text-red-500 peer-focus:text-sm  cursor-text "
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative w-[80%]">
            <textarea
              name="message"
              id="your-meassage"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              className="peer w-full p-3 rounded-lg border cursor-text outline-none "
              required
            ></textarea>
            <label
              htmlFor="your-meassage"
              className="absolute left-3 text-gray-400 text-sm transition-all 
                 peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 
                 peer-placeholder-shown:text-base 
                 peer-focus:top-[-20px] peer-focus:text-red-500 peer-focus:text-sm  cursor-text "
            >
              Your Message
            </label>
          </div>

<button
  type="submit"
  className="relative hover:text-black overflow-hidden px-5 py-2 rounded-md bg-black text-white shadow-2xl shadow-blue-700
             before:content-[''] before:absolute before:inset-0 before:text-black before:bg-yellow-400
             before:scale-x-0 before:origin-left before:transition-transform before:duration-300
             hover:before:scale-x-100"
>
  <span className="relative  z-10">Submit</span>
</button>





          {/* Status Message */}
          {status && <p className="text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contect;
