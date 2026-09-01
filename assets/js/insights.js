(function () {
  "use strict";

  var terms = Array.prototype.slice.call(
    document.querySelectorAll(".insight-term")
  );

  if (!terms.length) return;

  function closeTerm(term) {
    term.classList.remove("is-open");
    term.setAttribute("aria-expanded", "false");
  }

  function closeAll(except) {
    terms.forEach(function (term) {
      if (term !== except) closeTerm(term);
    });
  }

  function keepTooltipOnScreen(term) {
    var tooltip = term.querySelector(".insight-tooltip");
    if (!tooltip) return;

    tooltip.style.marginLeft = "0px";
    tooltip.style.setProperty("--insight-tooltip-shift", "0px");

    window.requestAnimationFrame(function () {
      var edge = 12;
      var rect = tooltip.getBoundingClientRect();
      var shift = 0;

      if (rect.left < edge) {
        shift = edge - rect.left;
      } else if (rect.right > window.innerWidth - edge) {
        shift = window.innerWidth - edge - rect.right;
      }

      tooltip.style.marginLeft = shift + "px";
      tooltip.style.setProperty("--insight-tooltip-shift", shift + "px");
    });
  }

  terms.forEach(function (term) {
    term.addEventListener("click", function (event) {
      event.preventDefault();
      var willOpen = !term.classList.contains("is-open");
      closeAll(term);
      term.classList.toggle("is-open", willOpen);
      term.setAttribute("aria-expanded", willOpen ? "true" : "false");
      if (willOpen) keepTooltipOnScreen(term);
    });

    term.addEventListener("mouseenter", function () {
      keepTooltipOnScreen(term);
    });

    term.addEventListener("focus", function () {
      keepTooltipOnScreen(term);
    });

    term.addEventListener("keydown", function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        closeTerm(term);
        term.blur();
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest || !event.target.closest(".insight-term")) {
      closeAll();
    }
  });

  window.addEventListener("resize", function () {
    terms.forEach(function (term) {
      if (term.classList.contains("is-open")) keepTooltipOnScreen(term);
    });
  });
})();
