export const adjustFontSize = (selector) => {
  document.querySelectorAll(selector).forEach((element) => {
    const containerWidth = element.offsetWidth;
    const elementRect = element.getBoundingClientRect();
    const textWidth = elementRect.width;
    if (textWidth > containerWidth * 0.95) {
      const currentFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      const newFontSize = currentFontSize * 0.85;

      element.style.fontSize = `${newFontSize}px`;
    }
  });
};
