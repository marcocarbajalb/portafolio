import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Proyectos from './components/sections/Proyectos';
import SobreMi from './components/sections/SobreMi';
import Logos from './components/sections/Logos';
import Habilidades from './components/sections/Habilidades';
import ServidorScroll from './components/sections/ServidorScroll';
import Contacto from './components/sections/Contacto';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Proyectos />
      <SobreMi />
      <Logos />
      <Habilidades />
      <ServidorScroll />
      <Contacto />
    </Layout>
  );
}