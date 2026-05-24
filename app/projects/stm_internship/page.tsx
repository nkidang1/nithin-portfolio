export default function STMicroelectronics() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <a href="/projects" className="text-gray-400 hover:text-white">
          ← Back to Projects
        </a>

        {/* HERO */}
        <section className="mt-10">

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            STMicroelectronics Internship:
            <br />
            Design and Verification of AI Subsystem Modules
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            Worked on Analog In-Memory Computing (AIMC) subsystem modeling,
            HDL generation, and RTL verification workflows for AI accelerator architectures.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              MATLAB
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Simulink
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              HDL Coder
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Verilog
            </div>

            <div className="border border-gray-700 px-5 py-3 rounded-xl">
              Cadence Xcelium
            </div>

          </div>

          <p className="text-gray-400 leading-7">
            This was an industry internship project at STMicroelectronics.
            Due to confidentiality restrictions, source code and internal design
            files cannot be publicly shared.
          </p>

        </section>

        {/* OVERVIEW */}
        <section className="mt-20 space-y-16">

          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Project Overview
            </h2>

            <p className="text-gray-300 leading-7">
              The internship focused on modeling and verification of modules used
              in AI accelerator subsystems based on Analog In-Memory Computing (AIMC).
              The work involved building Simulink-based hardware models, introducing
              realistic analog noise behavior, generating synthesizable RTL using
              HDL Coder, and validating functionality using Cadence Xcelium simulation.
            </p>

          </div>

          {/* WHAT I BUILT */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              What I Worked On
            </h2>

            <ul className="list-disc list-inside text-gray-300 space-y-4 leading-7">

              <li>
                Modeled AIMC-based MAC (Multiply-Accumulate) subsystems in MATLAB Simulink.
              </li>

              <li>
                Added configurable analog non-idealities and noise models using random signal generation.
              </li>

              <li>
                Built HDL-synthesizable Simulink blocks compatible with HDL Coder workflows.
              </li>

              <li>
                Generated Verilog RTL and automated testbenches directly from Simulink models.
              </li>

              <li>
                Ported generated RTL into Cadence Xcelium for accelerated simulation and verification.
              </li>

              <li>
                Verified functional correctness under different noise and operating conditions.
              </li>

            </ul>

          </div>

          {/* WORKFLOW */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              End-to-End Verification Flow
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              The workflow started from high-level behavioral modeling in Simulink,
              followed by HDL generation using HDL Coder, RTL simulation using
              Cadence Xcelium, and comparison between model-level and RTL-level behavior.
              This enabled rapid exploration of AIMC subsystem robustness before
              hardware implementation.
            </p>

            <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8">

              <div className="grid md:grid-cols-5 gap-4 text-center">

                <div className="border border-gray-700 rounded-xl p-4">
                  <p className="font-semibold">MATLAB</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Behavioral Modeling
                  </p>
                </div>

                <div className="border border-gray-700 rounded-xl p-4">
                  <p className="font-semibold">Simulink</p>
                  <p className="text-gray-400 text-sm mt-2">
                    AIMC System Design
                  </p>
                </div>

                <div className="border border-gray-700 rounded-xl p-4">
                  <p className="font-semibold">HDL Coder</p>
                  <p className="text-gray-400 text-sm mt-2">
                    RTL Generation
                  </p>
                </div>

                <div className="border border-gray-700 rounded-xl p-4">
                  <p className="font-semibold">Verilog RTL</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Synthesizable Hardware
                  </p>
                </div>

                <div className="border border-gray-700 rounded-xl p-4">
                  <p className="font-semibold">Xcelium</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Verification
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* KEY LEARNINGS */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Key Technical Takeaways
            </h2>

            <p className="text-gray-300 leading-7">
              This internship gave me hands-on exposure to industrial RTL verification
              workflows, hardware/software co-design methodology, and AI accelerator
              subsystem development. It also strengthened my understanding of how
              high-level algorithmic models are transformed into synthesizable RTL
              and validated using professional EDA verification environments.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}