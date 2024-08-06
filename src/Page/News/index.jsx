import newsImg from '../../../asset/3997.jpg'
const News = () => {
    const newsData = [
        {
            newsImg: newsImg,
            title:'Anime',
            sypnosis: 'prueba1',
        },
        {
            newsImg: newsImg,
            title:'Anime2',
            sypnosis: 'prueba',
        },
    ]

    return (
        <section className="news-section  w-auto h-auto px-20 py-10 text-text">
            <h1 className="news-title text-4xl py-6 font-bold">Noticias</h1>
            {newsData.map((data, index) => (
                
            <div className="news-container flex mb-8" key={index}>
                <img className='w-40 rounded-md' src={data.newsImg} alt="" />
                <div className='news-textcontainer flex flex-col px-6'>
                    <h2 className='news-subtitle text-2xl font-bold py-3'>{data.title}</h2>
                    <p>{data.sypnosis}</p>
                </div>
            </div>
            
        ))}
        </section>
    )
}

export default News 