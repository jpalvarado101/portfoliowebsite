"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Load the full bundle
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "#000000" }, // Black background
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#4DD0E1" }, // White particles
      links: {
        color: "#4DD0E1",
        enable: true,
        distance: 170, // Increase link distance for more connections
        opacity: 0.5,
        width: 1, // Thicker links for better visibility
      },
      move: {
        enable: true,
        speed: 2, // Slower particle movement
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: {
        value: 120, // Increase number of particles for more links
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Push particles away when hovering
        },
      },
      modes: {
        repulse: {
          distance: 100, // How far particles are pushed away
          duration: 0.4, // How quickly they move away
        },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      )}
    </>
  );
};

export default ParticlesBackground;
