/* ==========================================
   PHOTOGRAPHY INTERACTION SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. LIGHTBOX MODAL
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const photoCards = document.querySelectorAll(".photo-card:not(.placeholder)");

  photoCards.forEach((card) => {
    const img = card.querySelector(".photo-thumb img");
    const title = card.querySelector(".photo-title");

    if (img) {
      card.addEventListener("click", () => {
        modalImg.src = img.src;
        modalCaption.textContent = title ? title.textContent : "";
        modal.classList.add("active");
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }

  // 2. SCROLL TO TOP
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        topBtn.classList.add("show");
      } else {
        topBtn.classList.remove("show");
      }
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. FOOTER YEAR
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
