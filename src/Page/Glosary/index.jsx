import imgGlosario from '../../../asset/banner.jpg'
const Glosario = () => {
    const glosaryData = [
        {
            title: 'Shōnen:', 
            descripcion: 'Anime y manga dirigidos a jóvenes varones, suelen incluir acción y aventuras.'
        },
        {
            title: 'Shōjo:', 
            descripcion: 'Anime y manga dirigidos a jóvenes mujeres, centrados en romance y relaciones.'
        },
        {
            title: 'Isekai:', 
            descripcion: 'Subgénero donde el protagonista es transportado a otro mundo.'
        },
        {
            title: 'Shōjo:', 
            descripcion: 'Anime y manga dirigidos a jóvenes mujeres, centrados en romance y relaciones.'
        },
        {
            title: 'Otaku: ', 
            descripcion: 'Persona con gran interés en el anime, manga y cultura japonesa.'
        },
        {
            title: 'Cosplay: ', 
            descripcion: 'Disfrazarse y actuar como personajes de anime, manga o videojuegos.'
        },
    ]
    return (
        <section className="flex flex-col
         text-text w-auto h-auto pb-20">
            <img className='w-auto h-96' src={imgGlosario} alt="" />
            <h1 className="text-4xl font-bold px-20 py-8">Glosario</h1>
            {glosaryData.map((data, index) => (
                <div className="w-auto h-auto px-20 py-2" key={index} >
                    <strong className="text-xl pb-4 ">{data.title}</strong> 
                    <p className="px-4 text-md">- {data.descripcion}</p>
                 </div>
        ))}
        </section>
    )
}

export default Glosario 