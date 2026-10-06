import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problema from './components/Problema'
import Solucion from './components/Solucion'
import Funcionamiento from './components/Funcionamiento'
import Componentes from './components/Componentes'
import Piloto from './components/Piloto'
import Clientes from './components/Clientes'
import Servicios from './components/Servicios'
import Equipo from './components/Equipo'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <Funcionamiento />
        <Componentes />
        <Piloto />
        <Clientes />
        <Servicios />
        <Equipo />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
