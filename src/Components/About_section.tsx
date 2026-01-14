const About_section = () => {
  return (
    <section id="about" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-pink-600">
            About Mada Sweet Cakes
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Mada Sweet Cakes is a home-based bakery dedicated to creating
            delicious, elegant cakes using quality ingredients. Every cake is
            baked fresh and customised to bring joy to your special occasions.
          </p>
        </div>
        <div className="bg-pink-100 rounded-2xl h-64 flex items-center justify-center text-pink-400">
          <img
            src="/Images/owner2.jpg"
            alt="About Mada Sweet Cakes"
            className="rounded-2xl h-64 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About_section;
