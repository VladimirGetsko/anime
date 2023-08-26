const preloader = () => {
  const preloader = document.querySelector('.preloader');
  
  // Отключает preloder
  setTimeout(() => {
    preloader.classList.remove('active');
  }, 500)
};

export default preloader;