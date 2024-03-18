import React, { useState } from "react";
import sgMail from "@sendgrid/mail";

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      try {
        await sgMail.send({
          to: "your-email@example.com", // Replace with your email
          from: formData.email,
          subject: "New message from your website",
          text: formData.message,
        });
        setSubmissionMessage("Your message has been successfully sent!");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Error sending email:", error);
        setSubmissionMessage(
          "An error occurred while sending your message. Please try again later."
        );
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-40">
      <h1 className=" font-bold mb-8 text-center text-yellow-300 text-4xl">
        Hire Me
      </h1>
      <div className="max-w-xl mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full mt-1 px-4 py-2 rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-yellow-400`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full mt-1 px-4 py-2 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-yellow-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className={`w-full mt-1 px-4 py-2 rounded-md border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-yellow-400`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className={`w-full bg-yellow-400 text-black py-3 rounded-md ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-yellow-500"
              } transition duration-300 ease-in-out`}
              disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
          {submissionMessage && (
            <p className="text-green-500 text-center">{submissionMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
