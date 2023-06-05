// Select the required elements
const scrollContainer = document.querySelector('.scroll-container');
const logo = document.querySelector('.logo');

// Register the scroll event
scrollContainer.addEventListener('scroll', () => {
  // Calculate the animation progress based on scroll position
  const scrollTop = scrollContainer.scrollTop;
  const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const scrollProgress = scrollTop / scrollHeight;

  // Apply the animation to the logo using transform
  logo.style.transform = `scale(${1 + scrollProgress})`;
});
