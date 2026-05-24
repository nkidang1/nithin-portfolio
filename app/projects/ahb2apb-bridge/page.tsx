export default function AHB2APBBridge() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <a href="/projects" className="text-gray-400 hover:text-white">
          ← Back to Projects
        </a>

        <section className="mt-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            AMBA AHB-to-APB Bridge Design
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            Verilog RTL design and verification of an AMBA AHB-to-APB bridge supporting
            single transfers, INCR4 burst transfers, WRAP4 burst transfers, address
            pipelining, and FSM-controlled APB sequencing.
          </p>

          <a
            href="/reports/ahb2apb-bridge-report.pdf"
            target="_blank"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
          >
            Project Report PDF
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-16 mb-16">
          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">AMBA</h2>
            <p className="text-gray-300 mt-2">
              Protocol conversion between high-performance AHB and low-power APB.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">Burst</h2>
            <p className="text-gray-300 mt-2">
              Supported INCR4 and WRAP4 read/write transaction behavior.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">FSM</h2>
            <p className="text-gray-300 mt-2">
              APB transfer sequencing controlled using finite-state machine logic.
            </p>
          </div>
        </section>

        <section className="space-y-16">

          <div>
            <h2 className="text-3xl font-semibold mb-4">Problem</h2>
            <p className="text-gray-300 leading-7">
              AHB is used for high-performance pipelined system communication, while APB
              is optimized for low-power peripheral access and does not support the same
              pipelined behavior. The bridge converts AHB transactions into APB transfers,
              inserts wait states when required, and ensures correct address, data, select,
              write, and enable sequencing across the two protocols.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">What I Designed</h2>
            <p className="text-gray-300 leading-7">
              I implemented a Verilog RTL AHB-to-APB bridge with an AHB slave interface,
              APB controller, APB interface, address/data pipelining, PSEL generation,
              PENABLE timing control, HREADYOUT wait-state handling, and support for
              single and burst transfers.
            </p>
          </div>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/ahb2apb/amba-system-overview.png"
              alt="AMBA system overview"
              className="w-full h-[420px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              AMBA-based SoC context showing the role of the bridge between a high-speed
              AHB system bus and low-power APB peripheral bus.
            </figcaption>
          </figure>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/ahb2apb/bridge-architecture.png"
              alt="AHB to APB bridge architecture"
              className="w-full h-[460px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Bridge architecture.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Supported Transactions</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Single AHB write converted into APB setup and enable phases.</li>
              <li>Single AHB read with PRDATA routed back to HRDATA.</li>
              <li>INCR4 write burst with pipelined address and data handling.</li>
              <li>WRAP4 write burst with address wrapping behavior.</li>
              <li>INCR4 read burst with HREADYOUT-based wait-state insertion.</li>
              <li>WRAP4 read burst with wrapped address sequencing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Control Logic and Pipelining</h2>
            <p className="text-gray-300 leading-7">
              The APB controller FSM manages the transition from AHB-side requests to APB
              setup and access phases. Since APB is not pipelined, the bridge uses HREADYOUT
              to stall AHB transactions while APB transfers complete. Address and control
              information are latched during the AHB address phase and reused during the APB
              data phase, enabling correct timing across protocol boundaries.
            </p>
          </div>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/ahb2apb/single-write-waveform.png"
              alt="Single write waveform"
              className="w-full h-[420px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Single write verification waveform showing AHB address/data sampling,
              PADDR/PWDATA generation, PSEL assertion, and PENABLE strobe timing.
            </figcaption>
          </figure>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/ahb2apb/incr4-write-waveform.png"
              alt="INCR4 burst write waveform"
              className="w-full h-[420px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              INCR4 burst write verification showing pipelined AHB address/data behavior,
              HREADYOUT-based stalling, repeated APB enable phases, and burst sequencing.
            </figcaption>
          </figure>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/ahb2apb/incr4-read-waveform.png"
              alt="INCR4 burst read waveform"
              className="w-full h-[420px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              INCR4 burst read verification showing APB read access, PRDATA-to-HRDATA
              routing, wait-state handling, and sequential read address progression.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Verification Strategy</h2>
            <p className="text-gray-300 leading-7">
              Verification was performed through waveform-level simulation of key transaction
              types. Each test confirmed that AHB inputs were correctly captured, APB-side
              control signals were generated in the proper setup/access sequence, wait states
              were inserted when APB transfers were active, and read/write data paths behaved
              correctly for both single and burst transactions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Key Takeaway</h2>
            <p className="text-gray-300 leading-7">
              This project demonstrates core RTL design skills relevant to SoC interconnects:
              protocol conversion, FSM-based control, pipelined address/data handling,
              burst transfer support, timing-aware signal sequencing, and simulation-driven
              verification.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}