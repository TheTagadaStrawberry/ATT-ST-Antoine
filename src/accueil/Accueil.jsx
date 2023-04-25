import React from 'react'

import Container from '../container/container'

import { redirect } from "react-router-dom";
import { FaTableTennis } from 'react-icons/fa'

import img from '../img/img.jpg'

const Article = ({ title, photo, text }) => {

    const goTo = () => {
        console.log('coucou')
        return redirect('/actualite')
    }

    return (
        <article className='border flex flex-col md:flex-row border-gray-400 rounded-lg mb-3 p-2 shadow-md shadow-black/50 cursor-pointer' onClick={() => goTo()}>
            <div className='flex justify-center items-center w-full'>
                <img className=' rounded-lg max-w-xs max-h-xs object-fill sm:object-cover md:mr-2' src={photo} alt="actualités" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-xl text-center md:text-left underline'>{title}</h2>
                <p className='text-justify line-clamp-6'>{text}</p>
            </div>

        </article>
    )
}


export default function Accueil() {
    return (
        <Container >
            <main className='text-black p-5'>
                <div className='flex flex-row items-center justify-center text-center gap-5 mb-5'>
                    <FaTableTennis className='text-7xl'/>
                    <h1 className='text-2xl md:text-3xl font-bold text-center py-5'>Association de Tennis de Table de Saint-Antoine du Rocher</h1>
                </div>
                <h2 className='text-xl text-center md:text-2xl md:text-left font-bolder underline ml-2 pb-2'>Actualités</h2>
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
                />
                <Article
                    title="Lorem Ipsum"
                    photo={img}
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />

            </main>
        </Container>
    )
}
