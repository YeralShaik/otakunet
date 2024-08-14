import { useState, useEffect } from "react";
import AnimeNews from "../AnimeNews-Section";
import { fetchRecommendations } from "../../Api";

const Aside = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        const data = await fetchRecommendations();
        setRecommendations(data.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    getRecommendations();
  }, []);

  const getShortName = (title) => {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
};
  return (
    <div className="flex flex-1">
      <aside className="sm:hide bg-gray-200 px-6 w-64 py-10">
        <h2 className="text-2xl text-text font-bold mb-4">Categorías</h2>
        <ul className="text-text text-lg">
          <li className="mb-1 px-2">
            <input className="mr-2 text-text" type="checkbox" />
          </li>
        </ul>
        <section className="w-auto px-4">
          <h2 className="text-2xl text-text font-bold mb-4 mt-10">Recomendados</h2>
          {recommendations.map((item, index) => (
            <div className=" w-full" key={index}>
              <div className="w-full h-40 flex gap-4 ">
                {item.entry && item.entry[0] && item.entry[0].images && item.entry[0].images.jpg && (
                  <>
                    <img
                      className="w-20 h-auto mb-6 rounded-md"
                      src={item.entry[0].images.jpg.image_url}
                      alt={item.entry[0].title}
                    />
                    <div>
                    <p className="text-md font-semibold ">{getShortName(item.entry[0].title)}</p>
                      
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </section>
      </aside>
      <AnimeNews />
    </div>
  );
};

export default Aside;
