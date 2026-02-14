import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0uy7fd9",
      "template_l0gam3h",
      form.current,
      "-2If6S7hQivxPU9fq"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });
  };

  return (
    <section
  id="contact"
  className="py-20 bg-black text-white text-center"
>

      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 text-black rounded"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 text-black rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 text-black rounded"
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-blue-500 py-2 rounded hover:scale-105 transition"

        >
          Send
        </button>
      </form>
    </section>
  );
}
