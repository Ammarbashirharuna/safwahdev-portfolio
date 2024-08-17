'use client';

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsCloud, BsCloudLightning } from "react-icons/bs"
import { RxCode } from "react-icons/rx";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="bg-black">
      <article className="flex min-h-screen flex-col items-center justify-between max-w-[80vw] my-0 mx-[auto] text-white">
      <nav className="w-full flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center gap-2">
        <Image
          src={`/logo-safwah.png`}
          alt="logo"
          width={50}
          height={50}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <span className="text-lg">safwahdev</span>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isOpen ? (
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
              />
            </svg>
          ) : (
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
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-y-4 md:space-y-0 md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent z-50 p-4 md:p-0`}
      >
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="#approach" className="block md:inline" onClick={toggleMenu}>
            Strategy
          </a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="#services" className="block md:inline" onClick={toggleMenu}>
            Solutions
          </a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a href="#projects" className="block md:inline" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li className="hover:text-gray-300 cursor-pointer">
          <a
            href="#testimonials"
            className="block md:inline"
            onClick={toggleMenu}
          >
            Testimonials
          </a>
        </li>
      </ul>
    </nav>


        {/* Hero Section */}
        <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center text-center">
          <Image
            // Replace with your background image path
            src={`/bg.jpg`}
            alt="Background Image"
            quality={100}
            className="z-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20">
            <h1 className="text-[4rem] font-bold mb-6">Start Your <span className="border-white border-b-8">Business</span> Future</h1>
            <p className="text-xl mb-8">We build innovative software solutions tailored to your needs.</p>
            <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 transition-all duration-500 group">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
              <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </section>        
        
        {/* How we approach projects Section */}
        <section id="approach" className="my-20 px-6 py-12 bg-black text-white">
          <div className="container mx-auto flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 lg:text-left">
              <h2 className="text-5xl font-semibold mb-6">Our Approach</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At our software development company, we believe that a successful project starts with a clear understanding of our client&quot;s needs and goals. Our approach is built on collaboration, transparency, and a commitment to delivering innovative solutions. We follow a structured process that includes thorough planning, agile development, continuous feedback, and rigorous testing. By integrating these practices, we ensure that each project is completed efficiently and meets the highest standards of quality.
              </p>
              <ul className="list-none text-left text-gray-300 space-y-4">
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400" />
                  <span>Thorough planning and strategy</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400" />
                  <span>Agile development for flexibility</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400" />
                  <span>Continuous client feedback and iteration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-400" />
                  <span>Rigorous testing and quality assurance</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                <Image
                  src="/pencil-paper.jpg"
                  alt="Planning Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
                  <h3 className="text-3xl font-bold text-white">Planning</h3>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                <Image
                  src="/coding.jpg"
                  alt="Development Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
                  <h3 className="text-3xl font-bold text-white">Development</h3>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                <Image
                  src="/feedback.png"
                  alt="Feedback Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
                  <h3 className="text-3xl font-bold text-white">Feedback</h3>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                <Image
                  src="/testing.jpg"
                  alt="Testing Image"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
                  <h3 className="text-3xl font-bold text-white">Testing</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="my-16 flex flex-col gap-10">
          <h2 className="text-5xl font-bold">Our Solutions</h2>
          <p className="max-w-[50%] text-gray-300">Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. 
            Services can range from your budget.
          </p>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Random white balls for enhanced glass effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div className="absolute w-16 h-16 bg-white rounded-full opacity-15 blur-3xl" style={{ top: '10%', left: '15%' }}></div>
              <div className="absolute w-24 h-24 bg-white rounded-full opacity-10 blur-2xl" style={{ top: '45%', left: '60%' }}></div>
              <div className="absolute w-32 h-32 bg-white rounded-full opacity-10 blur-xl" style={{ bottom: '5%', left: '25%' }}></div>
              <div className="absolute w-12 h-12 bg-white rounded-full opacity-20 blur-lg" style={{ top: '30%', right: '10%' }}></div>
              <div className="absolute w-20 h-20 bg-white rounded-full opacity-10 blur-xl" style={{ bottom: '20%', right: '35%' }}></div>
            </div>

            {/* Card 1 */}
            <div className="relative overflow-hidden rounded-lg bg-[rgba(255,255,255,0.09)] text-white shadow-lg backdrop-filter backdrop-blur-lg border border-gray-200/20 transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10">
                <div className="mb-7 text-[5rem]">
                  <CiGlobe />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
                <p className="text-sm mb-7 text-gray-400">
                  Building responsive and scalable web applications that drive business growth and user engagement.
                </p>
                <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 transition-all duration-500 group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Learn More</span>
                  <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden rounded-lg bg-[rgba(255,255,255,0.09)] text-white shadow-lg backdrop-filter backdrop-blur-lg border border-gray-200/20 transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10">
                <div className="mb-7 text-[5rem]">
                  <RxCode />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Mobile App Development</h3>
                <p className="text-sm mb-7 text-gray-400">
                  Creating seamless and user-friendly mobile experiences on iOS and Android that engage users on the go.
                </p>
                <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 transition-all duration-500 group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Learn More</span>
                  <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-lg bg-[rgba(255,255,255,0.09)] text-white shadow-lg backdrop-filter backdrop-blur-lg border border-gray-200/20 transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10">
                <div className="mb-7 text-[5rem]">
                  <BsCloud />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="text-sm mb-7 text-gray-400">
                  Leveraging the power of cloud computing to create scalable, reliable, and secure solutions for businesses.
                </p>
                <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 transition-all duration-500 group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Learn More</span>
                  <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projects" className="my-20 px-6 py-12 bg-black text-white">
          <div className="container mx-auto">
            <h2 className="text-5xl font-semibold mb-6">Our Work</h2>
            <p className="max-w-[50%] text-gray-300 mb-8">Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>
            <div className="grid grid-cols-1 gap-8">

              {/* First Row: Two cards with different widths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group col-span-1 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/500"
                    alt="Project 1"
                    layout="responsive"
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-5xl font-semibold mb-4">Project 1</h3>
                    <p className="mb-6">A brief description of Project 1.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
                <div className="relative group col-span-1 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/400"
                    alt="Project 2"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-5xl font-semibold mb-4">Project 2</h3>
                    <p className="mb-6">A brief description of Project 2.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Second Row: Three cards with equal width */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/300"
                    alt="Project 3"
                    layout="responsive"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-4xl font-semibold mb-4">Project 3</h3>
                    <p className="mb-6">A brief description of Project 3.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/350"
                    alt="Project 4"
                    layout="responsive"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-4xl font-semibold mb-4">Project 4</h3>
                    <p className="mb-6">A brief description of Project 4.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/250"
                    alt="Project 5"
                    layout="responsive"
                    width={700}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-4xl font-semibold mb-4">Project 5</h3>
                    <p className="mb-6">A brief description of Project 5.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Third Row: Two cards with different sizes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="https://picsum.photos/500"
                    alt="Project 6"
                    layout="responsive"
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-5xl font-semibold mb-4">Project 6</h3>
                    <p className="mb-6">A brief description of Project 6.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
                  <Image
                    src="/cloud.jpg"
                    alt="Project 7"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <h3 className="text-5xl font-semibold mb-4">Project 7</h3>
                    <p className="mb-6">A brief description of Project 7.</p>
                    <a href="#">
                      <button className="relative overflow-hidden hover:bg-black hover:text-white bg-white text-black font-semibold py-4 px-6 transition-all duration-500 group">Case Study</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="my-20 px-6 py-12">
          <div className="container mx-auto">
            <h2 className="text-5xl font-semibold mb-6">Our Clients Said</h2>
            <p className="max-w-[50%] text-gray-300 mb-8">Services are professional offerings provided by businesses to meet specific needs or solve problems for their customers. Services can range from your budject.</p>
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              
              {/* First Testimonial */}
              <blockquote className="md:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                <p className="text-lg italic mb-4">&quot;Their work exceeded our expectations and delivered outstanding results.&quot;</p>
                <footer className="mt-6 text-right text-sm text-gray-400">- Client Name, Company</footer>
              </blockquote>

              {/* Second Testimonial */}
              <blockquote className="md:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg mt-4 md:mt-0 transition-transform transform hover:scale-105 duration-300">
                <p className="text-lg italic mb-4">&quot;Professional, reliable, and highly skilled. Highly recommended!&quot;</p>
                <footer className="mt-6 text-right text-sm text-gray-400">- Client Name, Company</footer>
              </blockquote>

              {/* Third Testimonial */}
              <blockquote className="md:w-1/3 bg-gray-800 p-8 rounded-lg shadow-lg mt-4 md:mt-0 transition-transform transform hover:scale-105 duration-300">
                <p className="text-lg italic mb-4">&quot;A true partner in our success, delivering exceptional quality and service.&quot;</p>
                <footer className="mt-6 text-right text-sm text-gray-400">- Client Name, Company</footer>
              </blockquote>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20 px-6 py-12 bg-black text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-semibold mb-6">Get In Touch</h2>
            <p className="max-w-[50%] mx-auto text-gray-300 mb-8">
              Ready to start your project? Contact us today to discuss your needs and how we can help.
            </p>
            <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 transition-all duration-500 group">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Contact Us</span>
              <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src={`/logo-safwah.png`}
                alt="logo"
                width={50}
                height={50}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <p className="text-center text-gray-400">&copy; 2023 Safwahdev. All Rights Reserved.</p>
          </div>
        </footer>
      </article>
    </main>
  );
}
