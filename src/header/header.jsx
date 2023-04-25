import React, { useState } from 'react'
import Container from '../container/container'
import { NavLink } from "react-router-dom";

import logo from '../img/logo.png'
import { AiFillMail, AiOutlineClose } from 'react-icons/ai'
import { FaTableTennis } from 'react-icons/fa'
import { BsFillHouseFill, BsArrowRightShort } from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'

const MenuLink = ({ icon, title, links }) => {
    let [LinkActive, setLinkActive] = useState(false)

    const toggleLinkActive = () => {
        setLinkActive(!LinkActive)
    }
    return (
        <div className="relative">
            <span className=' flex gap-2 items-center cursor-default' onClick={toggleLinkActive}> {icon} {title}</span>
            <ul className={`w-max pl-1 ${LinkActive ? 'block' : 'hidden'} transition duration-500 ease-in-out`}>
                {links.map(link =>
                    <li className='flex flex-row items-center'><BsArrowRightShort /><NavLink to={link.to} onClick={() => setLinkActive(false)}>{link.nom}</NavLink></li>
                )}

            </ul>
        </div>


    )
}

const Header = () => {

    let [toggleMenu, setToggleMenu] = useState(false)
    const toggleMenuActive = () => {
        setToggleMenu(!toggleMenu)
    }
    let [toggleLargeMenu, setToggleLargeMenu] = useState(false)
    const toggleLargeMenuActive = () => {
        setToggleLargeMenu(!toggleLargeMenu)
    }
    return (
        <header className='h-20 w-screen bg-blue-800 shadow-md shadow-black/50'>
            <Container>
                <nav className=' h-full flex flex-row gap-5 items-center justify-between max-lg:hidden'>
                    <div className='h-full '>
                        <NavLink to="/" > <img className='h-full' src={logo} alt="Logo" /> </NavLink >
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 relative group'>
                            <span to='/club' className='h-full flex flex-row gap-2 items-center cursor-default'>
                                <BsFillHouseFill />
                                Club
                            </span>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100 backdrop-blur-md'>
                                <li><NavLink to='/club'>Historique</NavLink></li>
                                <li>Nous retrouver</li>
                                <li>Nos partenaires</li>
                            </ul>
                        </div>
                        <div className='px-2 relative  group'>
                            <span className='h-full flex flex-row gap-2 items-center cursor-default'> <FaTableTennis />Compétitions</span>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100'>
                                <li>Nos équipes</li>
                                <li><NavLink to='/competitions' >Championnats</NavLink></li>
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
                <div className='pl-7 h-full flex items-center lg:hidden'>
                    <span onClick={toggleMenuActive}> {toggleMenu ? <GrClose className={`text-2xl`}/> : <RxHamburgerMenu className={`text-2xl text-white`}/>} </span>
                </div>
                <nav className={`shadow-md shadow-black/50 lg:hidden z-20 bg-blue-800/60 h-96 backdrop-blur-lg absolute top-[80px] left-0 w-screen flex flex-col items-center justify-center ${toggleMenu ? 'block' : 'hidden'}`} >

                        <NavLink to="/">Accueil</NavLink>
                        <MenuLink
                            icon=<BsFillHouseFill />
                            title="Club"
                            links={[{ to: '/club', nom: "Historique" }, { to: '/', nom: "Nous retrouver" }, { to: '/', nom: "Nos partenaires" }]}
                        />

                        <MenuLink
                            icon=<FaTableTennis />
                            title="Compétitions"
                            links={[{ to: '/competitions', nom: "Nos équipes" }, { to: '/competitions', nom: "Championnats" }, { to: '/competitions', nom: "Indiv" }]}
                        />

                        <MenuLink
                            icon=<AiFillMail />
                            title="Contact"
                            links={[{ to: '/contact', nom: "Inscription" }, { to: '/contact', nom: "Nous contacter" }]}
                        />

                </nav>
            </Container>


        </header>
    )
}

export default Header;