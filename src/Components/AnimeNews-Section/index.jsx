import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAnimeNews } from '../../Api';
import AnimeCard from '../animeCard';
import VoteSection from '../Vote-Section';
import PopularAnime from '../PopularAnime';




const AnimeNews = () => {
  const [news, setNews] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchAnimeNews();
        setNews(data.data);
        console.log(data);
      } catch (error) {
        (error);
      }
    };

    getNews();
  }, []);

  const openBlogArticle = (index) => {
    if (news && news[index]) {
      navigate(`/AnimeNew/${index}`, { state: { blog: news[index] } });
    } else {
      console.error('Invalid index or news data.');
    }
  };
  
  

  return (
    <>
      <article className="block flex-1 w-auto">
        <section className="new-season-section py-10 px-10">
          <h1 className="text-text text-3xl font-bold">Nueva Temporada</h1>
          <div id="card-list-container" className="grid grid-cols-4 p-6 w-auto gap-6">
            {news.map((data, index) => (
              <AnimeCard
                key={index}
                animeImg={data.images.jpg.image_url}
                animeName={data.title_english}
                onClick={() => openBlogArticle(index)}
              />
            ))}
          </div>
        </section>
<PopularAnime/>
        <VoteSection />
      </article>
    </>
  );
};

export default AnimeNews;
