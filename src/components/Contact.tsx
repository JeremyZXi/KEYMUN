import React from 'react';
import { useInView } from "react-intersection-observer";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ACCENT = "#005694";
const ACCENT_HOVER = "#004070";

const XiaohongshuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="currentColor" className="w-8 h-8">
      <g transform="translate(0, 0) scale(1.25,1.25)">
        <path d="M29,0.33332825 ... Z" />
      </g>
    </svg>
);

const SocialMediaContact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      text: 'Email',
      info: 'huici.yu@student.keystoneacademy.cn',
      link: 'mailto:huici.yu@student.keystoneacademy.cn'
    },
    {
      icon: faEnvelope,
      text: 'Email',
      info: 'yuewen.cheng@student.keystoneacademy.cn',
      link: 'mailto:yuewen.cheng@student.keystoneacademy.cn'
    },
  ];

  const socialLinks = [
    // Example:
    // { icon: 'xiaohongshu', text: 'Xiaohongshu', info: 'KEYMUN', link: '#' },
  ];

  const renderContactInfo = (contact, index) => (
      <motion.a
          href={contact.link}
          key={index}
          className="flex flex-col items-center justify-center p-8 rounded-xl h-full shadow-md transition-colors duration-300"
          style={{ backgroundColor: ACCENT }}
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: ACCENT_HOVER }}
          whileTap={{ scale: 0.95 }}
      >
        <FontAwesomeIcon icon={contact.icon} className="text-4xl mb-4 text-white" />
        <p className="text-lg text-white font-semibold">{contact.text}</p>
        <p className="text-sm text-white">{contact.info}</p>
      </motion.a>
  );

  const renderSocialLink = (social, index) => (
      <motion.a
          href={social.link}
          key={index}
          className="flex flex-col items-center justify-center p-6 rounded-xl h-full shadow-md transition-colors duration-300"
          style={{ backgroundColor: ACCENT }}
          whileHover={{ scale: 1.05, backgroundColor: ACCENT_HOVER }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
      >
        <div className="flex items-center justify-center w-16 h-16 mb-4 text-white">
          {social.icon === 'xiaohongshu' ? (
              <XiaohongshuIcon />
          ) : (
              <FontAwesomeIcon icon={social.icon} className="text-4xl" />
          )}
        </div>
        <p className="text-lg text-white font-semibold text-center">{social.text}</p>
        <p className="text-sm text-white text-center">{social.info}</p>
      </motion.a>
  );

  const gridCols = socialLinks.length <= 5 ? socialLinks.length : 5;

  return (
      <motion.section
          ref={ref}
          className=""
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
      >
        <div className="container px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          </div>

          {/* Contact Info Row */}
          <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
              variants={containerVariants}
          >
            {contactInfo.map((contact, index) => renderContactInfo(contact, index))}
          </motion.div>

          {/* Social Links Row */}
          {socialLinks.length > 0 && (
              <motion.div
                  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridCols} gap-6`}
                  variants={containerVariants}
              >
                {socialLinks.map((social, index) => renderSocialLink(social, index))}
              </motion.div>
          )}
        </div>
      </motion.section>
  );
};

export default SocialMediaContact;
