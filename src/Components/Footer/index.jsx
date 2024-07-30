import imgLogo from '../../../asset/Otakunet.png'
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-primary w-auto h-20 flex items-center">
            <img className='w-24 h-auto my-2 mx-80  ' src={imgLogo} alt="" />
            <div className='px-60 py-6 flex text-white gap-2 text-2xl'>
                <FaYoutube />
                <AiFillInstagram />
            </div>
        </footer>
    )
}

export default Footer