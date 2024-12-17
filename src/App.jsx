import { useState } from 'react';
import { Hero, Features, Pricing, Testimonials, Footer, FAQ } from './sections/index';
import NavBar from './components/NavBar';

function App() {
  return (
    <main>
    <NavBar />
    <section className="xl:padding-1 wide:padding-r">
      <Hero />
    </section>
    <section className='padding'>
      <Features />
    </section>
    <section>
      <Pricing />
    </section>
    <section>
      <Testimonials />
    </section>
    <section>
      <FAQ />
    </section>
    <section className="bg-transparent padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
  )
}
export default App