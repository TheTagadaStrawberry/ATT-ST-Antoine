import React from 'react'
import Container from '../container/container'
import { NavLink} from "react-router-dom";

import logo from '../img/logo.png'
import { AiFillMail } from 'react-icons/ai'
import { FaTableTennis } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
const Header = () => {
    return (
        <header className='h-20 w-screen bg-blue-800 shadow-md shadow-black/50'>
            <Container>
                <nav className=' h-full flex flex-row gap-5 items-center justify-between'>
                    <div className='h-full '>
                        <NavLink to="/" > <img className='h-full' src={logo} alt="Logo" /> </NavLink >
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 relative group'>
                            <NavLink to='/club' className='h-full flex flex-row gap-2 items-center cursor-default'>
                                <BsFillHouseFill />
                                Club
                            </NavLink>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100'>
                                <li>Historique</li>
                                <li>Nous retrouver</li>
                                <li>Nos partenaires</li>
                            </ul>
                        </div>
                        <div className='px-2 relative  group'>
                            <NavLink to='/competitions' className='h-full flex flex-row gap-2 items-center cursor-default'> <FaTableTennis />Compétitions</NavLink>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100'>
                                <li>Nos équipes</li>
                                <li>Championnats</li>
                                <li>Indiv</li>
                            </ul>
                        </div>
                        <div className='px-2 relative group'>
                            <span className='h-full flex flex-row gap-2 items-center cursor-default'> <AiFillMail /> Contact</span>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100 translate-x-[-50px]'>
                                <li><NavLink to='/contact'>Inscription</NavLink></li>
                                <li><NavLink to='/contact'>Nous contacter</NavLink></li>
                            </ul>
                        </div>
                    </div>

                </nav>
            </Container>


        </header>
    )
}

export default Header;