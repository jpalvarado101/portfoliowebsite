"use client"; // Ensure this is a client component

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "@/app/ContactSection.css"; // Ensure this CSS file contains the correct styles

const ContactSection = () => {
  const ref = useRef(null);
  const isAnimating = useRef(false); // Flag to track animation state

  // Animation controls for elements
  const headingAnimation = useAnimation();
  const detailsAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const checkInitialPosition = async () => {
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;
      if (sectionTop < window.innerHeight * 0.8) {
        if (!isAnimating.current) {
          isAnimating.current = true;
          await Promise.all([
            headingAnimation.start("visible"),
            detailsAnimation.start("visible"),
            imageAnimation.start("visible"),
          ]);
          isAnimating.current = false;
        }
      } else {
        if (!isAnimating.current) {
          isAnimating.current = true;
          await Promise.all([
            headingAnimation.start("hidden"),
            detailsAnimation.start("hidden"),
            imageAnimation.start("hidden"),
          ]);
          isAnimating.current = false;
        }
      }
    };

    const handleScroll = async () => {
      const currentScrollY = window.scrollY;
      const sectionTop = ref.current?.getBoundingClientRect().top || 0;

      if (isAnimating.current) {
        return; // Prevent interrupting if an animation is ongoing
      }

      if (
        sectionTop < window.innerHeight * 0.8 &&
        currentScrollY > lastScrollY
      ) {
        // Trigger animations when scrolling down into the section
        isAnimating.current = true;
        await Promise.all([
          headingAnimation.start("visible"),
          detailsAnimation.start("visible"),
          imageAnimation.start("visible"),
        ]);
        isAnimating.current = false;
      } else if (sectionTop > window.innerHeight * 0.8) {
        // Reset animations when leaving the section upwards
        isAnimating.current = true;
        await Promise.all([
          headingAnimation.start("hidden"),
          detailsAnimation.start("hidden"),
          imageAnimation.start("hidden"),
        ]);
        isAnimating.current = false;
      }

      lastScrollY = currentScrollY;
    };

    // Check the position immediately on load
    checkInitialPosition();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headingAnimation, detailsAnimation, imageAnimation]);

  return (
    <section id="contact" className="contact-section z-40" ref={ref}>
      <div className="contact-left">
        {/* Animated Heading Name */}
        <motion.h2
          className="contact-name"
          initial="hidden"
          animate={headingAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 2 } },
          }}
        >
          John Alvarado
        </motion.h2>

        {/* Animated Heading Title */}
        <motion.h1
          className="contact-title"
          initial="hidden"
          animate={headingAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.1 },
            },
          }}
        >
          GET IN TOUCH
        </motion.h1>

        {/* Animated Contact Details */}
        <motion.div
          className="contact-details"
          initial="hidden"
          animate={detailsAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.2 },
            },
          }}
        >
          <p className="contact-label">Email:</p>
          <p className="contact-info">
            <a href="mailto:contact@johnferreralvarado.com">
              contact@johnferreralvarado.com
            </a>
          </p>

          <p className="contact-label">Location</p>
          <p className="contact-info">
            Vancouver, BC
            <br />
          </p>

          {/* Animated Contact Form */}
          <motion.form
            className="contact-form"
            initial="hidden"
            animate={detailsAnimation}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 2, delay: 0.5 },
              },
            }}
          >
            <div className="contact-form-group">
              <input
                type="text"
                placeholder="Enter your Name"
                className="contact-input styled-input contact-box"
              />
            </div>
            <br />
            <div className="contact-form-group">
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="contact-input styled-input contact-box"
              />
            </div>
            <br />
            <div className="contact-form-group">
              <textarea
                placeholder="Enter your message"
                className="contact-textarea styled-textarea contact-box"
              ></textarea>
            </div>
            <div className="contact-form-group">
              <button type="submit" className="contact-submit contact-box">
                Send Message
              </button>
            </div>
          </motion.form>
        </motion.div>

        {/* Animated Collabs Button */}
        <motion.a
          href="#"
          className="contact-collabs contact-button contact-box"
          initial="hidden"
          animate={detailsAnimation}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, delay: 0.3 },
            },
          }}
        >
          OPEN FOR COLLABS
        </motion.a>
      </div>

      {/* Animated Right Image */}
      <motion.div
        className="contact-right"
        initial="hidden"
        animate={imageAnimation}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 2, delay: 0.4 },
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
