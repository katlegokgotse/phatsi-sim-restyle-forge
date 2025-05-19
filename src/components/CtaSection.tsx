import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Sample project data for demonstration
const projectData = {
  "acme": {
    displayName: "Acme Corporation",
    description: "A complete digital transformation project including custom ERP integration, cloud migration, and staff training programs.",
    client: "Acme Corporation is a global leader in manufacturing with operations in 15 countries.",
    projects: [
      { name: "Cloud Migration", client: "Acme IT", year: "2023" },
      { name: "ERP Implementation", client: "Acme Operations", year: "2022" },
      { name: "Digital Training", client: "Acme HR", year: "2024" }
    ]
  },
  "globex": {
    displayName: "Globex Industries",
    description: "Strategic consulting services focusing on market expansion, operational efficiency, and sustainability initiatives.",
    client: "Globex Industries is a mid-sized manufacturing firm specializing in sustainable production methods.",
    projects: [
      { name: "Market Analysis", client: "Globex Strategy", year: "2023" },
      { name: "Sustainability Audit", client: "Globex ESG", year: "2024" }
    ]
  }
};

type SingleProject = {
  name: string;
  client: string;
  year: string;
};

type ProjectDetails = {
  displayName: string;
  description: string;
  client: string;
  projects: SingleProject[];
};

const Project = () => {
  // For demo purposes, we'll use state to simulate route params
  const [companyId, setCompanyId] = useState("acme");
  
  // Function to switch between projects for demo
  const switchProject = () => {
    setCompanyId(companyId === "acme" ? "globex" : "acme");
  };
  
  const project: ProjectDetails | undefined = 
    companyId ? (projectData as Record<string, ProjectDetails>)[companyId.toLowerCase()] : undefined;

  if (!project) {
    return (
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="text-xl text-gray-200 mb-8">The project for the specified company does not exist.</p>
          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={18} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            {project.displayName}
          </h1>

          <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2">Description</h2>
            <p className="text-gray-100 whitespace-pre-wrap">{project.description}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2">Client Information</h2>
            <p className="text-gray-100 whitespace-pre-wrap">{project.client}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2">Projects</h2>
            <ul className="space-y-4">
              {project.projects.map((p, index) => (
                <li key={index} className="bg-white/5 p-4 rounded-md hover:bg-white/15 transition-all duration-300">
                  <div className="font-bold text-lg">{p.name}</div>
                  <div className="text-gray-200">
                    {p.client} <span className="text-gray-300">• {p.year}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              onClick={switchProject}
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
            >
              View Other Project <ArrowRight className="ml-2" size={18} />
            </button>
            <button
              className="border-2 border-white text-white px-6 py-[10px] rounded-md hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;