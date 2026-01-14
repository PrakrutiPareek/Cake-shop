import {useState, useEffect} from "react";
import reviews from "../reviews";

const Review_section = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="bg-white py-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif font-semibold text-gray-900">
          What Our Customers Say
        </h3>
        <div className="mt-10 bg-pink-50 rounded-2xl p-8 shadow-sm transition-all duration-500">
          <p className="text-lg text-gray-700 italic">
            “{reviews[index].comment}”
          </p>
          <p className="mt-4 font-medium text-pink-600">
            — {reviews[index].name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review_section;
