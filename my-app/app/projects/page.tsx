export default function Projects() {
  return (
    <div className="flex flex-col gap-10 w-full mb-20">
      <div>
        <h1 className="text-4xl font-bold mb-10 text-black border-b-2 border-gray-200 pb-2">Personal Projects</h1>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Refill!</h3>
              <p className="text-xl italic text-gray-800">Typescript, Google AlloyDB, Gemini API, React, PostgreSQL, Docker</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Jan 2026 – Present</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Designed, built, and deployed a production social app that lets users find, submit, and review water refill stations on an interactive Google Maps interface, with Google OAuth sign-in, photo uploads, a personalized activity feed, mutual friend graph, and refill leaderboard.</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Acne Detection & Cross-Domain Classification</h3>
              <p className="text-xl italic text-gray-800">Python, PyTorch, YOLOv5</p>
            </div>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Trained and benchmarked 3 object detection architectures (YOLOv5, Faster R-CNN, DINO-DETR) on the ACNE04 dataset (1,450 images) to localize acne lesions, evaluating models on mAP, precision/recall, and IoU.</li>
            <li>Engineered a cross-domain classification pipeline by extracting positive/negative patches from bounding box annotations and training a binary classifier to generalize from ACNE04 to the DermNet dataset.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
