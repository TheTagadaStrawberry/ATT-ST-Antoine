import React from 'react'
import Container from '../container/container'

export default function Contact() {
    return (
        <Container >
            <main className='h-full'>
                <article className='bg-blue-800/90 p-5 flex flex-col'>
                    <div className='mb-3 text-2xl'>
                        <h1>Formulaire de contact</h1>
                    </div>
                    <form>
                        <div className='flex flex-col gap-3 text-black'>
                            <input type="text" placeholder="Nom *" className='rounded p-2 ' />
                            <input type="text" placeholder="Prenom *" className='rounded p-2 ' />
                            <input type="number" placeholder="Numéro de téléphone" className='rounded p-2 ' />
                            <input type="email" placeholder="Email *" className='rounded p-2 ' />
                            <textarea placeholder='Votre Message *' className='rounded p-2 ' />
                        </div>
                        <div className='flex flex-row justify-end gap-3 mt-3'>
                            <button type="button" className='rounded border p-2 hover:bg-white hover:text-blue-800/90 transition duration-200 ease'>Reset</button>
                            <button type="button" className='rounded border p-2 hover:bg-white hover:text-blue-800/90 transition duration-200 ease'>Envoyer</button>
                        </div>
                    </form>
                </article>
            </main>

        </Container>
    )
}
