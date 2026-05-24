export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* BACK TO HOME */}
        <a
          href="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </a>

        {/* TITLE */}
        <h1 className="text-5xl font-bold mt-8 mb-12">
          Projects
        </h1>

        <div className="space-y-8">

          {/* PROJECT 1 */}
          <div className="border border-gray-700 p-6 rounded-2xl hover:border-white transition">

            <h2 className="text-3xl font-semibold mb-4 leading-tight">
              Evaluating State-Space Models for Memory-Efficient 3D Medical Image Segmentation
            </h2>

            <p className="text-gray-300 leading-7 mb-5">
              Investigated Vision Mamba as a memory-efficient alternative to
              Transformer encoders for 3D brain tumor segmentation on the
              BraTS 2021 dataset. Evaluated hybrid Swin-UNETR + Vision Mamba
              architectures with emphasis on GPU memory reduction, FLOPs,
              and segmentation performance.
            </p>

            <p className="text-gray-500 mb-6">
              PyTorch • MONAI • CUDA • Vision Mamba • Medical Imaging
            </p>

            <div className="flex gap-6">

              <a
                href="/projects/vision-mamba_hybrid"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                ↗ View Project
              </a>

              <a
                href="https://github.com/nkidang1/swinunetr-vim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                ⌘ GitHub
              </a>

            </div>

          </div>


          {/* PROJECT 2 */}
          <div className="border border-gray-700 p-6 rounded-2xl hover:border-white transition">

            <h2 className="text-3xl font-semibold mb-4 leading-tight">
              MedMambaLite-v2: Shared Selective Scan for Efficient Edge Medical Mamba
            </h2>

            <p className="text-gray-300 leading-7 mb-5">
              Designed a quantized FPGA-oriented hardware accelerator for
              Mamba selective scan computation using INT8 LUT-based Softplus
              and exponential units, pipelined selective-scan scheduling,
              and parallel MAC architectures for efficient edge medical AI acceleration.
            </p>

            <p className="text-gray-500 mb-6">
              Verilog • FPGA • RTL Design • Hardware Acceleration • Edge AI
            </p>

            <div className="flex gap-6">

              <a
                href="/projects/medmambalite-v2"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                ↗ View Project
              </a>

              <a
                href="https://github.com/nkidang1/Selective_Scan_SS2D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                ⌘ GitHub
              </a>

            </div>

          </div>


          {/* PROJECT 3 */}
          <div className="border border-gray-700 p-6 rounded-2xl hover:border-white transition">

            <h2 className="text-3xl font-semibold mb-4 leading-tight">
              STMicroelectronics Internship:
              Design and Verification of Different Modules of AI Subsystem
            </h2>

            <p className="text-gray-300 leading-7 mb-5">
              Modeled Analog In-Memory Computing (AIMC) MAC subsystems in Simulink,
              developed HDL-synthesizable noise models, generated Verilog RTL and
              testbenches using HDL Coder, and verified functionality using
              Cadence Xcelium simulation workflows.
            </p>

            <p className="text-gray-500 mb-6">
              MATLAB • Simulink • HDL Coder • Verilog • Cadence Xcelium
            </p>

            <div className="flex gap-6">

              <a
                href="/projects/stm_internship"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                ↗ View Project
              </a>

              <span className="text-gray-500">
                Industry project — code not public
              </span>

            </div>

          </div>


          {/* PROJECT 4 */}
          <div className="border border-gray-700 p-6 rounded-2xl hover:border-white transition">

            <h2 className="text-3xl font-semibold mb-4 leading-tight">
              AMBA AHB-to-APB Bridge Design
            </h2>

            <p className="text-gray-300 leading-7 mb-5">
              Designed and verified a Verilog RTL AMBA AHB-to-APB bridge
              supporting single, INCR4 burst, and WRAP4 burst transfers
              with address pipelining, FSM-controlled APB sequencing,
              and wait-state handling.
            </p>

            <p className="text-gray-500 mb-6">
              Verilog • AMBA AHB/APB • FSM Design • RTL Verification
            </p>

            <div className="flex gap-6">

              <a
                href="/projects/ahb2apb-bridge"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                ↗ View Project
              </a>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}