export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6 text-black pr-4">
      {/* Profile Image Dummy */}
      <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden relative border border-gray-300 shadow-sm flex items-center justify-center">
        <span className="text-black text-sm">Profile Image</span>
      </div>

      {/* Name & Bio */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Miguel Contreras</h2>
        <p className="text-sm text-black leading-relaxed">
          Undergraduate at UC Berkeley studying Computer Science. Interested in the intersection of Computer Science and Education.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-3 text-sm text-black mt-2">
        <div className="flex items-center gap-3">
          <span className="w-5 text-center text-lg">📍</span>
          <span>Berkeley, California</span>
        </div>
        
        <div className="flex items-center gap-3">
          <img src="/Screenshot 2025-12-25 at 1.10.46 AM.png" alt="Email" className="w-5 h-5 object-contain" />
          <a href="mailto:miguel.contreras@berkeley.edu" className="hover:text-blue-600 transition-colors">Email</a>
        </div>

        <div className="flex items-center gap-3">
          <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
          <a href="https://linkedin.com/in/miguelacontreras" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
        </div>
        
        <div className="flex items-center gap-3">
          <img src="/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
          <a href="https://github.com/migedude" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
        </div>
      </div>
    </div>
  );
}
