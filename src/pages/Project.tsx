import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import projectData from '@/lib/partner.json';
import Navbar from '@/components/Navbar';

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
  // For demo purposes, getting URL params manually
  // In a real app with react-router-dom, you would use useParams
  const [companyId, setCompanyId] = useState("");
  
  useEffect(() => {
    // Extract company ID from URL
    const path = window.location.pathname;
    const pathSegments = path.split('/');
    const potentialCompanyId = pathSegments[pathSegments.length - 1];
    setCompanyId(potentialCompanyId);
  }, []);
  
  // Get all company IDs for navigation
  const companyIds = Object.keys(projectData);
  
  // Function to navigate to next project
  const navigateToProject = (direction) => {
    if (companyIds.length === 0) return;
    
    const currentIndex = companyIds.indexOf(companyId);
    let nextIndex;
    
    if (direction === 'next') {
      nextIndex = currentIndex + 1 >= companyIds.length ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex - 1 < 0 ? companyIds.length - 1 : currentIndex - 1;
    }
    
    // In a real app with react-router-dom, you would use navigate
    // Here we're just updating the URL directly
    window.location.href = `/project/${companyIds[nextIndex]}`;
  };
  
  const project = companyId
    ? (projectData as Record<string, ProjectDetails>)[companyId.toLowerCase()]
    : undefined;

  if (!project) {
    return (
      <div className="py-20 bg-gradient-to-r from-phatsimo-blue to-corporate-700 text-white min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="text-xl text-gray-200 mb-8">The project for the specified company does not exist.</p>
          <a
            href="/"
            className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={18} /> Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-phatsimo-blue to-corporate-700 text-white py-12 min-h-screen">
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
              onClick={() => navigateToProject('prev')}
              className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
            >
              <ArrowLeft className="mr-2" size={18} /> Previous Project
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-[10px] rounded-md hover:bg-white/10 transition-all duration-300 font-medium"
            >
              Contact Us
            </a>
            <button
              onClick={() => navigateToProject('next')}
              className="bg-white text-phatsimo-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center"
            >
              Next Project <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;