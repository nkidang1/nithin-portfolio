export default function VisionMambaHybrid() {
  return (
    <main className="min-h-screen bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-6">

        <a href="/projects" className="text-gray-400 hover:text-white">
          ← Back to Projects
        </a>

        <section className="mt-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Evaluating State-Space Models for Memory-Efficient 3D Medical Image Segmentation
          </h1>

          <p className="text-xl text-gray-300 leading-8 mb-8">
            A research project investigating whether Vision Mamba state-space blocks can replace
            Transformer encoder stages in Swin-UNETR to reduce memory usage for 3D brain tumor
            segmentation on BraTS 2021.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://github.com/nkidang1/swinunetr-vim"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
            >
              GitHub Repository
            </a>

            <a
              href="/reports/vision-mamba-report.pdf"
              target="_blank"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >
              Full Report PDF
            </a>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-12">
            <span className="border border-gray-700 rounded-full px-4 py-2">PyTorch</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">MONAI</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">Swin-UNETR</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">Vision Mamba</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">BraTS 2021</span>
            <span className="border border-gray-700 rounded-full px-4 py-2">GPU Memory Profiling</span>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">18–20%</h2>
            <p className="text-gray-300 mt-2">
              Reduction in peak allocated training memory for the Stage-1 Vision Mamba hybrid.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">46.6%</h2>
            <p className="text-gray-300 mt-2">
              Reduction in peak inference memory during full-volume sliding-window inference.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">Stage-dependent</h2>
            <p className="text-gray-300 mt-2">
              Early-stage ViM improved memory efficiency, while Stage-4 gave limited benefit.
            </p>
          </div>
        </section>

        <section className="space-y-16">

          <div>
            <h2 className="text-3xl font-semibold mb-4">Problem</h2>
            <p className="text-gray-300 leading-7">
              Swin-UNETR achieves strong 3D medical image segmentation performance, but its
              Transformer encoder stores query, key, value projections and intermediate attention
              activations. This creates high memory pressure for volumetric MRI inputs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Approach</h2>
            <p className="text-gray-300 leading-7">
              I performed a controlled architectural modification of Swin-UNETR by replacing selected
              Transformer encoder stages with Vision Mamba blocks. The hybrid pipeline preserves the
              patch embedding, decoder, skip connections, and remaining Swin stages to isolate the
              effect of state-space sequence modeling.
            </p>
          </div>

          <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/vision-mamba/architecture.png"
              alt="Vision Mamba hybrid architecture"
              className="w-full h-[320px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Hybrid encoder design where selected Swin Transformer stages are replaced with a
              GSC–Vision Mamba block.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Experimental Setup</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Dataset: BraTS 2021 multi-modal 3D MRI brain tumor segmentation.</li>
              <li>Input modalities: T1, T1Gd, T2, and FLAIR.</li>
              <li>Internal split: 70% training, 15% validation, 15% testing.</li>
              <li>Compared baseline Swin-UNETR, Stage-1 Hybrid, and Stage-4 Hybrid.</li>
              <li>Measured Dice, Hausdorff Distance, GPU memory, parameter count, and FLOPs.</li>
            </ul>
          </div>

          <figure className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/vision-mamba/segmentation-result.png"
              alt="Baseline segmentation result"
              className="w-full h-[360px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Representative qualitative segmentation result showing input MRI, ground truth,
              and Swin-UNETR baseline prediction.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Memory Results</h2>
            <p className="text-gray-300 leading-7">
              Stage-1 replacement produced the strongest memory improvement because the first encoder
              stage operates at the highest spatial resolution, where attention activations are most
              expensive. Stage-4 replacement provided limited memory benefit because the token count
              is already reduced after multiple patch-merging stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4">
              <img
                src="/images/vision-mamba/training-memory.png"
                alt="Training memory comparison"
                className="w-full h-[320px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Peak GPU memory comparison during training. Stage-1 Vision Mamba reduced allocated
                training memory by approximately 18–20%.
              </figcaption>
            </figure>

            <figure className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-4">
              <img
                src="/images/vision-mamba/inference-memory.png"
                alt="Inference memory comparison"
                className="w-full h-[320px] object-contain rounded-xl bg-white"
              />
              <figcaption className="text-gray-400 mt-4 text-sm leading-6">
                Full-volume sliding-window inference memory comparison. Stage-1 Vision Mamba reduced
                peak inference memory by approximately 46.6%.
              </figcaption>
            </figure>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Compute and Model Size</h2>
            <p className="text-gray-300 leading-7">
              Stage-1 replacement achieved memory savings with only a small parameter increase,
              while Stage-4 replacement increased parameters significantly due to the larger channel
              dimensionality of deeper encoder stages.
            </p>
          </div>

          <figure className="max-w-3xl mx-auto bg-[#0a0a0a] border border-gray-800 rounded-2xl p-5">
            <img
              src="/images/vision-mamba/params-flops.png"
              alt="Parameter and FLOPs comparison"
              className="w-full h-[380px] object-contain rounded-xl bg-white"
            />
            <figcaption className="text-gray-400 mt-4 text-sm leading-6">
              Parameter count comparison across baseline Swin-UNETR and hybrid Vision Mamba
              configurations. Stage-1 replacement introduced minimal parameter overhead, while
              Stage-4 replacement significantly increased parameter count.
            </figcaption>
          </figure>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Key Takeaway</h2>
            <p className="text-gray-300 leading-7">
              Vision Mamba can substantially reduce memory when inserted into early high-resolution
              stages, but naive replacement of Transformer blocks introduces training instability,
              hidden-state explosion, and degraded segmentation accuracy. The result is a clear
              stage-dependent tradeoff between memory efficiency and model stability.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}