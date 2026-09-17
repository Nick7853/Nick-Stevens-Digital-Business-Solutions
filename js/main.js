(function () {
  "use strict";

  /* Theme toggle — remembers choice in this browser */
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("ns-theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored) {
    root.setAttribute("data-theme", stored);
  } else if (prefersDark) {
    root.setAttribute("data-theme", "dark");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ns-theme", next); } catch (e) {}
    });
  }

  /* Mobile nav */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Reveal on scroll — single, restrained pass per element */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* Contact form — sends via FormSubmit (no backend required), shows inline confirmation */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function () {
      var successBox = document.getElementById("formSuccess");
      try {
        sessionStorage.setItem("ns-form-submitted", "1");
      } catch (e) {}
      // Let the native submit proceed to FormSubmit; success message shows
      // on return via the redirect target message below (see README).
    });

    // If the page was reloaded after a redirect-back, show the success note.
    try {
      if (sessionStorage.getItem("ns-form-submitted") === "1") {
        var successBox2 = document.getElementById("formSuccess");
        if (successBox2) successBox2.classList.add("visible");
        sessionStorage.removeItem("ns-form-submitted");
      }
    } catch (e) {}
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
