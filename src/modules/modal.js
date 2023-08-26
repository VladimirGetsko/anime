import { getResource } from "../services/services";

const modal = () => {
  const modal = document.querySelector('.search-model');
  const modalBtn = document.querySelector('.search-switch');
  const modalClose = modal.querySelector('.search-close-switch');
  const searchInput = document.getElementById('search-input');
  const wrapper = document.querySelector('.search-model__result');

  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '500px';

  // Відкладений запит - Debounce start
  const debounce = (func, ms = 500) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {func.apply(this, args)}, ms)
    }
  }

  const searchDebounce = debounce((searchString) =>{
    searchFunc(searchString);
  }, 650)
  // Відкладений запит - Debounce end

  const renderFunc = (items) => {
    wrapper.innerHTML = '';

    items.forEach(item => {
      wrapper.insertAdjacentHTML('afterbegin', `
        <li class="list-group-item list-group-item-dark">
          <a class="link-secondary" href="/anime-details.html?itemId=${item.id}" ">${item.title}</a>
        </li>
      `)
    })
  }

  const searchFunc = (searchStr) => {
    getResource('https://anime-75332-default-rtdb.firebaseio.com/anime.json')
      .then(data => {
        const filterData = data.filter(dataItem => {
          return dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) || 
                  dataItem.description.toLowerCase().includes(searchStr.toLowerCase());
        })

        renderFunc(filterData.slice(0, 5));
      })
  }

  modalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    searchInput.value = '';
    wrapper.innerHTML = '';
  });

  searchInput.addEventListener("input", (e) => {
    searchDebounce(e.target.value);
  });
};

export default modal;