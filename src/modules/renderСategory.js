import renderBgImages from "./renderBgImages";

const renderСategory = (array, ganres) => {
  const wrapper = document.querySelector('.product-page .col-lg-8');

  wrapper && ganres.forEach(ganre => {
    const productBlock = document.createElement('div');
    const listBlock = document.createElement('div');
    
    const list = array.filter(item => {
      return item.tags.includes(ganre);
    });

    listBlock.classList.add('row');
    productBlock.classList.add('mb-5');

    productBlock.insertAdjacentHTML('beforeend', `
      <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="section-title">
                  <h4>${ganre}</h4>
              </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="btn__all">
                  <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
              </div>
          </div>
      </div>
    `)

    list.forEach(item => {
      const tagsBlock = document.createElement('ul'); // теги жандров в карточках

      item.tags.forEach(tag => {
        tagsBlock.insertAdjacentHTML('beforeend', `
          <li>${tag}</li>
        `)
      });

      listBlock.insertAdjacentHTML('beforeend', `
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="${item.image}">
                    <div class="ep">${item.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
                </div>
                <div class="product__item__text">
                    ${tagsBlock.outerHTML}
                    <h5><a href="/anime-details.html?itemId=${item.id}">${item.title}</a></h5>
                </div>
            </div>
        </div>
      `)
    })

    productBlock.append(listBlock);
    wrapper.append(productBlock);

    renderBgImages();
  })
}

export default renderСategory;