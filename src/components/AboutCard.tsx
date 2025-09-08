// components/AboutCard.tsx
import React from "react";

interface AboutCardProps {
    name: string;
    photo: string;
    description: string; // can contain \n or raw HTML
    className?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
                                                 name,
                                                 photo,
                                                 description,
                                                 className = "",
                                             }) => {
    // Convert \n to <br/> for line breaks
    const formattedDescription = description.replace(/\n/g, "<br />");

    return (
        <article
            className={`group h-full rounded-2xl bg-white/90 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col ${className}`}
        >
            <div className="relative">
                <img
                    src={photo}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                    {name}
                </h3>
                <p
                    className="mt-2 text-gray-600 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formattedDescription }}
                />

                <div className="mt-auto pt-4">
                    {/* optional actions (socials, buttons, etc.) */}
                </div>
            </div>
        </article>
    );
};

export default AboutCard;
