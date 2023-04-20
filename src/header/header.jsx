import React from 'react'
import Container from '../container/container'
import { NavLink} from "react-router-dom";

import logo from '../img/logo.png'
import { AiFillMail } from 'react-icons/ai'
import { FaTableTennis } from 'react-icons/fa'
import { BsFillHouseFill } from 'react-icons/bs'
const Header = () => {
    return (
        <header className='h-20 w-screen bg-blue-800'>
            <Container>
                <nav className=' h-full flex flex-row gap-5 items-center justify-between'>
                    <div className='h-full '>
                        <NavLink to="/" > <img className='h-full' src={logo} alt="Logo" /> </NavLink >
                        
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2'>
                            <NavLink to='/club' className='h-full flex flex-row gap-2 items-center'>
                                <BsFillHouseFill />
                                Club
                            </NavLink>
                        </div>
                        <div className='px-2'>
                            <NavLink to='/competitions' className='h-full flex flex-row gap-2 items-center'> <FaTableTennis />Compétitions</NavLink>
                        </div>
                        <div className='px-2'>
                            <NavLink to='/contact' className='h-full flex flex-row gap-2 items-center'> <AiFillMail /> Contact</NavLink>
                        </div>
                    </div>

                </nav>
            </Container>


        </header>
    )
}

export default Header;