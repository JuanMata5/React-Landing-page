import HeroImg from '../../assets/img/39047.jpg'
import './Hero.css'


function Hero() {
  return (

   <section className='flex items-center text-left mt-24 lg:pt-[150px] xl:pt-0  sm:pl-5 sm:pr-5   '>
     
     <div className='flex flex-col gap-8 lg:justify-center lg:items-center xl:items-baseline xl:justify-normal'>
      <h1 className='text-6xl font-extrabold text-teal-600 lg:text-6xl sm:text-center xs:text-center xs:text-5xl xl:text-left   '>Organiza tu colección de cómics</h1>
      <p className='pr-[5em] text-xl lg:text-[18px] lg:flex lg:justify-center lg:items-center lg:pl-[100px] lg:text-center xl:items-left xl:text-xl xl:items-baseline xl:pl-0 xl:text-left sm:text-center sm:ml-20 xs:text-[12px] xs:text-center xs:ml-20 xl:ml-0 xl:pr-0  '>¡Basta ya de perder el tiempo catalogando tu colección! Añadir tus cómics a LibroMania es tan sencillo como darle al botón “Lo tengo”. Un click y listo, a por el siguiente cómic. Da igual lo grande que sea tu colección, con LibroMania es tan rápido que podrás tenerla organizada en una tarde.</p>
      <a className="bg-teal-600  cursor-pointer   items-center flex justify-center font-bold text-center p-2 w-[150px] border-[1px] border-black hover:bg-teal-500 transition-all duration-200 ease-in-out sm:mx-auto xs:mx-auto xl:m-0   " >
              Explora mas
            </a>
     </div>

     <div>
       <img className='imgHero xl:w-[160em] xl:flex sm:hidden md:hidden lg:hidden' src={HeroImg} alt="" />
     </div>
   </section>
    
  )
}

export default Hero