import React from 'react';


const Footer = () => {

    const quickLinks = [
        { name: 'About Us', url: '/about' },

        { name: 'Feedback', url: '/feedback' },

    ];

    const relatedProjects = [
        { name: 'some name', url: 'https://fin-teens.com/' },
    ];
    return (
        <footer className="bg-[#192236] text-white py-8 mt-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">KEYMUN</h3>
                        <p className="text-sm">Version Beta 1.0.0</p>
                        <div className="flex items-center space-x-2">
                            <a href="https://keycas.cn" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                                <p className="text-sm">Powered by KeyCAS</p>
                                <img src="assets/KeyCAS.svg" alt="KeyCAS Logo" className="h-4 w-auto"/>
                            </a>
                        </div>



                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} className="hover:text-gray-300 text-sm">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Address</h3>
                        <p>Keystone Academy</p>
                        <p>No. 11, Anfu Street, Houshayu, Shunyi, Beijing, P.R. China  101318</p>

                    </div>

                </div>



                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-sm text-center">
                        KEYMUN 2025. All Rights Reserved
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
