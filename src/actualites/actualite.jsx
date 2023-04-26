import React from 'react'

import SubContainer from '../container/subContainer'
import { useParams } from 'react-router-dom';

import img from '../img/img.jpg'
import bigRSS from '../file/bigRSS.json'

export default function Actualite() {
  var article = ""
  window.scrollTo(0,0)
  const { id } = useParams();
  bigRSS.item.map(rss =>{
    if(rss.title == id){
      article = rss
    }
  })
  return (
    <SubContainer>
      <main className='text-black p-5'>
        
        <article className=' flex flex-col justify-center items-center'>
          <img src={article.enclosure._url} alt="lorem" className='mb-5 rounded-lg shadow-md shadow-black/50'/>
          <div className='w-full'>
            <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>{article.title}</h1>
            <div className='text-justify'>
              <p>{article.description}</p>
            </div>

          </div>

        </article>
      </main>
    </SubContainer>
  )
}
