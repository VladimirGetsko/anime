const renderGenreList = (ganres) => {
  const dropdownBlock = document.querySelector('.header__menu .dropdown');

  ganres.forEach(ganre => {
    dropdownBlock.insertAdjacentHTML('beforeend', `
      <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
    `)
  })
}

export default renderGenreList;