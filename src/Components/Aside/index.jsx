import AnimeNews from "../AnimeNews-Section"
import imgRecomend from "../../../asset/Rectangle 3.png"



const Aside = () => {
  
  const dataCategories = [
    {genre: 'Acción'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Romance'},
    {genre: 'Drama'},
    {genre: 'Fantasy'},
  
  ]
  const dataRecomended = [
    {img: imgRecomend, title: 'Anime', genre: 'Acción'},
    {img: imgRecomend, title: 'Anime', genre: 'Acción'},
    {img: imgRecomend, title: 'Anime', genre: 'Acción'},
    {img: imgRecomend, title: 'Anime', genre: 'Acción'},
   
  
  ]
return (
<div className="flex flex-1 ">
<aside className="sm:hide bg-gray-200 p-10 w-64 py-10">
  <h2 className="text-2xl text-text font-bold mb-4">Categorías</h2>
  {dataCategories.map((data, index) => (
  <ul className="text-text text-lg" key={index}>
    <li className="mb-1 px-2 ">
       <input className="mr-2 text-text" type="checkbox" />
        {data.genre}</li>
  </ul>
))}

<section className="w-auto">
  <h2 className="text-2xl text-text font-bold mb-4 mt-10 ">Recomendados</h2>
  {dataRecomended.map((data, index) => (
  <div key={index}>
    <div className=" w-auto flex gap-4"  >
        <img className="w-20 h-auto mb-6" src={data.img} alt="" />
        <div>
        <p className="text-lg font-semibold">{data.title}</p>
        <p className="bg-primary px-2 text-xs rounded mt-1 text-white opacity-55 ">{data.genre}</p>
        </div>
       
      </div>
  </div>
 
   ))}

</section>
</aside>
<AnimeNews/>

</div>
    )
}

export default Aside