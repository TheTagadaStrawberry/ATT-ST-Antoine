import React from 'react'
import Container from '../container/container'

import { FaFacebook } from 'react-icons/fa'
import {SiGooglemaps} from 'react-icons/si'


const Footer = () => {
    return (
        <footer className='h-20 bg-blue-800'>
            <Container>
                <div className='flex h-full w-full flex-row items-center justify-around'>
                    <div className='flex flex-row gap-3 w-full h-full items-center justify-center text-center'>
                        <p className='ml-2 text-xs md:text-lg'>45 Rue de la Poste, 37360 Saint-Antoine-du-Rocher</p>
                        <a className='text-xl' alt="maps tennis de table saint antoine du rocher" href="https://www.google.fr/maps/place/45+Rue+de+la+Poste,+37360+Saint-Antoine-du-Rocher/@47.5023692,0.6274257,189m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47e2d5bb9c81be4f:0xd1bee87ccb61af81!2sRue+de+la+Poste,+37360+Saint-Antoine-du-Rocher!3b1!8m2!3d47.4992187!4d0.629933!16s%2Fg%2F1tdl5f21!3m5!1s0x47e2d5b997210c1f:0xc8570c8525f6b9c!8m2!3d47.5022456!4d0.627296!16s%2Fg%2F11q3q6950m" target="_blank" rel="noreferrer"><SiGooglemaps style={{stroke:'red', fill:'red'}}/></a>
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