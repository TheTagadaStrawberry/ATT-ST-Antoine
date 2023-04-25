import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

import SubContainer from '../container/subContainer'
import Container from '../container/container'

import { useNavigate, Link } from "react-router-dom";
import { FaTableTennis } from 'react-icons/fa'
import { HiOutlineLightBulb } from 'react-icons/hi'

import img from '../img/img.jpg'

const Article = ({ title, photo, text }) => {

    const navigate = useNavigate();

    return (
        <article className='border flex flex-col lg:hover:scale-105 transition duration-200 ease-in-out md:flex-row border-gray-400 rounded-lg mb-3 p-2 shadow-md shadow-black/50 cursor-pointer' onClick={() => navigate('/actualite')}>
            <div className='flex justify-center items-center w-full'>
                <img className=' rounded-lg md:max-w-xs md:max-h-xs object-cover md:mr-2' src={photo} alt="actualités" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-xl text-center md:text-left underline'>{title}</h2>
                <p className='text-justify line-clamp-6'>{text}</p>
            </div>

        </article>
    )
}


export default function Accueil() {

    const [value, onChange] = useState(new Date());
    return (
        <Container >
        <SubContainer >
            <main className='text-black p-5'>
                <div className='flex flex-row items-center justify-center text-center gap-5 mb-5'>
                    <FaTableTennis className='text-7xl fill-red-600' />
                    <h1 className='text-2xl md:text-3xl font-bold text-center py-5'>Association de Tennis de Table de Saint-Antoine du Rocher</h1>
                </div>
                <div className='p-4 flex flex-col md:flex-row items-center justify-around'>
                    <div className='flex flex-col md:flex-row  justify-center items-center'>
                        <HiOutlineLightBulb className='text-4xl fill-yellow-300'/>
                        <p className='mt-1'>Pour vous inscrire, veuillez-vous rendre à la page <Link className='underline' to="/contact/inscription">inscription</Link></p>
                    </div>
                    <div className='mt-5 md:mt-0 md:ml-3'>
                        <Calendar className={'rounded-lg shadow-md shadow-black/50'} onChange={onChange} defaultValue={value} />
                    </div>

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
        </SubContainer>
        </Container>
    )
}
