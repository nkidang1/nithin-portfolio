export default function MedMambaLiteV2() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <a href="/projects" className="text-gray-400 hover:text-white">
          ← Back to Projects
        </a>

        {/* HERO */}
        <section className="mt-10">

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            MedMambaLite-v2: Shared Selective Scan for Efficient Edge Medical Mamba
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            FPGA-oriented acceleration of Vision Mamba selective scan for edge medical imaging,
            using INT8 quantization, LUT-based nonlinear units, pipelined state updates, and
            memory-aware hardware design.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">

            <a
              href="https://ieeexplore.ieee.org/document/11528174"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              IEEE Published Paper
            </a>

            <a
              href="https://github.com/nkidang1/Selective_Scan_SS2D"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              GitHub Repository
            </a>

          </div>

          <p className="text-gray-400 leading-7">
            Published in{" "}
            <span className="text-white font-medium">
              IEEE Transactions on Biomedical Circuits and Systems
            </span>
            , this work focuses on making Mamba-style selective state-space computation
            practical for low-power edge deployment.
          </p>

        </section>

        {/* STATS */}
        <section className="grid md:grid-cols-3 gap-6 mt-16 mb-16">

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">9×</h2>

            <p className="text-gray-300 mt-2">
              Lower FPGA latency for the fully parallel LiteSS2D implementation
              compared with the serial baseline.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">23×</h2>

            <p className="text-gray-300 mt-2">
              Smaller student model compared with the MedMamba baseline while
              preserving competitive classification accuracy.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">INT8</h2>

            <p className="text-gray-300 mt-2">
              Quantized selective-scan datapath using LUT-based Softplus and
              exponential approximation units.
            </p>
          </div>

        </section>

        {/* MAIN CONTENT */}
        <section className="space-y-16">

          {/* PROBLEM */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Problem
            </h2>

            <p className="text-gray-300 leading-7">
              Vision Mamba architectures are attractive for medical imaging because
              selective state-space models provide efficient long-range sequence modeling.
              However, the selective scan operation introduces recurrent state updates,
              nonlinear functions, and memory dependencies that are difficult to accelerate
              efficiently on edge hardware. This project investigates how the LiteSS2D
              selective scan can be redesigned for FPGA-efficient execution while preserving
              practical model accuracy.
            </p>

          </div>

          {/* SYSTEM OVERVIEW */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              System Overview
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              MedMambaLite-v2 combines lightweight convolution blocks with an optimized
              state-space branch built around LiteSS2D selective scan computation.
              The project targets practical edge deployment on FPGA and embedded systems
              including Jetson Orin Nano and Raspberry Pi platforms.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">

              <img
                src="/images/medmambalite/system-overview.png"
                alt="MedMambaLite-v2 system overview"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                System-level overview of MedMambaLite-v2 showing the lightweight
                convolution branch, optimized SSM branch, and deployment flow for
                embedded edge medical imaging systems.
              </figcaption>

            </figure>

          </div>

          {/* WHAT I BUILT */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              What I Built
            </h2>

            <p className="text-gray-300 leading-7">
              I contributed to the FPGA-oriented LiteSS2D accelerator architecture,
              focusing on selective scan execution, quantized datapath design,
              LUT-based nonlinear approximation, pipelined scheduling, and parallel
              compute structures for efficient state update and output projection.
              The design preserves the original Mamba selective-scan computation
              flow while making the datapath practical for resource-constrained edge hardware.
            </p>

          </div>

          {/* HARDWARE ARCHITECTURE */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Core Hardware Architecture
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              The LiteSS2D accelerator implements the selective scan equations through
              a staged datapath. The pipeline first applies Softplus to the timestep
              parameter, computes the discretized state transition through an exponential
              approximation, updates the hidden state, and performs output projection
              using parallel multiplier, adder, and MAC units. Delay registers align
              dependent operands across the pipeline so multiple selective-scan stages
              can execute concurrently.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">

              <img
                src="/images/medmambalite/litess2d-hardware.png"
                alt="LiteSS2D hardware architecture"
                className="w-full h-[560px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                LiteSS2D hardware architecture showing the S6 selective-scan compute core,
                cycle-level pipelined scheduling, INT8 Softplus and exponential lookup tables,
                and parallel multiplier, adder, and MAC units used for state update and output projection.
              </figcaption>

            </figure>

          </div>

          {/* TECHNICAL HIGHLIGHTS */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Technical Highlights
            </h2>

            <ul className="list-disc list-inside text-gray-300 space-y-3">

              <li>
                Implemented INT8 selective scan datapath modules in Verilog.
              </li>

              <li>
                Used LUT-based Softplus and exponential approximation blocks to
                replace expensive nonlinear arithmetic.
              </li>

              <li>
                Designed cycle-level pipelined scheduling across selective-scan stages.
              </li>

              <li>
                Built parallel multiplier, adder, and MAC units for vector state updates.
              </li>

              <li>
                Used memory-aware parameter access and BRAM-backed storage structures.
              </li>

              <li>
                Explored serial and fully parallel LiteSS2D FPGA configurations.
              </li>

            </ul>

          </div>

          {/* FPGA DEPLOYMENT */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              FPGA Deployment Pipeline
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              The hardware deployment workflow connects the FPGA selective-scan
              accelerator with end-to-end embedded medical inference. FPGA execution
              is evaluated alongside Jetson Orin Nano and Raspberry Pi deployments,
              enabling comparison across performance, latency, and power efficiency.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">

              <img
                src="/images/medmambalite/fpga-flow.png"
                alt="FPGA deployment pipeline"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                FPGA and embedded deployment flow showing LiteSS2D acceleration,
                Jetson Orin Nano deployment, Raspberry Pi deployment, and power
                measurement methodology.
              </figcaption>

            </figure>

          </div>

          {/* FPGA RESULTS */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              FPGA Results
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              The FPGA implementation compares serial and fully parallel LiteSS2D
              selective-scan configurations. Increasing SSPE parallelism significantly
              reduces latency while increasing BRAM, DSP, LUT utilization, and power.
              These results highlight the classic throughput-area-power tradeoff
              encountered in accelerator design.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5 mb-8">

              <img
                src="/images/medmambalite/fpga-results.png"
                alt="FPGA implementation results"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                FPGA implementation results comparing serial and fully parallel
                LiteSS2D selective-scan implementations across resource utilization,
                latency, and power metrics.
              </figcaption>

            </figure>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">

              <img
                src="/images/medmambalite/fpga-results-table.png"
                alt="FPGA design space exploration table"
                className="w-full h-[520px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                FPGA design-space exploration across serial and fully parallel
                LiteSS2D configurations. Increasing SSPE parallelism reduces
                latency from 36μs to 4μs while increasing BRAM, DSP, LUT utilization,
                and dynamic power consumption.
              </figcaption>

            </figure>

          </div>

          {/* ACCURACY RESULTS */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Accuracy and Model Efficiency
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              Hardware acceleration alone is insufficient if model accuracy degrades
              substantially. The project therefore evaluates MedMambaLite-v2 and
              compressed student models across MedMNIST datasets, demonstrating
              the tradeoff between model size, classification accuracy, and
              deployment efficiency.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">

              <img
                src="/images/medmambalite/accuracy-results.png"
                alt="Accuracy comparison results"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />

              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Accuracy comparison across MedMNIST and non-MedMNIST datasets,
                showing that optimized MedMambaLite-v2 variants preserve competitive
                performance while improving deployment efficiency.
              </figcaption>

            </figure>

          </div>

          {/* TAKEAWAY */}
          <div>

            <h2 className="text-3xl font-semibold mb-4">
              Key Takeaway
            </h2>

            <p className="text-gray-300 leading-7">
              This project demonstrates a full hardware/software co-design workflow
              for state-space medical vision models. Rather than accelerating a single
              RTL block in isolation, the work combines selective scan optimization,
              quantization, pipelined datapath design, FPGA deployment, embedded
              inference evaluation, and model compression into a unified edge-AI accelerator system.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}