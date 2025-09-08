import React from 'react';
import Footer from "../components/Footer.tsx";
import AboutCard from "../components/AboutCard.tsx";

const members = [
    {
        name: "Grace",
        photo: "/assets/photo/grace-yu.jpeg",
        description: "Hi! I’m Grace and I am leading the marketing team at KMUN. I’m excited to be a part of the team pioneering the first MUN conference at Keystone Academy. Our vision is to provide a platform for delegates to represent diverse perspectives where everyone’s voices are heard, so don’t hesitate to sign up for this awesome experience of diplomacy, debate, and discovery. See you at KMUN! ",
    },
    {
        name: "Doris",
        photo: "/assets/photo/doris.jpg",
        description: "Hey there! I’m Doris and I’m part of the KMUN Secretariat. Since my very first experience as a delegate way back in 2018, MUN has always been something unforgettable. Be it rewarding, like passing your hotly debated resolution after long debate, or challenging, like representing Iran in the UNHRC for your very first conference (!), MUN is rife with opportunity at every corner. To us at KMUN, bringing this vision of engagement into global dialogues and critical reflection is the defining mission of our conference. We hope to see you there.",
    },
    {
        name: "Mia",
        photo: "/assets/photo/mia.jpg",
        description: "Esteemed delegates and directors, \n" +
            "\n" +
            "My name is Mia Cheng, and I am a member of the Keystone Class of 2026. I am honored to serve as the Secretary General & Head of Dais. Now entering my fourth year in MUN, I find myself filled with unforgettable memories of heated debates, thought-provoking negotiations, and, most importantly, lasting relationships with fellow delegates at various conferences. Model United Nations not only opens up a window for me to engage in dialogues regarding pressing global issues, but also establishes the critical mindset that will accompany me in college and beyond( Maybe you would feel the same if you were the delegate of Israel in the Israel-Palestinian Conflict-themed committee). With many others in the KMUN team, we aim to bring MUN experience to you in Keystone Style. Trust me, KMUN will be irreplaceable. \n" +
            "\n" +
            "I look forward to meeting you all! ",
    },
    {
        name: "Thomas",
        photo: "/assets/photo/thomas-gao.jpg",
        description: "Hi everyone, my name is Thomas, and I am a big fan of MUN. I previously attended the Model United Nations at Tsing Hua International School, which sparked my interest in the Model United Nations. My position in KMUN is in the marketing team, and I am (with my teammates) responsible for the promotion of the conference across the school and outside of Keystone. I’ll be honest, THISMUN was great, but KMUN could be EVEN BETTER.",
    },
    {
        name: "Diana",
        photo: "/assets/photo/diana.jpg",
        description: "Hi! I’m a member of the marketing group, and I really enjoy seeing events grow from zero to infinity. I’m looking forward to see our MUN thrive and inspire more students to engage with global issues and critical thinking in future. ",
    },
    {
        name: "Yoyo",
        photo: "/assets/photo/WechatIMG92.jpg",
        description: "Hi people! I’m Yoyo and I LOVE POLITICS. I've participated in multiple MUNs; has been in different councils such as IAEA, Security Council, SPECPOL, etc. (i can't find the rest); with rewards of best delegate, outstanding delegate, etc. I will be the Co-chair of EU, and I hope to meet you all whom love politics as well there.",
    },


];

const HeroAbout = () => {
    return (
        <div className="relative h-[60vh] md:h-[70vh]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/55"></div>
            </div>

            <div className="relative h-full flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        KMUN Secretariats
                    </h1>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="bg-gray-50">
            <HeroAbout />

            {/* Section container */}
            <section className="relative -mt-10 md:-mt-16">
                {/* subtle card-like container overlapping the hero */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8">
                        <header className="mb-8 sm:mb-10 text-center">

                        </header>

                        {/* Responsive grid with consistent heights */}
                        <div
                            className="
                grid gap-6 sm:gap-8
                grid-cols-1 xs:grid-cols-2 md:grid-cols-3
                place-items-stretch
              "
                        >
                            {members.map((member, index) => (
                                <AboutCard
                                    key={index}
                                    name={member.name}
                                    photo={member.photo}
                                    description={member.description}
                                    className="h-full"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
