import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollBottomToTop from "../animation/ScrollBottomToTop";
import ContactForm from "./ContactForm";
import emailjs from "emailjs-com";

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
        const response = await emailjs.sendForm(
          "service_wcj189n",
          "template_56pkvgg",
          e.target,
          "x9R2nVgy_s-lSOeIE"
        );
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
    <ScrollBottomToTop>
      <div className="container mx-auto px-4 py-8 mt-14 md:mt-40">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" font-bold mb-8 text-center text-yellow-300 text-3xl md:text-5xl font-mono">
          Hire Me
        </motion.h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          {submissionMessage && (
            <p className="text-green-500 text-center">{submissionMessage}</p>
          )}
        </div>
      </div>
    </ScrollBottomToTop>
  );
};

export default ContactMe;
