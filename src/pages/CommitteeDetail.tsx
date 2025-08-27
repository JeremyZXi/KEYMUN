// src/pages/CommitteeDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { committees } from '../data/committeeData';
import { Languages, FileText, User, Users } from 'lucide-react';


const CommitteeDetail = () => {
    const { id } = useParams();
    const committee = committees.find(c => c.id === id);

    if (!committee) {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">Committee Not Found</h1>
                    <p className="mb-6">The committee you're looking for does not exist.</p>
                    <Link to="/committees" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                        Back to Committees
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Header */}
            <div className="bg-slate-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">{committee.name}</h1>
                </div>
            </div>
        <div className="container mx-auto px-4 py-12">


            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-8 text-white">
                    <h1 className="text-2xl font-bold mb-6">{committee.topic}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center">
                            <Languages className="mr-2 h-5 w-5" />
                            <span>Working Language: {committee.workLanguage}</span>
                        </div>


                        <div className="flex items-center">

                        </div>

                        <div className="flex items-center">
                            <User className="mr-2 h-5 w-5" />
                            <span>Chair: {committee.chair}</span>
                        </div>

                        <div className="flex items-center">
                            <Users className="mr-2 h-5 w-5" />
                            <span>Co-Chair: {committee.coChair}</span>
                        </div>
                    </div>
                </div>
            </div>





            {/* Statement of Problem section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Statement of Problem</h2>
                    <div className="prose max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {committee.statementOfProblem}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
};

export default CommitteeDetail;
