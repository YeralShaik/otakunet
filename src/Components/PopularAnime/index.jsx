import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMostPopular } from '../../Api';
import AnimeCard from '../animeCard';





const PopularAnime = () => {
  const [mostPopular, setMostPopular] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const getMostPopular = async () => {
      try {
        const data = await fetchMostPopular();
        setMostPopular(data.data);
        console.log(data);
      } catch (error) {
        (error);
      }
    };

    getMostPopular();
  }, []);

  const openBlogArticle = (index) => {
    if (mostPopular && mostPopular[index]) {
      navigate(`/AnimeNew/${index}`, { state: { blog: mostPopular[index] } });
    } else {
      console.error('Invalid index or news data.');
    }
  };
  
  

  return (
    <>
      <article className="block flex-1 w-auto">
        <section className="new-season-section py-10 px-10">
          <h1 className="text-text text-3xl font-bold">Más Popular</h1>
          <div id="card-list-container" className="grid grid-cols-4 p-6 w-auto gap-6">
            {mostPopular.map((data, index) => (
              <AnimeCard
                key={index}
                animeImg={data.images.jpg.image_url}
                animeName={data.title_english}
                onClick={() => openBlogArticle(index)}
              />
            ))}
          </div>
        </section>
     
     
      </article>
    </>
  );
};

export default PopularAnime;
