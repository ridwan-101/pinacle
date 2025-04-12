// ===== Preloader =====
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

// ===== Chatbot Toggle =====
const chatbotToggle = document.querySelector(".chatbot-toggle");
const chatbotContainer = document.querySelector(".chatbot-container");
const chatbotClose = document.querySelector(".chatbot-close");

if (chatbotToggle && chatbotContainer) {
  chatbotToggle.addEventListener("click", () => {
    chatbotContainer.classList.toggle("open");
  });
}

if (chatbotClose && chatbotContainer) {
  chatbotClose.addEventListener("click", () => {
    chatbotContainer.classList.remove("open");
  });
}

// ===== Back to Top =====
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  }

  // ===== Scroll Indicator =====
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = `${scrolled}%`;
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Custom Cursor (Optional) =====
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

    follower.style.left = e.pageX + "px";
    follower.style.top = e.pageY + "px";
  });
}
