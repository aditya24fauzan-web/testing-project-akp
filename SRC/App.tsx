/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Commitment from './components/Commitment';
import VisionMission from './components/VisionMission';
import Products from './components/Products';
import Services from './components/Services';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Commitment />
        <VisionMission />
        <Products />
        <Services />
        <Industries />
        <Clients />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
