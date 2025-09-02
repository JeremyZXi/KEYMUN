import React from 'react';
import { FileText, Download, Book, Globe2 } from 'lucide-react';
import Footer from "../components/Footer.tsx";

const Resources = () => {
  const resources = [
    /*{
      title: "UN Charter",
      description: "UN Charter in Chinese",
      type: "PDF",
      size: "7.8 MB",
      icon: Book,
      filePath: "/assets/charter.pdf"
    },
    {
      title: "Country Profile Database",
      description: "Detailed profiles of UN member states",
      type: "Web Resource",
      size: "Online",
      icon: Globe2,
      filePath: "https://example.com/country-profiles" // URL for web resource
    }*/
  ];

  // Function to handle file download
  const handleDownload = (filePath, fileName) => {
    // For local files or server URLs
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || filePath.split('/').pop(); // Use file name from path or custom name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div>
        <div className="bg-[#192236] text-white py-24 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Resources</h1>
            <p className="text-gray-300">Download helpful materials for your MUN preparation</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <resource.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {resource.type} • {resource.size}
                    </span>
                        <button
                            className="flex items-center space-x-2 bg-[#192236] text-white px-4 py-2 rounded hover:bg-[#9e0a3b] transition duration-300"
                            onClick={() => handleDownload(resource.filePath, `${resource.title}.${resource.type.toLowerCase()}`)}
                            disabled={!resource.filePath || resource.type === "Web Resource"}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Resources;
