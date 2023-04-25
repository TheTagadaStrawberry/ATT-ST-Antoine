import React from 'react'

import formulairePDF from '../file/formulaire-inscription.pdf'

import SubContainer from '../container/subContainer'

import {GrDocumentPdf} from 'react-icons/gr'

export default function Inscription() {
  return (
    <SubContainer>
      <main className='text-black p-5'>
          <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>Formulaire d'inscription</h1>
        <div className='flex items-center gap-2 lg:gap-5'>
          <p>Veuillez télécharger et nous donner le formulaire rempli accompagné d'un certificat médical pour une inscription.</p>
          <a href={formulairePDF} download={formulairePDF}><GrDocumentPdf className='text-3xl pdf cursor-pointer'/></a>
        </div>
      </main>
    </SubContainer>
  )
}
