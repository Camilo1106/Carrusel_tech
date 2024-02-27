//mport { useRoutes } from 'react-router-dom';
import Developers from '../Developers';
/*import Home from '../Home';

import Tutorials from '../Tutorials';*/
import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slideToShow: 3,
    slideToScroll: 1
  }

  return (
    <>
    <h1 className="bg-red-200 mb-4"> Hola Bootcamp </h1>
    <button className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded mb-4" onClick={()=> window.open('https://tailwindcss.com/', '_blank')} > Help me</button>
 
    <div className="grid grid-cols-10 gap-2">
      <div className="bg-violet-50 aspect-square"></div>
      <div className="bg-violet-100 aspect-square"></div>
      <div className="bg-violet-200 aspect-square"></div>
      <div className="bg-violet-300 aspect-square"></div>
      <div className="bg-violet-400 aspect-square"></div>
      <div className="bg-violet-500 aspect-square"></div>
      <div className="bg-violet-600 aspect-square"></div>
      <div className="bg-violet-700 aspect-square"></div>
      <div className="bg-violet-800 aspect-square"></div>
      <div className="bg-violet-900 aspect-square"></div>
    </div>
    <div className='w-3/4 m-auto mt-10'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='flex items-center justify-center my-5'>
            <div className='bg-white h-[500px] text-black rounded-xl flex flex-col items-center gap-5 p-5'>
              <img src={d.img} alt='' className='h-50 w-44 rounded-full object-cover' />
              <div className='text-center'>
              <p className='text-xl font-semibold'>{d.name}</p>
              <p className='text-lg text-[17px]'>{d.reseña}</p>
              <button className='bg-indigo-400 text-white text-lg px-4 py-2 mt-3'>Mis tutoriales</button>
              <p className='text-lg'>{d.review}</p>
              </div>
            </div>
              </div>
          )          
          )}
          </Slider>
    </div>
    
    </>
  )
}

const data = [
  {
    name: `Brais Moure`,
    img: `../src/assets/Fotos/brais.webp`,
    reseña: ` es un desarrollador de software y creador de contenido español conocido por su canal de YouTube donde comparte tutoriales y consejos sobre desarrollo web y tecnología.`,
    review: `Developer`,
  },
  {
    name: `Facundo`,
    img: `../src/assets/Fotos/facundo.webp`,
    reseña: `es un desarrollador y creador de contenido argentino conocido por su canal de YouTube donde comparte tutoriales y contenido educativo sobre desarrollo web y tecnología.`,
    review: `Developer`,
  },
  {
    name: `Midudev`,
    img: `../src/assets/Fotos/midudev.png`,
    reseña: ` es el seudónimo de Miguel Ángel Durán, un desarrollador y creador de contenido español conocido por su canal de YouTube donde comparte tutoriales y contenido educativo sobre programación y tecnología.`,
    review: `Developer`,
  },
];

export default App