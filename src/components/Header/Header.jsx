

function Header() {
 return ( 
    <header className="header   sticky  bg-white border-b-[1px] p-3 border-b-black ">
      <div className=" xl:w-[1280px] xl:pl-0 xl:pr-0 lg:w-[1024px] lg:pl-10 lg:pr-10 mx-auto justify-between  flex items-center sm:w-[640px] sm:pl-5 sm:pr-5    ">
      <svg className="text-black xl:hidden " xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        <h1 className=" xl:pl-0  lg:flex lg:justify-center lg:items-center lg:pl-[190px] sm:flex sm:justify-center sm:items-center sm:pl-[100px]  xs:pl-[20px]">
            <a className="flex gap-1 items-center text-center  hover:text-teal-600  transition-all duration-200 ease-in-out " href="">
            <svg className="w-10teal-600 -extrabold" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M5 8h4" /><path d="M9 16h4" /><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z" /><path d="M14 9l4 -1" /><path d="M16 16l3.923 -.98" /></svg>
             <h1 className="text-3xl xl:text-3xl xs:text-xl font-extrabold">LibroManía</h1>
            </a>
        </h1>
        <nav className=" nav font-semibold text-[16px] xl:flex lg:hidden sm:hidden xs:hidden   ">
            <ul className="flex items-center">
                <li className="p-4 border-b-2 border-teal-600  border-opacity-0 hover:border-opacity-100 hover:text-teal-600  duration-200 cursor-pointer active">
                  <a href="">Inicio</a>
                </li>
                <li className="p-4 border-b-2 border-teal-600  border-opacity-0 hover:border-opacity-100 hover:text-teal-600  duration-200 cursor-pointer">
                  <a href="">Nosotros</a>
                </li> 
                <li className="p-4 border-b-2 border-teal-600  border-opacity-0 hover:border-opacity-100 hover:text-teal-600  duration-200 cursor-pointer">
                  <a href="">Categorias</a>
                </li>                      
                <li className="p-4 border-b-2 border-teal-600  border-opacity-0 hover:border-opacity-100 hover:text-teal-600  duration-200 cursor-pointer">
                  <a href="">Novedades</a>
                </li>          
                <li className="p-4 border-b-2 border-teal-600  border-opacity-0 hover:border-opacity-100 hover:text-teal-600  duration-200 cursor-pointer">
                  <a href="">Soporte</a>
                </li>
            </ul>
        </nav>
        <div className="w-3/12 flex justify-end gap-5">   <a className="  gap-2 items-center flex text-center" >        
            <svg className="w-7 xl:flex xs:hidden " xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
                <input className="w-full xl:flex lg:hidden sm:hidden xs:hidden outline-none pl-2 p-1 border-[1px] border-black rounded-sm"  type="search" />
            </a>

            <a className="bg-teal-600 cursor-pointer xl:w-[150px]   items-center flex justify-center font-bold text-center p-1 w-[150px] border-[1px]  hover:bg-teal-500  transition-all duration-200 ease-in-out  " >
              Inicia sesion
            </a>

          
        </div>
      </div>
    </header>
 )
}

export default Header