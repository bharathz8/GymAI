import { useState } from 'react';
import { Hero, Features, Pricing, Testimonials, Footer } from './sections';
import NavBar from './components/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className='padding'>
        <Features />
      </section>
      <section className="padding">
        <Testimonials />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Pricing />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App