import About_image from "/Images/About Image.jpg";

const About_section = () => {
  return (
    <section id="about" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-serif font-semibold text-pink-600">
            About The Cake Studio
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At The Cake Studio, we believe every celebration deserves something
            truly special. We create handcrafted cakes, cupcakes, cookies, and
            dessert platters made to order with quality ingredients and
            attention to every detail. Whether you're celebrating a birthday,
            wedding, baby shower, or another memorable occasion, our custom
            creations are designed to look beautiful and taste just as
            delicious. Every order is carefully prepared to help make your
            special moments unforgettable.
          </p>
        </div>
        <div className="bg-pink-100 rounded-2xl h-64 flex items-center justify-center text-pink-400">
          <img
            src={About_image}
            alt="About Mada Sweet Cakes"
            className="rounded-2xl h-64 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About_section;
