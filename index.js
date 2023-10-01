window.addEventListener('load', function () {
  const loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.classList.add('hidden');
});

const parallaxContainer = document.querySelector('.container');

parallaxContainer.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight } = parallaxContainer;
    const x = (clientX / offsetWidth - 0.5) * 20;
    const y = (clientY / offsetHeight - 0.5) * 20;

    const parallaxBackground = document.querySelector('.parallax-background');
    parallaxBackground.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
});