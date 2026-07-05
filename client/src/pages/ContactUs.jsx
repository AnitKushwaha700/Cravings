import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodTable from "../assets/foodTable.webp";
import api from "../config/api.config.js";


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

    try{
      const res = await api.post("/public/contact-us", payload);
      console.log("Contact form submitted successfully:", res.data);
      alert("Thanks for contacting us! You will hear back from us soon.");
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      alert("Failed to submit your message. Please try again later.");
    }

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
    <>
      <div
        className="min-h-[90vh] grid grid-cols-2 items-center p-10 "
        style={{ backgroundImage: `url(${foodTable})` }}
      >

        {/* Card */}
        <div className="col-start-3 w-full max-w-xl bg-[var(--background)] rounded-xl shadow-2xl p-10">
          <div className="text-3xl font-bold mb-2 text-center text-[var(--primary)]">
            Contact Us
          </div>
          <div className="text-md text-gray-500 mb-4 text-center ">
            Have questions or feedback? Reach out to us!
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={contactData.message}
                onChange={handleChange}
                rows="5"
                className={inputClass}
              />
            </div>

            {validateError && (
              <p className="text-red-500 text-sm col-span-2">{validateError}</p>
            )}

            {successMessage && (
              <p className="text-green-500 text-sm col-span-2">
                {successMessage}
              </p>
            )}

            <button
              type="submit"
              className="col-span-2 mt-2 rounded py-2 px-4 text-white"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm">
              Want to order Delicious Food?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Login
              </button>
              {" | "}
              <button
                onClick={() => navigate("/register")}
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import foodTable from "../assets/foodTable.webp";
// import api from "../config/api.config.js";

// const ContactUs = () => {
//   const navigate = useNavigate();
//   const [contactData, setContactData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [validateError, setValidateError] = useState();
//   const [successMessage, setSuccessMessage] = useState();

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setContactData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !contactData.fullName ||
//       !contactData.email ||
//       !contactData.phone ||
//       !contactData.subject ||
//       !contactData.message
//     ) {
//       setValidateError("All fields are required");
//       return;
//     }

//     setValidateError("");

//     const payload = {
//       fullName: contactData.fullName,
//       email: contactData.email.toLowerCase(),
//       phone: contactData.phone,
//       subject: contactData.subject,
//       message: contactData.message,
//     };

//     try {
//       const res = await api.post("/public/contact-us", payload);
//       setSuccessMessage(res.data.message || "Message sent successfully.");
//       setContactData({
//         fullName: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       setValidateError(
//         error.response?.data?.message || "Failed to send your message.",
//       );
//     }
//   };

//   const inputClass =
//     "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

//   return (
//     <>
//       <div
//         className="min-h-[90vh] grid grid-cols-2 items-center p-10"
//         style={{ backgroundImage: `url(${foodTable})` }}
//       >
//         <div className="col-start-3 w-full max-w-xl bg-[var(--background)] rounded-xl shadow-2xl p-10">
//           <div className="text-2xl font-bold mb-1 text-center text-[var(--primary)]">
//             Contact Us
//           </div>

//           <div className="text-md text-gray-500 mb-4 text-center ">
//             Have questions or feedback? Reach out to us!
//           </div>

//           <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
//             <div className="col-span-2 flex flex-col gap-2">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={contactData.fullName}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={contactData.email}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="phone">Phone</label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={contactData.phone}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 value={contactData.subject}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div className="col-span-2 flex flex-col gap-2">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={contactData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 className={inputClass}
//               />
//             </div>

//             {validateError && (
//               <p className="text-red-500 text-sm col-span-2">{validateError}</p>
//             )}

//             {successMessage && (
//               <p className="text-green-500 text-sm col-span-2">
//                 {successMessage}
//               </p>
//             )}

//             <button
//               type="submit"
//               className="col-span-2 mt-2 bg-(--primary) text-white py-2 px-4 rounded hover:bg-(--accent)"
//             >
//               Send Message
//             </button>
//           </form>

//           <div className="mt-6 text-center space-y-2">
//             <p className="text-sm">
//               Want to order Delicious Food?{" "}
//               <button
//                 onClick={() => navigate("/login")}
//                 className="text-(--primary) hover:underline font-semibold"
//               >
//                 Login
//               </button>
//               {" | "}
//               <button
//                 onClick={() => navigate("/register")}
//                 className="text-(--primary) hover:underline font-semibold"
//               >
//                 Register
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;
