

import CommentSection from '../Comment-section'

const AnimeDetail = ({ animeImg, animeName, show }) => {
 

    if (!show) return null;
    return(
        <section className='w-auto mx-auto max-screen-w-lg justify-center px-20 py-20' >
            <div className='flex'>
            <img className='w-auto rounded-lg ' src={animeImg} alt="" />
            <div className='flex flex-col'>
            <div className='flex w-full justify-between gap-4 px-10'>
                <div className='flex flex-col'>
                <h1 className='text-text font-bold text-3xl'>{animeName}</h1>
                <p className='text-text'>Genero</p>
                </div>
                <div className='flex flex-col bg-white h-20 px-6 rounded-md'>
                    <p className='text-4xl text-text font-bold'>4.0</p>
                    <p className='text-text'>Puntaje</p>
                </div>
            </div>
            <p className='px-10 py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto veniam, at ut sit esse consectetur iste perferendis, unde fuga vero quaerat voluptatibus, porro vel cumque ab? Natus, voluptatum. Vero, ex.</p>
           
            
                
          
            </div>
            </div>
             
           
           <CommentSection/>
        </section>
    )
}

export default AnimeDetail