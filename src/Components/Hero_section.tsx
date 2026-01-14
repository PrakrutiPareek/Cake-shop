const Hero_section = () => {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
        Bespoke cakes, cookies & sweet platters 🍰
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Handmade in Chelmsford, Essex. Perfect for birthdays & special occasions
        🎉 Collection only 🚗 DM to order 💌 #MadaSweetCakes
      </p>
      <a
        href="https://wa.me/447751305858"
        className="inline-block mt-8 bg-pink-600 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-700 transition"
      >
        Order on WhatsApp
      </a>
    </section>
  );
};

export default Hero_section;
