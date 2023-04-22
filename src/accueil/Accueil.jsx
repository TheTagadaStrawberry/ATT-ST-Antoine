import React from 'react'
import Container from '../container/container'
import { redirect } from "react-router-dom";

const Article = ({ title, photo, text }) => {

    const goTo = () => {
        console.log('coucou')
        return redirect('/actualite')
    }

    return (
        <article className='border h-52  rounded-lg mb-3 p-2 shadow-md shadow-black/50 cursor-pointer' onClick={ () => goTo()}>
            <img className='w-72 h-48 rounded-lg object-contain float-left mr-2 block' src={photo} alt="actualités" />
            <h2 className='text-xl underline'>{title}</h2>
            <p className='text-justify line-clamp-6'>{text}</p>
        </article>
    )
}


export default function Accueil() {
    return (
        <Container >
            <main className='bg-blue-800/90 p-5'>
                <h1 className='text-4xl font-bold text-center py-5'>Association de Tennis de Table de Saint-Antoine du Rocher</h1>
                <h2 className='text-2xl font-bolder'>Actualités</h2>
                <Article
                    title="Lorem Ipsum"
                    photo="https://picsum.photos/300/200"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo="https://picsum.photos/300/200"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo="https://picsum.photos/300/200"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />
                <Article
                    title="Lorem Ipsum"
                    photo="https://picsum.photos/300/200"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta."
                />

            </main>
        </Container>
    )
}
