import animeImg from '../../../asset/Rectangle 3.png'

const AnimeNews = () => {
    const dataNewSeason = [{ animeImg: animeImg, animeName: 'Anime'}, { animeImg: animeImg, animeName: 'Anime'}]
    const dataPopular = [{ animeImg: animeImg, animeName: 'Anime'}, { animeImg: animeImg, animeName: 'Anime'}]
return (
    <>
<section className="flex-1 p-10 w-auto">

  <h1 className="text-text text-2xl font-bold ">Nueva Temporada</h1> 
  <animeContainer id="card-list-container" className="p-6 w-auto flex gap-8">
  {dataNewSeason.map((data, index) =>(
    <card id="card-anime" className="" key={index}>
      <img src={data.animeImg} alt="" />
      <h2 className='pt-2 font-semibold'>{data.animeName}</h2>
    </card>
  ))}
  </animeContainer>

  <section className="w-auto">
  <h1 className="text-text text-2xl font-bold ">Nueva Temporada</h1> 

  <popularContainer id="card-list-container" className="p-6 w-auto flex gap-8">
  {dataPopular.map((data, index) =>(
    <card id="card-anime" className="" key={index}>
      <img src={data.animeImg} alt="" />
      <h2 className='pt-2 font-semibold'>{data.animeName}</h2>
    </card>
  ))}
  </popularContainer>
</section>
</section>
</>
    )
}

export default AnimeNews