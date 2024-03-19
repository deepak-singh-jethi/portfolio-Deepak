import React from "react";

const ContactForm = ({
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        error={errors.name}
        className="mt-5 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-yellow-400 block w-full"
      />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        error={errors.email}
        className="mt-5 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-yellow-400 block w-full"
      />
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className={`w-full mt-5 px-4 py-2 rounded-md border ${
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
          className={`w-full bg-yellow-400 text-black py-3 rounded-md mt-5 ${
            isSubmitting
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-yellow-500"
          } transition duration-300 ease-in-out`}
          disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
