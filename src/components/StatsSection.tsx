
import React from 'react';
import { Users, Award, BarChart, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-10 h-10 text-white mb-3" />,
    value: "250+",
    label: "Clients Served",
    description: "Across various industries"
  },
  {
    icon: <Award className="w-10 h-10 text-white mb-3" />,
    value: "15+",
    label: "Years Experience",
    description: "Of industry expertise"
  },
  {
    icon: <BarChart className="w-10 h-10 text-white mb-3" />,
    value: "98%",
    label: "Success Rate",
    description: "Client satisfaction"
  },
  {
    icon: <Globe className="w-10 h-10 text-white mb-3" />,
    value: "20+",
    label: "Countries Reached",
    description: "Global presence"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-phatsimo-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5"
            >
              <div className="flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-xl font-medium mb-2">{stat.label}</p>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
