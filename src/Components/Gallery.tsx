import cakes from "../cakes";

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="max-w-6xl mx-auto px-6 py-16 md:scroll-mt-8 sm:scroll-mt-12 scroll-mt-18"
    >
      <h3 className="text-3xl font-serif font-semibold text-center text-gray-900">
        Our Cakes
      </h3>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {cakes.map((cake: any, index: number) => (
          <div key={cake.id ?? index}>
            <img
              src={cake.src}
              alt={cake.alt}
              className="max-h-60 h-60 w-60 rounded-2xl object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
