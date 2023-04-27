import React from 'react'

import SubContainer from '../container/subContainer'

import membre from '../img/membreBureau.png'

const Membre = ({ fonction, img }) => {
    if (img === '') {
        img = membre;
    }
    return (
        <article className='mb-5'>
            <h2 className='text-center underline mb-2'>{fonction}</h2>
            <img className='h-48 w-48 rounded shadow-lg' src={img} alt="membre du bureau"/>
        </article>
    )
}


export default function Bureau() {
    return (
        <SubContainer>
            <main className='p-5'>
                <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>Nos membres du bureau</h1>
                <div class>
                    <div className='flex justify-center'>
                        <Membre fonction="Président" img='' />

                    </div>
                    <div className='flex flex-col items-center md:flex-row md:justify-around'>
                        <Membre fonction="Secrétaire" img='' />
                        <Membre fonction="Trésorier" img='' />
                    </div>

                </div>
            </main>
        </SubContainer>
    )
}
