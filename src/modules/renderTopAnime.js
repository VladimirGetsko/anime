import renderBgImages from "./renderBgImages";

const renderTopAnime = (arr) => {
  const wrapper = document.querySelector('.filter__gallery');

  wrapper && arr.forEach(({image, rating, views, title, id}) => {
    wrapper.insertAdjacentHTML('beforeend', `
      <div class="product__sidebar__view__item set-bg mix" data-setbg="${image}">
        <div class="ep">${rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i> ${views}</div>
        <h5><a href="/anime-details.html?itemId=${id}">${title}</a></h5>
      </div>
    `)

    renderBgImages();
  });

  
};

export default renderTopAnime;