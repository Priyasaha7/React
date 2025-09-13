import React from "react";

const techStack = [
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "Node.js", icon: "🟢", color: "text-green-600" },
  { name: "MongoDB", icon: "🍃", color: "text-green-500" },
  { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-500" },
  { name: "Express.js", icon: "🚀", color: "text-gray-600" }
];

export default function AboutProject() {
  return (
    <section className="w-full px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Project</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          This platform was built as part of a software engineering project to demonstrate 
          end-to-end assignment management capabilities. It showcases modern web development 
          practices and user-centered design principles.
        </p>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className={`text-3xl mb-2 ${tech.color}`}>{tech.icon}</div>
                <span className="font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-primary-50 rounded-xl">
            <h4 className="font-semibold text-primary-500 mb-3">🎯 Key Features</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Real-time assignment tracking</li>
              <li>• Automated grading workflows</li>
              <li>• Student-teacher collaboration</li>
              <li>• Analytics and insights</li>
            </ul>
          </div>
          
          <div className="p-6 bg-blue-50 rounded-xl">
            <h4 className="font-semibold text-blue-600 mb-3">🔧 Technical Highlights</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Responsive design</li>
              <li>• RESTful API architecture</li>
              <li>• Database optimization</li>
              <li>• Modern UI/UX patterns</li>
            </ul>
          </div>
          
          <div className="p-6 bg-green-50 rounded-xl">
            <h4 className="font-semibold text-green-600 mb-3">📚 Learning Outcomes</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Full-stack development</li>
              <li>• Project management</li>
              <li>• User experience design</li>
              <li>• Software architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
