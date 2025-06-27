particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#FA812F"  // Orange particles
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000"
      }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#FFB22C",  // Lighter orange links
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab" // Try "repulse" for a ripple push effect
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 160,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
