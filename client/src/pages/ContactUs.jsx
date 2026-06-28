import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryboy from "../assets/deliberyboy.png";

const ContactUs = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [validateError, setValidateError] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !contactData.fullName ||
      !contactData.email ||
      !contactData.phone ||
      !contactData.subject ||
      !contactData.message
    ) {
      setValidateError("All fields are required");
      return;
    }

    setValidateError("");
    setSuccessMessage(
      "Thank you for contacting us! We'll get back to you soon.",
    );
    console.log("Contact data submitted:", contactData);

    const payload = {
      fullName: contactData.fullName,
      email: contactData.email.toLowerCase(),
      phone: contactData.phone,
      subject: contactData.subject,
      message: contactData.message,
    };

    // Reset form after submission
    setTimeout(() => {
      setContactData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSuccessMessage("");
    }, 3000);
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

  return (
    <div className="h-screen bg-[var(--background)] flex items-center justify-center px-6">
      <div className="w-full max-w-7xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] p-10 text-white">
          <img
            src={deliveryboy}
            alt="Delivery Boy"
            className="w-80 mb-8 scale-x-[-1]"
          />

          <h2 className="text-3xl font-bold">We'd Love To Hear From You</h2>

          <p className="text-center mt-4 text-white/90 max-w-sm">
            Have a question, feedback, or need support? Send us a message and
            our team will get back to you as soon as possible.
          </p>
        </div>

        {/* Right Section */}

        <div className="p-10">
          <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
            Contact Us
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            {/* Full Name */}

            <div>
              <label className="block mb-2 font-medium">Full Name</label>

              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-medium">Email</label>

              <input
                type="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block mb-2 font-medium">Phone</label>

              <input
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            {/* Subject */}

            <div>
              <label className="block mb-2 font-medium">Subject</label>

              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            {/* Message */}

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Message</label>

              <textarea
                rows="5"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-[var(--primary)]"
              ></textarea>
            </div>

            {validateError && (
              <p className="md:col-span-2 text-red-500">{validateError}</p>
            )}

            {successMessage && (
              <p className="md:col-span-2 text-green-600 font-medium">
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              className="md:col-span-2 bg-[var(--primary)] hover:bg-[var(--secondary)] text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="border-t mt-8 pt-6 text-center space-y-2">
            <p>Want to order delicious food?</p>

            <div className="flex justify-center gap-6">
              <button
                onClick={() => navigate("/login")}
                className="text-[var(--primary)] font-semibold hover:underline"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="text-[var(--primary)] font-semibold hover:underline"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
