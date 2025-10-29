const services = [
  {
    title: "SEO Optimization",
    desc: "Improve your visibility and rank higher on Google through keyword and content optimization.",
  },
  {
    title: "Meta Ads Campaigns",
    desc: "Drive sales and engagement with precisely targeted Facebook & Instagram ad strategies.",
  },
  {
    title: "Google Ads Management",
    desc: "Maximize ROI with optimized search, display, and video advertising campaigns.",
  },
  {
    title: "Website Design & Development",
    desc: "Create a fast, mobile-friendly, conversion-focused website for your brand.",
  },
  {
    title: "Brand Identity & Strategy",
    desc: "Build a consistent and memorable brand that connects emotionally with your audience.",
  },
  {
    title: "Email Marketing",
    desc: "Nurture your leads and boost conversions through automated email journeys.",
  },
];

export const Services = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-12">Our Digital Marketing Services</h1>
      <div className="grid md:grid-cols-3 gap-10 container mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">{s.title}</h3>
            <p className="text-gray-600 mb-4">{s.desc}</p>
            <a href="/contact" className="text-blue-600 font-medium hover:underline">
              Let’s Discuss →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
