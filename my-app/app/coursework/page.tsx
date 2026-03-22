export default function Coursework() {
  return (
    <div className="flex flex-col gap-10 w-full mb-20 text-black">
      <div>
        <h1 className="text-4xl font-bold mb-10 text-black">Coursework</h1>
        
        <div className="mb-10">
          <p className="text-2xl font-semibold mb-3 text-black">Spring 2026:</p>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black">
            <li><strong>CS61C:</strong> Great Ideas in Computer Architecture</li>
            <li><strong>Data 100:</strong> Principles and Techniques of Data Science</li>
            <li><strong>EDUC W161:</strong> Digital Learning Environments</li>
          </ul>
        </div>
        
        <div className="mb-10">
          <p className="text-2xl font-semibold mb-3 text-black">Fall 2025:</p>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black">
            <li><strong>CS70:</strong> Discrete Mathematics and Probability Theory</li>
            <li><strong>Math 56:</strong> Linear Algebra</li>
            <li><strong>CDSS 198:</strong> Directed Group Studies for Advanced Undergraduates (Research Units)</li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="text-2xl font-semibold mb-3 text-black">Spring 2025:</p>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black">
            <li><strong>CS61B:</strong> Data Structures</li>
            <li><strong>Math 1B:</strong> Calculus 2</li>
            <li><strong>Data 8:</strong> Foundations of Data Science</li>
          </ul>
        </div>

        <div className="mb-10">
          <p className="text-2xl font-semibold mb-3 text-black">Fall 2024:</p>
          <ul className="list-disc ml-8 text-xl space-y-2 text-black">
            <li><strong>CS61A:</strong> Structure and Interpretation of Computer Programs</li>
            <li><strong>Math 1A:</strong> Calculus</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
