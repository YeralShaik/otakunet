import { RiEmotionUnhappyFill } from "react-icons/ri";
import { RiEmotionHappyFill } from "react-icons/ri";
import voteImg from '../../../asset/4025.jpg'
import { MdNavigateNext } from "react-icons/md";

const VoteSection = () => {
    return(
        <section className="vote-section w-auto py-10 px-10">
            
            <h1 className="vote-title text-3xl font-bold text-text pb-4">Vota por el favorito de la temporada</h1>
            <h2 className="absolute ml-96 mt-6 text-2xl px-40  py-3 text-white rounded-xl bg-text font-bold ">Tower of God</h2>
            <div className="vote-container flex gap-6 p-6 justify-evenly items-center">
                <img className="rounded-md z-0" src={voteImg} alt="" />
                <div className="like-container bg-text rounded-full h-14 w-auto px-4 py-8 items-center flex gap-2 cursor-pointer hover:bg-secondary">
                    <RiEmotionHappyFill className="text-yellow-300 rounded-full text-5xl" />
                    <p className=" text-white">Me gusta</p>
                </div>
                <div className="unlike-container bg-text rounded-full h-14 w-auto px-4 py-8 items-center flex gap-1 cursor-pointer  hover:bg-secondary ">
                    <RiEmotionUnhappyFill className="text-yellow-300 text-5xl cursor-pointer "/>
                    <p className="text-white ">No me gusta</p>
                </div>
                <MdNavigateNext  className="bg-text text-white rounded-full w-auto text-4xl hover:bg-secondary "/>
               
            </div>
      
        
            
        </section>
    )
}


export default VoteSection