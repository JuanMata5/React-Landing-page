import BentoImg1 from "../../assets/img/04@2x.png";
import BentoImg2 from "../../assets/img/home_owned@2x.jpg";
import BentoImg3 from "../../assets/img/02@2x.jpg";
import BentoImg4 from "../../assets/img/marcar-como-leido@2x.png";


const About = () => {
  return (
    <section className=" xl:[1280px] xl:p-0 flex flex-col gap-3 pt-[120px] lg:p-10 lg:pt-[15em]  sm:pl-5 sm:pr-5   ">
      <div className="flex justify-center items-center flex-col gap-2 ">
        <p className=" font-bold text-3xl">Nosotros</p>
        <div className="border-b-[3px] border-teal-600  w-[100px]"></div>
      </div>
      <span className="flex flex-col justify-center items-center gap-10 pb-5">
        <h2 className="text-5xl font-bold xl:text-left sm:text-center xs:text-center">
          Tener todos tus cómics controlados por fin es fácil
        </h2>
        <p className="text-xl xl:text-left sm:text-center xs:text-center">
          Mantener tu colección organizada y al día ya no te dará pereza, con
          Whakoom puedes hacerlo de la manera más fácil y en muy poco tiempo.
        </p>
      </span>

    <div className="flex gap-3 ">
      
        <div className="h-[22em]  flex-[1.2] border-[1px] border-teal-600 grid-rows-6 relative">
          <img className="w-full h-full object-cover" src={BentoImg2} alt="" />
          <div className="absolute  bottom-[0px] z-50 p-4 ">
             <h2 className="text-5xl text-white font-bold lg:text-3xl xl:text-5xl sm:text-4xl xs:text-xl">Crea tu colección en un momento</h2>
             <p className="text-[18px] text-gray-200 lg:text-[16px]  sm:text-[14px]  xs:hidden xl:flex xl:text-[18px]" >¡Mantén a raya la pila de cómics por leer! Crea tu lista de lectura y haz un seguimiento de lo que lees cada mes. Te ayudamos a que no vuelvas a dejarte un cómic en casa sin leer </p>
           </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
        </div>

        <div className="h-[22em] flex-[1] border-[1px] border-teal-600 grid-rows-6 relative">
          <img className="w-full h-full object-cover" src={BentoImg4} alt="" />
          <div className="absolute  bottom-[0px] z-50 p-4 ">
             <h2 className="text-5xl text-white font-bold lg:text-3xl xl:text-5xl sm:text-4xl xs:text-xl">Completa tu colección</h2>
             <p className="text-[18px] text-gray-200 lg:text-[16px] sm:text-[14px] xs:hidden xl:flex xl:text-[18px]" >Consulta en un único listado todos los números que te faltan para completar tus colecciones, y nosotros te avisaremos cuando se publiquen nuevos cómics de tus colecciones en curso.</p>
           </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
        </div>

      </div>

      <div className="flex gap-3 flex-auto   ">
        
        <div className="h-[22em] flex-[1] border-[1px] border-teal-600 grid-rows-6 relative">
          <img className="w-full h-full object-cover" src={BentoImg3} alt="" />
          <div className="absolute  bottom-[0px] z-50 p-4 ">
             <h2 className="text-5xl text-white font-bold lg:text-3xl xl:text-5xl sm:text-4xl xs:text-xl">Más de 1 millón de cómics </h2>
             <p className="text-[18px] text-gray-200 lg:text-[16px]  sm:text-[14px]  xs:hidden xl:flex xl:text-[18px]" >En LibroMania puedes encontrar cientos de miles de fichas de cómics en más de 30 idiomas y con toda la información que necesitas. </p>
           </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
        </div>

        <div className="h-[22em] flex-[1.2] border-[1px] border-teal-600 grid-rows-6 relative">
          <img className="w-full h-full object-cover" src={BentoImg1} alt="" />
           <div className="absolute  bottom-[0px] z-50 p-4 ">
             <h2 className="text-5xl text-white font-bold lg:text-3xl xl:text-5xl sm:text-4xl xs:text-xl">Tu comicteca</h2>
             <p className="text-[18px] text-gray-200 lg:text-[16px]  sm:text-[14px]  xs:hidden xl:flex xl:text-[18px]" >Navega por tus cómics y colecciones y obtén estadísticas. Así será tu comicteca en LibroMania: tus cómics como nunca antes los has visto, ordenados y listos para admirarlos cuando quieras.</p>
           </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-90"></div>
        </div>

      </div>
    </section>
  );
};

export default About;
