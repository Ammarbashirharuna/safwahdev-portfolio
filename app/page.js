import Image from "next/image";
import { FaGlobe, FaMobile } from "react-icons/fa";
import { TbDeviceMobileCode } from "react-icons/tb";
import { BsCloudCheckFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-black">
      <article className="flex min-h-screen flex-col items-center justify-between max-w-[80vw] my-0 mx-[auto] text-white">
        <nav className="w-full flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src={`/logo-safwah.png`} // Replace with your logo path
              alt="logo"
              width={50}
              height={50}
            />
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
            src={`/bg.jpg`} // Replace with your background image path
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <div className="relative z-20">
            <h1 className="text-[4rem] font-bold mb-6">Empowering Your Digital Future</h1>
            <p className="text-xl mb-8">We build innovative software solutions tailored to your needs.</p>
            <button className="relative overflow-hidden bg-white text-black font-semibold py-4 px-10 rounded-lg transition-all duration-500 group">
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
              <div className="absolute inset-0 bg-black w-full h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="my-20 text-center">
          {/* <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to crafting innovative software solutions. Our mission is to empower businesses by transforming ideas into cutting-edge digital experiences.
          </p> */}

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
        </section>


        {/* Services Section */}
        <section className="my-16 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(200deg,rgb(255,66,221)_0%,rgb(121,0,174)_100%)] text-white text-center shadow-lg transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10 grid place-content-center">
                <div className="mb-6 text-center text-[5rem] grid place-content-center">
                  {/* Replace with your icon */}
                  <FaGlobe />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                {/* <p className="text-lg">
                  Building responsive and scalable web applications that drive business
                  growth and user engagement.
                </p> */}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(200deg,rgb(255,66,221)_0%,rgb(121,0,174)_100%)] text-white text-center shadow-lg transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10 grid place-content-center">
                <div className="mb-6 text-center text-[5rem] grid place-content-center">
                  {/* Replace with your icon */}
                  <FaMobile />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Mobile App Development</h3>
                {/* <p className="text-lg">
                  Creating seamless and user-friendly mobile experiences on iOS and
                  Android that engage users on the go.
                </p> */}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(200deg,rgb(255,66,221)_0%,rgb(121,0,174)_100%)] text-white text-center shadow-lg transform transition duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative p-8 z-10 grid place-content-center">
                <div className="mb-6 text-center text-[5rem] grid place-content-center">
                  <BsCloudCheckFill />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Cloud Solutions</h3>
                {/* <p className="text-lg">
                  Leveraging the power of cloud computing to create scalable, reliable,
                  and secure solutions for businesses.
                </p> */}
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
