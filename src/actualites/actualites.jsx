import React from 'react'
import { useNavigate } from 'react-router-dom'

import SubContainer from '../container/subContainer'

import bigRSS from '../file/bigRSS.json'

const Article = ({ title, photo, text, date }) => {

    const navigate = useNavigate();

    return (
        <article className=' relative border flex flex-col bg-[#eee] lg:hover:scale-105 transition duration-200 ease-in-out md:flex-row border-gray-400 rounded-lg mb-3 shadow-md shadow-black/50 cursor-pointer' onClick={() => navigate('/ATT-ST-Antoine/actualite')}>
            <div className='flex justify-center items-center lg:mr-3'>
                <img className='rounded-t-lg lg:rounded-l-lg md:max-w-md md:max-h-md object-cover md:mr-2' src={photo} alt="actualités" />
            </div>
            <div className='flex flex-col justify-center items-center p-2 mb-4'>
                <h2 className='text-xl mb-2 text-center md:text-left underline'>{title}</h2>
                <p className='text-justify line-clamp-6'>{text}</p>
                <div className='absolute bottom-2 right-2 text-xs flex flex-row justify-end w-full'>
                    <span className=''>{
                        new Date(date).toLocaleDateString('fr', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
                    }</span>
                </div>

            </div>

        </article>
    )
}

export default function Actualites() {
    const fluxRSS = bigRSS.item
    return (
        <SubContainer>
            <main  className='p-5'>
                <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>Nos actualités</h1>
                {
                    fluxRSS.map(flux =>
                        <Article
                            title={flux.title}
                            photo={flux.enclosure._url}
                            text={flux.description}
                            date={flux.pubDate}
                        />
                    )
                }
            </main>
        </SubContainer>
    )
}
