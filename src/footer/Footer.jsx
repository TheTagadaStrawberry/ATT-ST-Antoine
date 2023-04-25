import React from 'react'
import Container from '../container/container'

import { FaFacebook } from 'react-icons/fa'
import {SiGooglemaps} from 'react-icons/si'


const Footer = () => {
    return (
        <footer className='h-20 w-screen bg-blue-800 bottom-0 left-0 justify-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <Container>
                <div className='flex h-full w-full flex-row items-center justify-around'>
                    <div className='flex flex-row gap-3 w-full h-full items-center justify-center text-center'>
                        <p className='ml-2 text-xs md:text-lg'>3 rue Moulin, 37360 Saint Antoine du Rocher</p>
                        <a className='text-xl' alt="maps tennis de table saint antoine du rocher" href="https://www.google.com/maps/dir//3+Rue+du+Moulin,+37360+Saint-Antoine-du-Rocher/@47.4933487,0.6368174,47m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x47e2d5988d1897c3:0x36be53f373e8b135!2m2!1d0.6368851!2d47.4933939" target="_blank" rel="noreferrer"><SiGooglemaps style={{stroke:'red', fill:'red'}}/></a>
                    </div>

                    <div  className='flex flex-row gap-3 w-full h-full items-center justify-center'>
                        <p className='text-xs md:text-lg'>Nous suivre : </p>
                        <a className='text-xl' href="https://www.facebook.com/profile.php?id=100087365927782" rel="noreferrer" target='_blank' alt="facebook tennis de table saint antoine du rocher"><FaFacebook style={{stroke:'blue', fill:'blue'}}/> </a>
                    </div>
                </div>
                
            </Container>
            

        </footer>
    )
}

export default Footer