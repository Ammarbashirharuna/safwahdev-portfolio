import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { BsCloud, BsCloudLightning } from "react-icons/bs"
import { RxCode } from "react-icons/rx";

export default function Home() {
  return (
    <main className="bg-black">
      <article className="flex min-h-screen flex-col items-center justify-between max-w-[80vw] my-0 mx-[auto] text-white">
        <nav className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              // Replace with your logo path
              src={`/logo-safwah.png`}
              alt="logo"
              width={50}
              height={50}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <span className="text-lg">safwahdev</span>
          </div>
          <ul className="flex space-x-8">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
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

        {/* About Us Section */}
        {/* <section className="my-20 text-center">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 border-4 border-white rounded-lg bg-black">
              <h3 className="text-3xl font-semibold mb-4 text-white">Our Mission</h3>
              <p>
                To drive technological advancement by delivering custom software that meets the unique needs of our clients.
              </p>
            </div>
            <div className="p-6 border-4 border-white rounded-lg bg-black">
              <h3 className="text-3xl font-semibold mb-4 text-white">Our Values</h3>
              <p className="">
                Innovation, integrity, and excellence are at the core of everything we do. We believe in creating value through our work.
              </p>
            </div>
            <div className="p-6 border-4 border-white rounded-lg bg-black">
              <h3 className="text-3xl font-semibold mb-4 text-white">Our Approach</h3>
              <p className="">
                We collaborate closely with our clients, understanding their challenges and delivering tailored solutions that drive success.
              </p>
            </div>
          </div>
        </section> */}


        {/* Services Section */}
        <section className="my-16 flex flex-col gap-10">
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
        {/* <section className="my-12">
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg">
              <Image src={"/cloud.jpg"} className="rounded-2xl" alt="Project 1" width={700} height={700} />
            </div>
            <div className="rounded-lg">
              <Image src={"/cloud.jpg"} className="rounded-2xl" alt="Project 2" width={700} height={700} />
            </div>
            <div className="rounded-lg">
              <Image src={"/cloud.jpg"} className="rounded-2xl" alt="Project 2" width={700} height={700} />
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="my-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <blockquote className="md:w-1/3 bg-gray-800 p-6 rounded-lg">
              <p>&quot;Their work exceeded our expectations and delivered outstanding results.&quot;</p>
              <footer className="mt-4">- Client Name, Company</footer>
            </blockquote>
            <blockquote className="md:w-1/3 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0">
              <p>&quot;Professional, reliable, and highly skilled. Highly recommended!&quot;</p>
              <footer className="mt-4">- Client Name, Company</footer>
            </blockquote>
            <blockquote className="md:w-1/3 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0">
              <p>&quot;Professional, reliable, and highly skilled. Highly recommended!&quot;</p>
              <footer className="mt-4">- Client Name, Company</footer>
            </blockquote>
          </div>
        </section> */}

        {/* Footer */}
        <footer className="w-full py-12 text-center">
          © 2024 Your Company Name | <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a> | <a href="#" className="text-cyan-500 hover:underline">Terms of Service</a>
        </footer>
      </article>
    </main>
  );
}
