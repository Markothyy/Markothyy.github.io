(function () {
  var video = document.querySelector("[data-bg-video]");
  var btn = document.querySelector("[data-video-toggle]");
  if (!video) return;

  function setPaused(paused) {
    if (paused) { video.pause(); } else { video.style.visibility = ""; var p = video.play(); if (p && p.catch) p.catch(function () {}); }
    if (btn) {
      btn.textContent = paused ? "Play video" : "Pause video";
      btn.setAttribute("aria-pressed", paused ? "true" : "false");
    }
  }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { video.removeAttribute("autoplay"); video.style.visibility = "hidden"; setPaused(true); }
  if (btn) btn.addEventListener("click", function () { setPaused(!video.paused); });
})();

(function () {
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  if (!nav || !toggle) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
