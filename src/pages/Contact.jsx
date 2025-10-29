export const Contact = () => {

    const handleSubmit = (e) => {
        alert("Thank you! Your message has been received.");
    };

  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">
        Let’s Grow Your Business 🚀
      </h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-xl shadow space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded focus:outline-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded focus:outline-blue-600"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border p-3 rounded focus:outline-blue-600"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>

      {/* Other CTAs */}
      <div className="mt-10 space-y-4">
        <a href="tel:+911234567890" className="block text-lg font-semibold text-blue-600 hover:underline">
          📞 Click to Call: +91 12345 67890
        </a>

        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="block text-lg font-semibold text-green-600 hover:underline"
        >
          📅 Book an Appointment
        </a>
      </div>
    </section>
  );
}
