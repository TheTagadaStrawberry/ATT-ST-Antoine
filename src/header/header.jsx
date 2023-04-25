import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import { NavLink } from "react-router-dom";

import logo from '../img/logo.png'
import TestSVG from '../img/imageTest.svg'

import { AiFillMail, AiOutlineClose } from 'react-icons/ai'
import { FaTableTennis } from 'react-icons/fa'
import { BsFillHouseFill, BsArrowRightShort } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { RxHamburgerMenu } from 'react-icons/rx'



const MenuLink = ({ icon, title, links, toggleMenu, displayLink }) => {
    let [linkActive, setLinkActive] = useState(displayLink)

    const toggleLinkActive = () => {
        setLinkActive(!linkActive)
    }



    return (
        <div className="relative">
            <span className=' flex gap-2 items-center cursor-default' onClick={toggleLinkActive}> {icon} {title}</span>
            <ul className={`w-max pl-1 ${linkActive ? 'block' : 'hidden'} transition duration-500 ease-in-out`}>
                {links.map(link =>
                    <li className='flex flex-row items-center' onClick={() => toggleLinkActive()}><BsArrowRightShort /><NavLink to={link.to} onClick={toggleMenu}>{link.nom}</NavLink></li>
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
    let [toggleLinkMenu, setToggleLinkMenu] = useState(false)
    const toggleLinkMenuActive = () => {
        console.log()
        setToggleLinkMenu(false)
    }
    return (
        <header className='h-20 w-screen bg-blue-800 shadow-md shadow-black/50'>
            <Container>
                <nav className=' h-full flex flex-row gap-5 items-center justify-between max-lg:hidden'>
                    <div className='h-full '>
                        {/* <NavLink to="/" > <img className='h-full' src={logo} alt="Logo" /> </NavLink > */}
                        <NavLink to="/" > <img className='w-20 h-20 transform duration-150 ease-in-out hover:translate-y-[-10px]' src={TestSVG} /> </NavLink >
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
                                <li><NavLink to='/competitions' >Nos équipes</NavLink></li>
                                <li><NavLink to='/competitions' >Résultats</NavLink></li>
                            </ul>
                        </div>
                        <div className='px-2 relative group'>
                            <span className='h-full flex flex-row gap-2 items-center cursor-default'> <AiFillMail /> Contact</span>
                            <ul className='absolute w-max bg-black/50 text-center p-2 opacity-0 group-hover:opacity-100 translate-x-[-50px]'>
                                <li><NavLink to='/contact/inscription'>Inscription</NavLink></li>
                                <li><NavLink to='/contact/formulaire'>Nous contacter</NavLink></li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <div className='pl-7 h-full flex items-center justify-center lg:hidden relative'>
                    <span onClick={toggleMenuActive} className='block absolute top-6 left-3'> {toggleMenu ? <GrClose className={`text-2xl`} onClick={toggleLinkMenuActive} /> : <RxHamburgerMenu className={`text-2xl text-white`} />} </span>
                    {/* <div className='w-20 h-20 flex items-center justi'> */}
                    <NavLink to="/" ><img className='w-20 h-20 flex items-center justify-center' src={TestSVG} /></NavLink>
                    {/* </div> */}
                </div>
                <nav className={`shadow-md shadow-black/50 lg:hidden z-20 bg-blue-800/60 h-96 backdrop-blur-lg absolute top-[80px] left-0 w-screen flex flex-col items-center justify-center ${toggleMenu ? 'block' : 'hidden'}`} >

                    {/* <NavLink to="/">Accueil</NavLink> */}
                    <MenuLink
                        icon=<BsFillHouseFill />
                        title="Club"
                        links={[{ to: '/club', nom: "Historique" }, { to: '/', nom: "Nous retrouver" }, { to: '/', nom: "Nos partenaires" }]}
                        toggleMenu={() => setToggleMenu(false)}
                        displayLink={toggleLinkMenu}
                    />

                    <MenuLink
                        icon=<FaTableTennis />
                        title="Compétitions"
                        links={[{ to: '/competitions', nom: "Nos équipes" }, { to: '/competitions', nom: "Championnats" }]}
                        toggleMenu={() => setToggleMenu(false)}
                        displayLink={toggleLinkMenu}
                    />

                    <MenuLink
                        icon=<AiFillMail />
                        title="Contact"
                        links={[{ to: '/contact/inscription', nom: "Inscription" }, { to: '/contact/formulaire', nom: "Nous contacter" }]}
                        toggleMenu={() => setToggleMenu(false)}
                        displayLink={toggleLinkMenu}
                    />

                </nav>
            </Container>


        </header>
    )
}

export default Header;