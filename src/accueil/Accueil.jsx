import React, { useState } from 'react'
import Calendar from 'react-calendar';
import axios from 'axios';


import 'react-calendar/dist/Calendar.css'

import SubContainer from '../container/subContainer'
import Container from '../container/container'

import { useNavigate, Link } from "react-router-dom";
import { FaTableTennis } from 'react-icons/fa'
import { HiOutlineLightBulb } from 'react-icons/hi'

import smallRss from '../file/smallRSS.json'

const Article = ({ title, photo, text, date }) => {




    const navigate = useNavigate();

    return (
        <article className=' relative border flex flex-col bg-[#eee] lg:hover:scale-105 transition duration-200 ease-in-out md:flex-row border-gray-400 rounded-lg mb-3 shadow-md shadow-black/50 cursor-pointer' onClick={() => navigate(`/ATT-ST-Antoine/actualite/${title}`)}>
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


export default function Accueil() {
    const fluxRSS = smallRss.item;
    const [value, onChange] = useState(new Date());
    return (
        <Container >
            <SubContainer >
                <main className='text-black p-5'>
                    <div className='flex flex-row items-center justify-center text-center gap-5 my-5'>
                        <FaTableTennis className='text-7xl fill-red-600' />
                        <h1 className='text-2xl md:text-3xl font-bold text-center py-5'>Association de Tennis de Table de Saint-Antoine du Rocher</h1>
                    </div>
                    <div className='p-4 flex flex-col md:flex-row items-center justify-around'>
                        <div className='flex flex-col md:flex-row  justify-center items-center'>
                            <HiOutlineLightBulb className='text-4xl fill-yellow-300' />
                            <p className='mt-1'>Pour vous inscrire, veuillez vous rendre à la page <Link className='underline text-white bg-red-500 animate-pulse' to="/ATT-ST-Antoine/inscription">inscription</Link>.</p>
                        </div>
                        <div className='mt-5 md:mt-0 md:ml-3'>
                            <Calendar className={'rounded-lg shadow-md shadow-black/50'} onChange={onChange} defaultValue={value} />
                        </div>

                    </div>
                    <h2 className='text-xl text-center md:text-2xl md:text-left font-bolder underline ml-2 pb-2'>Les dernières actualités</h2>
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
                    {/* <Article
                    title="Lorem Ipsum"
                    photo={img}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo={img}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo={img}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo={img}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                /> */}
                <div className='text-center md:flex md:justify-end'>
                    <Link className='underline text-lg' to="/ATT-ST-Antoine/actualites">Toutes nos actualités...</Link>
                </div>
                </main>
            </SubContainer>
        </Container>
    )
}
