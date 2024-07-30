import bannerImg from '../../../asset/724-072620_PageHeader_Kaiju8_2000x800_copy_wm.jpg'

const BannerHome = () => {
    return(
        <>
            <section className='max-w-full h-1/4'>
                <img className='w-full h-96 object-cover' src={bannerImg} alt="" />
                <div className='absolute top-40 py-6 w-auto px-32  justify-center items-center text-center'> 
                    <h1 className='text-white text-5xl font-bold '>¿Eres un Otaku Nuevo?</h1>
                    <p className='text-white py-2 text-xl'>¡Familiarizate con todo sobre este mundo!</p>
                    <button className='bg-white text-primary px-4 py-2 rounded-xl mt-2 cursor-pointer hover:bg-secondary'>Ver Glosario</button>
                </div>
            </section>
        </>
    )
}

export default BannerHome