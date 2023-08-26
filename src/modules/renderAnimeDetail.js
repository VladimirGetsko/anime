import renderBgImages from "./renderBgImages";

const renderAnimeDetail = (array, itemId) => {
  const animeObj = array.find(item => item.id == itemId);
  const imageBlock = document.querySelector('.anime__details__pic');
  const viewBlock = imageBlock.querySelector('.view');
  const titleBlock = document.querySelector('.anime__details__title h3');
  const subtitleBlock = document.querySelector('.anime__details__title span');
  const description = document.querySelector('.anime__details__text p');
  const widgetList =  document.querySelectorAll('.anime__details__widget ul li');
  const breadcrumb = document.querySelector('.breadcrumb__links span');

  if(animeObj) {
    imageBlock.dataset.setbg = animeObj.image;

    viewBlock.insertAdjacentHTML('beforeend', `
      <i class="fa fa-eye"></i> ${animeObj.views}</div>
    `)

    titleBlock.textContent = animeObj.title;
    subtitleBlock.textContent = animeObj['original-title'];
    description.textContent = animeObj.description;

    widgetList[0].insertAdjacentHTML('beforeend', `
      <span>Date aired:</span> ${animeObj.date}
    `)
    widgetList[1].insertAdjacentHTML('beforeend', `
      <span>Rating:</span> ${animeObj.rating}
    `)
    widgetList[2].insertAdjacentHTML('beforeend', `
      <span>Genre:</span> ${animeObj.tags.join(', ')}
    `)

    breadcrumb.textContent = animeObj.ganre;

    renderBgImages();

  } else {
    console.log('Аніме відсутнє');
  }

};

export default renderAnimeDetail;