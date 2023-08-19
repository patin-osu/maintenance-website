window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('hidden');
});

const parallaxBg = document.querySelector('.background');

document.addEventListener('mousemove', (e) => {
  const xAxis = (e.pageX - window.innerWidth / 2) / 25;
  const yAxis = (e.pageY - window.innerHeight / 2) / 25;
  parallaxBg.style.transform = `translate(${xAxis}px, ${yAxis}px) scale(1.1)`;
});