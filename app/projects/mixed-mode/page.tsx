export default function MixedModeProject() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <a href="/projects" className="text-gray-400 hover:text-white transition">
          ← Back to Projects
        </a>

        <section className="mt-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Low-Power 2-bit 20 MS/s Flash ADC in 45-nm CMOS
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            Mixed-signal CMOS design project implementing a 2-bit Flash ADC with
            rail-to-rail comparators, sample-and-hold behavior, thermometer-code
            generation, physical layout, DRC/LVS verification, and post-layout simulation.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="/reports/mixed-mode-project.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              📄 View Full Report
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            <span className="border border-gray-700 rounded-full px-4 py-2">Cadence Virtuoso</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">45-nm CMOS</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">Flash ADC</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">Mixed-Signal Design</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">DRC/LVS</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">Post-Layout Simulation</span>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mt-16 mb-16">
          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">2-bit</h2>
            <p className="text-gray-300 mt-2">
              Flash ADC resolution using three comparator outputs and thermometer-code behavior.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">20 MS/s</h2>
            <p className="text-gray-300 mt-2">
              Sample-and-hold and comparator operation targeted at a 20 MHz sampling clock.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">45 nm</h2>
            <p className="text-gray-300 mt-2">
              CMOS implementation using a 1.0 V supply and GPDK045 process design kit.
            </p>
          </div>
        </section>

        <section className="space-y-16">

          <div>
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 leading-7">
              This project implemented a low-power 2-bit Flash ADC in a 45-nm CMOS process,
              adapting the design direction from a 65-nm Flash ADC reference. The design used
              a 1.0 V supply, square 120 nm × 120 nm transistors, and a 20 MS/s operating target.
              The work covered schematic-level design, sample-and-hold simulation, comparator
              behavior, thermometer-code generation, layout, DRC/LVS verification, and
              post-layout simulation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Design Choices</h2>
            <p className="text-gray-300 leading-7">
              The sample-and-hold capacitor was reduced from the reference value of 300 fF to
              50 fF to better balance discretization between the rising and falling edges of the
              input signal. MOSCAPs were also introduced in the rail-to-rail voltage divider to
              improve impedance matching between the voltage output and comparator input.
            </p>
          </div>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/mixed-mode/sample-hold-schematic.png"
              alt="Sample-and-hold schematic"
              className="w-full h-[420px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Sample-and-hold schematic used to capture the input ramp signal before comparison.
              The sampling capacitor was adjusted to improve the sampled waveform behavior.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Flash ADC Architecture</h2>
            <p className="text-gray-300 leading-7 mb-6">
              The Flash ADC uses parallel comparators referenced against resistor-divider
              thresholds. For a 2-bit design, the encoder uses 2^N − 1 comparators, producing
              a 3-bit thermometer code. This structure enables fast conversion because all
              threshold comparisons occur in parallel.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
              <img
                src="/images/mixed-mode/flash-adc-block.png"
                alt="Flash ADC block structure"
                className="w-full h-[520px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Block structure of the Flash ADC showing the resistor ladder, rail-to-rail
                comparator array, and thermometer-code generation path.
              </figcaption>
            </figure>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Simulation Setup</h2>
            <p className="text-gray-300 leading-7">
              The ADC was tested using a ramp input signal with amplitude equal to VDD and a
              frequency of 1 MHz. The sample-and-hold clock operated at 20 MHz, producing
              20 samples per input period. The comparator clock was matched to the sample-and-hold
              clock to evaluate the sampled ramp and thermometer-code outputs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
              <img
                src="/images/mixed-mode/sample-hold-output.png"
                alt="Sample-and-hold output waveform"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Input ramp signal and sample-and-hold output. The sampled waveform tracks
                the ramp input while discretizing the signal at the sampling clock rate.
              </figcaption>
            </figure>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
              <img
                src="/images/mixed-mode/thermometer-code.png"
                alt="Thermometer code output"
                className="w-full h-[420px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Thermometer-code output generated by the comparator array as the ramp input
                crosses successive threshold levels.
              </figcaption>
            </figure>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Physical Layout</h2>
            <p className="text-gray-300 leading-7 mb-6">
              The full circuit layout was created and verified using DRC and LVS checks.
              The layout effort included key building blocks such as the comparator and
              SR latch, connecting transistor-level circuit design to manufacturable
              physical implementation constraints.
            </p>

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
                <img
                  src="/images/mixed-mode/comparator-layout.png"
                  alt="Comparator layout"
                  className="w-full h-[420px] object-contain rounded-xl bg-white"
                />
                <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                  Comparator layout implemented for the rail-to-rail threshold comparison path.
                </figcaption>
              </figure>

              <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
                <img
                  src="/images/mixed-mode/sr-latch-layout.png"
                  alt="SR latch layout"
                  className="w-full h-[420px] object-contain rounded-xl bg-white"
                />
                <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                  SR latch layout used in the ADC digital decision/output path.
                </figcaption>
              </figure>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Post-Layout Simulation</h2>
            <p className="text-gray-300 leading-7 mb-6">
              Post-layout simulation was used to verify that extracted layout behavior
              preserved the intended thermometer-code response. This step confirmed that
              the ADC output logic continued to switch across threshold regions after
              physical implementation.
            </p>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
              <img
                src="/images/mixed-mode/post-layout-simulation.png"
                alt="Post-layout simulation result"
                className="w-full h-[520px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Post-layout simulation showing the input ramp and thermometer-code output
                after layout extraction.
              </figcaption>
            </figure>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Skills Demonstrated</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>Mixed-signal CMOS circuit design using Cadence Virtuoso.</li>
              <li>Flash ADC architecture using resistor thresholds and comparator array outputs.</li>
              <li>Sample-and-hold behavior analysis at 20 MS/s.</li>
              <li>Thermometer-code generation and output verification.</li>
              <li>Physical layout of comparator and SR latch blocks.</li>
              <li>DRC/LVS verification and post-layout simulation workflow.</li>
            </ul>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-semibold mb-4">
              Full Technical Report
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              The complete report includes the schematic-level design, Flash ADC block
              structure, simulation waveforms, physical layouts, post-layout simulation,
              and references used for the project.
            </p>

            <a
              href="/reports/mixed-mode-project.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              📄 View Full Report
            </a>
          </div>

        </section>

      </div>
    </main>
  );
}