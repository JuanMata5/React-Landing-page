import Categoria from "./components/Destacados/Destacados.jsx";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header"
import CardsProductos from "./components/Categorias/CardsCategorias.jsx"
import About  from "./components/About/About.jsx";


function App() {
  return (
    <>
      <Header />
      <Layout>
          <Hero />
          <About />
          <CardsProductos />
          <Categoria />
      </Layout>
      <Footer />   
    </>
  )
}

export default App
