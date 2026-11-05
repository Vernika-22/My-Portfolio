
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// Register GSAP ScrollTrigger
if (window.gsap && window.ScrollTrigger) {

  gsap.registerPlugin(ScrollTrigger);

  // Check accessibility preferences
  const prefersReducedMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReducedMotion) {

    // Hero entrance animation
    gsap.from(".hero-content", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });

    // About heading animation
    gsap.from(".intro-section h2", {
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 80%"
      },
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Skills stagger animation
   

// Permanent Skills Scroll Animation

gsap.fromTo(
  ".skill-list span",
  {
    opacity: 0,
    y: 60
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

// Refresh ScrollTrigger after setup
ScrollTrigger.refresh();


    // Project cards animation
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 75%"
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    // Contact heading animation
    gsap.from(".contact-section h2", {
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%"
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

  }
}

