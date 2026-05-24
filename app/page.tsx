export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold">
          Nithin K
        </h1>

        <div className="flex gap-6 text-gray-300 text-sm">

          <a href="/" className="hover:text-white transition">
            Home
          </a>

          <a href="/projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="/certifications" className="hover:text-white transition">
            Certifications
          </a>

          <a
            href="/resume.pdf"
            className="hover:text-white transition"
          >
            Resume
          </a>

          <a
            href="https://github.com/nkidang1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nithin-k-01a73121b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="text-blue-400 text-lg font-medium mb-4">
              RTL Design • FPGA/ASIC • Hardware Acceleration
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-8">
              Nithin <br />
              Kidangazhiath Mana
            </h1>

            <p className="text-gray-300 text-xl leading-10 mb-10">
              Digital Design and RTL-focused ECE graduate from Johns Hopkins
              University with experience in AI hardware acceleration, FPGA and
              ASIC design, and quantized neural network architectures.
              Skilled in Verilog and SystemVerilog languages with demonstrated
              work in Vision Mamba and in-memory computing.
              Seeking to contribute to the design and development of scalable,
              high-performance digital systems and next-generation computing
              architectures.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/resume.pdf"
                className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Resume
              </a>

              <a
                href="/projects"
                className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                Projects
              </a>

              <a
                href="/certifications"
                className="border border-gray-600 px-7 py-3 rounded-xl font-semibold hover:border-white transition"
              >
                Certifications
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src="/Bio Picture.png"
                alt="Nithin Kidangazhiath Mana"
                className="relative w-[420px] h-[520px] object-cover rounded-3xl border border-gray-700 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}