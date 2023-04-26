import React from 'react'

import SubContainer from '../container/subContainer'

export default function Acces() {
    
    return (
        <SubContainer >
            <main className='p-5'>
                <h1 className="text-xl text-center md:text-2xl md:text-left font-bolder underline ml-2 pb-2">Plan d'accès</h1>
                <p>Nous sommes dans le gymnase omnisport au <b>45 Rue de la Poste, 37360 Saint-Antoine-du-Rocher</b>.</p>
                <div>
                    <iframe className='w-full h-auto' src="https://www.google.fr/maps/place/45+Rue+de+la+Poste,+37360+Saint-Antoine-du-Rocher/@47.5023692,0.6274257,189m/data=!3m1!1e3!4m15!1m8!3m7!1s0x47e2d5bb9c81be4f:0xd1bee87ccb61af81!2sRue+de+la+Poste,+37360+Saint-Antoine-du-Rocher!3b1!8m2!3d47.4992187!4d0.629933!16s%2Fg%2F1tdl5f21!3m5!1s0x47e2d5b997210c1f:0xc8570c8525f6b9c!8m2!3d47.5022456!4d0.627296!16s%2Fg%2F11q3q6950m"></iframe>
                </div>
            </main>

        </SubContainer>
    )
}