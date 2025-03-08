import React from 'react';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialSlider = ({ backgroundImage = "https://placehold.co/600x400" }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const testimonials = [
        {
            quote: "Working with the NEST organization has been transformative for our school. Their dedication to empowering students and creating meaningful educational experiences is unparalleled in today's academic landscape.",
            name: "EMMA RICHARDS",
            title: "High School Principal",
        },
        {
            quote: "The Model UN program developed by this team has given our students invaluable experience in diplomacy, public speaking, and global affairs. We've seen remarkable growth in our participants' confidence and leadership abilities.",
            name: "MICHAEL CHEN",
            title: "International Relations Professor",
        },
        {
            quote: "As a student participant, I can attest to the life-changing impact of this organization. The skills I've gained through their carefully structured programs have opened doors I never thought possible.",
            name: "SOPHIA ZHANG",
            title: "Student Ambassador",
        },
        {
            quote: "The attention to detail and professional execution of every event demonstrates why NEST is the gold standard for educational organizations. Their commitment to excellence inspires everyone around them.",
            name: "DAVID MILLER",
            title: "Education Consultant",
        },
    ];

    return (
        <motion.section
            ref={ref}
            className="body-font py-24 text-white relative"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            style={{
                position: 'relative',
            }}
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-[#192236] opacity-90"></div>
            </div>

            <div className="container px-5 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">What People Say</h2>
                    <div className="h-1 w-20 bg-[#9e0a3b] rounded mx-auto"></div>
                </div>

                <div className="w-full mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="xl:w-3/4 lg:w-3/4 md:w-full w-full mx-auto text-center px-6 py-8">
                                    <div className="mb-8 flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-[#9e0a3b]" viewBox="0 0 975.036 975.036">
                                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                        </svg>
                                    </div>
                                    <p className="leading-relaxed text-lg mb-8">{testimonial.quote}</p>
                                    <div className="inline-block h-1 w-10 rounded bg-[#9e0a3b] mb-6"></div>
                                    <h2 className="font-medium title-font tracking-wider text-sm mb-1">{testimonial.name}</h2>
                                    <p className="text-gray-400">{testimonial.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #9e0a3b;
        }
        
        .testimonial-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #9e0a3b;
          opacity: 1;
        }
      `}</style>
        </motion.section>
    );
};

export default TestimonialSlider;

