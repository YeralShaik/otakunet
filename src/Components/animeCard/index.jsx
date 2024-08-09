import { useState } from "react";
import AnimeDetail from "../../AnimeDetail"; 

const getShortName = (name, maxLength = 20) => {
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + '...';
  }
  return name;
};

const AnimeCard = ({ animeImg, animeName }) => {
  const [showAnimeDetail, setShowAnimeDetail] = useState(false);

  function openAnimeDetail() {
    setShowAnimeDetail(!showAnimeDetail);
  }

  return (
    <div>
      <div id="card" className="cursor-pointer w-40 py-2" onClick={openAnimeDetail}>
        <img className="rounded-md object-cover" src={animeImg} alt={animeName} />
        <h2 className="pt-2 font-semibold">{getShortName(animeName)}</h2>
      </div>
      {showAnimeDetail && (
        <AnimeDetail
          animeImg={animeImg}
          animeName={animeName}
          show={showAnimeDetail}
        />
      )}
    </div>
  );
};

export default AnimeCard;
