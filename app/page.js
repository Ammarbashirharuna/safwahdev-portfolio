import Image from "next/image";

export default function Home() {
  // bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600
  return (
    <main className="bg-black">
      <article className="flex min-h-screen flex-col items-center justify-between max-w-[80vw] my-0 mx-[auto] text-white">
        <nav className="w-full flex items-center justify-between p-4">
          <div className="flex items-center">
            <Image
              src={`/logo-removebg-preview.png`} // Replace with your logo path
              alt="logo"
              width={100}
              height={50}
            />
          </div>
          <ul className="flex space-x-8">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">Features</li>
            <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-12">
          <h1 className="text-6xl font-bold mb-6">Empowering Your Digital Future</h1>
          <p className="text-xl mb-8">We build innovative software solutions tailored to your needs.</p>
          <button className="bg-white text-cyan-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">Get Started</button>
        </section>

        {/* About Us Section */}
        <section className="p-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-xl mb-8">We are a team of passionate developers and designers committed to delivering top-notch software solutions.</p>
        </section>

        {/* Services Section */}
        <section className="p-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
              <p className="text-lg">Building responsive and scalable web applications.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">Mobile App Development</h3>
              <p className="text-lg">Creating seamless mobile experiences on iOS and Android.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-lg">Leveraging cloud technologies for scalable solutions.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section>
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <div className="grid grid-cols-myGrid gap-4">
            <div className="rounded-lg">
              <Image src={"/cloud.jpg"} className="rounded-2xl" alt="Project 1" width={700} height={700} />
            </div>
            <div className="rounded-lg">
              <Image src={"/cloud.jpg"} className="rounded-2xl" alt="Project 2" width={700} height={700} />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="p-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <blockquote className="md:w-1/3 bg-gray-800 p-6 rounded-lg">
              <p>&quot;Their work exceeded our expectations and delivered outstanding results.&quot;</p>
              <footer className="mt-4">- Client Name, Company</footer>
            </blockquote>
            <blockquote className="md:w-1/3 bg-gray-800 p-6 rounded-lg mt-4 md:mt-0">
              <p>&quot;Professional, reliable, and highly skilled. Highly recommended!&quot;</p>
              <footer className="mt-4">- Client Name, Company</footer>
            </blockquote>
          </div>
        </section>

        {/* Contact Section */}
        <section className="p-12 bg-gray-900">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <form className="flex flex-col space-y-4">
            <input className="p-3 rounded-lg bg-gray-800 text-white" type="text" placeholder="Your Name" />
            <input className="p-3 rounded-lg bg-gray-800 text-white" type="email" placeholder="Your Email" />
            <textarea className="p-3 rounded-lg bg-gray-800 text-white" placeholder="Your Message"></textarea>
            <button className="bg-cyan-500 py-3 rounded-lg text-white font-semibold hover:bg-cyan-400 transition">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-gray-800 text-center text-gray-400">
          © 2024 Your Company Name | <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a> | <a href="#" className="text-cyan-500 hover:underline">Terms of Service</a>
        </footer>
      </article>

    </main>
  );
}
