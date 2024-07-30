
import { NavLink } from 'react-router-dom';
import logo from '../../../asset/Otakunet.png';
import { IoHomeSharp } from "react-icons/io5";
import { HiClipboardList } from "react-icons/hi";
import { ImNewspaper } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";

const NavBar = () => {
    return (
        <nav className="navbar bg-primary w-auto h-20 flex py-2 shadow-xl">
            <div className="navbar-logo w-full px-10 py-4 flex gap-4 justify-evenly">
                <img src={logo} alt="logo otakunet" />
          
            <ul className="navbar-links flex items-center justify-center text-white gap-2 w-auto">
                <li>
                    <NavLink className='flex w-auto items-center justify-center gap-1 cursor-pointer hover:bg-white hover:text-primary px-2  py-1 rounded-md focus:bg-white focus:text-primary px-2 py-1 rounded-md'  to="/inicio" >
                    <IoHomeSharp /> Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex w-auto items-center justify-center  gap-1 cursor-pointer hover:bg-white hover:text-primary px-2 py-1 rounded-md' to="/Noticias">
                    <ImNewspaper />   Noticias
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex w-auto items-center gap-1 justify-center cursor-pointer hover:bg-white hover:text-primary px-2 py-1 rounded-md' to="/Glosario">
                    <HiClipboardList /> Glosario
                    </NavLink>
                </li>
                <div id='searcher-container' className='flex bg-white items-center gap-2 px-2 py-2 rounded-lg'>
                    <VscSearch className='text-primary' />
                    <input className='bg-white p-0' type="text"  placeholder='Buscar'/> 
                </div>
                </ul>
                </div>
        </nav>
    );
}

export default NavBar;
