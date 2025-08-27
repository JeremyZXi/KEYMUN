// src/components/CommitteeHighlights.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin,Languages, FileText, User, Users } from 'lucide-react';
import { committees } from '../data/committeeData';


const CommitteeHighlights = () => {
  // Display only a few featured committees on the homepage
  const featuredCommittees = committees.slice(0, 4);

  return (
      <section id="committee-highlights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Committees</h2>
            <div className="h-1 w-20 bg-[#9e0a3b] rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredCommittees.map((committee, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  {/*<img src={committee.image} alt={committee.name} className="w-full h-48 object-cover" />*/}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{committee.name}</h3>
                    <p className="text-gray-700 font-medium mb-3">{committee.topic}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <User className="h-5 w-5 mr-2" />
                      <span>Chair: {committee.chair}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Users className="h-5 w-5 mr-2" />
                      <span>Co-Chair: {committee.coChair}</span>
                    </div>
                    <Link
                        to={`/committees/${committee.id}`}
                        className="inline-block bg-[#192236] text-white px-4 py-2 rounded hover:bg-[#9e0a3b] transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
                to="/committees"
                className="inline-block border-2 border-[#192236] text-[#192236] px-6 py-2 rounded font-medium hover:bg-[#192236] hover:text-white transition duration-300"
            >
              View All Committees
            </Link>
          </div>
        </div>
      </section>
  );
};

export default CommitteeHighlights;
