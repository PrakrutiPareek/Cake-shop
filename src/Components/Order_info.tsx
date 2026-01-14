const Order_info = () => {
  return (
    <section id="order_info" className="bg-pink-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif font-semibold">How to Order</h3>
        <p className="mt-4 text-lg">
          Message or call us with your cake size, theme, and date. Custom
          designs available.
        </p>
        <p className="mt-6 text-xl font-medium">+44 7751 305858</p>
        <p className="mt-2 text-sm opacity-90">
          Serving locally | Collection only
        </p>
        <a
          href="https://www.facebook.com/MadaSweetCakes120/posts/pfbid02XBTqXW3FB892G8dVBcoVDKUx8n65xht6kp9hrVDTznQto7Zte6rzX1EpNyYD8WqWl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Price List & Compositions
        </a>
      </div>
    </section>
  );
};

export default Order_info;
