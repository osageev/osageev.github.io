(function () {
  "use strict";

  var notes = [];

  function tooltipFor(note) {
    return note.querySelector(".insight-tooltip");
  }

  function triggerFor(note) {
    return note.querySelector(".insight-term-trigger, a.footnote");
  }

  function setAccessibilityState(note, isOpen) {
    var trigger = triggerFor(note);
    var tooltip = tooltipFor(note);

    if (trigger) trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (tooltip) tooltip.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  function cancelHoverClose(note) {
    if (note.insightHoverTimer) {
      window.clearTimeout(note.insightHoverTimer);
      note.insightHoverTimer = null;
    }
  }

  function showHoverPreview(note) {
    var tooltip = tooltipFor(note);
    if (!tooltip) return;

    cancelHoverClose(note);
    note.classList.remove("is-dismissed");
    note.classList.add("is-hovered");
    tooltip.setAttribute("aria-hidden", "false");
    keepTooltipOnScreen(note);
  }

  function scheduleHoverClose(note, delay) {
    var tooltip = tooltipFor(note);
    if (!tooltip) return;

    cancelHoverClose(note);
    note.insightHoverTimer = window.setTimeout(function () {
      note.classList.remove("is-hovered");
      note.insightHoverTimer = null;

      if (!note.classList.contains("is-open") && !note.contains(document.activeElement)) {
        tooltip.setAttribute("aria-hidden", "true");
      }
    }, delay);
  }

  function closeNote(note) {
    cancelHoverClose(note);
    note.classList.remove("is-open", "is-hovered");
    setAccessibilityState(note, false);
  }

  function closeAll(except) {
    notes.forEach(function (note) {
      if (note !== except) closeNote(note);
    });
  }

  function keepTooltipOnScreen(note) {
    var tooltip = tooltipFor(note);
    if (!tooltip) return;

    tooltip.classList.remove("opens-below");
    tooltip.style.marginLeft = "0px";
    tooltip.style.setProperty("--insight-tooltip-shift", "0px");

    window.requestAnimationFrame(function () {
      var edge = 12;
      var rect = tooltip.getBoundingClientRect();

      if (rect.top < edge) tooltip.classList.add("opens-below");

      window.requestAnimationFrame(function () {
        var shiftedRect = tooltip.getBoundingClientRect();
        var shift = 0;

        if (shiftedRect.left < edge) {
          shift = edge - shiftedRect.left;
        } else if (shiftedRect.right > window.innerWidth - edge) {
          shift = window.innerWidth - edge - shiftedRect.right;
        }

        tooltip.style.marginLeft = shift + "px";
        tooltip.style.setProperty("--insight-tooltip-shift", shift + "px");
      });
    });
  }

  function setupNote(note, trigger) {
    var tooltip = tooltipFor(note);
    if (!trigger || !tooltip) return;

    notes.push(note);

    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      note.classList.remove("is-dismissed");
      var willOpen = !note.classList.contains("is-open");
      closeAll(note);
      note.classList.toggle("is-open", willOpen);
      setAccessibilityState(note, willOpen);
      if (willOpen) keepTooltipOnScreen(note);
    }, true);

    note.addEventListener("mouseenter", function () {
      showHoverPreview(note);
    });

    note.addEventListener("mouseleave", function () {
      note.classList.remove("is-dismissed");
      scheduleHoverClose(note, 450);
    });

    note.addEventListener("focusin", function () {
      showHoverPreview(note);
    });

    note.addEventListener("focusout", function () {
      scheduleHoverClose(note, 150);
    });

    note.addEventListener("keydown", function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        closeNote(note);
        note.classList.add("is-dismissed");
        trigger.blur();
      }
    });
  }

  function enhanceFootnotes() {
    var references = Array.prototype.slice.call(
      document.querySelectorAll(".insight-content a.footnote")
    );

    references.forEach(function (reference, index) {
      var href = reference.getAttribute("href");
      if (!href || href.charAt(0) !== "#") return;

      var targetId = href.slice(1);
      try {
        targetId = decodeURIComponent(targetId);
      } catch (error) {
        // Keep the original fragment if it is not URI encoded.
      }

      var target = document.getElementById(targetId);
      if (!target) return;

      var wrapper = document.createElement("span");
      var tooltip = document.createElement("span");
      var noteBody = document.createElement("span");
      var jumpLink = document.createElement("a");
      var tooltipId = "insight-footnote-preview-" + (index + 1);

      wrapper.className = "insight-footnote-ref";
      tooltip.className = "insight-tooltip insight-footnote-tooltip";
      tooltip.id = tooltipId;
      tooltip.setAttribute("aria-hidden", "true");
      tooltip.setAttribute("role", "note");

      noteBody.className = "insight-footnote-text";
      Array.prototype.forEach.call(target.childNodes, function (child) {
        if (child.nodeType === 1 && child.tagName === "P") {
          var paragraph = document.createElement("span");
          paragraph.className = "insight-footnote-paragraph";
          Array.prototype.forEach.call(child.childNodes, function (paragraphChild) {
            paragraph.appendChild(paragraphChild.cloneNode(true));
          });
          noteBody.appendChild(paragraph);
        } else {
          noteBody.appendChild(child.cloneNode(true));
        }
      });
      Array.prototype.forEach.call(
        noteBody.querySelectorAll(".reversefootnote"),
        function (backLink) {
          backLink.parentNode.removeChild(backLink);
        }
      );

      jumpLink.className = "insight-tooltip-link insight-footnote-jump";
      jumpLink.href = href;
      jumpLink.textContent = "View note below ↓";
      jumpLink.addEventListener("click", function () {
        closeNote(wrapper);
      });

      reference.setAttribute("aria-expanded", "false");
      reference.setAttribute("aria-describedby", tooltipId);
      reference.parentNode.insertBefore(wrapper, reference);
      wrapper.appendChild(reference);
      tooltip.appendChild(noteBody);
      tooltip.appendChild(jumpLink);
      wrapper.appendChild(tooltip);

      setupNote(wrapper, reference);
    });
  }

  Array.prototype.forEach.call(
    document.querySelectorAll(".insight-term"),
    function (term) {
      setupNote(term, term.querySelector(".insight-term-trigger"));
    }
  );

  enhanceFootnotes();

  if (!notes.length) return;

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest ||
      !event.target.closest(".insight-term, .insight-footnote-ref")
    ) {
      closeAll();
    }
  });

  window.addEventListener("resize", function () {
    notes.forEach(function (note) {
      if (note.classList.contains("is-open")) keepTooltipOnScreen(note);
    });
  });
})();
