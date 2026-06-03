import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Proyectos from './components/sections/Proyectos';
import SobreMi from './components/sections/SobreMi';
import Habilidades from './components/sections/Habilidades';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Proyectos />
      <SobreMi />
      <Habilidades />
    </Layout>
  );
}