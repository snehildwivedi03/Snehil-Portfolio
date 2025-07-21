import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { slideIn } from "../utils/motion";
import Modal from "./Modal";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isVisible: false,
    isError: false,
    title: "",
    message: "",
    buttonText: "OK",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setForm({ ...form, [name]: sanitizedValue });
  };

  const showModal = (isError, title, message) => {
    setModal({
      isVisible: true,
      isError,
      title,
      message,
      buttonText: "OK",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showModal(true, "Incomplete Form", "All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(form.email)) {
      showModal(true, "Invalid Email", "Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: DOMPurify.sanitize(form.name),
          to_name: "Snehil Dwivedi",
          from_email: DOMPurify.sanitize(form.email),
          to_email: "snehildwivedi03@gmail.com",
          message: DOMPurify.sanitize(form.message),
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        () => {
          setLoading(false);
          showModal(
            false,
            "Success!",
            "Thank you for your message. I will get back to you soon."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showModal(
            true,
            "Error",
            "Something went wrong. Please try again later."
          );
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-bgSecondaryDark xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-md shadow-primary"
      id="contact"
    >
      <p className={"sectionSubText text-ctnSecondaryDark"}>Get in touch</p>
      <h3 className={"sectionHeadText text-ctnPrimaryDark"}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your good name?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-ctnPrimaryDark font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What do you want to say?"
            className="bg-bgPrimaryDark py-4 px-6 placeholder:text-ctnSecondaryDark rounded-lg outline-none border-none font-medium text-ctnPrimaryDark placeholder:text-sm md:placeholder:text-lg h-fit placeholder:break-words break-words"
          />
        </label>

        <button
          type="submit"
          className="bg-primary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-tertiary hover:shadow-primary hover:bg-tertiary transition-all duration-800 ease-in"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      <AnimatePresence>
        {modal.isVisible && (
          <Modal
            title={modal.title}
            message={modal.message}
            buttonText={modal.buttonText}
            isError={modal.isError}
            setIsModalVisible={() => setModal({ ...modal, isVisible: false })}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Contact;
