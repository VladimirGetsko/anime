const renderBgImages = () => {
  const elements = document.querySelectorAll('.set-bg');

  elements.forEach(elem => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`
  });
};

export default renderBgImages;