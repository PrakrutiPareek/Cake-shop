import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky z-50 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-serif font-bold text-pink-600">
            Mada Sweet Cakes
          </h1>
        </a>

        <nav className="bg-pink-50 px-6 py-3 rounded-full shadow-sm text-xl font-semibold hidden lg:block">
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a href="#about" className="hover:text-pink-600">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-pink-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-pink-600">
                Reviews
              </a>
            </li>
            <li>
              <a href="#order_info" className="hover:text-pink-600">
                Order
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-3 text-2xl md:text-3xl lg:text-4xl">
          <a
            href="https://www.instagram.com/madasweetcakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/MadaSweetCakes120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <button
            className="lg:hidden text-pink-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="absolute top-16 right-4 bg-pink-200 px-6 py-3 rounded-2xl shadow-sm text-xl font-semibold w-30 lg:hidden">
            <ul className="flex flex-col space-y-4 p-4 text-gray-700 font-semibold items-center">
              <li>
                <a href="#about" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-pink-600">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-pink-600">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#order_info" className="hover:text-pink-600">
                  Order
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
