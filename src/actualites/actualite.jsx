import React from 'react'

import SubContainer from '../container/subContainer'

import img from '../img/img.jpg'

export default function Actualite() {
  window.scrollTo(0,0)
  return (
    <SubContainer>
      <main className='text-black p-2'>
        <article className=' flex flex-col justify-center items-center'>
          <img src={img} alt="lorem" className='mb-5 rounded-lg shadow-md shadow-black/50'/>
          <div className=''>
            <h1 className='text-xl sm:text-2xl text-center lg:text-left font-bolder underline mb-6'>Lorem Ipsum</h1>
            <div className='text-justify'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis tincidunt odio, a vestibulum augue ornare a. Praesent quis fringilla lectus. Nam fringilla diam at sem facilisis, ac tristique elit interdum. Sed aliquam sagittis vestibulum. In venenatis purus vestibulum ligula ullamcorper, sed dignissim mauris viverra. Sed volutpat urna ac enim ullamcorper hendrerit. Cras nibh purus, pretium quis facilisis accumsan, efficitur nec lacus. Nam a convallis nisi, a aliquet lacus. Curabitur condimentum arcu non sodales ultrices. Nam neque sapien, tincidunt ac malesuada id, tincidunt et nibh. Mauris finibus turpis neque, in suscipit massa dapibus non. Donec consequat sapien dolor, non lobortis ante pellentesque at. Aliquam erat volutpat. Ut lobortis aliquam felis id porta.</p>
              <p>Integer fermentum ultrices justo eget mollis. Sed lobortis egestas enim sit amet accumsan. Nulla venenatis at leo eu sagittis. Morbi porttitor nibh et urna tincidunt luctus. Praesent lobortis augue odio, vitae consequat leo suscipit eu. Vestibulum vitae eleifend lectus. Nulla nec leo non lorem bibendum finibus a eget augue. Integer sollicitudin leo at nunc ullamcorper tristique. Duis nec turpis dolor. Integer elementum at odio quis congue. Maecenas sed sollicitudin ipsum. Duis dolor nisi, pellentesque quis pretium id, volutpat in ligula.</p>
              <p>Donec facilisis luctus augue, id consectetur ante commodo in. Suspendisse vestibulum, libero non tincidunt lacinia, metus mauris tincidunt odio, sed porta dui lectus eget dolor. Cras laoreet dolor eu sollicitudin ornare. Fusce ornare augue urna, ac mattis ex porta nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur aliquet eget metus vitae suscipit. Fusce sapien neque, facilisis nec leo a, pellentesque tincidunt erat. Mauris vehicula erat tristique nulla blandit mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed felis eget risus mollis fringilla in non velit. Quisque ultrices nunc eu mauris posuere, ut efficitur sapien consectetur.</p>
              <p>Mauris vel elementum velit. Nunc blandit enim diam, eu viverra sem vestibulum eu. Aliquam scelerisque leo sed nulla tincidunt luctus. Proin at felis at nunc lobortis sagittis. Nulla elit lectus, scelerisque sed tincidunt vitae, sagittis ut nulla. Sed ut lectus elementum, eleifend ex nec, consectetur purus. Pellentesque ac aliquam nunc. Sed pellentesque nisi non vestibulum fringilla. Curabitur nec porta turpis, a tincidunt turpis. Fusce vitae felis et mi rhoncus commodo. Ut non fringilla orci. In dapibus velit id nisl dictum vehicula. Nullam a tristique magna, et sodales erat. Morbi diam sapien, vestibulum vitae quam nec, semper egestas arcu. Praesent eleifend, elit sed sagittis faucibus, ipsum nisl imperdiet ligula, interdum condimentum sapien nunc vel nunc. Nulla volutpat semper ex ac vestibulum.</p>
              <p>Aliquam eget nunc rutrum, maximus ex vel, sodales nunc. Aenean sagittis nibh eget libero fringilla mollis. Nullam dictum tincidunt imperdiet. Nulla eget metus sit amet quam luctus ultrices vitae at arcu. Donec et ipsum sed nunc porttitor tempor et id nisi. Nunc aliquam arcu metus, non iaculis ligula feugiat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit sapien ut metus feugiat tempor. Vestibulum finibus, sem non pulvinar consectetur, libero lacus gravida risus, dapibus mollis justo lacus eget dui. Aliquam nec nisi diam. Nam sit amet leo tellus. Pellentesque risus felis, egestas ut purus at, tempor laoreet velit.</p>
            </div>

          </div>

        </article>
      </main>
    </SubContainer>
  )
}
