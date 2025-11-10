export const smoothScrollToAnchor = (targetId: string, offset = 80) => {
  const element = document.querySelector(targetId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const initSmoothScrolling = () => {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');
    
    if (anchor && anchor instanceof HTMLAnchorElement) {
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        smoothScrollToAnchor(href);
      }
    }
  });
};
