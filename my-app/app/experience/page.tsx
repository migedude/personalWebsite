export default function Experience() {
  return (
    <div className="flex flex-col gap-10 w-full mb-20">
      <div>
        <p className="text-xl leading-relaxed text-black max-w-[1000px] mb-12">
          As a current sophomore, I have gained some experience through industry roles, undergraduate research, and
          other personal projects I have worked on! Here are some of these experiences.
        </p>
        
        <h2 className="text-3xl text-black mb-8 border-b-2 border-gray-200 pb-2"><strong>Industry</strong></h2>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Software Engineer (Contract)</h3>
              <p className="text-xl italic text-gray-800">Google — Mountain View, CA</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Aug 2026 – Present</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Built and deployed a GenAI application using Google AI Studio, Cloud Run, and AlloyDB (via Auth Proxy) to validate an end-to-end reference architecture.</li>
            <li>Optimized developer workflows end-to-end; documented setup/deployment blockers, documentation gaps, and third-party tool integration feasibility (Claude Code, Lovable) in a structured friction log with actionable improvement recommendations.</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Software Engineering Intern</h3>
              <p className="text-xl italic text-gray-800">Amazon — Redmond, WA</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">May 2025 – Aug 2025</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Built automated data retention query system reducing manual investigative processing from 48-72 hours to 5-10 minutes globally.</li>
            <li>Implemented LLM-powered natural-language-to-SQL translation via AWS Bedrock + Claude 3.5.</li>
            <li>Integrated multiple AWS services (Athena, S3, Glue, Bedrock) into a secure, compliance-driven architecture.</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Data Analyst</h3>
              <p className="text-xl italic text-gray-800">BayFC (Professional Soccer Team) — San Jose, CA</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Feb 2025 – May 2025</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Applied PCA and KMeans clustering to classify player tactical archetypes supporting coaching strategy decisions.</li>
            <li>Engineered features from match tracking data to support performance modeling and cluster interpretability.</li>
          </ul>
        </div>
      
        <h2 className="text-3xl text-black mb-8 mt-16 border-b-2 border-gray-200 pb-2"><strong>Research</strong></h2>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 text-black">
            <div className="max-w-full md:max-w-[75%]">
              <h3 className="text-2xl font-bold">Machine Learning Engineer</h3>
              <p className="text-xl italic text-gray-800">Equivalence Systems LLC (CourseWise) / Computational Approaches to Human Learning Lab, UC Berkeley</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-2 md:mt-0 md:text-right whitespace-nowrap">Aug 2025 – Jan 2026</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Engineered a pipeline converting unstructured support emails into a structured Q&A knowledge base enabling scalable assistance.</li>
            <li>Developed reproducible parsing & cleaning workflows with PII redaction and consistent Q/A labeling rules.</li>
            <li>Built a retrieval-augmented generation (RAG) chatbot MVP with similarity-based retrieval and source citation.</li>
            <li>Developed a minimal chat interface for stakeholder evaluation of the full system before platform integration.</li>
          </ul>
        </div>

        <h2 className="text-3xl text-black mb-8 mt-16 border-b-2 border-gray-200 pb-2"><strong>Teaching & Outreach</strong></h2>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Hello World Mentor</h3>
              <p className="text-xl italic text-gray-800">College of Computing, Data Science, and Society (CDSS)</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Jan 2025 – Present</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Mentored a small cohort of incoming first-year and transfer students to support their transition into UC Berkeley and connect them with campus resources and student organizations to promote engagement and retention.</li>
            <li>Facilitate discussions on professional development, academic success strategies, and wellness, fostering a sense of belonging and community within CDSS.</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2 text-black">
            <div>
              <h3 className="text-2xl font-bold">Project Development Officer</h3>
              <p className="text-xl italic text-gray-800">Berkeley ANova</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-1 md:mt-0">Jan 2025 – Present</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Design and teach hands-on computing curricula for middle and high school students in underserved communities.</li>
            <li>Develop multi-week instructional materials grounded in inclusive and equity-centered pedagogy for diverse learners.</li>
            <li>Provide mentorship and academic support that strengthens student interest and persistence in STEM pathways.</li>
          </ul>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 text-black">
            <div className="max-w-full md:max-w-[75%]">
              <h3 className="text-2xl font-bold">Outreach Intern</h3>
              <p className="text-xl italic text-gray-800">Raices Recruitment and Retention Center</p>
            </div>
            <p className="text-xl font-medium text-gray-800 mt-2 md:mt-0 md:text-right whitespace-nowrap">Aug 2024 – Dec 2024</p>
          </div>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black mt-4">
            <li>Supported the recruitment and retention of Latine students at UC Berkeley by developing and implementing retention-focused programming addressing academic, financial, professional, and personal growth.</li>
            <li>Collaborated with committee members and BIPOC student organizations to plan and facilitate inclusive events and workshops.</li>
            <li>Led campus tours, participated in student panels, and delivered outreach training to demystify higher education for high school and community college students.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
