import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-6 py-8 bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="font-extrabold text-gray-400 text-sm">ABOUT</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://i.ibb.co.com/Wps4pjhn/image.png"
          alt="Shafayath Jamil"
          className="size-16 object-cover border rounded-full border-gray-500"
        />
        <div className="space-y-1">
          <h2 className="font-bold">Shafayath Jamil Rafi</h2>
          <p className="text-sm text-gray-300">Front-End Sorcerer</p>
        </div>
      </div>
      <p className="text-gray-300 font-light">
        I share thoughtful insights and reflections on coding, technology, and
        personal development. My work explores the intersections of creativity
        and problem-solving, offering readers unique perspectives.
      </p>
      <div className="flex items-center gap-4 text-xl">
        <Link
          to="https://www.facebook.com/legendary.idiot"
          target="_blank"
          className="hover:text-orange-400"
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://www.x.com/legendaryidiot_"
          target="_blank"
          className="hover:text-orange-400"
        >
          <FaXTwitter />
        </Link>
        <Link
          to="https://www.instagram.com/legendaryidiot_"
          target="_blank"
          className="hover:text-orange-400"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://github.com/legendary-idiot"
          target="_blank"
          className="hover:text-orange-400"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};

export default About;
