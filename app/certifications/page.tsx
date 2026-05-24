export default function Certifications() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        <a href="/" className="text-gray-400 hover:text-white">
          ← Back to Home
        </a>

        <h1 className="text-5xl font-bold mt-10 mb-6">
          Certifications
        </h1>

        <p className="text-xl text-gray-300 leading-8 mb-14">
          Professional certifications and industry-oriented training in
          SystemVerilog, RTL Design, Verification, and VLSI System Design.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CERTIFICATION 1 */}
          <div className="border border-gray-800 rounded-2xl p-6">

            <img
              src="/images/certifications/cadence-systemverilog.png"
              alt="Cadence SystemVerilog Certification"
              className="w-full h-[320px] object-contain rounded-xl bg-white p-4"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Cadence Certified:
              <br />
              SystemVerilog for Design and Verification
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              Completed Cadence training in SystemVerilog design and verification
              methodologies with focus on RTL modeling, verification constructs,
              assertions, and hardware verification workflows.
            </p>

            <p className="text-gray-500">
              Cadence • SystemVerilog • RTL Verification
            </p>

          </div>


          {/* CERTIFICATION 2 */}
          <div className="border border-gray-800 rounded-2xl p-6">

            <img
              src="/images/certifications/cadence-sva.png"
              alt="Cadence SVA Certification"
              className="w-full h-[320px] object-contain rounded-xl bg-white p-4"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Cadence Training:
              <br />
              SystemVerilog Assertions (SVA)
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              Completed Cadence SystemVerilog Assertions v5.2 training focused on
              assertion-based verification, temporal properties, protocol checking,
              and advanced verification methodologies.
            </p>

            <p className="text-gray-500">
              Cadence • SVA • Assertion-Based Verification
            </p>

          </div>


          {/* CERTIFICATION 3 */}
          <div className="border border-gray-800 rounded-2xl p-6">

            <img
              src="/images/certifications/verilog-hdl.png"
              alt="Verilog HDL Certification"
              className="w-full h-[320px] object-contain rounded-xl bg-white p-4"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Maven Silicon:
              <br />
              Verilog HDL
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              Training in Verilog HDL fundamentals including RTL coding,
              combinational and sequential logic design, FSM implementation,
              simulation, and synthesizable hardware modeling.
            </p>

            <p className="text-gray-500">
              Verilog • RTL Design • Digital Logic
            </p>

          </div>


          {/* CERTIFICATION 4 */}
          <div className="border border-gray-800 rounded-2xl p-6">

            <img
              src="/images/certifications/soc-design.png"
              alt="SoC Design Certification"
              className="w-full h-[320px] object-contain rounded-xl bg-white p-4"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Maven Silicon:
              <br />
              VLSI System-On-Chip Design
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              Coursework covering VLSI SoC architecture, RTL integration,
              digital subsystem design, interconnect concepts, and hardware
              development methodology.
            </p>

            <p className="text-gray-500">
              SoC Design • RTL Integration • VLSI
            </p>

          </div>


          {/* CERTIFICATION 5 */}
          <div className="border border-gray-800 rounded-2xl p-6 md:col-span-2">

            <img
              src="/images/certifications/vlsi-methodologies.png"
              alt="VLSI Design Methodologies"
              className="w-full h-[420px] object-contain rounded-xl bg-white p-4"
            />

            <h2 className="text-2xl font-semibold mt-6 mb-3">
              Maven Silicon:
              <br />
              VLSI Design Methodologies
            </h2>

            <p className="text-gray-300 leading-7 mb-4">
              Training in industry-oriented VLSI development methodology including
              RTL design flow, verification concepts, synthesis awareness,
              timing-driven design practices, and ASIC/FPGA development processes.
            </p>

            <p className="text-gray-500">
              VLSI Flow • ASIC Design • FPGA Design
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}