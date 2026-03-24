export default function Projects() {
  return (
    <div className="flex flex-col gap-10 w-full mb-20">
      <div>
        <h1 className="text-4xl font-bold mb-10 text-black border-b-2 border-gray-200 pb-2">Personal Projects</h1>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Refill!</h3>
              <p className="text-xl italic text-gray-800">Typescript, Google AlloyDB, React, PostgreSQL, Docker</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Jan 2026 – Present</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Developed a location-based mobile application to map, rate, and crowdsource the quality of campus water fountains, solving a daily pain point for students seeking filtered, cold water.</li>
            <li>Architected a scalable relational database using Google AlloyDB and PostgreSQL (PostGIS), implementing spatial data structures and optimized queries to efficiently retrieve nearby hydration stations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
