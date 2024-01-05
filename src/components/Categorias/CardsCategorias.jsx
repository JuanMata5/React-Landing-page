import { ProductosCards } from "./CategoriasCards";
import { categorias } from "../../data/categorias";


function CardsProductos() {
  return (
  
  
    <section className="pt-10 flex flex-col gap-2 w-full lg:p-10 xl:p-0 xl:pt-10  sm:pl-5 sm:pr-5 xl:text-left xl:items-baseline xs:justify-center xs:items-center   ">
    <h1 className="text-5xl font-extrabold">Categorias</h1>
    <h2 className="text-2xl">Destacadas</h2>
    <div className="flex justify-between flex-wrap gap-10 pt-5 xs:justify-center ">
      {categorias.map((product) => (
        <ProductosCards
          key={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </div>
  </section>
      
    
  )
}

export default CardsProductos