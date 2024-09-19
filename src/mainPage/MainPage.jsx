import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });
  }, []);

  // Функция для закрытия мобильного меню
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* HEADER */}
      <header className="bg-neutral-900 p-4 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
              Posudevskyi Artem
            </span>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-6 text-base font-medium text-gray-300">
            <li className="hover:text-teal-400 transition duration-300 cursor-pointer">
              <a href="#ex-tp">Expirience</a>
            </li>
            <li className="hover:text-teal-400 transition duration-300 cursor-pointer">
              <a href="#projects-tp">Projects</a>
            </li>
            <li className="hover:text-teal-400 transition duration-300 cursor-pointer">
              <a href="contacts-tp">Contacts</a>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <ul className="space-y-6 text-lg text-white font-medium">
                <li
                  onClick={toggleMobileMenu}
                  className="hover:text-teal-400 transition duration-300 cursor-pointer"
                >
                  <a href="ex-tp">Expirience</a>
                </li>
                <li
                  onClick={toggleMobileMenu}
                  className="hover:text-teal-400 transition duration-300 cursor-pointer"
                >
                  <a href="#projects-tp">Projects</a>
                </li>
                <li
                  onClick={toggleMobileMenu}
                  className="hover:text-teal-400 transition duration-300 cursor-pointer"
                >
                  <a href="#contacts-tp">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
      {/* MAIN */}
      <main className="bg-neutral-900 text-white p-12 flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div data-aos="fade-right" className="text-center md:text-left max-w-lg">
            <p className="text-lg text-teal-400">Hello, Welcome</p>
            <h1 className="text-5xl font-bold my-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-500">
              I’m Posudevskyi Artem
            </h1>
            <span className="block text-gray-400 mb-6">
              I am a front-end developer with more than 1 years of experience...
            </span>
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow-lg hover:opacity-90 transition duration-300">
              Download CV
            </button>
          </div>

          <div data-aos="fade-left" className="ml-0 md:ml-8 mt-8 md:mt-0">
            <img
              src="/avatar.jpg"
              alt="Me"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-4 border-teal-500"
            />
          </div>
        </div>
      </main>

      {/* EXPERIENCE WITH */}
      <div className="bg-neutral-900 text-white py-12" id="ex-tp">
        <div className="text-center text-2xl font-semibold tracking-wider text-gray-400 mb-8">
          EXPERIENCE WITH
        </div>
        <div data-aos="fade-up" className="flex justify-center space-x-6 md:space-x-8">
          <img src="/html.png" alt="HTML" className="w-12 md:w-16 filter invert" />
          <img src="/css.png" alt="CSS" className="w-12 md:w-16 filter invert" />
          <img src="/js.png" alt="JavaScript" className="w-12 md:w-16 filter invert" />
          <img src="/react.png" alt="React" className="w-12 md:w-16 filter invert" />
          <img src="/git.png" alt="Git" className="w-12 md:w-16 filter invert" />
        </div>
      </div>

      {/* PROJECTS */}
      <div className="bg-neutral-900 text-white py-12" id="projects-tp">
        <div className="text-center text-2xl font-semibold tracking-wider text-gray-400 mb-8">
          PROJECTS
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          <a
            href=""
            className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img data-aos="zoom-in" src="/Work1.jpg" alt="Project 1" className="w-full h-full object-cover" />
          </a>
          <a
            href=""
            className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img data-aos="zoom-in" src="/Work2.jpg" alt="Project 2" className="w-full h-full object-cover" />
          </a>
          <a
            href=""
            className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img data-aos="zoom-in" src="/Work1.jpg" alt="Project 3" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="bg-neutral-900 text-white py-12">
        <div className="text-center text-2xl font-semibold tracking-wider text-gray-400 mb-8">
          EXPERIENCE
        </div>
        <div data-aos="flip-left" className="container mx-auto max-w-3xl space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-500 mb-1">June 2023 - August 2023</p>
            <p className="text-xl font-semibold text-white mb-2">Freelance</p>
            <p className="text-gray-400">Created a website for a restaurant</p>
          </div>
          <div data-aos="flip-left" className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-500 mb-1">September 2023 - December 2023</p>
            <p className="text-xl font-semibold text-white mb-2">Freelance</p>
            <p className="text-gray-400">Helped with a large project for a business website</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-white py-12" id="contacts-tp">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mb-6 md:mb-0 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
            Contacts
          </h2>
          <ul className="space-y-4 md:space-y-0 md:space-x-8 flex flex-col md:flex-row text-gray-300">
            <li className="flex items-center">
              <img src="/mail.png" alt="Mail" className="w-6 h-6 mr-2 filter invert" />
              <a href="mailto:artemposudevskyi@gmail.com" className="hover:text-teal-400 hover:underline">
                artemposudevskyi@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 mr-2 filter invert" />
              <a href="https://www.instagram.com/4twerka/" className="hover:text-teal-400 hover:underline">
                @4twerka
              </a>
            </li>
            <li className="flex items-center">
              <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 mr-2 filter invert" />
              <a href="#" className="hover:text-teal-400 hover:underline">
                Artem Posudevskyi
              </a>
            </li>
            <li className="flex items-center">
              <img src="/mobile.png" alt="Mobile" className="w-6 h-6 mr-2 filter invert" />
              <a href="tel:+380966432366" className="hover:text-teal-400 hover:underline">
                +380966432366
              </a>
            </li>
            <li className="flex items-center">
              <img src="/github.png" alt="GitHub" className="w-6 h-6 mr-2 filter invert" />
              <a href="https://github.com/4twerka" className="hover:text-teal-400 hover:underline">
                4twerka
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
