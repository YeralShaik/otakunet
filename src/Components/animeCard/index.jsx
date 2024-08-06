import { useState } from "react";
import AnimeDetail from "../../AnimeDetail"; 


const AnimeCard = ({ animeImg, animeName }) => {
    const [showAnimeDetail, setShowAnimeDetail] = useState(false);

    function openAnimeDetail() {
        setShowAnimeDetail(!showAnimeDetail);
    }

    return (
        <div>
            <div id="card" className="cursor-pointer" onClick={openAnimeDetail}>
                <img className="rounded-md w-40" src={animeImg} alt={animeName} />
                <h2 className="pt-2 font-semibold">{animeName}</h2>
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
