import React from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../data/committeeData';
import Footer from "../components/Footer.tsx";
const Committees = () => {
    return (
        <div>
            {/* Hero section */}
            <div className="bg-[#192236] text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Committees</h1>
                    <p className="text-gray-300">Explore our committees for the upcoming conference</p>
                </div>
            </div>

            {/* Committees list */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="space-y-12">
                    {committees.map((committee, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="md:flex">
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold mb-2">{committee.name}</h2>
                                    <p className="text-gray-600 mb-2">Topic: {committee.topic}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Chair</h3>
                                            <p>{committee.chair}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Co-Chair</h3>
                                            <p>{committee.coChair}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-700">Working Language</h3>
                                            <p>{committee.workLanguage}</p>
                                        </div>
                                    </div>

                                    <Link to={`/committees/${committee.id}`}>
                                        <button className="inline-block bg-[#005694] text-white px-4 py-2 rounded hover:bg-[#004070] transition duration-300">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Committees;
