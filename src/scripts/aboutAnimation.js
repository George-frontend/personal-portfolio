const about = document.getElementById('about');

window.addEventListener('scroll', () => {
  const rect = about.getBoundingClientRect();
  if(rect.top < window.innerHeight - 100){
    about.classList.add('visible');
  }
});