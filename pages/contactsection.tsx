import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "@/app/ContactSection.css"; // Ensure this CSS file contains the correct styles

const ContactSection = () => {
  const ref = useRef(null);
  const headingAnimation = useAnimation();
  const detailsAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;

      if (sectionTop < window.innerHeight * 0.8) {
        headingAnimation.start("visible");
        detailsAnimation.start("visible");
        imageAnimation.start("visible");
      } else {
        headingAnimation.start("hidden");
        detailsAnimation.start("hidden");
        imageAnimation.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingAnimation, detailsAnimation, imageAnimation]);

  return (
    <section id="contact" className="contact-section bg-black z-40" ref={ref}>
      <div className="contact-left">
        <motion.h2
          className="contact-name"
          initial="hidden"
          animate={headingAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          John Alvarado
        </motion.h2>
        <motion.h1
          className="contact-title"
          initial="hidden"
          animate={headingAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.1 },
            },
          }}
        >
          GET IN TOUCH
        </motion.h1>
        <motion.div
          className="contact-details"
          initial="hidden"
          animate={detailsAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2 },
            },
          }}
        >
          <p className="contact-label">Email:</p>
          <p className="contact-info">hello@reallygreatsite.com</p>

          <p className="contact-label">Studio:</p>
          <p className="contact-info">
            123 Anywhere St.
            <br />
            Any City, ST 12345
          </p>
        </motion.div>
        <motion.a
          href="#"
          className="contact-collabs"
          initial="hidden"
          animate={detailsAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.3 },
            },
          }}
        >
          OPEN FOR COLLABS
        </motion.a>
      </div>

      <motion.div
        className="contact-right"
        initial="hidden"
        animate={imageAnimation}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
      >
        <img
          src="/google-deepmind-Oy2yXvl1WLg-unsplash.jpg"
          alt="Boat on water"
          className="contact-image"
        />
      </motion.div>
    </section>
  );
};

export default ContactSection;
