import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-32 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Grow Your Business with Smart Digital Marketing
        </h1>
        <p className="text-lg md:text-xl mb-8">
          From SEO to social media, we help you reach more customers and increase ROI.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Request a Free Marketing Audit
        </Link>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Key Services</h2>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto">
          {[
            { title: "SEO", desc: "Boost your Google visibility and drive organic traffic." },
            { title: "Meta Ads", desc: "Engage customers with high-performing Facebook & Instagram ads." },
            { title: "Google Ads", desc: "Reach buyers at the right time with precision targeting." },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose TechAIVV?</h2>
        <div className="grid md:grid-cols-3 gap-8 container mx-auto">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">📈 Proven ROI</h3>
            <p>We focus on measurable growth, not vanity metrics.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">📊 Data-Driven</h3>
            <p>Every decision is based on analytics and testing.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">💡 Expert Team</h3>
            <p>Seasoned marketers passionate about your success.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
