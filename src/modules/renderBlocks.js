import { getResource } from "../services/services";
import renderGenreList from "./renderGenreList";
import renderTopAnime from "./renderTopAnime";
import renderAnimeList from "./renderAnimeList";
import renderСategory from "./renderСategory";
import renderAnimeDetail from "./renderAnimeDetail";

const renderBlocks = () => {
  getResource('https://anime-75332-default-rtdb.firebaseio.com/anime.json')
    .then(data => {
      const ganres = new Set();
      const ganreParams = new URLSearchParams(window.location.search).get('ganre');
      const itemParams = new URLSearchParams(window.location.search).get('itemId');
      
      data.forEach(item => {
        ganres.add(item.ganre);
      })

      renderTopAnime(data.sort((a, b) => b.views - a.views).slice(0, 5));
      renderAnimeList(data, ganres);
      
      ganreParams ? renderСategory(data, [ganreParams]) : renderСategory(data, ganres);
      itemParams ? renderAnimeDetail(data, itemParams) : console.log('Аніме відсутнє');

      renderGenreList(ganres); // dropdown menu
    })
};

export default renderBlocks;