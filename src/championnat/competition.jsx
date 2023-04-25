import React, { useState } from 'react'
import SubContainer from '../container/subContainer'
import { Link, Outlet } from 'react-router-dom';


import d2 from '../img/D2.jpg'
// import d3 from '../img/D2.jpg'
import d4 from '../img/D4.jpg'
import jeune from '../img/jeune.png'

export default function Competition() {


    const D2 = {
        'nom': 'D2',
        'photo': d2,
        'poule': []
    }
    const D3 = {
        'nom': 'D3',
        'photo': d2,
        'poule': []
    }
    const D4 = {
        'nom': 'D4',
        'photo': d4,
        'poule': []
    }
    const JEUNES = {
        'nom': 'Jeunes',
        'photo': jeune,
        'poule': []
    }

    let [currentDiv, setCurrentDiv] = useState([JEUNES, D2, D3, D4])

    return (
        <SubContainer>
            <main className='p-5 flex flex-col'>
                <article>
                    <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>Nos équipes</h1>
                    
                    <div className='flex flex-row flex-wrap gap-2 mt-2 justify-center'>
                        {currentDiv.map(equipe =>
                            <div className='relative shadow-md shadow-black/50'>
                                <Link to={`/competitions/${equipe.nom}`}>
                                    <img className='max-w-96 max-h-96 lg:h-96 lg:w-96 object-cover rounded' src={equipe.photo} alt="images équipe" />
                                    <span className='absolute flex bottom-0 text-sm md:text-base justify-center w-full bg-blue-800/50 font-bold text-white'>Equipe {equipe.nom}</span>
                                </Link>

                            </div>
                        )}
                    </div>
                    {/* <div className='mt-2'>
                        <ul className='flex flex-row justify-center items-center'>
                            <li className='px-3 bg-blue-500 cursor-pointer hover:bg-blue-600'><Link to='/competitions/Jeunes'>jeunes</Link></li>
                            <li className='px-3 bg-blue-500 cursor-pointer hover:bg-blue-600'><Link to='/competitions/D2'>D2</Link></li>
                            <li className='px-3 bg-blue-500 cursor-pointer hover:bg-blue-600'><Link to='/competitions/D3'>D3</Link></li>
                            <li className='px-3 bg-blue-500 cursor-pointer hover:bg-blue-600'><Link to='/competitions/D4'>D4</Link></li>
                        </ul>
                    </div> */}
                    <Outlet />
                </article>
            </main>

        </SubContainer>
    )
}
