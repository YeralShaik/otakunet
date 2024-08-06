import animeImg from '../../../asset/3997.jpg'
import animeImgNew from '../../../asset/3998.jpg'
import AnimeCard from '../animeCard'
import VoteSection from '../Vote-Section'
import { useNavigate } from 'react-router-dom';

const AnimeNews = () => {
  const navigate = useNavigate()
  const openBlogArticle = (index) => {
    navigate(`/AnimeNew/${index}`, { state: { blog: dataNewSeason[index] } });
};
    const dataNewSeason = [{ animeImg: animeImgNew, animeName: 'Anime'}, { animeImg: animeImg, animeName: 'Anime'}]
    const dataPopular = [{ animeImg: animeImg, animeName: 'Anime'}, { animeImg: animeImg, animeName: 'Anime'}]
return (
    <>
<article className="flex-1 w-auto">
  <section className='new-season-section py-10 px-10'>
    <h1 className="text-text text-3xl font-bold ">Nueva Temporada</h1> 
    <div id="card-list-container" className="p-6 w-auto flex gap-8">
    {dataNewSeason.map((data, index) =>(
    <AnimeCard 
      key={index} 
      animeImg={data.animeImg}
      animeName={data.animeName} 
      onClick={() => openBlogArticle(index)}
      />
    ))}
    </div>
  </section>
  

  <section className="most-popular-section w-auto py-10 px-10  bg-gray-100">
    <h1 className="text-text text-3xl font-bold ">Más Populares</h1> 
    <div id="card-list-container" className="p-6 w-auto flex gap-8">
    {dataPopular.map((data, index) =>(
      <AnimeCard 
        key={index}
        animeImg={data.animeImg}
        animeName={data.animeName}
      />
    ))}
    </div>
</section>
<VoteSection/>
</article>
</>
    )
}

export default AnimeNews